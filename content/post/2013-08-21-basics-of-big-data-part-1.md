---
author: biguru
comments: true
date: 2013-08-21 23:02:49+00:00
layout: post
link: https://biguru.wordpress.com/2013/08/21/basics-of-big-data-part-1/
slug: basics-of-big-data-part-1
title: Basics of Big Data - Part 1
wordpress_id: 93
categories:
- Big Data
tags:
- big data
- data scientist
- Hadoop
- NoSQL
- parallel programming
---

You can’t miss all the buzz about **Big Data**! Over the past few years, the buzz around the cloud and **Big Data** shaping most of the future of computing, IT and analytics in particular has grown incessantly strong. As with most buzz words, which are then hijacked by marketing to suit their own products’ storylines, but which nonetheless manage to confuse users in business and staff in IT as well, **Big Data** means several things to several people.

So what exactly is **Big Data**?

**Big Data** refers to the enormously large datasets that are challenging to store, search, share and analyze with conventional data storage and processing systems. While these challenges remain, our ability to generate such large datasets have grown exponentially over the past few years. With the march of the digital age, and the growing popularity of social networking, the amount of data generated today is growing enormously. Not only within public domains like Google, Facebook, Youtube and Twitter but also within organizations, the amount of data being generated with more powerful servers, softwares and applications far exceeds our capacity to effectively analyze and make sense of this data.

The table below shows the growth of data and the new terminology that has been coined to address the growth of data volumes.  

 **Amount of data** | **Terminology**                 | **Storage**                      | **Real-world analogy** 
--------------------|---------------------------------|----------------------------------|------------------------
 103 bytes          | Kilobytes (kB)                  | 1.44 MB High-density floppy disk | Files, folders         
 106 bytes          | Megabytes (MB)                  | Disks, tape                      | Folders, cabinets      
 109 - 1012 bytes   | Gigabytes (GB) - Terabytes (TB) | Disk arrays                      | Library                
 1015 bytes         | Petabytes (PB)                  | Cloud                            | ...                    
 1018 bytes         | Exabytes (EB)                   | Cloud                            | ...                    
 1021 bytes         | Zettabytes (ZB)                 | Cloud                            | ...                    
 1024 bytes         | Yottabytes (YB)                 | Cloud                            | ...                    

**Volume, Velocity, Variety & Value**

The 3Vs of Big Data - **volume**, **velocity** and **variety** have been popularized by Gartner's analysis. Gartner defines Big Data as _“high volume, velocity, and variety information assets that demand cost-effective, innovative forms of information process for enhanced insight and decision making.”_ What it essentially means is **Big Data** beyond the high volumes, moves too fast and is not always structured according to conventional database architectures. For example, multimedia content uploaded on YouTube or comments on Twitter or Facebook, coupled with the velocity at which it is generated and churned makes it obvious that this data is not in a structured format for conventional data processing. To analyze and gain insights from this data, rather derive **“value”**, would require a wholly different approach.  

**Old wine in new bottle? Data mining and Big Data Analytics**

A modeling approach is required to derive value out of **Big Data**. A hypothesis is proposed, statistical models are created and validated or updated using data. It is interesting to note that this approach bears substantial resemblance or even overlap with **“data  mining”**. For those unfamiliar with the term, the more obscure and geeky part of business intelligence and information management, **“data mining”**  is the process of discovering patterns in large datasets, usually in data warehouses, involving several or all of methods and tools of statistics, databases, machine learning and artificial intelligence. This _hypothesis-model-validate and refine approach_ for deriving value out of **Big Data**, could be manual with help from data analysts or specialists (data scientists), but could also be **“machine-based”** depending on _adaptive machine-learning_. It is important to understand due to the velocity of the data, the algorithm for deriving value could be short-lived and actions based on the insights may need to be implemented rather quickly.

