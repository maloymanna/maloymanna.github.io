---
author: maloymanna
comments: true
date: 2024-06-28
layout: post
slug: the-data-mesh-approach
title: The Data Mesh Approach
categories:
- big-data
- data science
- machine learning
- ai
- architecture
tags:
- data-mesh
---
With rapid advance in the technology world, it makes sense sometimes to rethink our objective and outline the roadmap instead of just following the new and shiny. {{< blue-text >}}Data Mesh{{< /blue-text >}} might seem a relatively new concept, however what its creator Zhamak Dehghani has done is spell out in words the approach required to reach the strategic goal of being a data-driven organization.  

![Data Mesh domain product notation](/post/data-mesh.png)  
Figure: Data Mesh domain product notation, adapted from Zhamak Dehghani

**Business @ the Speed of Thought**  
Let's rewind to 1999, peak of the dot-com bubble. Bill Gates co-writes a book with Collins Hemingway : `Business @ the Speed of Thought`.  In this book, Gates expounds his vision:

- Real-time decision making: organizations must use technology to access real-time data and insights.
- Employees need to be empowered with information and tools
- Digital nervous system: an agile, connected corporation with seamless flow of information across systems and teams, where all stakeholders can access any information, anytime, anywhere!

**Software is eating the world**  
Fast-forward to 2011: Marc Andreessen proclaims in his now-famous essay, how the `software revolution` is going to change every industry, including upending the incumbents of the software industry itself. 

**From the Matrix and WiFi to ChatGPT**  
1999 was the year `The Matrix` cult movie was released. It was also the year Nvidia release the first consumer GPU (GeForce 256) and the IEEE 802.11b short-range radio networking was rebranded as `Wi-Fi`.  
So, in hindsight, the technology of the 1990s (ERP and CRM tools) was foundational but limited and lacked the capabilities to fully realize Gates' vision. 
It's only when Andreessen enunciated that we were on the cusp of the `software revolution` that we had the building blocks of the technologies like big data, machine learning and advanced analytics.  

Why is this pertinent now?  
Almost 8 years after Andreessen's essay, Zhamak in her original 2019 write-up introduced what she called a `new enterprise data architecture` that she called `data mesh`. Rather, `distributed Data Mesh`.  

**What is Data Mesh?**  
{{< blue-text >}}Data Mesh{{< /blue-text >}} is a decentralized approach to data architecture, a convergence of 3 disciplines:

1. Distributed Domain Driven Architecture - data production and data consumption is owned by distributed domain teams closest to the data
2. Self-Serve Platform Design - a central platform that provides domain teams with the tools and infrastructure to build, share, discover and consume data products
3. Product Thinking with Data - domain data teams prepare and publish their data assets as their products with acceptable Service Level Objective, for the rest of the organization's data scientists, ML and data engineers who are their customers

In order to propose her `next enterprise data platform architecture`, Zhamak finds at least 3 failure modes with the current enterprise data platform architecture, in her words `centralized, monolithic and domain agnostic aka data lake`.

1. In her view, the centralized data lake constrains our ability to respond to the ever `proliferating data sources`. 
2. The decomposition of the data platform to a `pipeline of data processing stages` necessarily requires changes for new functionality like new datasets and limits our ability to achieve higher velocity to respond to consumers
3. The `siloed and hyper-specialized data platform engineers` lacking domain knowledge are disconnected from cross-functional domain teams, hence this organization structure does not scale to deliver the promised value of creating a data-driven organization.  

**Key enablers of the Data Mesh**
While not prescriptive about specific technologies, Data mesh does suggest architectural patterns to support itself.  

- Self-serve Data Platform : This is the linchpin of the Data Mesh, a central platform providing tools for the domain teams to publish, discover and consume data products. The capabilities and requirements of this platform make a long list:  
  - Scalable polyglot big data storage
  - Encryption for data at rest and in motion
  - Data product versioning
  - Data product schema
  - Data product de-identification
  - Unified data access control and logging
  - Data pipeline implementation and orchestration
  - Data product discovery, catalog registration and publishing
  - Data governance and standardization
  - Data product lineage
  - Data product monitoring/alerting/log
  - Data product quality metrics (collection and sharing)
  - In memory data caching
  - Federated identity management
  - Compute and data locality
- Data-engineering literate domain users : Moving away from centralized data engineering teams, Zhamak advocates including data engineers as well as data product owner in domain teams. 
- Centralized governance and standardization : To ensure data products can be trusted and have agreed-upon definitions and ensure interoperability
- Global access control : Enterprise Identity Management system (SSO) and Role-based access control defined centrally but applied at a finer granularity on the domain data products. 

**How close are we to a Data-Driven Organization?**
It's useful to look back at Gates' vision and compare with what Zhamak has proposed, and also think about how close are we to the `holy grail` of the {{< blue-text >}}`data-driven organization`{{< /blue-text >}}.

- Technology has evolved from expensive centralized decision-support systems (data warehouses) to centralized data lakes or lakehouses on inexpensive cloud object-stores/HDFS.
- Data platform infrastructures have standardized components and can be easily setup on the cloud
- Gen AI and Low/No-Code tools can empower non-technical users to create and manage data pipelines without relying on data engineers
- AI enabled catalog and compliance tools can enforce governance policies without excessive central oversight.

**Cultural Transformation**  
Data Mesh is primarily focused on cultural transformation, organizational structure, and governance. {{< blue-text >}}It brings to the foreground the hard problems of the cultural shift needed to democratize data skills, with decentralization to domain teams.{{< /blue-text >}}

- Decentralized domain ownership - comes with entirely new processes and completely new roles. Getting to the _Chief Data Officer_ role was hard enough. **Domain Data Product Owner** is not an established role yet. It implies entirely new responsibilities and ways of working for the team, even a new organization culture.   
- Data as a Product mindset - requires a paradigm shift from the current mindset of information/analytics as consumables created and curated by a centralized data engineering team.  This would possibly have massive changes to organizational culture with serious risks of scepticism and resistance. 

Data Mesh may have achieved some traction in the data architecture community due to continued evangelism of the data engineering culture. However, it remains constrained by the very real and massive cultural transformation in organization culture and operating models.  
It's worth remembering that some of these were the original **`people and process`** challenges that data warehousing/analytics never solved, opting for **`technology-driven quick-wins`** brought about in waves like dimensional modeling, analytical engines, columnar storage, mapreduce/big-data and so on.  
Data Mesh advocates for including data product owners and data product developers/engineers in the domain teams. The data engineering and AI talent shortage is real, and when staffing the centralized data platform teams is a challenge, it seems a long shot being able to have data engineers in the domain teams.   
The {{< blue-text >}}generative AI transformation{{< /blue-text >}} is in full swing, and it's not yet clear what impact it would have on the data-ML platforms or even the data engineer role.  
Overall, the idea of a data mesh represents a significant shift in how organizations think about data management, and are able to overcome cultural transformation barriers and potential huge financial investments required for undertaking such changes.  
While it could get a leg-up from the Gen AI revolution, it remains to be seen how the AI transformation brings us closer to the `data driven organization` and whether Data mesh will be moot or not.  

References:

1. [1999 timeline from the Computer History Museum](https://www.computerhistory.org/timeline/1999/) 
2. [How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh](https://martinfowler.com/articles/data-monolith-to-mesh.html)  
3. [Data mesh principles](https://martinfowler.com/articles/data-mesh-principles.html/)
