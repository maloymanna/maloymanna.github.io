---
author: biguru
comments: true
date: 2011-05-20 17:54:03+00:00
layout: post
link: https://biguru.wordpress.com/2011/05/20/what%e2%80%99s-new-in-sap-businessobjects-enterprise-bi-4-0-platform-or-boxi-4-0-aka-aurora/
slug: what%e2%80%99s-new-in-sap-businessobjects-enterprise-bi-4-0-platform-or-boxi-4-0-aka-aurora
title: What’s new in SAP BusinessObjects Enterprise BI 4.0 platform or BOXI 4.0 aka
  Aurora?
wordpress_id: 72
categories:
- SAP BusinessObjects
tags:
- BI
- BOBJ
- boxi
- business objects
- SAP
---

SAP BI 4.0 release (codenamed **_Aurora_**) has been the first major release of the BI platform since SAP acquired BusinessObjects. In this release, the semantic layer (universe layer for the uninitiated) has been re-worked completely to expose all business data under a single umbrella. The self-service BI portal (aka Infoview) has been revamped with a new AJAX based design and providing quicker and easier access to content. Publishing and distribution of BI content to mass audience has been made easier. There are also improvements to the lifecycle management (LCM tool) and platform administration (CMC, CCM) from a single console. This is in a nutshell are the changes that Aurora or SAP BO 4.0 bring, allowing BI content to be delivered across different channels ranging from the browser (BI Launch Pad, SharePoint, SAP NetWeaver Portal, Java Portal) to desktop (widgets), MS-Office and mobile.

In the following section I’ll try to cover the major changes that have been effected in the following products:

**Semantic Layer** - A new tool, _**Information Design Tool**_ enhances the Universe Designer. The universes created by this tool are identified by the .UNX file extension and allow connections to multiple data sources.

![Multiple data sources in the new Information Design Tool](/post/multi-data.png?w=300)

The universe designer is still there. Renamed as universe design tool, it allows creating single data source universes (.UNV file extension) as before.

Conversion of previous universe .unv versions is supported only for relational universes created in previous universe designer versions and not possible for OLAP universes or universes based on stored procedures or Data Federator data source.

No authentication is required to start the information design tool. Users can create and edit unsecured resources (data foundations, business layers, connections) in local projects and publish them to the repository to make them secure.

Connections to relational data sources, OLAP data sources as well as SAP NetWeaver BEx query can be created, be local (saved locally as .cnx files) or secured (stored in the repository).

![Add a connection to a multi-source enabled data foundation universe](/post/addcnx.png?w=300)

The newly named “Data foundations” are analogous to the schema browsers in Universe Designer. They contain the schema of relevant tables and joins from one or more relational databases that are used as a basis for one or more business layers.

The business layer is the universe metadata. Depending on the type of data source for the business layer, several types of objects e.g. folders, dimensions, analysis dimensions, measures, attributes, filters, hierarchies (OLAP only) can be created and edited in the business layer.

**Search** - enhancements include a new enhanced search engine allowing search by document attributes as well as content. Search results can be filtered and refined easily and the search GUI is integrated in the BI launch pad

![Search](/post/search.png?w=300)

There are also enhanced options through the OpenSearch API which enables integration with other search systems like Google Search Appliance, Microsoft SharePoint portal and NetWeaver Enterprise Search.

**BI Portal** - includes a new look re-designed web portal (InfoView) now called the BI LaunchPad providing a rich new user experience. It provides quick and easy access to BI applications and search, a handy list of recently used reports, scheduled documents, alerts etc., multiple tabs and pinning options, and a reduction in the manual steps for common tasks like:




  * Ability to create new folder while Saving

  * Schedule and Send To actions in Document viewers

  * Auto-refresh in History page




![BI Portal](/post/launchpad.png?w=251)




**Alerting, Monitoring & Auditing** - The alerting framework allows triggering of alerts based on events (schedule completion, ETL completion, system monitoring etc.) or data conditions as also reactions to those events e.g. scheduling report to run or send notification message. Subscription to alerts is made easier with a consistent workflow, allowing notification emails or messages in the BI Launch Pad.




![Alerts](/post/alert.png?w=283)




New monitoring applications are available to keep tabs on system health and performance (server metrics, custom probes, user-defined watch conditions, visualization dashboard in CMC) and integrate with infrastructure monitoring tools like Tivoli and SAP Solution Manager.

Auditing enhancements include simplified system wide configuration, auto-purging of old data and an enhanced audit store schema which simplifies reporting and application development.

**Lifecycle Management** - The LCM console replaces the import wizard. It allows connection override in bulk mode automatically, supports version control and rollback, is audit-able and provides scripting facility.

**Upgrades and deployments** - A new optimized upgrade management tool is provided, combining the best of Import Wizard and Database Migration tool in XI 3.x. This caters to one-click full upgrade or selective incremental upgrades, allowing direct upgrade from XI R2 SP2 or later. There’s enhanced scalability in deployment with virtualization and 64-bit support.

![Upgrade Management Tool](/post/upgrade.png?w=252)


