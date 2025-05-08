---
author: maloymanna
comments: true
date: 2025-04-07
layout: post
slug: agentic-ai-from-chat-to-action
title: "Agentic AI: from chat to action"
layout: post
description: "AI agents: enabling language models perform tasks"
categories:
- AI
tags:
- AI, agents
---

In a recent article, Techcrunch claimed [no one knows what the hell an AI agent is](https://techcrunch.com/2025/03/14/no-one-knows-what-the-hell-an-ai-agent-is/). It's true with all the hype around "Agentic AI" and the rush to build agents, the term "AI agent" lacks a standardized definition or even understanding in the tech industry.  
*So what exactly is an AI agent ?*  
Simply speaking,  {{< blue-text >}}an AI agent is a system (computer program) that can perform certain tasks with a certain degree of autonomy, using language models to adapt to dynamic contexts{{< /blue-text >}}. Each vendor, of course has its own definition of agents, viz.
- **OpenAI** defines agents as systems that independently accomplish tasks on behalf of users.
- **LangChain** defines an agent as a system that uses an [LLM](https://maloymanna.fr.eu.org/2025/01/19/ai-is-all-you-need/) to decide the control flow of an application
- **Microsoft** defines agents as apps of the AI era, specialized AI tools built to handle specific processes or solve business challenges.  

![Agentic AI - Giving AI wings!](/images/ai-agent-wings2.png)  

What is clear though, is that AI agents have at least these traits:
1. **Autonomy** - While the degree of autonomy can vary, AI agents can autonomously perform tasks based on user prompts or derived technical prompts. e.g. [Replit agent](https://docs.replit.com/replitai/agent) can spin up and deploy an app based on user prompt, whereas an autogen implementation could deploy multiple agents to play a chess game.
2. **Tools** - AI agents can access various external tools, e.g. [Amazon's "Buy for me" button](https://www.aboutamazon.com/news/retail/amazon-shopping-app-buy-for-me-brands) can access payment gateways, whereas [Opera's "Browser Operator"](https://blogs.opera.com/news/2025/03/opera-browser-operator-ai-agentics/) could search and buy socks for you.
3. **Memory** or **State** - AI agents retain context or state of the request/task in memory and can recall it as required, e.g. [Copilot for Teams](https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-chat-and-channels-cccccca2-9dc8-49a9-ab76-b1a8ee21486c) can recap the meeting and list action items.  

**Bots vs Agents**  
Still there could be confusion about **bots** (*short for robots*). Bots are typically automated scripts (e.g. flowchart based) which follow predefined rules. AI agents however, use machine learning and language models (usually LLMs) to adapt to dynamic environments.  

| Facet      &nbsp;&nbsp;| &nbsp;&nbsp;Bots                            | &nbsp;&nbsp;AI Agents                                     |
|------------------------|---------------------------------------------|-----------------------------------------------------------|
| Autonomy   &nbsp;&nbsp;| &nbsp;&nbsp;Rule-based pre-defined scripts  &nbsp;&nbsp;| &nbsp;&nbsp;Acts independently using AI or ML |
| Complexity &nbsp;&nbsp;| &nbsp;&nbsp;Simple repetitive tasks         &nbsp;&nbsp;| &nbsp;&nbsp;Complex multi-step tasks          |
| Context    &nbsp;&nbsp;| &nbsp;&nbsp;Predefined triggers or keywords &nbsp;&nbsp;| &nbsp;&nbsp;Maintains state in memory         |

Examples would be a sales or customer service chatbot on a website using a predefined flowchart to collect prospect information or point the customer to self-service knowledge articles. Contrast this with AI agents for virtual meetings which can create summaries and action items adapting to each dynamic meeting.  
Note that AI agents could still have some predefined rules, primarily for security - using system prompts, parallel token sequence generation and built-in rules e.g. blocking toxic outputs or bias mitigation. Also NLP chatbots employ natural language processing (NLP) with limited AI like classifiers to understand user intent or entity recognition. However their key difference, as of today, remains in the level of autonomy and complexity of tasks.

**Agent Frameworks**  
Agent frameworks are at the heart of **Agentic AI**. These are tools and libraries which simplify the build and deployment of AI agents, by providing pre-built components and orchestration frameworks. Some popular examples are:
- **Autogen**: An open-source framework developed by Microsoft to build multi-agent systems, and supporting {{< blue-text >}}human-in-the-loop{{< /blue-text >}} oversight.
- **LangChain**: Modular and versatile, with extensible plugins to develop a wide range of AI applications and agents. 
- **LangGraph**, an extension of LangChain, allows modeling workflows as graphs for flexible task orchestration, with nodes representing tasks and edges representing dependencies.
- **Hugging Face Transformers**: Uses transformers library leveraging pre-trained models to build, test and deploy AI agents
- **CrewAI**: Beginner-friendly collaboration focused framework, similar to autogen, supporting multiple agents.
- **ReAct**: Combines reasoning LLMs with dynamic tool utilization, often used with other frameworks like LangChain.  

Unlike chatbots, Agentic AI can plan and iterate, adapt to feedback and collaborate with other agents (depending on the framework e.g. Autogen/CrewAI).

![MCP architecture](/images/mcp.png)  
Figure: MCP architecture (source:modelcontextprotocol.io)

**MCP: universal plug-and-play for AI agents**  
As seen above, AI agents need to access external tools like APIs, databases, payment gateways etc. to perform tasks like shopping or executing python programs. Due to the variety of interfaces and vendors, this would require custom code for each service.  
{{< blue-text >}}Model Context Protocol (MCP){{< /blue-text >}}, an open source protocol from Anthropic, acts as a universal "plug-and-play" (similar to a USB-C port) allowing agents to connect to different APIs without manual coding.
MCP follows a client-server architecture where a host (AI agent) with client can connect to multiple servers (APIs). The MCP servers can securely connect to local data sources, and can connect to remote services using web APIs.  
A key point to note is that MCP is _not an agent framework_ as it does not allow building or orchestrating agents, whereas MCP is a communication protocol for standardizing interactions between AI clients like LLMs and external tools.  
It's still early days for the standard, but [OpenAI surprisingly has adopted this protocol](https://x.com/sama/status/1904957253456941061) from its rival Anthropic.  

**May8, 2025 update**  
- **Agent2Agent A2A protocol**: Google launched last month the [A2A open protocol](https://github.com/google/A2A), which provides a standard way for agents to collaborate with each other, irrespective of their regardless of their underlying frameworks or vendors. 
The A2A protocol supports communication between a "client" agent and a “remote” agent, and uses a JSON format as an {{< blue-text >}}agent card{{< /blue-text >}} - public metadata about an agent's capabilities, endpoint URL and authentication requirements. Client agents would use this agent card for discovery.  
- As of May 7,2025, [Microsoft announced supporting the A2A protocol](https://www.microsoft.com/en-us/microsoft-cloud/blog/2025/05/07/empowering-multi-agent-apps-with-the-open-agent2agent-a2a-protocol/), and will include it in Azure AI Foundry and Copilot Studio.  


**Use Cases**  
Due to the interoperability with external tools and APIs, the potential use cases for agentic AI are numerous. The rapid analysis, reasoning and output of AI agents are particularly suited to support productivity and automation use cases. Some practical use cases could be:
- **Productivity and task automation**: email assistant, calendar scheduling, meeting summaries, automating repetitive project management tasks like minutes, communications, reporting etc.  
- **Customer support and service**: AI boosted chatbots or customer support voice-agents, adding agentic AI to NLP chatbots, claims processing, managing customer complaints
- **Learning and skill development**: Personalized learning, real-time language translation with multimodal/voice IO, AI tutor for various skills like language learning 
- **Security and privacy**: Threat detection, vulnerability analysis and remediation, privacy risk monitoring, password management and breach alerting
- **Financial management**: Stock analysis, budgeting, expense management, fraud detection
- **Core IT and data management**: Intelligent orchestration among IT tools, workflow automation, master and reference data management.  

This is just the tip of the iceberg, and practical applications keep mushrooming as developers explore the possibilities of giving AI *wings* with AI agents.

**Security Risks and Challenges**  
The complexity of AI agents' inherent language models and its interactions with data, memory and tools give rise to numerous security risks. Some of these risks can be classified as:
- **Prompt injection**: Adversarial prompts could trick AI agents to perform malicious actions, leak or modify system prompts or security rules. Indirect prompt injection could be done from external data, tools or APIs.
- **Memory and data poisoning**: Adversarial inference-time inputs with false or harmful data, manipulating memory storage could alter AI behavior.
- **Autonomous propagation (worms)**: Hijacked AI agents could be modified to self-replicate and spread malware or spam with external tools and APIs.
- **Adversarial attacks and Jailbreaking**: Attackers could introduce malicious inputs to manipulate instructions or hijack control of the AI. Jailbreaking is a technique which causes failure of AI guardrails or safety mechanisms. Due to its token generation technique, generative AI is inherently susceptible to adversarial attacks like jailbreaking and need to be protected.
- **Social engineering**: Identity spoofing, or social engineering strategies with false legal/judicial/administrative instruction could trick AI agents into losing control and performing harmful actions unknowingly
- **Privacy and data breaches**: Integration of AI agents with sensitive databases, and memory storage of personal information increase the attack surface area. Shadow AI increases risks of privacy and data leakage.  

**Preventing adversarial attacks on AI agents**:  
Preventing and mitigating against these risks requires strong security measures at training-time, test-time as well as inference-time. Apart from usual security measures like encryption, least-privilege access, input validation and sanitization, memory integrity checks, logging and incident response, additional counter-measures are required.
Some examples are:
- **Guardrails** with invariable security policies, memory sandboxing and anonymization, filtering of prompts, secure token handling
- **Offline auditing** (pre/post-training) and proactive testing
- **A/B testing** (~5% traffic) to get real-world distribution, during deployment
- **Parallel generation of tokens** 
- **Human-in-the-loop (Layer 3) controls** and auditing at both test-time and inference-time (production operations)

Agentic AI goes beyond passive AI chatbots or recommendation engines, providing autonomy to language models to accomplish tasks. With connections to multimodal tools and APIs, AI agents hold the promise of increased versatility and automation. Significant hurdles still remain in securing such agents against adversarial attacks and security breaches. Adoption and success of AI agents will remain contingent on the ability to install security and privacy guardrails to protect misuse and breakdown of AI agents.


References:
- [Techcrunch: No one knows what the hell an AI agent is](https://techcrunch.com/2025/03/14/no-one-knows-what-the-hell-an-ai-agent-is/)
- [Microsoft AutoGen - A programming framework for agentic AI](https://www.microsoft.com/en-us/research/project/autogen/)
- [LangChain framework](https://python.langchain.com/docs/introduction/) | [LangGraph - a LangChain extension](https://www.langchain.com/langgraph)
- [Hugging Face Transformers](https://huggingface.co/docs/transformers/en/index)
- [Model Context Protocol](https://modelcontextprotocol.io/introduction)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [Google's Agent2Agent protocol specification](https://github.com/google/A2A)  