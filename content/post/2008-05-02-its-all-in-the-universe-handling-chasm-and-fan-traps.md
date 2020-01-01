---
author: biguru
comments: true
date: 2008-05-02 05:10:00+00:00
layout: post
link: https://biguru.wordpress.com/2008/05/01/its-all-in-the-universe-handling-chasm-and-fan-traps/
slug: its-all-in-the-universe-handling-chasm-and-fan-traps
title: It's all in the universe - handling chasm and fan traps
wordpress_id: 19
categories:
- SAP BusinessObjects
tags:
- business objects
- chasm trap
- fan  trap
- loop
- universe
---

Recently I worked on an assignment where the Business Objects universe was designed by a business analyst. Nothing wrong with that, as long as we get the correct results in reports or queries on the universe. But it was not to be.
We encountered incorrect results primarily due to two reasons:  

1. Mixing of grains in fact tables by not using proper contexts or the aggregate navigator

2. Unresolved chasm traps   

It was obvious that the business analyst was not trained in data modeling, nor did the universe go through a proper QA cycle where it is reviewed for data modeling errors.

**What is a chasm trap?**

The Chasm trap occurs when 2 "many-to-one" joins converge on a single table, which has not been resolved by any context. The most common problem caused by a chasm trap is fetching more data than expected.
Below is an example showing this many-to-one-to-many relationship:  
![Chasm Trap](/post/chasm0.jpg)   

**How does a chasm trap inflate results?**  
The chasm trap causes the query to return every possible combination of rows for one measure (fact table 1) with every possible combination of rows for the other measure (fact table 2), thus effectively creating a **Cartesian product**. Under normal circumstances we would receive as many records as fetched from the tables. However due to the way fact tables are designed, measures have aggregate functions like SUM() or COUNT() applied on them, and this leads to an aggregated and inflated value for either measure.

**Solution**
The best way to resolve a Chasm Trap is to define a context for each fact table at the "many" end of the joins. This creates two SQL statements and two separate microcubes which Business Objects synchronize to return the correct output.

Another way to resolve a Chasm Trap which applies only to measure type of objects is to select the option "Multiple SQL Statements for Each Measure" from the Universe Parameters dialog box. However this does not generate multiple SQL statements for dimensions and doesn't resolve chasm traps in such cases.

Apart from **_chasm traps_** and the very familiar **_loops_**, there is another possible join problem encountered while designing Business Objects universes - the **_fan trap_**. This is however much infrequent compared to the other two.

**What is a fan trap?**  
A Fan Trap is a join between 3 tables where a one-to-many join links the first table to the second and another one-to-many join links the second table to the third. Inflated results are obtained when fields from all 3 tables are included in the query.  
Below is an example:  
![Fan Trap](/post/fan1.jpg?w=300)  


**How does a fan trap inflate results?**    

A fan trap **"fans-out"** the one-to-many relationships thus multiplying the result by the details at one end of the one-to-many relationship. An incorrect result is returned as you are performing an aggregate function on the table at the “one” end of the join, while still joining to the “many” end.  

**Solution**  
The best way to solve a fan trap using dimension objects in the query is to use _an alias and contexts_. Create an alias for the table producing the initial aggregation. Create a join between the alias table and the original table.
Next modify the object that is causing aggregation by using the alias table. Then, create separate contexts - one each for the alias table and the original table. Select **"Multiple SQL Statements for Each Context"** in the universe parameters.

Another way to resolve a fan trap only for measure objects is to use the universe parameters
option **"Multiple SQL Statements for Each Measure"**. This forces the generation of separate queries for each measure, but doesn't ensure the same for dimensions.

Potential chasm and fan traps can be detected by _**visually inspecting the schema**_ by suitably arranging the tables in the Structure pane, so that the “many” ends of the many-to-one joins are to one side of the pane, and the “one” ends to the other.

If you wish to read in more detail about SQL traps in Business Objects Designer and don't mind a little drama or suspense :smile: , I highly recommend checking out [Dave Rathbun's posts](http://www.dagira.com/category/design/fan-chasm-trap/) on this topic.
