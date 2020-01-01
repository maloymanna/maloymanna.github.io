---
author: biguru
comments: true
date: 2009-07-19 22:43:12+00:00
layout: post
link: https://biguru.wordpress.com/2009/07/19/businessobjects-universe-design-best-practices/
slug: businessobjects-universe-design-best-practices
title: BusinessObjects universe design best practices
wordpress_id: 30
categories:
- SAP BusinessObjects
tags:
- best practice
- business objects
- design
- SAP
- universe
---

Having relocated from the Silicon Valley to Bangalore a year back, I’m now working in an MIS – strategic reporting role. In my role to evangelize the use of BI best practices and tools, one of the foremost is that of universe design.  As a matter of fact, I’m currently being involved in formalizing a BI policy around the tools we use most – Oracle, Informatica and SAP Business Objects (along with migration from our legacy BO to the XI platform!) – so a lot of my current work is related to best practices, design guidelines and preparing unit test checklists for my team of developers.

So here goes my list of universe design best practices. Being the cornerstone of the Business Objects semantic layer, the universe design becomes one of the most important (next only to the data warehouse design if there is one, and foremost if there is none) aspects of getting the right data out there in time for analysis and decision making.

The best practices are grouped by the reporting area they belong to.

**Universe design: object creation**


  * Object and class naming should be in business terms – so that it makes sense to the end-user. This also reduces development overhead since reports can use descriptions out-of-the-universe, instead of editing headers or creating report level variables.

  * All objects should have help text or usage information – corollary from above.

  * Object formatting should preferably be done at the universe level.

  * Pre-build condition objects in the universe rather than forcing users to build conditions for reports.

  * Build logic into objects - translate code, common calculations etc rather than forcing users to do it in report variables.

  * Avoid using WHERE clauses in the object definitions; use CASE statement instead. In most cases, using WHERE clause will return incorrect results when similar objects are included in the result set, due to combined restrictions imposed by the multiple WHERE clauses.

  * Use aggregation in all measure objects - to push the aggregation to the database wherever the performance bottleneck is likely to be BO server and the database performance is optimal. Generally the database is much more powerful at doing aggregation calculations, and this also reduces the volume of data to be transported over the network.

  * All measure objects should include aggregation functions for projection. When this is not included, BO will not automatically roll-up the data in the report, which could result in incorrect data and analysis.  Note that in the 3.0 version of Designer, a new feature - Database Delegated projection function is available to take care of these anomalies while doing "averages" for instance.

  * Use Custom LOVs or cascading prompts to display LOVs where hierarchies and numerous values are involved.

  * Use relative date objects for scheduling e.g. Today, Yesterday, Previous Month etc. Create a separate class to contain these reporting objects – this helps in improving maintainability.

  * Use dynamic HTML in objects where required to avoid users having to build it in report variables – end users wouldn’t like to code hyperlinks themselves, but would love to have an object which when clicked can lead them to Google Maps for example.

  * Use contexts in universes having multiple fact tables – this helps in getting your measures (built from multiple fact tables) right.

  * Use derived tables to define measures dependent on multiple fact tables.

  * Use derived tables to reduce complexity of queries to be written by users or in place of views or procedures. A note of caution here: Use derived tables sparingly. If you have access to the database or DBA and can get views or tables created for the same purpose, go with it rather than using derived tables. This is not only to push the logic and work closer to the database, but also to take care of the performance and maintainability aspects. Exceptions to this include cases where your derived table may include a prompt which would restrict the number of rows returned and thus improve performance over a conventional view.

  * Reuse code with @Variable. Reuse interactive objects with @Where (if you use them at all).

  * Use @Prompt syntax for conditions and interactive objects where input values are likely to change or absence of prompt would lead to inaccurate values or unacceptable query response times. Also make sure regularly used conditions e.g. current year / latest date should not have prompts to avoid annoying users.

  * "To limit the number of objects created to avoid user confusion, build interactive objects with @Prompt syntax followed by additional OR clause to include ""All"" condition.  

    ```
    E.g. 'ALL' IN @Prompt('Enter Value or ALL','A', 'Class\Object',multi,)

    ​OR

    ​Table.Column IN @Prompt('Enter Value or ALL','A', 'Class\Object',multi,)"
    ```  


**Universe design: resolving join and performance problems**


  * To resolve a chasm trap, define a context for each table at the "many" end of the joins.

  * To resolve a fan trap, create an alias table for the table producing the multiplied aggregation. Create a 1:1 join between the original and the alias tables. Modify the select statement to use the columns from the alias table instead of the original table.

  * Use of contexts should be evaluated w.r.t. use of aliases for resolving join issues, to take care of maintainability of code.

  * Integrity checks on the universe structure, parsing of objects, joins, contexts, detecting loops etc is mandatory. If you wish to use Business Objects to help you detect fan traps or chasm traps - you must set the cardinality on the joins. Do not rely on BO to suggest the cardinality - this is often erroneous, based on the records sample that BO fetches for each table.

  * Uncheck the "Multiple sql statements for each measure" option in universe parameters, if this is not required for resolving any join problems. This option should be checked if the measures being retrieved in the same query involve different tables. "Prevent Cartesian product" should be checked, as should there be limits placed on the number of records returned and the time for the sql connection - to prevent runaway queries which can bring the database down to its knees and cause an outage for all users.


**Universe design: optimization / miscellaneous**


  * Use shortcut joins wherever possible to reduce number of tables used in a query

  * Use aggregate tables /materialized views with aggregate awareness set up to improve query performance

  * Use keys instead of labels where possible to take care of index awareness benefits of performance and uniqueness

  * Use the JOIN_BY_SQL parameter to shift process from BO server to database wherever the bottleneck for performance is the BO server and the database performance is optimal.

  * Update the .prm files to enable access to custom SQL functions and improve help text

  * Do not use derived tables instead of aggregate tables.

  * Turn off LOVs for all dimension and detail objects that are redundant or not required. This prevents performance problems when users inadvertently click on the "Values" and the query sets to return all the IDs or other irrelevant data.

  * Consider using linked universes with a master kernel universe to ensure consistent dimensions across multiple universes


This list is certainly not an exhaustive one - but a work-in-progress. I'd update it as and when I compile more; meanwhile if you feel anything has been left out, drop in a line.
