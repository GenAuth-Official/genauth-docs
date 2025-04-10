# APN Overview

<LastUpdated/>

APN (GenAuth Partner Network) is an application partnership network provided by GenAuth. After joining APN:

- Your application will have single sign-on capability, allowing your customers to log in to your application through a unified entry point with a unified account
- Makes it easier for your customers to find your application

Before joining APN, your application needs to have OIDC capabilities. This guide includes four main sections:

- [Integrate OIDC into Your Application](/apn/integrated-oidc/)
- [Test OIDC Capabilities Based on GenAuth](/apn/test-oidc/)
- [Important Notes Before Joining APN](/apn/attention/)
- [Submit Application](/apn/submit-app/)

## Guide Reading Instructions

- If your application does not yet have OIDC capabilities, please start reading from "Integrate OIDC into Your Application"

- If your application already has OIDC capabilities, you can directly proceed to "Test OIDC Capabilities Based on GenAuth"

## About OIDC

1. **First, let's understand some terminology to help you better comprehend the following content**.

IDP: Identity Provider

SP: Service Provider

Simply put, for example, if you developed a social App that uses WeChat interface for third-party login. In this process, WeChat is the IDP providing user identity; your application is the SP providing services to users.

2. **Next, let's understand what OpenID Connect is?**

OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows clients to verify the identity of end-users based on authentication performed by an authorization server, and to obtain basic profile information about the end-user in an interoperable and REST-like manner.

OpenID Connect allows all types of clients (including web-based, mobile, and JavaScript clients) to request and receive information about authenticated sessions and end-users. The specification suite is extensible, allowing participants to use optional features when it makes sense for them, such as encryption of identity data, discovery of OpenID providers, and session management.

3. **What problems does OpenID Connect solve?**

OpenID Connect 1.0 allows applications and site developers to authenticate users without taking on the responsibility of storing and managing passwords, as the internet is full of people trying to compromise user accounts for their own benefit.

4. **Why should developers use OpenID Connect?**

Because it's simple, reliable, secure, and frees them from the difficult and dangerous task of storing and managing others' passwords. An additional benefit is that it makes the user registration process easier, thereby reducing user drop-off rates.

5. **What is the relationship between OIDC and SSO?**

SSO includes both **unified login** and **unified logout**. SSO implemented based on OIDC mainly utilizes OIDC service as a unified entry point for user authentication, making all places requiring login handled by the OIDC service. Simply put, it separates the user authentication parts and hands them over to the OIDC authentication center to complete.
