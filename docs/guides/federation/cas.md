# Become a CAS identity source

<LastUpdated/>

This article describes how to make GenAuth a CAS identity source. Other systems can access GenAuth as an identity provider through the CAS protocol.

Currently, GenAuth implements the `/login`, `/validate`, and `/logout` endpoints of CAS 1.0.

You can learn more about the CAS protocol here.

## Create an application

In order to enable your application to have identity authentication capabilities, you need to create an application in GenAuth. It is recommended to fill in the name of your actual application project. Go to **Console** > **Application** > **Application List** and click Create Application:

![](~@imagesZhCn/guides/federation/oidc/1-1.png)

Fill in your **Application Name**, for example: Network Notes Project, and specify an **Authentication Address** for your project. Your users will complete authentication at this address in the future. **Callback link** Fill in your project **backend route**, GenAuth will send the ticket to this address. Finally, click Create.

![](~@imagesZhCn/guides/federation/oidc/1-2.png)

Find your application and go to the "Enable Identity Provider" tab.

![](~@imagesZhCn/guides/federation/oauth/1-1.png)

In the "CAS Identity Provider" card below, turn on the Enable CAS IdP switch and click Save.

![](~@imagesZhCn/guides/federation/cas/1-1.png)

## Web flow

In the Web flow, the overall process is as follows:

1. The user visits App1 for the first time.
2. The user does not establish a session with App1 and is redirected to the authentication page.
3. The user is not authenticated, and the user completes the identity authentication on the CAS Server.
4. The user is redirected to the callback address of App1 with the Ticket.
5. App1 checks the validity of the Ticket at the CAS Server.
6. App1 establishes a session with the user and returns the protected resource.
7. The user accesses the application App2.
8. The user does not establish a session with App2 and is redirected to the authentication page.
9. The CAS Server finds that the user has been authenticated, and the user is redirected to the callback address of App2 with the Ticket.
10. App2 checks the validity of the Ticket at the CAS Server.
11. App2 establishes a session with the user and returns the protected resource.

The flow chart is as follows:

![](~@imagesZhCn/guides/federation/cas/cas-flow.png)

[View the Access CAS 1.0 Document](/federation/cas/cas10/).

[View the Access CAS 2.0 Document](/federation/cas/cas20/).
