---
author: biguru
comments: true
date: 2008-07-08 13:46:21+00:00
layout: post
link: https://biguru.wordpress.com/2008/07/08/spc-%e2%80%93-using-statistics-to-get-insight-from-bi/
slug: spc-%e2%80%93-using-statistics-to-get-insight-from-bi
title: SPC – Using statistics to get insight from BI
wordpress_id: 24
categories:
- Data science
- Statistics
tags:
- control charts
- PDCA
- SPC
- statistical process control
---



There is a well known adage that if you keep doing the same thing and expect different results, that is a sure sign of idiocy.  

In the BI world too, we come across several instances where people take it for granted that the *‘BI tool’* will magically generate insight and spur *‘intelligence’* rather than *‘idiocy’*. Yet the very practices of reporting the same measures, or of creating reports for metrics just because they are now made available by the tool, without sparing any *‘intelligence’* into what will generate insight is a major cause  of failures of BI.  

Most of the leading commercial BI products are expensive and cost a lot of money in maintenance and support, so it is rather important to understand how to design the proper metrics and KPIs (key process indicators) which would generate insight. Even more important is to have a process focus and a general idea of the basics of statistical process control, in order to make sure that the right decisions are made and resources are spent on processes and strategies where they would have the most impact.

**Statistical Process Control** – (SPC) is quite well known in the manufacturing industry and also in software engineering. In effect, it applies rules of statistics to the processes that are followed to predict whether a process is stable (and therefore in control) and its output is predictable or not and how to identify out-of-control processes and take corrective measures. Quality aids like causal analysis done using brainstorming/ nominal group techniques/ Ishikawa diagrams or fish-bone analysis are helpful in analyzing outliers and reasons of deviation from control limits. A substantive discussion of SPC and quality process areas is not possible in this post so I’ll just touch upon some concepts concisely.

**PDCA** – Plan-Do-Check-Act cycle, proposed by economist William Shewhart and later by quality guru Dr. Edward Deming. This is the foundation of the management and feedback cycle underlying any software engineering process.

**Control limits** – Any process which follows the Gaussian normal distribution would have a normal bell-shaped curve and be subject to control limits. The stability of the process can be gauged by the outliers (number and pattern of data points falling outside the control limits).

**Causes of deviation**: Outliers indicate deviation from a stable and predictable process. Causes of deviation could be due to special causes or common causes. Common causes are like background noise and may be present in stable processes. Special causes must be removed and steps taken to prevent their occurrence to bring a process under control. Common causes may be reduced to have a sharper curve with a narrower band of control limits and have greater control on the process.  
![Control Chart (Image courtesy: Wikipedia)](/post/copy-of-520px-controlchart.png)  

Users of BI tools haven’t tapped into the power of SPC to gain insight and control operational processes to the extent possible. There is even danger of damaging with a stable and in-control process due to tinkering with the process based on *common-cause variation* observed in operational reports. Part of the reason for SPC not gaining sufficient currency is that business analysts are not trained in the basics of SPC or quality processes like DAR (defect analysis and resolution) but mostly it is due to there not being any BI product in the market so far which allows easy use of SPC analysis. It is only of late that vendors like SAP-Business Objects have come out with specific SPC modules and predictive analytics in the BI product marketplace.  

BI is a specialized discipline which involves a lot of investment on the part of customers in terms of pre-sale-evaluation (proof-of-concepts / comparisons), implementations, maintenance and support. However the returns from BI implementations are not easy to quantify and ROI (return on investment) figure calculations could be vague and incorrect. Using SPC along with the right quality process framework allows in maximizing the value of BI implementations, as well as provides a ready-reckoner for calculating ROI based on projected process improvements based on statistical control limits.
