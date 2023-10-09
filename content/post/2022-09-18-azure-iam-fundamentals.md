---
author: maloymanna
comments: true
date: 2022-09-18 07:43:21+00:00
layout: post
slug: azure-iam-fundamentals
title: Azure IAM fundamentals
categories:
- Azure
- Security
- identity
tags:
- azure
- security
- identity
- access
---

<span style="color: blue; ">Identity and Access Management (IAM) </span> is a framework of policies and technologies to ensure the right people or machines to access the right assets or resources.


**Identity:**  

In this digital age, an **identity** can be either a human (user), a software component (application) or a hardware component (computer, mobile or IoT device). Just like any identity document in the real-world, identities serve is a way to authenticate and authorize access to assets and resources.


**Authentication** is the process of challenging users, software or devices to verify their identities. Due to the relative ease of spoofing or hacking certain identifiers e.g. email-id, or username/password credentials, additional security measures like multi-factor authentication (MFA) may be required, especially for privileged accounts.
MFA relies on multiple form factors for identifiers:
1. Something you know, e.g. a password
2. Something you have, e.g. a software token or one-time-password (OTP) code
3. Something you are, e.g. biometrics (fingerprint or face)

**Authorization:** is the process of ensuring that correctly authenticated users, software or devices can access only those assets or resources, for which they have legitimate permissions. It determines what level of access a user, software or device has.

**Identity provider:** creates, stores and manages identity information usually in a centralized manner in order to provide authentication, authorization and auditing services.

In Azure, the primary IAM solution is the Azure Active Directory.	

**How IAM works:** Let's look at how IAM works in the context of Azure, i.e. with Microsoft Identity as the identity provider.
1. The user initiates an authentication request on the client application. The client application requests tokens from Microsoft Identity.
2. The identity provider or authorization server sends an **ID token** back to the client application, if the credentials are valid. The ID token contains information about the user.
3. The identity provider requests and obtains the user consent and grants the client application access to the resource (or allow an API call on behalf of the user). This authorization is sent to the client application in an **access token**. The access token is attached to subsequent requests from the client application.
4. The identity provider validates the access token.
Note that the Microsoft identity platform allows developers to build applications which can sign-in all Microsoft identities, from Enterprise Azure AD (work or school accounts) to personal Microsoft accounts.

Microsoft Identity platform uses the following protocols:
1. **OpenID Connect/OAuth** - OpenID Connect is used for authentication, and OAuth for authorization. OAuth is an open-standards identity management protocol. It uses tokens that are encrypted in transit and eliminates the need to share credentials. Uses JSON for describing the tokens and the protocol.  
2. **SAML/OAuth** - SAML is used for authentication, and OAuth for authorization. SAML is an open standard which enables applications provide a <span style="color: blue; ">single-sign-on (SSO) </span> experience to their users. SAML uses XML instead of JSON.  
3. **OpenID Connect/SAML** - Both are used for authentication and enable single sign-on.

At a higher, global level, Microsoft provides the following solutions for IAM:
1. Azure Active Directory - provides IAM for cloud and hybrid environments
2. Azure Active Directory External Identities - consumer IAM in the cloud
3. Azure Active Directory Domain Services - join virtual machines in Azure to a domain without deploying domain controllers.