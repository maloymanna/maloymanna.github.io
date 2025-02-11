---
author: biguru
comments: true
date: 2014-05-12 12:55:24+00:00
layout: post
link: https://biguru.wordpress.com/2014/05/12/basics-of-big-data-building-a-hadoop-data-warehouse/
slug: basics-of-big-data-building-a-hadoop-data-warehouse
title: Basics of Big Data - Building a Hadoop data warehouse
wordpress_id: 108
categories:
- Big Data
tags:
- big data
- big data analytics
- Cloudera
- data mining
- data warehouse
- data warehousing
- ETL
- Hadoop
- HDFS
- Hive
- Hortonworks
- Impala
- parquet
- R
- schema-on-read
- schema-on-write
- syncsort
- yarn
---

This is the 3rd part of a series of posts on Big Data. Read [Part-1](http://biguru.wordpress.com/2013/08/21/basics-of-big-data-part-1/) (What is Big Data) and [Part-2 (Hadoop)](http://biguru.wordpress.com/2014/04/13/basics-of-big-data-part-2-hadoop/).

Traditionally data warehouses have been built with relational databases as backbone. With the new challenges ([3Vs](http://biguru.wordpress.com/2013/08/21/basics-of-big-data-part-1/)) of Big Data, relational databases have been falling short of the requirements of handling
	
  * New data types (unstructured data)
  * Extended analytic processing
  * Throughput (TB/hour loading) with immediate query access

The industry has turned to Hadoop as a disruptive solution for these very challenges.

_The new Hadoop architecture (courtesy Hortonworks):_

![Hadoop 2.0 with YARN](/post/yarn.png?w=300)

**Comparing the RDBMS and Hadoop data warehousing stack:**

The heavy-lifting for any data warehouse is the ETL (Extract-Transform-Load) or ELT processing. The processing layers involved in the data warehousing ETL are different across conventional RDBMS and Hadoop.

| Layer | Conventional RDBMS | Hadoop | Advantages of Hadoop over conventional RDBMS |
| --- | --- | --- | --- |
| Storage | Database tables | HDFS file system | HDFS is purpose-built for extreme IO speeds |
| Metadata | System tables | HCatalog | All clients can use HCatalog to read files. |
| Query | SQL query engine | Multiple engines (SQL and non-SQL) | Multiple query engines like Hive or Impala are available. |  

**The Hadoop USP: Exploratory analytics**

All 3 layers in a conventional RDBMS are glued together into a proprietary bundle unlike Hadoop where each layer is independent and separate, allowing multiple access. Apart from these 3 layers, Hadoop provides an important advantage for exploratory BI in a _single step from data load to query_, which is not available in conventional RDBMS.

_The data-load-to-query in one step involves:_

1. Copy data into _HDFS_ with ETL tool (e.g. Informatica), _Sqoop_ or _Flume _into standard _HDFS _files (write once). This registers the metadata with _HCatalog_.

2. Declare the query schema in _Hive_ or _Impala,_ which doesn't require data copying or re-loading, due to the **schema-on-read** _advantage_ of Hadoop compared with **schema-on-write** _constraint_ in RDBMS.  

3. Explore with SQL queries and launching BI tools e.g. _Tableau_, _BusinessObjects_ for exploratory analytics.

**Other data warehousing use cases with Hadoop:**

**1. High performance DW using Parquet columnar file:**

The [_Parquet_](http://parquet.io/) file format has a columnar storage layout with flexible compression options and its layout is optimized for queries that process large volumes of data. It is accessible to multiple query and analysis applications and can be updated and have the schema modified. A high performance DW can be created by copying raw data from raw _HDFS_ into _Parquet_ files which can then be queried in real-time using Hive or _Cloudera Impala_.

**2. Platform for transforming data or ETL:**

The (extract-transform-load) ETL or ELT (extract-load-transform) use case for Hadoop is well established. The reasons why Hadoop is a popular ETL platform are:
	
  * Hadoop itself is a general-purpose massively parallel processing (MPP) platform.
  * Hadoop’s NoSQL database - it’s flexible _schema-on-read_ offers a relaxed alternative to the rigid strongly-typed _schema-on-write_ model of a relational data warehouse.
  * Hadoop is highly cost-effective (up to 50 to 100 times cheaper) compared to conventional relational data warehouse on a per-Terabyte basis, due to its commodity hardware distributed architecture (low-cost scale-out) compared to the relatively high-end infrastructure required for conventional systems (high-cost scale-up).
  * Higher performance on a per-core basis (CPU processing power) allows Hadoop to beat most conventional ETL systems.
  * Most ETL vendors already market versions of their software which leverage Hadoop, whether this is through using Hadoop connectors (e.g. Oracle Data Integrator) or ETL-optimized libraries for MapReduce (e.g. Syncsort [DMX-h](http://www.syncsort.com/en/Products/DMX-h/DMX-h-Overview)).

Most such ETL tools allows existing developers to build Hadoop ETL without having to code or script in MapReduce with Java or Pig. Several vendors also provide ETL-on-Hadoop automation, and a rich user experience (UX) with drag-and-drop design of jobs or workflows, and even native integration taking advantage of (Yet Another Resource Negotiator) **_YARN_** in Hadoop v2.0

**3. Advanced analytics:**

Predictive analytics, statistics and other categories of advanced analytics produce insights that traditional BI approaches like query and reporting may find unlikely to discover. Advanced analytics platforms and tools become more important when managing big data volumes due to issues of scalability and performance.

Strategic applications, like data mining, machine learning and analytics on new types of data, including unstructured data, with much improved performance due to Hadoop’s distributed architecture also allow for new types of integrated analysis previously not possible on relational database platforms. Several newer tools and vendors support using statistical packages and languages like **R** (and SAS or SPSS) for big data analytics.

**4. DW offloading:**

Due to low storage costs (50 to 100 times less on a per-TB basis), Hadoop is well suited to keeping data online for an indefinite period of time. This is also known as a **_data lake_** or an **_enterprise data hub_**, where various types of data can be kept till newer use cases are discovered for such data. Such storage also allows for “**_active archival_**” of infrequently used data from (Enterprise Data Warehouse) EDW, thus allowing only the most valuable (and usually most recent) data to be kept in the EDW.

With ELT loads driving up to 80% of database capacity, Hadoop can also be used as a staging area for data preparation and ELT to allow offloading data processing from the EDW

With the big data deluge, and its 3 equally challenging dimensions of {{< blue-text >}}volume, velocity and variety {{< /blue-text >}} - existing conventional platforms are finding it difficult to meet all of an organization’s data warehousing needs along with ETL processing times and availability SLAs. The balance of power keeps tilting towards Hadoop with newer tools and appliances extending the capabilities of Hadoop and with its superior price/performance ratio, building a data warehouse leveraging Hadoop needs to be given serious consideration.

Read the series on Big Data: [Part-1 : Basics](https://biguru.wordpress.com/2013/08/21/basics-of-big-data-part-1/), [Part-2 : Hadoop](https://biguru.wordpress.com/2014/04/13/basics-of-big-data-part-2-hadoop/), [Part-3 : Hadoop data warehouse](https://biguru.wordpress.com/2014/05/12/basics-of-big-data-building-a-hadoop-data-warehouse/) and [Part-4 : NoSQL](https://biguru.wordpress.com/2014/10/01/big-data-basics-part-4-nosql-and-newsql-explained/)
