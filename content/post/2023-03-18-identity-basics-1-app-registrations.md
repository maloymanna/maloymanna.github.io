---
author: maloymanna
comments: true
date: 2023-03-18 17:04:19+00:00
layout: post
slug: identity-basics-1-app-registrations
title: Identity Basics 1 - Application Registrations
categories:
- Azure
- Security
- application
tags:
- azure
- security
- identity
- app-registration
- credentials
---

For some time now, I've been working on security risk assessments of web applications. Modern identity management can be complex and often requires diving deep into the authentication flow and registration process to understand risk blocks in order to design appropriate controls and counter-measures. I hope to write a short series of posts to document the components and flows of this process, so that it can be my handy reference. 

As we saw in my [Azure IAM fundamentals](https://maloymanna.github.io/2022/09/18/azure-iam-fundamentals/) post, the Azure AD is the cornerstone of the Microsoft Identity platform. This allows developers to build applications using Microsoft identities like enterprise Azure AD accounts or personal Microsoft accounts, as well as call APIs like **Microsoft Graph**.
Irrespective of whether it's a web app or a mobile app or a web API, in order for the centralized identity provider (Azure AD) to know a user has access to a particular application, it needs to be registered with the identity provider.

Application registration on the Azure AD requires providing certain information to create the identity configuration of the application on Azure AD. These include specifying, apart from the **name** of the application: 

- **Tenant boundary and type of accounts** - (Who can access the application or API, single/multi-tenant, work/personal accounts etc.)
- **Redirect URI** - (where the authentication response will be sent)
![Register an app](/post/register-app.png)

Creating an application registration requires at least the [Cloud Application Administrator](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#cloud-application-administrator) role (least privileged role among built-in roles with rights to create app registrations). Other possible roles could be the [Application Administrator](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#application-administrator) role or the [Global Administrator](https://learn.microsoft.com/en-us/azure/active-directory/roles/permissions-reference#global-administrator) role.

An app registration will assign an Application (client) ID or **client ID**, a value to uniquely identify the application in the Microsoft Identity platform.

Depending on the type of application client, it may require adding **credentials** to the Microsoft Identity platform. There are 2 types of clients:

1. **Public client** applications: apps which run on web browsers, mobile devices or desktop computers. These are not trusted to safekeep application secrets, and can only access web APIs on behalf of the user. 
2. **Confidential client** applications: mostly enterprise apps, which run on web servers as web apps/APIs or daemons. These are trusted to safekeep application secrets and can access web APIs on behalf of  the application as well as users, depending on the authentication flows.

Credentials for confidential client applications can be both **client secrets** (string) and **certificates**/public keys. Certificates are considered more secure than client secrets, and recommended for use in production.
![Add credentials](/post/add-credentials.png)

The app may need API permissions, e.g. to Microsoft Graph. The web app or API registration may provide details of scopes (sets of permissions), to which client applications may request permissions. I'll review these concepts e.g. Microsoft Graph API permission types, scopes and consent in my next post.

A short video from Microsoft taking you through a simple app registration and granting API permissions: {{< youtube 93j0MmRruFo >}}
