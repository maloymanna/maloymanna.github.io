---
author: maloymnna
comments: true
date: 2019-03-07 07:33:07+00:00
layout: post
link: https://maloymanna.github.io/pm/
slug: the-5-time-thieves
title: The 5 time thieves
categories:
- project management
tags:
- agile
- project management
---

I recently read this book "**Making work visible**" by Dominica Degrandis which explains how to facilitate work organization by making it visual. It also nearly explains some recurrent problems which corporations overlook while designing work processes - the time thieves. The 5 time thieves prevent getting work done efficiently and can be identified (and minimized) when work is surfaced visually.

The **5 time thieves** or categories of problems are:

1. **Too much Work in Progress** - this happens usually when demand exceeds the capacity of the team. Too much work in progress (**WIP**) leads to context switching and decreases the quality of items and things take longer to finish overall. WIP is a leading indicator of cycle time. The fact that excess demand has an impact on delivery is explained neatly by queuing theory - Little's Law.

2. **Conflicting priorities** - this happens when there are competing tasks or a lack of prioritization. When people try to do too many things at once, the result is delays and chaos.

3. **Unknown dependencies** - if dependencies are not known in advance, due to lack of information, analysis or skills, new tasks will need to be done to reach goals. These will also arrive without being expected and will almost inevitably cause delays.

4. **Neglected work** - this happens when there's work that's considered important but not urgent. Due to excessive demand and too much WIP, resources are diverted to more "urgent" tasks. This work piles up, having been done partially, and wastes resources or increases technical debt.

5. **Unplanned work** - the most invisible category, this happens all the time either due to poor planning, interruptions, changing prioritization or unnecessary rework. A simple example is that of unnecessary meetings with too many participants that required.

The book is a good introduction to **Kanban** for beginners because it explains the core issues that kanban tries to solve.

Most people appreciate concepts **visually**, and the simple fact of making things visual using a kanban board helps teams and managers appreciate the amount of work already launched but not completed. Having a good grounding in these {{< blue-text >}}"time thieves"{{< /blue-text >}} helps identifying all {{< blue-text >}}"invisible"{{< /blue-text >}} work on the kanban board as a very important first step. 

![A Kanban board](/pm/kanban.png)

All work including invisible WIP has an associated cost, so the corporation needs to make it {{< blue-text >}}visible{{< /blue-text >}}. A kanban system with too much WIP could cause bottleneck, which ultimately leads to delays in delivering value. This therefore has immediate takeaway in actions to limit the WIP, usually at the demand management level.

A next step which helps is to then identify the impediments preventing the team from completing these activities. The corporation needs to find ways to minimize interruptions, including unplanned work and unnecessary meetings which do not add value. Using a visibility grid helps categorize the value of visible and invisible work - whether it is positive or negative. 

![Visibility Grid](/pm/visibility-grid.png)

This should not however impact daily stand-up / scrum meetings used as inspect events which themselves help to uncover invisible work. Remember the team members are encouraged to talk about anything which may impact the team, including impediments, which then are resolved with the help of the scrum master and/ managers.

A good way to measure and improve is to monitor {{< blue-text >}}flow metrics{{< /blue-text >}}. Two useful metrics are:

1. **Lead time** - total time it takes for the work to deliver value from start of work to completion of work. This includes time spent in the process e.g. waiting.

2. **Cycle time** - time spent by a work item in the "in progress" stage. The more the WIP, the more the cycle time. A theory by MIT professor John Little, called {{< blue-text >}} "Little's Law" {{< /blue-text >}} provides this relation as: 

   **Cycle Time = Work in progress (WIP) / Throughput**

   where throughput can also be defined as the average completion rate.

Given a team with stable velocity (throughput), the more the WIP, the more would be the cycle time. 

In conclusion, the three key principles to manage invisible work and improve delivery are:

- visualize all work on a kanban board
- limit WIP (either per item type, per swim lane, per column or per person)
- protect the team from interruptions 
