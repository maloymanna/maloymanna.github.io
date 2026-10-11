---
author: maloymnna
comments: true
date: 2026-10-11 17:17:00+00:00
layout: post
link: https://maloymanna.github.io/pm/
slug: agile-or-safe-12-week-loops-in-the-age-of-ai
title: Agile or Safe? 12-week loops in the age of AI
categories:
- product management
tags:
- agile
- product management
- devops
- safe
---

In [The Phoenix Project](https://itrevolution.com/product/the-phoenix-project/), VP of IT, Bill Palmer, aligns IT work to business objectives by sitting in the same room and looking at the same flow metrics - no ceremony, no frozen plan, just a shared system view. We spent a year on [SAFe](http://scaledagileframework.com/) for the on-ramp our executives needed, but the 12-week feedback loop feels like eons in the AI age. When agent loops complete in minutes and DORA metrics require more speed, are we finding safety in slides or capping our teams' potential?

I've worked with agile, scrum/Kanban and DevOps for more than a decade, and now part of a SAFe implementation. Having watched this closely over several 12-week Program Increment (PI) planning cycles, I find myself questioning the value that SAFe provides compared to lighter-touch Lean/flow approaches like Scrum/Kanban.
SAFe has always been criticized by agile practitioners because of its perceived misalignment with agile principles, excessive bureaucracy and being complex and jargon heavy. I don't want to go into that. This post is based on my observations and thoughts based on a real SAFe implementation as businesses get dragged into the AI age by frontier-labs and fast adopters of AI.

## What SAFe does well, {{< blue-text >}}but...{{< /blue-text >}}

1. **Executive visibility and predictability**  

The {{< blue-text >}}Program Predictability Measure (PPM){{< /blue-text >}} gives executives a number they can plan a budget around. This is not available in Scrum/Kanban.  
**But**, this is a fixed-point lagging indicator providing less situational awareness to the CFO. 

2. **Compliance in regulated industries**  

Defense, Banking or Insurance may need audit trails from identified risks to controls where SAFe artifacts (PI Objectives, Program Board, Inspect & Adapt reports, Business Value scores, risk registers) may be useful as evidence.  
**But**, dedicated [regulatory software](https://www.regnology.net/en/) usually provide these artifacts, and while documentation is mandatory for many regulations ([DORA](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en), [EU AI Act](https://artificialintelligenceact.eu/) etc.), they're framework-neutral and SAFe is not required. 

3. **On-ramp to agile**  

For enterprise companies steeped in waterfall-mode working over years, SAFe provides a less-disruptive path to agile, preserving existing roles, governance and documentation.  
**But**, more than 25 years since the [Agile Manifesto](https://agilemanifesto.org/), it's hard to imagine enterprises using pure waterfall and not a bit of Agile. Besides the long 12-week cycle of SAFe is something to think about, as we'll see below.

4. **Cross-function coordination**  

When done correctly, the PI planning even is a great synchronization even across the teams involved. It brings together people from across functions and makes IT work visible probably the first time for managers and executives far removed from it. Both IT and business get more visibility into the other side and have a better understanding of the complexity and the dependency of the work.  
**But**, this depends on how engaged everyone is in the 2-day PI planning event. When business executives and managers have day-jobs to attend to, the PI planning event may remain a ceremony with cursory or partial participation, and a tick-the-box exercise.  


## What is {{< blue-text >}}worse{{< /blue-text >}} in SAFe

1. **Alignment**

In The Phoenix project, Bill works with Dick and Ron and Ann from business to align on a shared system view. Business and IT look at the same lead time, the same constraint, the same dashboard. There's no event, no ceremony.   
In SAFe, alignment is in the events: PI planning, Portfolio Sync, {{< blue-text >}}Inspect and Adapt (I&A){{< /blue-text >}}. The output is the Program Board, an {{< blue-text >}}Agile Release Train (ART){{< /blue-text >}}-level artifact at the feature granularity. Since the team uses a different board (Scrum/Kanban) at story/task granularity, the Program Board is not reviewed or updated daily.  
The weekly ART Sync is a status review of the board by the {{< blue-text >}}Release Train Engineer (RTE){{< /blue-text >}} to check schedule variance or dependency status. There's no updated view, and the Business Owner doesn't have an updated metric to monitor.

2. **Cycle length versus responding to change**

The agile manifesto prioritizes {{< blue-text >}} responding to change {{< /blue-text >}} over following a plan. 
Scrum has 2 week sprints. In SAFe however, we have a 12 week PI, and PI objectives are committed and scored.  

Compare the cost of change if a change in priority arrives mid-cyle:

|       Framework       |  Cost of change (avg)   |  Cost of change (worst case) |
|:---------------------:|:-----------------------:|:----------------------------:|
| Scrum (2-week sprint) |        ~ 1 week         |            2 weeks           |
|   SAFe (12-week PI)   |       ~ 5-8 weeks       |            12 weeks          |

The PI commitment model has no mid-cycle re-scoring mechanism. The only workaround is to use the last iteration - the Innovation and Planning (IP) iteration buffer, and that can only work for small changes that fit in 2 weeks.

### Implications for the AI era

The 12-week PI of SAFe assumes the smallest shippable unit is a feature (weeks of work).  
In the AI age, the smallest shippable unit is a prompt or agent behaviour (minutes of work).  
Even if 50% of the work of an AI-enabled team is prompt engineering , agent orchestration or RAG updates, it's batchable in hours, not weeks.  
The PI is the wrong granularity.  
The right batch size for fast AI work units is daily or continuous (Kanban pull). Only infrastructure/platform work needs longer horizon, but even that with Infrastructure as Code (IaC) and DevSecOps CI/CD pipelines still fit a 2-week sprint.  

### But SAFe lets teams use Scrum/Kanban at their task level - so where's the issue ?

Yes, teams can use Scrum/Kanban at their level.  
With fast AI work, any external changes e.g. embedding quality changes of a model may impact work of the teams, which they can still rapidly respond to in the next sprints.  
However, there'll be impacts to the committed PI objectives, which are not surfaced till the next PI.  
Any dependency slippages are invisible until too late.  
Teams may be penalized (for missing PI objectives) even if they respond to most valuable work - adapting to breaking changes.  
None of their agile response to change is however reflected in the coordination layer or surfaced due to the {{< blue-text >}}frozen{{< /blue-text >}} plan.

3. **Surfacing Technical Debt**

Similar to the above case, if an external dependency from a team outside the ART (e.g. network or security teams outside scope of shared authority where ART and SAFe is implemented) materializes into an issue, the architecture runway doesn't get extended till the next PI.
The issue is identified in the next System Demo, but not fixed.
In the I&A at the end of the PI, depending on the type of issue and enabler may be created, or it may remain as a {{< blue-text >}}ROAM (Resolve/Own/Accept/Mitigate){{< /blue-text >}} risk with an acceptance/exception.
The runway is extended only after the next PI planning if the enabler feature is in the program backlog.
In some cases e.g. security rules even the acceptance/exception may require additional mitigation work to be planned.
This latency in getting to a fix is a structural issue with SAFe. In a DevSecOps + Scrum/Kanban model, the runway is the system and automated contract testing, PO to PO commitment, using the CI/CD pipeline as the real-time dependency tracker allow the teams to surface and work throught it at a far lower latency.

4. **Lack of throughput metrics**

DevOps has [DORA metrics](https://dora.dev/quickcheck/?v=2025): deploy frequency, lead time for change, change failure rate, mean time to recovery - operational metrics that measure how fast you can ship, how reliably, and how fast you recover. [Value-stream mapping](https://dora.dev/guides/value-stream-management/), integrated with DORA help improve software delivery performance, operational efficiency and make work processes visible and transparent.
SAFe has no equivalent, and its own metrics (PPM, Flow Distribution, PI Objective Achievement) measure plan reliability, not system throughput. These are backward looking indicators, and do not help in preparing the team to improve their DORA maturity.

5. **Possibility of gaming and sandbagging**

SAFe success is measured by PI objective achievement scores. It's a planning - predictability metric. An ART which hits high predictability scores maybe 100% regularly may well be [sandbagging](https://www.investopedia.com/terms/s/sandbag.asp#toc-what-does-sandbagging-mean-today). In cases whre there's collusion, the IT manager sets low PI objectives, and the Business Owner scores them generously and PPM hits 100%. Consequently the company loses believing everything is fine. Teams do real work, but the PI Planning events become performance theater.

SAFe also introduces unnecessary jargon to complicate learning for executives instead of using intuitive easier-to-understand agile and lean/flow concepts. 

---

It's been over 25 years since [the Agile Manifesto](https://agilemanifesto.org/) was published. DevOps is now more than a decade old.  
Our mobile apps get updated daily or even more frequently. We're in the age of AI where agent loops finish in minutes and teams across the world focus on improving throughput. We have developers and operations and security working with IaC tools to build ever faster CI/CD pipelines and security policies and scans to protect the enterprise.  
Moving to a 12-week planning cycle with 2-day synchronization to get executives and managers get up to speed with agile methods seems an anachronism. 

In [The Phoenix Project](https://itrevolution.com/product/the-phoenix-project/), an IT manager Bill Palmer is unexpectedly promoted to VP of IT Operations, inheriting a dysfunctional IT team buckling under unplanned work, firefighting and business pressure.  
Bill's transformation of IT by proactively working with business and aligning IT goals with business objectives, looking at the same flow metrics daily has lessons for those who believe they need SAFe.  
SAFe can be an on-ramp, but not the destination. The AI age will not wait.