---
author: biguru
comments: true
date: 2009-08-28 15:14:43+00:00
layout: post
link: https://biguru.wordpress.com/2009/08/28/developing-a-business-objects-security-model-bo-xi-3-1/
slug: developing-a-business-objects-security-model-bo-xi-3-1
title: Developing a Business Objects security model - BO XI 3.1
wordpress_id: 43
categories:
- SAP BusinessObjects
tags:
- BOBJ
- boxi
- business objects
- SAP
- security model
---

While developing a Business Objects security model, you need to focus on the different types of security:

- **Functional Security** - this would govern access to specific application features, e.g. editing reports, drilling down, ability to schedule reports etc.  
- **Data Security** - this governs access to specific data - rows or columns or cells as per authorization  
- **Infrastructure Security** - governs physical and electronic access to systems  

The infrastructure security is the first to be designed. This typically happens when the architecture is being drawn up. It is important to get as much early visibility into the various ways the system is likely to be used, not only in the present but also in the foreseeable future, so that adjustments and capacity for future planning can be done to the extent possible. This also helps in deciding on the type of data security that would be required initially, though this can change over time.

The various security considerations for access control include:

- **Identification**- whether it is a valid user? Usually taken care of by password management
- **Authentication**- whether the user is allowed to use the system? This can be done by BO or externally with a third party tool, including but not limited to LDAP / Active Directory etc.
- **Authorization**- governs fine grained entitlements or access - which parts of the application and data can the user access?

Let us look at the security approaches to authorization. (I will cover the various approaches to authentication and single-sign-on in a separate post).

**Security policies can be held in the BO repository (functional + data security)**

- Authentication can be performed by BO or externally
- Incorporates security policies in the BO repository
- Supports row-level and column-level security
- Data security can be controlled at application, connection, universe and report level

**Custom security utilizing security tables, and joins forced in Universe Designer  (functional + data security)**

- Includes custom-built security tables to store users, groups, privileges etc. The joins to these are forced in report queries.
- BO users are mapped to data in these tables - the data can be maintained with ETL processes
- The @BOUSER variable can be used to get the user logins and can be used for implementing row/column level security
- Allows both user-centric and object-centric views by querying the security tables

**Table mapping or virtual private views - can be implemented with Oracle VPD and label security**

- Allows fine grained access control with airtight cell-level security if required
- Policies setup in Oracle VPD, labels control column access, multiple views for multiple users
- Works for ad-hoc queries also
- Requires thorough testing to prevent sql-injection attacks; can lead to performance problems due to additional predicates
- Can easily become overly complex; however a must-have where airtight security is required

**Third party authorization using SiteMinder or LDAP or Active Directory**

- Authorization is based on directory entries in LDAP or Active Directory (people/group/role/IP address or rule)
- Fine grained access control still requires some form of usage of BO or the database for auxiliary authorization.

What should be the preferred approach? The answer is "Well, it depends!" :smirk: The approach depends on what is actually required and is feasible at your particular organization. In all cases however (except for VPD), there are a few best practices to be followed, if BO is used and CMC is used to configure security:

- Grant rights to groups on folders, rather than individual objects to minimize complexity
- Use pre-defined rights wherever possible, and Custom Access Levels instead of Advanced Rights
- Avoid breaking inheritance to minimize complexity and simplify maintenance
- Add multiple users to the Administrators group, rather than sharing the administrator account, for better traceability
- Set up an audit policy and periodically review your deployment
- Document and maintain the security structure outside the **CMC**- a spreadsheet can be a good choice.
- Use **Permissions Explorer**, **Check Relationships** and **Security Query** to diagnose and correct security issues. These are also useful to verify tasks are completed without issues, while adding/deleting/modifying principals/objects/rights.
- Allocate time and document the process for the administrators and support staff and prepare for their training on new workflows in CMC in BO XI 3.1

-Maloy
