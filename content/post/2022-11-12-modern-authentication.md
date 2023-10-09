---
author: maloymanna
comments: true
date: 2022-11-12 07:05:09+00:00
layout: post
slug: modern-authentication-fundamentals
title: Modern authentication fundamentals
categories:
- Azure
- Security
- identity
tags:
- azure
- security
- identity
- authentication
- claims
---

In my post on [Identity and Access Management (IAM)](/2022/09/18/azure-iam-fundamentals), I provided a very high-level view of how modern authentication works on the basis of a centralized Identity provider, like Azure Active Directory.

In this post, let's look at a Microsoft Azure video, where Azure AD Program manager [Stuart Kwan](https://www.linkedin.com/in/stuartkwan/) presents the basics of modern claims-based authentication in a lucid and eloquent way.
Clearly if a picture is worth a thousand words, a video is probably worth a million! 

{{< youtube fbSVgC8nGz4 >}}

Some important concepts presented here are:  

- **Claims**:  A claim is an attribute-value pair that are information about the identity (user,software or device). A token contains user-specific information in "claim" format. For receiver-end verification, the token has a digital signature. A token can have multiple claims.  

- **Audience claims**: Most tokens have an ["audience"](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.3) claim. This claim identifies the recipients that the token is intended for. For security reasons, if the audience claim is missing, or different, the receiver or relying party needs to reject it. 
