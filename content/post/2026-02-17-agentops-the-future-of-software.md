---
author: maloymanna
comments: true
date: 2026-02-17
layout: post
slug: agentops-the-future-of-software
title: "AgentOps - The future of software?"
layout: post
description: "AgentOps - The future of software?"
categories:
- AI, software
tags:
- AI, software, productivity
---
The Agentic AI revolution is on. Meta has acquired Manus, OpenAI Codex and Anthropic Opus coding agents are churning out code faster than ever, and OpenClaw has taken agent orchestration to a new level! Software stocks sell-off continue in the AI-scare trade. Is AgentOps the future of software?  

## AI is eating software

In 2011, venture capitalist Marc Andreessen declared that ["Software is eating the world."](https://a16z.com/why-software-is-eating-the-world/)  
In 2017, NVIDIA CEO Jensen Huang added ["... but AI is going to eat software."](https://www.technologyreview.com/2017/05/12/151722/nvidia-ceo-software-is-eating-the-world-but-ai-is-going-to-eat-software/)  
It's 2026, and investors seem to believe Huang was right.  
As the AI juggernaut gathers momentum and new AI tools and agents keep encroaching on software and knowlege work, investor fears have pummeled software stocks, mainly SaaS ones - in what is being called the [SaaSpocalypse (coined by trader Jeffrey Favuzza)](https://www.bloomberg.com/news/articles/2026-02-03/-get-me-out-traders-dump-software-stocks-as-ai-fears-take-hold).  

How did we arrive here?

### Agentic AI momentum

With billions pouring into deals in the AI space, and reinforcement learning continuing to deliver model improvements, AI performance has continued to improve throughout 2025.  
When Manus launched as the first general AI agent on March 5, 2025, with an [X post from its co-founder and chief scientist Yichao 'Peak' Ji](https://x.com/ManusAI/status/1897294098945728752), it was hailed as a second DeepSeek moment.  
Unlike the ubiquitous chatbots spawned by ChatGPT, this new multi-agent system could not only perform research or analyze data, but could autonomously, and asynchronously perform complex tasks, including writing and deploying code.  
By December 2025, [Manus had been snapped up by Meta](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html), with deal terms undisclosed, but valued at an estimated USD 2-3 billion.  

During that period, longer contexts and improved model performance helped AI coding agents evolve from autocomplete to semi-autonomous developers.
By late 2025, Claude Code coding assistant had been positioned by Anthropic as **agentic development partner**, with deep codebase awareness and native MCP support.
[OpenAI Codex also returned in 2025](https://openai.com/index/introducing-codex/) as a cloud-native agent (earlier 2021 LLM specialized for code was discontinued in 2023) with autonomous operation and parallel task processing.  

There was plenty of [acquisition drama](https://www.theverge.com/openai/705999/google-windsurf-ceo-openai) as well:  
OpenAI's $3 billion bid for Windsurf(maker of the eponymous AI-assisted IDE) fell through (reportedly due to Microsoft blocking it), while Google managed a $2.4 billion deal licensing Windsurf's technology and hiring its CEO, and Cognition (maker of Devin agentic coding) [acquired the product and the rest of the team](https://x.com/windsurf/status/1944819613050790056). OpenAI was left empty-handed but came back strong with a reimagined Codex.

### Agents building Agents

By November 2025, developer Mario Zechner had developed the open-source [pi - a minimal coding agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent#readme).  
Pi is a terminal coding harness, which has a pared-down system prompt, and only four essential tools: Read, Write, Edit and Bash execute. Pi provides extensibility through `composable extensions`: typescript modules that extend pi with custom tools, commands, keyboard shortcuts, event handlers, and UI components. Like Manus, Pi uses the filesystem to persist and manage context and follows the Agent Skills standard to give new capabilities to the agent, on-demand.  

November 2025 was when developer Peter Steinberger used pi to build his open-source AI agent Clawdbot by giving it a gateway to connect to messaging tools like WhatsApp and Telegram. Under pressure from Anthropic due to perceived similarities with Claude, Peter had to subsequently rename it to Moltbot, and then OpenClaw.  
  
By late January, [OpenClaw](https://github.com/openclaw/openclaw) became went viral as people discovered its usage as a personal AI assistant running locally while leveraging cloud LLMs.
OpenClaw and its [marketplace of unregulated° skills](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/) require careful security precautions and hardening, and increase the risks of shadow AI in the enterprise. That said, both OpenClaw and its underlying pi agent highlight the coming of age of the autonomous AI coding agent. With the agent-loop, it is now possible to let your agent build agents and use tools and perform complex work with task-decomposition and even hot-reloading of the agent with its newly built extension! It seems almost the holy grail - the self-modifying software.  
By mid-February, Sam Altman had managed to get [Steinberger join OpenAI](https://x.com/sama/status/2023150230905159801).  

### Enterprise AI Agents

The improved Agentic AI technology has now prompted the leading model providers to come out with Enterprise AI Agent platforms, targeting business software in the enterprise, and knowledge work in general. This agentic AI management layer is the next AI battleground, and a looming threat to enterprise software.
OpenAI Frontier: acts as a layer integrating AI directly into enterprise workflows. With IAM, observability (monitoring and logs), multi-vendor agent orchestration.
Claude Enterprise Agents: brings Claude, Claude Code and Claude CoWork in the organizational context. Extensible with plugins, codefree automation, connectors to Microsoft 365 and enterprise tools, it adds SSO, audit logs, data retention policies and a compliance API to really target the enterprise space.
{{< youtube UAmKyyZ-b9E >}}

**Something big is happening - AI is coming (to|for) a knowledge-work job**  

It may feel like the usual AI hype, but METR research shows a [significant jump in frontier-AI models capabilities](https://metr.org/time-horizons/) as measured by task-completion time horizons (measures success of AI agents in completing tasks reliably).  
By early February 2026, [Claude CoWork added support for plugins](https://claude.com/blog/cowork-plugins) - which allow bundling skills, connectors, sub-agents together thus tailoring the AI to specific job functions like sales, legal, and financial analysis.  
**11 plugins** across functions were [open-sourced](https://github.com/anthropics/knowledge-work-plugins):

1. Productivity
2. Sales
3. Customer support
4. Product management
5. Marketing
6. Legal
7. Finance
8. Data
9. Enterprise Search
10. Biology Research
11. Plugin management(create new and customize existing plugins)

These wide ranging enterprise capabilities spooked the markets, and setoff sharp corrections in the software stocks.  
Ironically, Huang now seems to think differently and [pushed back on fears that AI agents will cannibalize the enterprise software industry](https://www.cnbc.com/2026/02/26/nvidia-jensen-huang-gpu-ai-threat-software-companies-saas-earnings-chips.html).  

***End-Feb'2026 Update***:  
A "thought-exercise" from [Citrini Reasearch rattled investors further painting a near-future scenario](https://www.citriniresearch.com/p/2028gic) how autonomous AI agents gut software companies, cause widespread job losses and upend the world economy in a downward spiral.  
While panned later, it showed the "SaaSpocalypse" scare was real on Wall Street, and was supported by several AI-related layoff announcements ([16000 Amazon layoffs](https://www.aboutamazon.com/news/company-news/amazon-layoffs-corporate-jan-2026),[40% Block layoffs](https://x.com/jack/status/2027129697092731343), [30% WiseTech layoffs](https://www.bloomberg.com/news/articles/2026-02-24/wisetech-to-cut-2-000-jobs-as-ai-ends-era-of-manual-coding) - Source: [layoffs.fyi](https://layoffs.fyi))  

### AgentOps

As enterprises adapt agentic AI and build or integrate these AI agents in business workflow automation,ensuring the AI agents perform as intended becomes the key challenge. AgentOps (short for Agent Operations) is the emerging set of practices, building on existing precepts of DevOps and MLOps.
Enterprises would need to adapt or redesign their business processes and organization around this new agentic ecosystem where humans and AI agents coexist. Enterprise grade security, traceability and intepretability remain challenges due to the inherently non-deterministic/probabilistic nature of AI models, however even AI will surely [improve cybersecurity for AI](https://www.anthropic.com/news/claude-code-security). A future where humans manage multiple [agent teams](https://code.claude.com/docs/en/agent-teams) using agentops frameworks, tools and standards, seems closer to reality than imagination now. A future where we hope our unique human traits would be crucial for governance, and value-driven decision making.  
  
Since you made it this far, here's a vid, on a lighter note:  
{{< tweet user="KaiLentit" id="2021282230421651456" >}}  

*This post has been updated based on events till end-Feb'2026.*

Ref:

- [Context engineering for AI agents - Lessons from building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)
- [Pi, the minimal agent within OpenClaw - Armin Ronacher](https://lucumr.pocoo.org/2026/1/31/pi/)
- [OpenAI Frontier](https://openai.com/index/introducing-openai-frontier/)
- [Claude CoWork plugins](https://claude.com/blog/cowork-plugins)
- [Anthropic Briefing - Enterprise Agents](https://www.youtube.com/watch?v=YZVpUeEvGxs)
- [Something big is happening - Matth Shumer](https://shumer.dev/something-big-is-happening)
  
°*OpenClaw has since announced a [partnership with VirusTotal](https://openclaw.ai/blog/virustotal-partnership) to add security scanning to its skill marketplace*
