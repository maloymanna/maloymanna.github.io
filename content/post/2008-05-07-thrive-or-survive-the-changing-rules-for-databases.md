---
author: biguru
comments: true
date: 2008-05-07 09:59:04+00:00
layout: post
link: https://biguru.wordpress.com/2008/05/07/thrive-or-survive-the-changing-rules-for-databases/
slug: thrive-or-survive-the-changing-rules-for-databases
title: Thrive or Survive - the changing rules for databases
wordpress_id: 22
categories:
- Big Data
- Trendspotting
tags:
- AWS
- cloud computing
- NoSQL
- sql
- Vertica
---

Not since the late seventies, when Larry Ellison's Relational Software Inc. (RSI) turned out the [first commerically available RDBMS](http://www.oracle.com/timeline/index.html) - Oracle, has there been such rapid changing of the rules (read disruption) in the database industry.  
With _**Web 2.0**_ pushing enterprise adoption, and the ensuing _information explosion_ in the maze of audio, video, data and ever-growing data warehouses, it seems that the conventional relational database systems are growing tired. With estimates of _**unstructured data**_ being anywhere between 80% to 95% of all business data, and the ever changing requirements imposed by Web 2.0 - storage of _pictures_, _audio_ and _video_, the demands being made on conventional RDBMS technology are monstrous. With the load window available being fixed due to availability and uptime requirements, the ever increasing data to be loaded into data warehouses, the bulking-up of the data due to usage of _XML_ based formats, conflicting requirements of _SQL_ and _XQuery_, the database is also being challenged by the demands of business intelligence.

And so the time has never been better for start-ups with innovative technologies. From the self-tuning _**column databases**_ of [Vertica](http://www.vertica.com) to the _**data compression**_ technologies of [Infobright](http://www.infobright.com/) and the _**lock-free**_ database from [Ants Software](http://www.ants.com) , there is renewed interest in reinventing the RDBMS to optimize performance.

The competition has already hotted up in the high-end data warehousing segment with the introduction of _**appliances**_. With both [Netezza](http://www.netezza.com) and [DATAllegro](http://www.datallegro.com) gaining traction rapidly, incumbent [Teradata](http://www.teradata.com) is feeling the heat.

Another entrant to the Web 2.0 database race is Database as a service (_**DBaaS**_). With Google opening up its [cloud computing platform](http://code.google.com/appengine/) and making available [Bigtable](http://labs.google.com/papers/bigtable.html) , and Microsoft offering a beta release of [SQL Server Data Services (SSDS)](http://www.microsoft.com/sql/dataservices/default.mspx), the incumbent [Amazon's S3](http://aws.amazon.com/s3) and [SimpleDB](http://www.amazon.com/SimpleDB-AWS-Service-Pricing/b?node=342335011) is getting some competition.

The incumbent conventional RDBMS vendors like [Oracle](http://www.oracle.com) are not resting on their laurels.
With its aggresive acquisition strategy, Oracle has acquired Sleepycat's open-source embedded database [BerkeleyDB](http://www.oracle.com/database/berkeley-db/index.html) in early 2006 and now licenses it commercially. With its other acquisition (2005) - [TimesTen](http://www.oracle.com/timesten/index.html), now integrated as an in-memory database, Oracle has been [targeting SaaS ISVs](http://www.oracle.com/newsletters/information-indepth/on-demand/feb-08/saas.html) to sell its [Oracle SaaS platform](http://www.oracle.com/technologies/saas/index.html).
IBM has already moved into the BI infrastructure segment since 2005 with its pSeries Data Warehousing Balanced Configuration Units and evolved on to the [Infosphere Balanced Warehouse](http://www-306.ibm.com/software/data/infosphere/balanced-warehouse/) applicances. Apart from _SSDS_, Microsoft has designed SQL Server 2008 with [data warehouse features](http://www.microsoft.com/sqlserver/2008/en/us/data-warehousing.aspx) like the star join query, SSIS persistent lookups or the MERGE SQL statement. Most of the biggies (_e.g. BOBJ acquiring Inxight_) have acquired small companies with technologies to search and analyze unstructured data.

Yet with all this _"new and improved"_, the newer and innovative technologies are gaining a lot of traction at least in the data warehousing/ETL space. It remains to be seen if the trend catches on in the OLTP segment as well. But for now, the staid and bland database segment is on fire.
