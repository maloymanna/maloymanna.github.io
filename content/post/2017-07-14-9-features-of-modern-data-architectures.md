---
author: biguru
comments: true
date: 2017-07-14 11:27:09+00:00
layout: post
slug: 9-features-of-modern-data-architectures
title: 9 features of modern data architectures
categories:
- Big Data
- architecture
tags:
- Big Data
- architecture
- Hadoop
- streaming
---

The last few years has seen a massive change in the data landscape. With the rise of big data, there's been rapid innovation in the tools, skills and roles working on data systems. Data architectures have evolved beyond monolithic, centralized databases and unwieldy analytic applications to distributed, scalable architectures with simpler collaborative and interactive analytic tools. In this post, I look at the defining features of modern data architectures.

Modern data architectures generally feature the following (though not all of these may be present in the same system):

1. **Scalable, distributed data systems** - these are mostly NoSQL databases with scalable and distributed architecture. These are built for "fault-tolerance" from the ground-up like Hadoop, and also manage replication and distribution of data transparently. 

2. **Data lakes** - the concept of data lake is a powerful and key element in modern data architectures. It allows the ingestion and storage of all data available at its most granular level, irrespective of whether it being structured or not. 

3. **Data pipelines** - these go beyond the traditional ETL processes. Traditional ETL done with proprietary tools (including GUI based tools like Informatica) resulted in "black box" data usage. They also couldn't often handle real-time data. Modern data pipelines are scalable, automated and use metadata-driven code for transformation of data in real-time, improving transparency and monitoring.

![A data pipeline](/post/data-pipeline.png)  
Fig. A data pipeline

4. **Data science workspaces** - modern data architectures provide easy to setup-and-use interactive workspaces (e.g. self-service clusters and/ data science notebooks) for data scientists and data engineers to work collaboratively while building data and AI solutions.

5. **Search and discovery** - the corollary to having data lakes is to have tools and processed for search and discovery of data. Some systems may use <font color="blue">ElasticSearch-Logstash-Kibana</font> (**ELK**) stack for search while others could even use AI-assisted search tools for assistance. Similarly business users need help in making sense of all this data with easy to use data discovery tools. These tools often provide data visualization and guided advance analytics.  

6. **Use of AI for data catalog and data quality** - the volume of big data means that while manual processes may be sufficient for the establishing the initial catalog, these won't suffice for managing problems of data quality or even cataloging of data on an ongoing basis. The task of extracting metadata, curating and validating it, resolving data quality issues needs to be automated with complementary human expertise solicited when required but without overwhelming.

7. **Stream data platform** - with digital transformation, corporations are moving to real-time continuous cycles of data processing for their core business. This real-time stream data requires refactoring of existing systems with modern solutions as traditional enterprise integration like ESBs are not usually very scalable as modern alternatives (e.g Kafka).

![Stream data platform](/post/stream-data-platform.png)  
Fig. Stream data platform

8. **SOA and API-based** - at the base of modern data architectures is a services-oriented architecture. Use of well-defined interfaces and APIs allow loosely coupling components in the data pipelines improving overall reliability and scalability. 

9. **Data management and security** - A modern data architecture is not just a data platform or a bunch of tools. It also includes modern processes to enable an agile, adaptive organization. Modern data management processes, with focus on security from the ground-up needs to be adopted. Data management in modern times is especially more challenging with often conflicting requirements of compliance regulation (privacy, GDPR etc.), interoperability and flexibility. New services like AI bring new complexities (ethics, explain-ability etc.) but also help in managing architectures more securely and with better performance.

_Update: November 2017 - For further details refer to my talk on [designing data lakes with open-source tools](/talks/)_



_Ref: <sup>*</sup>[Intel drops its own Hadoop distribution](https://www.theinquirer.net/inquirer/news/2336750/intel-dropping-its-own-distribution-of-hadoop-big-data-analytics-in-favour-of-cloudera)_