---
author: biguru
comments: true
date: 2010-09-17 13:34:11+00:00
excerpt: What is the future - Business Analytics or Business Intelligence? SAP finally
  announced pre-packaged business analytics following Oracle and SAS. Is it late to
  the game? What does it have under the hood? How will it scale?  Read about this
  and more on this blog...
layout: post
link: https://biguru.wordpress.com/2010/09/17/analytics-out-of-the-box-sap-business-analytics/
slug: analytics-out-of-the-box-sap-business-analytics
title: 'Analytics - out of the box: SAP Business Analytics'
wordpress_id: 63
categories:
- SAP BusinessObjects
tags:
- BOBJ
- business analytics
- HANA
- SAP
- xcelsius
---

SAP finally [announced](http://www.sap.com/about/newsroom/press.epx?pressid=13894)on September 14, 2010 that it was getting onto the pre-packaged analytics bandwagon. SAP announced ten applications in this first release for six industries (Consumer Products, Healthcare, Financial Services, Public Sector, Retail and Telecommunications) in its BusinessObjects offering.

Building on the [rapid-marts](http://www.sap.com/solutions/sapbusinessobjects/large/eim/rapidmarts/index.epx) offering that the then BOBJ used to have and leveraging SAP’s industry and line of business expertise, these new applications are based on the SAP Business Objects XI platform – WebIntelligence, Crystal Reports and Dashboards (formerly Xcelsius). Bill McDermott, the joint CEO of SAP, described it as “**complete and ready-to-go**” and claimed the applications can be deployed in _as less as eight weeks_.

You may remember the [brouhaha created by SAS last year](http://www.networkworld.com/news/2009/032709-analytics-versus.html) , when it kicked off the controversy on Business Analytics being the future, rather than Business Intelligence. Going back even further, Oracle already had this in its Siebel Analytics pre-built analytic applications for various industries. Therefore, it would seem that SAP is already late in the game, but considering that neither Microsoft nor IBM have similar offerings, it may not be too bad for SAP. Better late than never…

**Under the hood:**

The pre-packaged analytic applications are based on the BusinessObjects XI platform – with the universe as the semantic layer or metadata model. It can be based on both SAP and non-SAP data, OLTP and data warehouse, relational and unstructured. SAP would work with its partners HP and Teradata to optimize the analytic solutions on their hosting and data warehousing solutions.

Business Analytics dashboards are **Xcelsius flash files** which can be used with web services/QAWS to deliver real-time analytics. It may also be possible to use these with [SAP Business Objects Explorer](http://www.sap.com/solutions/sapbusinessobjects/large/business-intelligence/search-navigation/explorer/explorer-accelerated/index.epx) (formerly Polestar) and/or SAP BW Accelerator or the SAP high-performance analytic appliance ([HANA](http://h30507.www3.hp.com/t5/Reality-Check-Server-Insights/HANA-An-HP-and-SAP-collaborative-unique-end-to-end-technology/ba-p/81270)).

**Business Analytics vs. Business Intelligence - Revisiting the controversy:**

When SAS created this [controversy last year](http://www.networkworld.com/news/2009/032709-analytics-versus.html), an important point noted by many was the SAS home page titled:  

**SAS | Business Intelligence Software and Predictive Analytics**

It’s important to see how the rebranding has reflected in a change to the SAS home page a year hence. It now reads:  

**SAS | Business Analytics and Business Intelligence Software**

SAS Institute was always viewed as a niche vendor, operating in the pure-play **statistical and predictive analytics** space and this marketing was to re-brand SAS’ offerings to move it mainstream.  In effect, it signaled the market assessment by these major vendors, that in tough times, customers were seeking shorter lead times and demanding better tools which are _quick and easy to introduce and provide quicker return on investment_.  As we come around the downturn, with SAP still focusing on this segment, it is clear that traditional BI is clearly seen as _complex, costly and difficult to implement_.

**Open questions:**

There are several questions open at the moment, given that this is an initial launch. SAP plans to offer more applications over the next year-18 months in collaboration with customers and its partners.  The partners include Aster Group, Blueprint, Capgemini, Column5, CSC, Fusion Consulting, The Glenture Group, LSI Consulting and syskoplan and surely it would take quite a while for the ecosystem to develop.  It remains to be seen whether the prepackaged analytics catches on like Xcelsius dashboards did for BOBJ.

It is not clear whether the prepackaged analytics would be positioned at the bigger enterprises or the SME segment only, as its success could cannibalize revenues from the flagship Enterprise XI suite.

There are also questions around the scalability of the framework the analytic applications are built on. The extensibility APIs and reference architectures for partners to build their own add-ons and plugins / applications  of their own is not yet out (planned in 2011), so it’s not quite like the iPhone/iPad app store yet. It is also not clear how customizations to the applications would be supported or to what extent these could be customized.  The long awaited universe rewrite including data federation might be a part of plans if the analytic applications turn out to be truly backend-agnostic and do support future in-memory data structures (SAP’s acquisition of Sybase would indicate likely support for the Sybase ASE in-memory database). If this happens, it would be in line with [earlier plans](http://twitter.com/mkrigsman/status/21599374900) to roll-out in-memory EPM and OLTP solutions.
