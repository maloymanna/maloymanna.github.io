---
author: maloymanna
comments: true
date: 2023-04-09 08:15:22+00:00
layout: post
slug: identity-basics-2-permissions-scopes-consent
title: Identity Basics 2 - Permissions, Scopes and Consent
categories:
- Azure
- Security
- application
tags:
- azure
- security
- identity
- Microsoft-Graph
- permissions-scopes-consent
---
In my previous post, we saw how app registrations add identity configurations for applications on Azure AD. Just like a user, an application would also require access to resources like Microsoft Graph, which need authorization. The resource owner can grant(consent) or deny this authorization to the application.
There are mainly 2 _access scenarios_:
1. **Delegated access** - access on behalf of a signed-in user.
User is signed-into a client application, which access the resource on behalf of the user. This requires _delegated permissions_ (also referred to as _scopes_). All scenarios involving user actions should use delegated access. Also, scopes should be limited using the principle of least-privilege.  
[See also: the full list of Microsoft Graph permissions](https://learn.microsoft.com/en-us/graph/permissions-reference) 
2. **App-only access** - access without a user, as the application's own identity. This scenario is when the application runs as a background service or daemon used for automation or backup, or the data can't be scoped to a single user. The client app needs to be granted appropriate application roles of the resource app it's calling to access the requested data. Application roles granted through consent are called _application permissions_.

![Access Scenarios](/post/access-scenarios.png)

**Consent** is the process by which admins or users authorize an application to access a protected resource. e.g. during an application sign-in for the first time, a user may see a **consent prompt** with the list of permissions that the client app is requesting (e.g. ability to see the user's profile or access the user's calendar).
Granting consent can happen in 3 ways:
1. **User consent** - requested when the user attempts to sign-in to the client application for the first time.  
![User consent prompt](/post/user-consent-prompt.png)

2. **Admin consent** - In many cases, an admin may be required to grant consent : either application permissions or high-privilege delegated permissions. Administrators can grant consent for themselves or _{{< blue-text >}}for the entire organization{{< /blue-text >}}_. Examples of some admin-restricted permissions (especially in organizations as opposed to individual consumers) could be reading all users' full profiles using `User.Read.All`, or reading all groups in a tenant with `Groups.Read.All`.  
![Admin consent prompt](/post/admin-consent-1.png)

If admins have not granted consent, and the client application requests delegated permissions that require admin consent, the users receivs an error message that says they're unauthorized to consent to the permissions, and are asked to contact their admin for access to the app.  
![Admin consent](/post/admin-consent-2.png)  

3. **Preauthorization** - resource owners can grant permissions without requiring users to see consent prompts for the same set of permissions that have been preauthorized.  


|                     | Delegated permissions                          | Application permissions      |
|:--------------------|:-----------------------------------------------|:-----------------------------|
| **Access context**  | &nbsp;On behalf of user                        | &nbsp;Access without a user  |
| &nbsp;              |                                                |                              |
| **Type of apps**    | &nbsp;Web, mobile, single-page-app (SPA)       | &nbsp;Web, daemon            |
| &nbsp;              |                                                |                              |
| **Who can consent** | &nbsp;&nbsp;- users for their own data         | &nbsp;Only admin             |
|                     | &nbsp;&nbsp;- admins can consent for all users |                              |
| &nbsp;              |                                                |                              |
| **Also called**     | &nbsp;&nbsp;- Scopes                           | &nbsp;- App roles            |
|                     | &nbsp;&nbsp;- OAuth2 permission scopes         | &nbsp;- App-only permissions |

**Admin consent for Multi-tenant applications**:   

By default, web API/app registrations are single-tenant upon creation, unless supported account types are changed during the app registration. For a multi-tenant application, its app registration exists only in the tenant where it was created, and so permissions can't be configured in the local tenant. In such cases where admin consent is required, the administrators need to log in to the application themselves, which triggers the admin consent sign-in experience. 
I will explore the application sign-in process in later posts. 