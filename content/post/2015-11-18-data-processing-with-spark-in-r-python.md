---
author: biguru
comments: true
date: 2015-11-18 11:37:49+00:00
layout: post
link: https://biguru.wordpress.com/2015/11/18/data-processing-with-spark-in-r-python/
slug: data-processing-with-spark-in-r-python
title: Data processing with Spark in R & Python
wordpress_id: 270
tags:
- Big Data
- Data science
- Hadoop
- Spark
---

I recently gave a talk on data processing with Apache Spark using R and Python. tl;dr - the slides and presentation can be accessed below (free registration):

<div class="embedCodeWrapper">
            <class="embedCode" id="embedCode" src="https://www.brighttalk.com/clients/js/embed/embed.js"><object class="BrightTALKEmbed" width="705" height="660"><param name="player" value="channel_player"/><param name="domain" value="http://www.brighttalk.com"/><param name="channelid" value="9059"/><param name="communicationid" value="354267"/><param name="autoStart" value="false"/><param name="theme" value=""/></object> <script type="text/javascript" src="https://www.brighttalk.com/clients/js/embed/embed.js"><object class="BrightTALKEmbed" width="705" height="660"><param name="player" value="channel_player"/><param name="domain" value="http://www.brighttalk.com"/><param name="channelid" value="9059"/><param name="communicationid" value="354267"/><param name="autoStart" value="false"/><param name="theme" value=""/></object></script>
</div>

As noted in my previous [post](https://biguru.wordpress.com/2015/03/23/spark-big-data-platform-future/), Spark has become the defacto standard for big data applications and has been adopted quickly by the industry. See Cloudera's  [One Platform](https://vision.cloudera.com/one-platform/) initiative blog post by CEO Mike Olson for their commitment to Spark.

In data science R had seen rapid adoption, not only because it was open source and free compared to costly SAS, but also the huge number of statistical and graphical packages provided by R for data science. The most popular ones of course are the ones from Hadley Wickham (<font color="blue">dplyr, ggplot2, reshape2, tidyr</font> and more). On the other hand, Python had seen rapid adoption among developers and engineers due to its being useful to script big data tasks along with data analysis with the help of packages like pandas, scikit-learn, NumPy, SciPy, matplotlib etc. and also the popular iPython & later Jupyter notebooks.

There are numerous posts strewn on the net picking [fights between R and Python](http://dataconomy.com/r-vs-python-the-data-science-wars/). However it is quite usual for any big data and data science shop to have developers and data scientists who use either or both these tools. Spark makes it easy for both communities to leverage the power of Hadoop and distributed processing systems with its own APIs like DataFrames which can be used in a polyglot fashion. Therefore it is essential for any data enthusiast to learn about how data processing in Spark can be done using R or Python.
