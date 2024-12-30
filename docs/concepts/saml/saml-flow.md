---
tags:
  - ServiceProvider
  - Service Provider
  - IdentityProvider
  - Identity Provider
---

# Understanding SAML Process

<LastUpdated/>

This article describes the data interaction process between SP, IdP, and browser in SAML.

## Subjects involved in SAML protocol

When using SAML protocol for identity authentication, the following three subjects are involved

Browser: SP and IdP communicate with each other through the browser

SP: Resource provider

IdP: Identity provider

## The whole process from initiating SAML login to successful login

![](~@imagesZhCn/concepts/saml/saml-flow-overview.png)

1. The user tries to log in to the application provided by SP.

2. SP generates SAML Request and sends SAML Request to IdP through browser redirection.

3. IdP parses SAML Request and redirects the user to the authentication page.
4. The user completes the login on the authentication page.
5. The IdP generates a SAML Response and returns the SAML Response to the ACS address of the SP by redirecting the browser, which contains the SAML Assertion used to determine the user's identity.
6. The SP verifies the content of the SAML Response.
7. The user successfully logs in to the application provided by the SP.

## Communication method between SP and IdP

The communication methods between SP and IdP are divided into HTTP Redirect Binding, HTTP POST Binding, and HTTP Artifact Binding. Each method uses different types of HTTP to communicate with each other at different stages.

### HTTP Redirect Binding

The SP sends the SAML Request to the IdP by redirecting the GET request, and the IdP sends the SAML Response to the SP by POST request through the Form form that is immediately submitted.

![](~@imagesZhCn/concepts/saml/HTTP-Redirect-Binding.png)

### HTTP POST Binding

SP sends SAML Request to IdP in POST request through Form form submitted immediately. IdP sends SAML Response to SP in POST request through Form form submitted immediately.

![](~@imagesZhCn/concepts/saml/http-post-binding.png)

### HTTP Artifact Binding

SP and IdP only exchange the index number of SAML Request and SAML Response through the browser. After receiving the index number, they request the Artifact Resolution Service interface of the other party in the backend to obtain the real request entity content. This avoids the exposure of SAML Request and SAML Response to the frontend.

![](~@imagesZhCn/concepts/saml/HTTP-Artifact-Binding.png)
