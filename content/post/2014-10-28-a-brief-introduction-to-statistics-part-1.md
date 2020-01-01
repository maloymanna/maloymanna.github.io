---
author: biguru
comments: true
date: 2014-10-28 10:41:42+00:00
layout: post
link: https://biguru.wordpress.com/2014/10/28/a-brief-introduction-to-statistics-part-1/
slug: a-brief-introduction-to-statistics-part-1
title: A Brief Introduction to Statistics - Part 1
wordpress_id: 125
categories:
- Data science
- Statistics
tags:
- alternative model
- box plot
- categorical
- explanatory variable
- histograms
- hypothesis test
- independence model
- numerical
- response variable
- sampling
- statistical inference
- statistics
- types of variables
---

**What is Statistics?**  
Collected observations are called **data**. **Statistics** is the study of _how best to collect, analyze, and draw conclusions from data_. Each observation in data is called a **case**. Characteristics of the case are called **variables**. With a matrix/table analogy, a case is a row while a variable is a column.

![Statistics - Correlation](/post/correlation.jpg?w=300)  
Statistics - Correlation (Courtesy: xkcd.com)

**Types of variables:**  

- **Numerical** - Can be **discrete** or **continuous**, and can take a wide range of numerical values.
- **Categorical** - Specific or limited range of values, usually called **levels**. Variables with natural ordering of levels are called **ordinal** categorical variables.  

- A pair of variables are either related in some way (**associated**) or not (**independent**). No pair of variables is both associated and independent.
- Data collected in haphazard fashion are called **anecdotal evidence**. Such evidence may be true and veriﬁable, but it may only represent extraordinary cases.

**There are two main types of scientific data collection:**  

1. **Observational studies** - collection of data without interfering with how the data has arisen. Can provide evidence of a naturally occurring association between variables, but by themselves, cannot show a causal connection
2. **Experiments** - randomized experiments, usually with an _explanatory variable_ and a _response variable_ are performed, often with a **control group**.
In general, _correlation does not imply causation_, and causation can only be inferred from a randomized experiment.

**Types of sampling:**  

- **Simple random sampling**: Each subject in the population is equally likely to be selected.
- **Stratified samplin**g: The population is first divided into homogeneous strata (subjects within each stratum are similar, but different across strata) followed by random sampling from within each stratum.
- **Cluster sampling**: The population is first divided into groups or clusters (subjects within each cluster are non-homogeneous, but clusters are similar to each other). Next a few clusters are randomly sampled followed by random sampling from within each cluster.

**Randomized experiments are generally built on four principles:**  

1. **Controlling** - control any differences between groups for confounding variables which are known and can be accounted for.
2. **Randomization** - randomize population into groups to account for variables that cannot be controlled.
3. **Replication** - collect sufficiently large sample or replicate entire study to improve estimation.
4. **Blocking** - advanced technique of grouping population based on variable known/suspected to influence response, followed by randomizing cases within the group.  

**Reducing bias in experiments -**  

Randomized experiments are the gold standard for data collection, but they do not ensure an unbiased perspective into the cause and eﬀect relationships in all cases. **Blinding** can help in overcoming _placebo effect_ in human studies.

Distributions of a numerical variable are described by <font color="blue">shape, center and spread</font>. The three most commonly used measures of center and spread are:  

center:   
- mean (the arithmetic average),  
- median (the midpoint),  
- mode (the most frequent observation)  

spread:  
- standard deviation (variability around the mean),  
- range (max-min),  
- interquartile range IQR (middle 50% of the distribution)  

An **outlier** is an observation that appears extreme relative to the rest of the data.  
A **robust statistic** (e.g. median, IQR) is a statistic that is not heavily affected by skewness and extreme outliers.

**Comparing categorical data:**  
A table that summarizes data for two categorical variables in this way is called a **contingency table**.  
A table for a single variable is called a **frequency table**.  
A bar plot is a common way to display a single categorical variable.  
A segmented bar plot is a graphical display of contingency table information.  
A mosaic plot is a graphical display of contingency table information that is similar to a bar plot for one variable or a segmented bar plot when using two variables.  
While pie charts are well known, they are not typically as useful as other charts in a data analysis.

**Comparing numerical data:**  
The side-by-side box plot is a traditional tool for comparing across groups.  
Another useful plotting method uses hollow histograms to compare numerical data across groups.

**Hypothesis test:**  

<font color="blue">H0 **Independence model**</font> - Explanatory variable has no eﬀect on response variable, and we observed a diﬀerence that would only happen rarely.  

<font color="blue">HA **Alternative model**</font> - Explanatory variable has an eﬀect on response variable, and what we observed was actually due to explanatory variable effect on the response variable explaining the difference.  

Based on the simulations, we have two options:  

1. We conclude that the study results do not provide strong evidence against the independence model.
2. We conclude the evidence is suﬃciently strong to reject H0 and assert the alternative hypothesis.  

When we conduct formal studies, usually we reject the notion that we just happened to observe a rare event. So in such a case, we reject the independence model in favor of the alternative.

**Statistical Inference:**  

One ﬁeld of statistics, _statistical inference_, is built on evaluating whether such differences are <font color="blue">_due to chance_</font>. In statistical inference, statisticians evaluate which model is most reasonable given the data. Errors do occur, just like rare events, and we might choose the wrong model. While we do not always choose correctly, statistical inference gives us tools to control and evaluate how often these errors occur.
