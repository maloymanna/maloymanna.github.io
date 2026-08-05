---
author: maloymanna
comments: true
date: 2026-07-31
layout: post
slug: ai-systems-engineering
title: "Beyond prompts & loops - engineering AI systems"
layout: post
description: "Evolving deterministic architecures in AI systems engineering"
categories:
- AI, software
tags:
- AI, agent, software, productivity
---
The rise of agentic AI and specifically AI coding agents has led to rapid evolution in AI engineering. In the early days of ChatGPT, we were being asked to learn prompt engineering - how to structure prompts to get better results on different tasks with Large Language Models (LLMs). As models improved capabilities with improved context and memory, AI applications became more sophisticated, shifting towards agentic workflows, ralph loops and tool calling. However, as enterprises adopt AI, and pilots move into production, rising token costs are driving a shift towards deterministic architectures beyond the agent harness and loops.

Enterprise AI systems in production can no longer rely on designing clever prompts or infinite recursive loops. Exploding token usage and the need to have greater control and repeatability are forcing AI systems to combine non-deterministic LLM reasoning with deterministic software engineering principles and domain-specific policies to develop into distributed systems with a layered architecture.

An AI application is no longer just the LLM, not even the additional components which build a RAG application. New application architectures have made the LLM just one component (albeit a key one, providing reasoning capabilities) of a larger whole.

### From Prompt Engineering to AI Systems Engineering

We can try to categorize the evolution of AI engineering into the following phases: 

**Phase 1: Prompt Engineering**

![Phase 1: Prompt Engineering - Output depends on prompt quality](/images/prompt1-400.png)  
Prompt engineering aimed to design structured prompts to improve LLM outputs. Several prompting frameworks are available, e.g.  

**TRACI**: A mnemonic for Task, Role, Audience, Create, Intent.  

{{<blue-text>}}Task{{</blue-text>}}: Write a 30-second elevator speech for a new sustainable AI application that optimizes token spend and sustainability metrics with model routers and observability.  
{{<blue-text>}}Role{{</blue-text>}}: You are a software developer and startup founder pitching to VCs.  
{{<blue-text>}}Audience{{</blue-text>}}: Busy angel investors who care about profits and sustainability.  
{{<blue-text>}}Create{{</blue-text>}}: A 3 minute spoken script with a strong hook and clear call to action.  
{{<blue-text>}}Intent{{</blue-text>}}: I need to secure funding for production rollout.  
  

**CREATE**: A mnemonic for Character, Request, Examples, Adjustment, Type of output, Extras.  

{{<blue-text>}}Character{{</blue-text>}}: Act as a visionary software developer and startup founder who builds eco-friendly tech.  
{{<blue-text>}}Request{{</blue-text>}}: Write a 60-second elevator pitch for a new sustainable AI application that optimizes token spend and sustainability metrics with model routers and observability.  
{{<blue-text>}}Examples{{</blue-text>}}: Use a compelling hook like how much carbon we save, similar to successful green-tech pitches.  
{{<blue-text>}}Adjustment{{</blue-text>}}: Avoid heavy technical jargon; keep it focused on high profit margins and sustainability.  
{{<blue-text>}}Type of output{{</blue-text>}}: A 3 minute spoken script with a strong hook and clear call to action.  
{{<blue-text>}}Extras{{</blue-text>}}: Assume the audience consists of busy angel investors who care about profits and sustainability.  

Application concept was nascent (more of a chatbot), prompts required crafting at each step and success depended on prompt quality.

**Phase 2: RAG (Retrieval-Augmented Generation)**

The RAG architecture was driven by the need to supplement LLM training data with proprietary knowledge. This architecture runs in 2 operational phases: 
i. Ingestion (offline preparation) 
ii. Retrieval and Generation (online runtime loop)

The ingestion phase usually involves parsing and chunking of raw documents from the enterprise knowledge base, vector embedding, and indexing for quick retrieval. 
![Phase 2.1: RAG - Knowledge ingestion phase](/images/rag1-900.png)

In the retrieval and generation phase, the user query is turned to a vector, and used to perform semantic search on the vector database. Ranking/filtering and context assembly is done before the LLM provides a response grounded in the enterprise knowledge.
![Phase 2.2: RAG - Retrieval and generation phase](/images/rag2-900.png)

The key architectural shift in this phase was that knowledge preparation became an engineering concern, independent of the LLM. All the engineering steps are as important as the model in determining response quality.


**Phase 3: Agentic Reasoning with ReAct and Tool use**

The next significant evolution introduced Reasoning combined with Action (ReAct), and ushered in agentic AI. LLMs were given `agency` by providing them with tools, and the reasoning loop allowed the model to iteratively refine its approach. 
![Phase 3: Agentic Reasoning and Tool use](/images/agentic1-900.png)

