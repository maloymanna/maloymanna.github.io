---
author: biguru
comments: true
date: 2018-07-08 07:21:12+00:00
layout: post
slug: power-bi-security-under-the-hood
title: Power BI Security - Under the hood
categories:
- security
- architecture
tags:
- architecture
- security
- PowerBI
---
Microsoft has been instrumental in pushing the envelope on managed self-service BI with it's Power BI SaaS platform.  
I wrote about this back in [2009](https://maloymanna.github.io/2009/11/13/review-of-the-bt-summit-cloud-computing-soa-and-bi-tracks/) [1], when Microsoft was working on Project Gemini (later PowerPivot) used SQL Server Analysis Services as an in-memory engine, with data compression to really bring BI to the masses, so to speak.  
Since then, Microsoft's vision of self-service BI evolved from providing Excel plug-ins viz. PowerPivot, Data Explorer (later renamed PowerQuery) and sharing bulky Excel files on SharePoint (with Power View [2]) to a manageable managed-self-service BI with the launch of Power BI in 2015.  
Today, Power BI is powered by Azure, and deployed as a SaaS across datacenters in Microsoft regions across the world.

**Architecture**  
![Power BI architecture](/post/powerbi-architecture.png)  
Each Power BI deployment contains two clusters:
1. A Web Front End (WFE) cluster - contains an ASP.Net website running in an App Service Environment
2. A Back End cluster - which provides the main functionality using microservices running on different virtual machines and stateful resources like service bus, cache, SQL database and blob storage.

**Under the Hood**  

So what exactly does happen under the hood when a user tries to access a Power BI report ?  
Here's a look at the steps:  
1. The user types in the Power BI url in the browser or clicks on a link to a report to send a request to the Power BI service.
2. Power BI uses Azure Traffic Manager, a global DNS service, to route the request to the nearest Power BI Front-end server.
3. The Front-end server authenticates the user's identity using Azure AD and checks the user's permissions to view the requested report.
4. The Front-end server sends a request to the Power BI Back-end to retrieve the metadata for the requested report.
5. Based on the metadata, the Back-end determines which Azure Analysis Services instance to use, and sends a query to Analysis Services.
6. Analysis Services retrieves the data from Azure Data Lake storage and sends it to the Back-end.
7. The Back-end processes the data and sends it back to the Front-end to render the report.
8. The Front-end renders the report and sends it back to the user's browser in HTML and JavaScript. The browser displays the report, which the user can now interact.

 **Credentials management**  

Data in process is managed differently depending on whether the data is accessed with a _DirectQuery_ or not. A **DirectQuery** is where data stays in the source system and is queried directly by PowerBI in real-time, and is generally used when working with large or frequently updated datasets, and the user's query is translated from Data Analysis Expressions (DAX) language to the data source's native data language (e.g. T-SQL for SQL Server). A _DirectQuery_ contains the necessary information to execute the query, including credentials and connection string.
Queries that do not use _DirectQuery_ do not store credentials for the underlying data.

**Data storage**
- Push data (push datasets) is stored encrypted in Azure blob storage using server-side encryption (Azure SSE). 
- Metadata (tables, columns, calculations, connection strings etc.) are stored encrypted in Azure SQL. - Power BI reports are stored encrypted in Azure SQL database

**Data encryption**  
- Data at rest is encrypted. Encryption keys for Azure blobs are stored in Azure Key vault while those for the Azure SQL Database is managed by Azure SQL itself.
- Data in transit is also encrypted. TLS 1.2 is supported. 
- Data being processed in memory is not encrypted.
For Power BI premium customers, an in-memory Analysis Services database is used to load the dataset during processing, on the customer's dedicated Power BI virtual machines.

**Role-level security**  

The role-level security (RLS) feature in Power BI allows limiting the data shown to users based on their role in the organization. This is however useful only when the underlying data sources support RLS. For non-RLS data sources, when data is shared with other users, the original credentials are used to access the data, and the data is available for the users to view and interact with. The Power BI on‐premises data gateway can enforce RLS on data sources.

Power BI provides several levers to manage security as we have seen above.  
It's important to look under the hood and understand what options are available and which features should be limited or turned off to minimize risks without impacting normal usage.  
I'll look at the security best practices to secure Power BI in a later post.


[1] - [Self-service analysis and the future of Business Intelligence by Vinod Kumar](https://biguru.wordpress.com/2009/11/13/review-of-the-bt-summit-%e2%80%93-cloud-computing-soa-and-bi-tracks/)   
[2] - Power View was based on Microsoft Silverlight, a browser-based framework similar to Adobe Flash.