**As an illustration**, consider minor changes done by Google in its algorithms to serve ads in its search results, collection of a large dataset based on usage for a limited period (maybe a few hours) and analyzing it to understand user response to specific **Adwords** across dimensions like _demographics_, _geolocation_, events, timing etc. can provide Google valuable insights on how to tweak its algorithms to serve advertising and generate the maximum revenue out of it.

**The rise of the “Data Scientist”**

While the most popular data mining example remains the myth about **Walmart’s** correlation of [beer purchases with diapers](http://www.dssresources.com/newsletters/66.php), there are celebrated stories about statisticians at other retailers like **Target** using data mining to [understand users’ buying patterns](http://www.nytimes.com/2012/02/19/magazine/shopping-habits.html?pagewanted=1&_r=1&hp) helping focus marketing efforts on target customers.  
Organizations now understand that there is hidden value in the **Big Data** haystack which can be leveraged for competitive advantage.  

With the amount of adaptive machine learning and automation, it used to be [argued even a few years ago whether theory and modeling by analysts would be needed at all](http://www.wired.com/science/discoveries/magazine/16-07/pb_theory) and whether the sheer volume of **Big Data** was sufficient to measure and predict patterns. However, it has slowly been understood that due to the breadth and depth of data to be examined, and to ensure correlation between the business context and the data being analyzed, there needs to be a key role played by humans in making sense of **Big Data**.  

Though not exclusively tied to **Big Data** projects, the _data scientist_ role is the new role envisaged for analyzing data across multiple sources and delivering insights related to business problems. In essence, a _data scientist_ is a marriage of 2 roles: the **business analyst** and the **data mining statistician**. A _data scientist_ typically has similar backgrounds as a data analyst, being trained in statistics, mathematics, modeling and analytics as well as having strong business acumen and communication skills to convey highly technical analyses in business terms to both business and IT leadership. The **data scientist** has been variously cited as being an [awesome nerd](http://www.thefinancialist.com/the-rise-of-the-awesome-nerd/) to having the [sexiest job in the 21st century](http://hbr.org/2012/10/data-scientist-the-sexiest-job-of-the-21st-century/).

**The tools for Big Data analytics**

As with any new technology and hype cycles, enterprises are careful and calibrate their involvement in joining the **Big Data** bandwagon. It is no wonder that organizations which generate most of the Big Data in public domain e.g. social networks like **Facebook** or **Google**, also make the most use of analytics to derive value from **Big Data**. e.g. Google used **Big Data** to identify its famous hiring puzzles and [brain-teasers were useless](http://mobile.nytimes.com/2013/06/20/business/in-head-hunting-big-data-may-not-be-such-a-big-deal.html).  

Facebook currently collects 320TB data each day working with **Hadoop** and **Hive** and is adding on a relational data warehouse of around 250PB. In fact, a lot of the open source tools and technologies in use today have been developed by these organizations. These include _Hadoop_ which is an open-source _Apache_ project, allowing storage of enormous datasets across distributed clusters of servers and running distributed analysis applications on the clusters. It utilizes the **MapReduce** _parallel processing programming model_, originally developed by Google to process large datasets on a cluster or distributed clusters.

I will explore details of _Hadoop, Hive, HDFS, NoSQL, Spark, Impala_ and other technologies related to **Big Data** in the second part of this post. I will also explore the unique challenges of **Big Data** architecture including rapid use, rapid interpretation, lack of schema to sync across tools and other data, data quality and governance and integrating **Big Data analytics** into the enterprise architecture.

Read the series on Big Data: 

- [Part-1 : Basics](https://biguru.wordpress.com/2013/08/21/basics-of-big-data-part-1/), 
- [Part-2 : Hadoop](https://biguru.wordpress.com/2014/04/13/basics-of-big-data-part-2-hadoop/), 
- [Part-3 : Hadoop data warehouse](https://biguru.wordpress.com/2014/05/12/basics-of-big-data-building-a-hadoop-data-warehouse/) and 
- [Part-4 : NoSQL](https://biguru.wordpress.com/2014/10/01/big-data-basics-part-4-nosql-and-newsql-explained/)  
