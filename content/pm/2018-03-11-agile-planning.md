---
author: maloymnna
comments: true
date: 2018-03-11 19:05:05+00:00
layout: post
link: https://maloymanna.github.io/pm/
slug: agile-planning
title: Agile planning
categories:
- project management
tags:
- agile
- planning
- project management
---

Agile planning is different from predictive planning done in traditional project management. Often we come across posts by certain agile evangelists who claim that agile doesn't need planning. To believe these claims would mean there would be endless iterations with a fully-funded product development team to get to a perfect end-state without concern for time or cost. This is utopian and untrue. Usually these claims are made by developers or people far removed from business. No business runs without planning or without any estimates of how much a product/service would cost. {{< blue-text >}}Agile projects also plan.{{< /blue-text >}} _The difference is in the planning_.

Predictive, plan driven projects are based on defined problems and solutions. In such projects, planning is done upfront as much is possible. Requirements are detailed and design is done upfront. The total scope of the work is hierarchically decomposed into a work breakdown structure (WBS) which is then used to define activities, estimate activity durations, sequence activities and develop a schedule. The integration between the various planning processes in a **plan-driven approach** looks like: 

![Planning processes](/pm/plan-driven.png)

In tech, where agile methods are used, planning is still done, but it looks a lot different. There are different levels of planning in the agile organization. In descending order, these are:

1. **Strategy** - traditional strategic planning used to be multi-year planning. This has now given way to 2-yearly or annual planning in several corporations. Over the years, there was better understanding that the business world was moving much too fast for the multi-year strategic plan/objectives to remain relevant. Agile caught on. In agile organizations, strategic planning is done in a similar iterative fashion. Strategic goals and corresponding metrics are set with outcomes expected within 1-3 years. Goals are prioritized from a strategy backlog (similar to a product backlog). 

2. **Portfolio** - this planning tracks programs defined to achieve strategic goals. The program level goals are tracked in the portfolio backlog. These need to be broken down to team goals (similar to user stories) for each team/value stream. Iterations are still done at quarterly frequency and inspect-adapt meetings with product leads are done on a weekly basis. **Definition of success** is defined based on goals.

   ![Agile planning at strategy level](/pm/agile-plan-strategy-level.png)

3. **Product** - Higher level goals are broken down to task level. Product managers work closely with users and other stakeholders to understand the prioritization and detail the requirements. These are progressively decomposed from themes to epics, user stories and tasks. Themes could also be used as tagging/categorization without this hierarchy. The product manager and the product owner need to work collaboratively in order to prevent waterfalling of requirements and better collaboration and feedback. **Definition of done** is defined as acceptance criteria.

4. **Release** - Planning and estimating depends on the development team's velocity. The product owner works with the team to establish the release backlog and release plans. Initial one or two iterations may be required to sort out logistics, infrastructure and other technical issues before setting to a consistent velocity. Releases could range from a single iteration to multiple iterations , but usually driven by the schedule. Several product teams which use continuous deployment pipelines using DevOps may perform multiple releases into production, but these still need to be planned. 

5. **Iteration** - agile iterations which start with iteration planning, and terminate with iteration reviews (with customers and product owner) and retrospectives 

6. **Team** - daily stand-up meeting to help the team self-organize, discover issues and work collaboratively, this could be followed by detailed sessions between team members working in pairs or in groups to. While not explicit, this helps plan the day of the team.

![Agile planning at strategy level](/pm/agile-plan-product-level.png)
