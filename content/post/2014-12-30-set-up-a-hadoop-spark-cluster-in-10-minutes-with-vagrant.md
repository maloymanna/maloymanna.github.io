---
author: biguru
comments: true
date: 2014-12-30 22:36:53+00:00
layout: post
link: https://biguru.wordpress.com/2014/12/30/set-up-a-hadoop-spark-cluster-in-10-minutes-with-vagrant/
slug: set-up-a-hadoop-spark-cluster-in-10-minutes-with-vagrant
title: Set up a Hadoop Spark cluster in 10 minutes with Vagrant
wordpress_id: 181
categories:
- Big Data
- Data science
tags:
- cluster
- Hadoop
- install
- multi-node
- Spark
- vagrant
---

With each of the big 3 Hadoop vendors - **Cloudera**, **Hortonworks** and **MapR** each providing their own Hadoop {{< blue-text >}}sandbox{{< /blue-text >}} **virtual machines** (VMs), trying out Hadoop today has become extremely easy. For a developer, it is extremely useful to download a get started with one of these VMs and try out Hadoop to practice data science right away.

![Vagrant Hadoop Spark Cluster](/post/vagrant-hadoop-spark-cluster.png?w=300)

However, with the core [Apache Hadoop](hadoop.apache.org/), these vendors package their own software into their distributions, mostly for the orchestration and management, which can be a pain due to the multiple scattered open-source projects within the Hadoop ecosystem. e.g. Hortonworks includes the open-source **Ambari** while Cloudera includes its own **Cloudera Manager** for orchestrating Hadoop installations and managing multi-node clusters.

Moreover, most of these distributions require today a **64-bit machine** and sometimes a **high-amount of memory** (for a laptop). e.g. running Cloudera Manager with a full-blown Cloudera Hadoop Distribution (CDH) 5.x requires at least **[10GB RAM](http://www.cloudera.com/content/cloudera/en/documentation/cloudera-manager/v5-1-x/Cloudera-Manager-Quick-Start/Cloudera-Manager-Quick-Start-Guide.html)**.  
For a developer with a laptop, _RAM is always at a premium_, hence it may seem easier to try out the vanilla Apache Hadoop downloads for installations. The documentation for Hadoop for installing a single-node cluster, and even a multi-node cluster is much improved nowadays, but with the hassles of downloading the distributions and setting up SSH, it can easily take up a long-time to effectively set up a useful multi-node cluster. The overhead of setting up and running multiple VMs can also be a challenge. The vanilla distributions also require separate installations for UI (Cloudera Hue being a nice one) and job tracking (Oozie) or orchestration (Ambari). Unfortunately Ambari works only with select versions of HDP (Hortonwork's distribution of Hadoop), and configuring Oozie with disparate versions of Hadoop, Java and other libraries can be a real pain.

One of the solutions to this problem is to use a container-based approach to installation. Hadoop clusters can be setup with LXC (Linux containers) approach, e.g. with the very popular [**Docker**](http://blog.sequenceiq.com/blog/2014/06/19/multinode-hadoop-cluster-on-docker/). There are also other approaches with using [**Puppet**](https://github.com/viirya/puppet-hadoop), [**Ansible**](https://github.com/analytically/hadoop-ansible), [**Chef**](http://www.rpark.com/2013/02/using-chef-to-build-out-hadoop-cluster.html) and [**Salt**](https://github.com/accumulo/hadoop-salt) which allow easy installations. One of the simpler approaches that I tried apart from vanilla Hadoop is using [Vagrant](https://www.vagrantup.com/). Indeed setting up VMs with Vagrant is a breeze, and with a vagrant script (written in Ruby), setting up a multi-node cluster is very quick. In fact you can get started with a Hadoop and Spark multi-node cluster in less than 10 minutes.

Check out the [project on Github](https://github.com/dnafrance/vagrant-hadoop-spark-cluster) - it's adapted from Jee Vang's excellent Vagrant project to allow for 32-bit machines,  speed-up with pre-downloads of Hadoop, Spark and Java, and includes an updated Readme with script change locations detailed.
