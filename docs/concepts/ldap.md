# What is LDAP

<LastUpdated/>

LDAP (Lightweight Directory Access Protocol) is a software protocol that enables anyone to find data about organizations, individuals, and other resources (such as files and devices) in a network, either on the public internet or on a company intranet. LDAP is a "lightweight" version of the Directory Access Protocol (DAP), which is part of X.500, the standard for directory services in networks.

A directory tells a user where something is located in a network. On TCP/IP networks, the Domain Name System (DNS) is a directory system used to associate domain names with specific network addresses (unique locations on a network). However, a user may not know the domain name. LDAP allows users to search for individuals without knowing their location (although the additional information will help with the search).

## Uses for LDAP

A common use for LDAP is to provide a central location for authentication -- meaning it stores usernames and passwords. LDAP can then be used in different applications or services to authenticate users through plugins. For example, LDAP can be used to authenticate usernames and passwords for `Docker`, `Jenkins`, `Kubernetes`, `Open VPN`, and `Linux Samba` servers. System administrators can also control access to the LDAP database using LDAP single sign-on.

LDAP can also be used to add operations to the directory server database, authenticate or bind to a session, delete LDAP entries, search and compare entries using different commands, modify existing entries, extend entries, abandon requests or cancel bind operations.

LDAP is used in Microsoft's Active Directory but can also be used in other tools such as Open LDAP, Red Hat Directory Server, and IBM Tivoli Directory Server. Open LDAP is an open source LDAP application. It is a Windows LDAP client and administration tool developed for LDAP database control. The tool should allow users to browse, find, delete, create, and change data present on the LDAP server. Open LDAP also allows users to manage passwords and browse by schema.

Red Hat Directory Servers is a tool used to manage multiple systems through Red Hat Directory Server in a UNIX environment. Red Hat Directory Server allows users to store user details in an LDAP server. The tool provides users with secure and restricted access to directory data, group membership, and remote access and access through an authentication process.

IBM Tivoli Directory Server is an IBM-based LDAP implementation. Based on the LDAP framework. The tool focuses on faster development and distribution of identity control, security, and Web applications. Tivoli Directory Server includes different authentication methods, such as authentication through digital certificates, Simple Authentication and Security Layer (SASL), and CRAM-MD5.

If an organization is having trouble deciding when to use LDAP, there are some use cases where they should consider using LDAP. They should consider the following scenarios:

- A single piece of data needs to be found and accessed regularly;
- The organization has a lot of smaller data entries;
- The organization wants to have all the smaller pieces of data in one centralized location and does not need too much organization between the data.

## LDAP Directory Levels

LDAP configuration is organized in a simple "tree" hierarchy that consists of the following levels:

- Starting at the **root directory**, to:
- Countries
- Agencies
- Departments
- People, files, and shared resources

LDAP directories can be distributed among many servers. Each server can have a replicated version of the total directory that is synchronized regularly. LDAP servers are called Directory System Agents (DSAs). An LDAP server that receives a request from a user is responsible for that request and passes it on to other DSAs as needed, but ensuring that a uniform response is provided to the user.

## LDAP and Active Directory

Lightweight Directory Access Protocol is the protocol used by Exchange Server to communicate with Active Directory. To truly understand what LDAP is and what it does, it is important to understand the basic concepts behind Active Directory as it relates to Exchange.

Active Directory is a directory service that manages domains, users, and distributed resources (such as objects of the Windows operating system). The meaning behind a directory service is that it manages domains and objects while controlling which users can access each resource. Active Directory is available on Windows Server 10 and consists of several services. The services included in Active Directory include Domain, Lightweight Directory, Certificate, Federated Identity, and Rights Management Services. Each service is included under the Active Directory name to extend the directory management capabilities.

Active Directory contains information about every user account on the entire network. It treats each user account as an object. Each user object also has multiple attributes. An example of an attribute is a user's first name, last name, or email address. All of this information exists in a large, encrypted database on the domain controller (Active Directory). The challenge is extracting the information in a usable format. This is the primary job of LDAP.

LDAP extracts information from Active Directory using relatively simple string-based queries. LDAP can store and extract objects such as usernames and passwords in Active Directory and share that object data across the network. The nice thing is that this all happens behind the scenes. The average end user will never have to perform LDAP queries manually because Outlook is LDAP-enabled and knows how to perform all necessary queries on its own.

## Using the LDAP User Directory provided by {{$localeConfig.brandName}}

Detailed usage documentation is available at [LDAP User Directory Using {{$localeConfig.brandName}}](/guides/users/ldap-user-directory.md)
