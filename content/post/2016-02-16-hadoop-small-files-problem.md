---
author: biguru
comments: true
date: 2016-02-16 08:09:12+00:00
layout: post
slug: hadoop-small-files-problem
title: Hadoop's small files problem
categories:
- Big Data
- architecture
tags:
- Big Data
- architecture
- Hadoop
---
Small files are a big problem in Hadoop. 

Hadoop is designed to manage big data and by design this means HDFS is designed to store very large files in a distributed cluster with streaming access to this data. For reference, a typical block in HDFS is 64 MB or 128 MB. Each small file (few MB or less) is stored in a block and multiple small files could be stored in blocks across different nodes of the distributed cluster.

Having small files causes data to be accessed across different nodes of the cluster which is inefficient and slower due to disk I/O overhead. This causes a major performance problem.

Besides the Hadoop namenode caches file metadata in memory, and several small files end up using and blocking a huge amount of memory of the NameNode.

As a rule of thumb, a file/directory/block consumes around 150 bytes. While dealing with millions of small files, this would consume several GB memory of the namenode. 

A practical solution to the small files problem is **file compaction**, or merging small files into larger files. This can be combined with a periodic inspection on the number of small files, below a certain threshold close to the HDFS block size. Compaction can improve performance by  several hundred times order of mangnitude. 
A limitation is that it can't be real-time. However with much of Hadoop being batch-processed, compacting jobs can be scheduled during lean windows to improve performance.

Using HAR (Hadoop archive) files is to be generally avoided as maps cannot operate over the HAR filesystem layer and needs to seek each small file. With 2 index file reads and 1 data file read, this could be slower than accessing small files.

Here's an example of such a file compaction script: https://github.com/edwardcapriolo/filecrush