This evolution was driven primarily by context limitaions. For example, coding agents started using the Ralph loop, a while-do loop to brute-force around context limitations. Ralph was a minimalist, transparent loop emphasizing one tool/action at a time with frequent replanning.
Due to limitations of Ralph, coding agents quickly had to engineer a runtime (usually called the harness) to execute the loop. The harness infrastructure performs classic software engineering in addition to the classic chatbot REPL(read-eval-print-loop):
- inject prompts
- manage tool registry and tool execution
- manage state by storing memory
- control the loop and handle retries
- run evaluations

![Phase 3: Coding Agent Harness](/images/harness-600.png)

**Harnesses**
A harness is best understood as runtime infrastructure, separate from the business application's cognitive orchestration. Responsibilities of a harness include:

- Tool execution
- Session management
- State persistence
- Checkpointing
- Streaming
- Authentication
- Logging
- Retry management

Agent harnesses like Pi or agent frameworks such as OpenAI Agents SDK, LangGraph, CrewAI etc. provide portions of this runtime.
The cognitive decisions remain the responsibility of the orchestration layer.

This is a very important distinction, because it's often confused as to where the reasoning occurs.
It's clearly noticeable in model provider harnesses like Claude Code or Codex, which are increasingly adopting opaque practices on their closed-source models, [engineering their LLMs to favor their own harness and orchestration](https://earendil.com/posts/session-portability/), not always aligned with that of customers.

**Phase 4: Engineering Loops, Graphs and Deterministic Workflows**

**Loop Engineering**
This new term has often been discussed in recent times. 
Loops have evolved beyond the Ralph. In practice, production systems contain multiple nested loops, each having a distinct responsibility.  

![Loop Engineering](/images/loop-800.png)  

e.g:
Goal Loop: determines what success looks like.
Planning Loop: decomposes work.
Routing Loop: selects tools.
Execution Loop: performs work.
Verification Loop: validates outputs.
Reflection Loop: determines whether additional reasoning is required.
Human Loop: requests approvals for sensitive actions.

