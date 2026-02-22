---
author: maloymanna
comments: true
date: 2022-08-24 21:30:11+00:00
layout: post
slug: azure-control-plane-data-plane
title: Azure Control plane and Data plane
categories:
- Azure
- Security
- operations
tags:
- azure
- security
- control
- data
- plane
---

Azure operations can be divided into 2 categories:

1. **Control plane (or Management plane)** - used to manage resources in azure subscriptions, e.g. creation of a virtual machine or a storage account
All requests for control plane operations are sent to the Azure Resource Manager URL. For Azure global, the url is: https://management.azure.com 
2. **Data plane** - used to manage capabilties exposed by instances of resource types e.g. using remote desktop protocol (RDP) to interact with a virtual machine, or reading/writing data in a storage account.
Requests for data plane operations are sent to an endpoint specific to the instance of the resource type e.g. https://myname.blob.core.windows.net

**Azure Resource Manager (ARM)** handles all control plane requests.
Even during periods of unavailability for the control plane, the data plane of Azure resources can be accessed.

Let's take the specific example of an Azure Key Vault to look at the type of operations:

1. **Control plane operations** - creating / deleting of key vault, retrieving key vault properties, updating access policies. RBAC is used for authorization.
2. **Data plane operations** - add/delete/modify keys, secrets and certificates. Either RBAC or a key vault access policy can be used for authorization.

To access a key vault in either plane, all callers (users or applications) must have proper authentication and authorization. For authorization, the management plane uses RBAC, and the data plane can use either RBAC or a Key Vault access policy.
