---
author: biguru
comments: true
date: 2015-06-24 22:52:27+00:00
layout: post
link: https://biguru.wordpress.com/2015/06/25/what-roles-do-you-need-in-your-data-science-team/
slug: what-roles-do-you-need-in-your-data-science-team
title: What roles do you need in your data science team?
wordpress_id: 251
categories:
- Big Data
- Data science
tags:
- data engineer
- data science team
- data scientist
- product manager
---

Over the past few weeks, we've had several conversations in our data lab regarding data engineering problems and day to day problems we face with unsupervised data scientists who find it difficult to deploy their code into production.
![Data scientist](/post/datascience3.jpg?w=300)

The opinions from business seemed to cluster around a tacit definition of data scientists as researchers, primarily from statistics or mathematics backgrounds, who are experienced in machine learning algorithms and often in some domain areas specific to our business, (e.g. actuaries in insurance), but not necessarily having skills of writing production-ready code.
The key driver behind the somewhat opposing strain of thought came from the developers and data engineers who often quoted Cloudera's Director of Data Science - [Josh Wills](https://twitter.com/josh_wills) - famous for his "definition of a data scientist tweet":
"Data Scientist (n.): Person who is better at statistics than any software engineer and better at software engineering than any statistician."  
![Josh Wills' definition of data scientist](/post/josh-wills.png?w=300)  

Wills' quote reflects the practical issues in finding "**unicorn**" data scientists and having to do with the best of what's on offer for a **multi-disciplinary** area like data science. It's also perhaps based on his work in startups like Cloudera and web giants like Google, where adopting agile practices like DevOps allow data scientists closer interaction with engineers and therfore substantial experience in deploying to production. Unfortunately, that's always a challenge due to bureaucracy, mindset, lack of informed opinion and cultural barriers in larger or old-world organizations with legacy systems and practices.

As in any startup or lab working on problems in data science and big data, it's important for us to clear misconceptions and get the team to a shared understanding of commonly used terms to establish a foundational common language, which would then allow developing a shared vision around our objectives. Therefore it's necessary to review going beyond definitions of the "unicorn" data scientists and looking at what happens in real-life teams where data scientists work, like ours.

**Different perspectives**  

A lot of the data scientists actually think of themselves as mathematicians, trying to formulate business problems into math/statistics problems and then trying to solve them in the data science projects.
However, the popular misconception arise sometimes out of the big-data hype articles churned out by big data vendors, including some evangelists - who equate data scientists with superpowers across a multitude of disciplines.
The developer's views arise due to their unique perspectives on the complexities of data wrangling and fragmentation around tools, technologies and languages.

The reality, as always, is quite different from the hype. There are actually probably just a handful of the "unicorn" data scientists on the planet, who have superpowers in maths/stats,AI/machine learning, a variety of programming languages, an even wider variety of tools and techniques, and of course are great in understanding business problems and articulating complex models and maths in business-speak. For the lesser mortals, and less fortunate businesses, we have to do with multiple individuals to combine these skillsets together into a team or data science squad.

**Building data science teams**  

In terms of hiring, building a data science team becomes much easier, once we get around the idea that the "unicorn" data scientists are not really available. The recruitment team and hiring manager can then focus on the individual skills that are required on the team and try to hire for profiles with strengths in these skills. Once hired, the manager's role switches to building the team in terms of setting expectations and facilitating collaborative team dynamics to evolve self-governing teams, which can then focus on achieving the objectives in a collaborative manner, instead of having to be superheroes.

![Dream data science team?](/post/data-science-tem.png?w=300)  
_Dream data science team? Einstein, Fisher, Tufte, Jobs_

**The roles in a data science team**

So what roles would a data science team have? Depending upon the organizations' objectives, the team could either focus on service-oriented consulting gigs, or focus on building reusable assets or data products.

- **Data scientist** - this role would be primarily of someone who can work on large datasets (usually on Hadoop/Spark) with machine learning algorithms, develop predictive models, understand the "theory" - maths and stats behind the models and can interpret and explain model behavior in jargon-free language. Typically this role requires good knowledge of SQL and familiarity with at least one programming language for predictive data analysis e.g. R and/ Python.
![Netflix requirements for data scientist role](/post/data-scientist-role.png?w=300)  
_Netflix requirements for data scientist role_  
- **Data engineer / Data software developer** - this role is for someone who has good understanding of distributed programming, including insfrastructure and architecture. Typically this person is comfortable with installation of distributed programming frameworks like Hadoop MapReduce/Spark clusters, can code in more than one programming languages like Scala/Python/Java, and knows Unix scripting and SQL. Based on range and depth of experience, this role can evolve into one of the two specialized roles - that of the data solutions architect and the data platform administrator.
![Netflix requirements for data engineer role](/post/data-engineer.png?w=300)  
_Netflix requirements for data engineer role_  
- **Data solutions architect** - A data engineer with a range of deep experience across several distributed technologies, and who also has good understanding of service-oriented architecture concepts and web applications (SOA concepts and REST frameworks) in addition to the developer skillsets.
- **Data platform administrator** - A data engineer who has extensive experience across distributed technologies, especially managing clusters including production envionments and good knowledge of cloud computing architectures (public clouds like AWS if using public cloud or OpenStack and Linux sysadmin experience if using private/hybrid clouds)
- **Full-stack developer** - This is an optional role - only required for teams which are focused on building data products with web interfaces. The full-stack developer is ideally an experienced web developer with experience in both backend and front-end e.g. a [MEAN](http://mean.io) developer with experience on MongoDB, Express, AngularJS and NodeJS.
- **Designer** - this role demands an expert who has deep knowledge of user experience (UX) and interface design, primarily for web/mobile applications depending on target form factors of the data product as well as data visualization and desirably some UI coding expertise. Building quick mockups and wireframes design is often required during product definition, and the designer needs to be able to work with business as well as developers in a collaborative fashion. Sometimes this role is played by front-end UI developers as good designers don't come cheap.  
![Netflix requirements for UX designer](/post/ux-designer-role.png?w=300)  
_Netflix requirements for UX designer_
- **Product manager** - This is an optional role - only required (but the key one) for teams focused on building data products. Defining the product vision, translating business problems into user stories, and focusing on getting the development team to build data products based on the user stories, aligning product releases and overall roadmap to business requirements and expectations is a key requirement from this role. Having product management experience along with relevant technical expertise is critical for this role due to differences in life-cycles of products and IT projects, as also the ability to present the voice of the customer and balance long-term vision with short-term needs. Back-filling this role with data scientists/developers who do not have product vision/business acumen is dangerous due to lures of [gold-plating](https://en.wikipedia.org/wiki/Gold_plating_(software_engineering)) and lack of project management skills.  
![Google product manager role](/post/google-pdt-manager-role.png?w=300)  
_Google requirements for product manager_
- **Project manager** role may also be optionally required when the team is low on experience. In most successful cases of performance, managers set the objectives and expectations and facilitate to build self-governing teams following agile practices.  

Irrespective of whether the data science teams focus on consulting services in one-off projects or build data products which are reused, in both cases, the team would still require a **minimum foundation** to build on - in terms of processes or _shared understanding_, and _tools and platforms_ to perform the actual work. We'll review the **data engineering** requirements for such tools and platforms in the next post.