These loops are largely deterministic state machines rather than recursive LLM conversations, reducing overall token usage. 
In practice, modern agent frameworks include increasingly deterministic infrastructure around the reasoning loop. This has continued to evolve with developer learning and experience with coding agents as well as new challenges posed by increasing costs and risks.  
Tech and AI-first enterprises are now rapidly [building their own agent harnesses](https://builders.ramp.com/post/why-we-built-our-background-agent) and model routers or using open-source ones.    

**Graph Engineering**
Paralleling the move in data engineering or Machine Learning pipelines which moved from simple sequential pipelines to directed acyclic graphs (DAGs), the industry conversation has now moved on from loops to graphs. 
As can be seen from this tweet from OpenClaw creator Peter Steinberger:
{{< twitter "https://x.com/steipete/status/2078277297791189132" >}}

Complex AI workflows (chain-of-thought, tool use, collaborating agents) are modeled as DAGs.
Instead of tree structures, with graphs as the core data model, entities become atomic nodes, and relationships become edges. Architecturally, a graph executor schedules tasks, manages state, passes messages along edges, and handles branching/merging—turning agent behavior into a programmable, parallelizable graph.
Nodes are steps.
Edges are dependencies.
The graph srtucture also models interconneced knowledge better enabling relationship-centric queries and path traversal. 

Graphs help with:
- Parallelism (compared to sequential loops)
- Branching and merging dynamically
- Resilience with retries/rerouting on some nodes without affecing the whole workflowv
- Modularity can simplify architecture making them composable (loops may seem monolithic)
- Performance can leverage specialized technologies (like graph storage engines, graph embedding techniques or graph query & traversal languages).

In the vibe-coding world of AI hype and tokenmaxxing, graph engineering may seem like the silver bullet, but they are not the correct choice in all cases: 
- not suitable for low-complexity use-cases
- more engineering overhead 
- higher token usage for simple cases due to multiple nodes/LLM calls
- can have more latency from orchestration layers    

#### Aside: Costs & Risks: Key drivers behind AI architecture evolution 

LLMs have continued improving throughout 2026, and most frontier models now have large context and memory improvements improving model performance by orders of magnitude from previous generations. This led rise to "coding is free" approaches allowing vibe-coders and developers to advance from functioning prototypes to rapidly build reasonably complete applications. A lot of non-trivial use-cases can now be one-shotted or few-shotted using frontier models to build reasonably complete applications. 
The flip side of this is token-usage has exploded due to the token-guzzling frontier models, and AI costs have ballooned:
e.g. [Uber exhausted its annual AI budget in just 4 months](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/) and both [Microsoft](https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/) and [Meta](https://mlq.ai/news/meta-caps-internal-ai-token-spending-after-costs-approach-billions-in-2026/) have put the brakes on mushrooming AI token spending
Such rapid development also come with significant risks:
- lack of code review due to limited human attention and shrunk development cycles causing decay of developer discipline
- massive cybersecurity risks posed by the latest frontier models like Mythos, GPT-5.6 Sol, GLM-5.2, Tulongfeng and Yitianzhen
The ballooning token costs problem has driven a key realization that not everything requires an LLM. 
Corollary: if a task has a deterministic algorithm, spending tokens to accomplish it is wasteful.
This realization has led to multiple building blocks being replaced by deterministic code and reusable tools instead of spending tokens repeatedly to solve such actions on-the-fly.  

Examples:  

| Task | Deterministic, reusable tool |
|:---|---:|
| JSON parsing | Parser |
| Git diff | Git CLI |
| Browser automation | [Playwright](https://github.com/microsoft/playwright) |
| OCR | [Tesseract](https://github.com/tesseract-ocr/tesseract)/[Docling](https://github.com/docling-project/docling) |
| PDF parsing | [Docling](https://github.com/docling-project/docling), [Apache Tika](https://tika.apache.org/) |
| Arithmetic | Calculator |
| Code indexing | [tree-sitter](https://github.com/tree-sitter/tree-sitter) + [LSP](https://github.com/microsoft/language-server-protocol) |

Instead of reasoning about these operations every iteration, modern systems expose them as deterministic capabilities. The LLM is responsible only for managing ambiguity, synthesis, planning, and flexible decision-making.

Modern AI systems increasingly look like:  
![Phase 4: Cognitive Orchestration](/images/cognitive1-800.png)  

Notice that the LLM occupies only part of the stack.

A key component of this architecture is the policy engine. 
The policy engine is the decisioning `brain` that governs what the deterministic orchestrator may do. It translates business, security, cost, and compliance rules into deterministic, machine‑enforceable checks, and returns a small set of decisions (allow/deny/modify/require‑human, plus metadata). 

In a deterministic orchestration architecture the policy engine sits between the orchestrator/harness and any nondeterministic or high‑impact action (LLM calls, deployments, secret access, external API calls).
Due to this broad action space, policy-engine invocations are typically bounded wih clearly defined JSON schemas.

Here's a Mermaid diagram showing this architetcure visually:  
![Determinisic Orchestration Workflow Architecture](/images/wfdo-800.png)  

Some responsibilities of the Policy Engine:
- Gating: decide if an action is permitted (rules or allowlist-based e.g. call LLM, auto-deploy patch etc.)  
- Data leakage protection: redaction or masking of sensitive information (e.g. API calls to DLP tools)
- Risk thresholds and approval rules: map risk scores to automation level(allow,require human review,block)
- Cost limits: enforce token/cost budgets and quotas
- Audit metadata: log metadata evidence and reasons behind decisions for compliance and fine-tuning. 
The policy engine may have integrations with existing enterprise systems to enforce security, risk data protection and such organization policies.

Note that even this `deterministic` workflow still has provision for `human-in-the-loop`(increasingly with collaboration/work-management tool integration e.g. in Slack/Linear).
While fully automated AI pipelines are possible and used already for low-risk/safe and repetitive tasks (e.g. internal chatbots/knowledge management/spam-filtering/invoice-classification), the `human-in-the-loop` checkpoint/action hub is standard in production for important business processes, especially those with impact on customers and must for regulatory compliance. 

---

Agentic AI is evolving rapidly and the LLM is no longer _the_ application.  
**Tokenmaxxing** is not sustainable, being limited by the finite attention of humans.  
Frequent pricing changes, alleged [**nerfing**](https://x.com/badlogicgames/status/2045150968094851170) and changing token usage between models illustrate that provider interests are not always aligned with optimizing {{<blue-text>}}token-efficiency{{</blue-text>}}.  
Cyber capabilities of frontier models underscore further the need to derisk producion deployments with clearly bounded LLM cognitive abilities.  

In such scenarios, enterprises need to ensure predicability, audiability, compliance as well as control costs and security risks. The evolving deterministic orchestration workflows allow benefiting from LLMs' intelligence, but within a narrowly-scoped, bounded action space for enterprise-grade solutions.
Tokens are spent only where probabilistic reasoning adds value while deterministic work is delegated to software.  

In the next posts, we'll look at multi-agent implementations/sub-agents/agent-swarms and some reference architecture implementations in the enterprise as well as implications of model provider monopolistic practices on open-source AI and cybersecurity.

Ref:
- AI Glossary - https://github.com/maloymanna/ai-concepts-glossary 
- AI Harness Engineering (2026) — https://arxiv.org/abs/2605.13357
- ReAct: Synergizing Reasoning and Acting in Language Models — https://arxiv.org/abs/2210.03629
- Conductor: Deterministic orchestration for multi-agent AI workflows - Microsoft - https://opensource.microsoft.com/blog/2026/05/14/conductor-deterministic-orchestration-for-multi-agent-ai-workflows
- Minions: Stripe’s one-shot, end-to-end coding agents—Part 2 - https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
- Code is free (aka Tokenmaxxing in Harness Engineering) - Ryan Lopopolo - https://www.youtube.com/watch?v=c8bE0cj7vHY
- The session you cannot take with you - Earendil Engineering - https://earendil.com/posts/session-portability
