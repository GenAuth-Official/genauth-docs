# Single Sign-On and Single Sign-Out

<LastUpdated/>

## What is Single Sign-On

Single Sign-On means that users only need to enter their account and password once, complete the login in **one place**, and then can **directly enter all business systems**. To achieve the effect of single sign-on, there must be a **unique identity source**, and other business systems must **cooperate to complete the transformation** and **interconnection**.

### Login to GenAuth

GenAuth supports multiple user login methods, which are divided into account and password authentication, standard protocol authentication, and three-party identity source authentication. The difference between them is that GenAuth passes **user information to the business system in different ways**. Regardless of which method is used, **after the user completes the authentication**, he is **logged in** in **GenAuth**, and the business system can **ask GenAuth** whether a certain user is logged in, thereby completing **single sign-on** between multiple application systems. **Not anyone** can ask the user's login status at will, which will have security risks. Only **the user himself** can ask** his own** login status, and **the user pool administrator** can ask** the **login status of any user under the user pool.

#### Account and password authentication

By calling GenAuth's account and password authentication API, the most basic authentication can be completed, and the user information and token are **directly returned in the response body of the request**.

#### Standard protocol authentication

GenAuth supports OIDC, OAuth 2.0, SAML2, CAS 1.0, and LDAP standard authentication protocols. Standard protocols will pass user information in a specific way. For example, in the OIDC protocol, after user authentication, GenAuth will not directly return the user's information, but return an authorization code code, and then use the code to exchange for Access tokens in the business backend, and then use Access tokens to obtain user information. Mature and formal business system products will support standard protocols, and using standard protocol docking can **complete docking once and for all**. Recommended standard protocols: OIDC > SAML2 > CAS 1.0 > LDAP > OAuth2.0.

#### Three-party identity source authentication

GenAuth supports authentication using other three-party identity sources, and can complete user authentication in other OAuth 2.0, OIDC, SAML2, CAS 2.0, and LDAP identity sources. After authentication, GenAuth will return user information to the business system through **standard protocols** or **in URL query**.

## What is single sign-out

Single sign-out means that a user can **log out of all systems he logged in** by clicking on the sign-out button once. There are three systems: GenAuth authentication center, business system, and external identity source. To achieve the effect of single sign-out, there must be a **unique identity source**, and other business systems must **cooperate to complete the transformation** and **connection**, mainly to handle the sign-out callback from the identity source and release their own login state.

### Log out of GenAuth

After the user logs in to GenAuth, the user is logged in to GenAuth. When the user logs out, GenAuth will destroy the user's session, and the user is logged out in GenAuth.

If you want to log out a user in GenAuth, there are several ways:

1. Call the GenAuth API with the user token to log out.

2. Access the GenAuth logout endpoint with the user's cookie.

3. Use the Logout flow of the standard protocol.

4. The user pool administrator specifies a batch of user IDs for offline operations.

There are several logout modes between the user login state and the application and device. You can choose according to the business scenario.

#### Single device single application single point logout

As shown in the figure below, the user logged in to APP 1 on the mobile phone, browser, and desktop, and logged in to APP 2 on the browser and desktop.

![](~@imagesZhCn/concepts/app-device-logout-1.png)

Now we want to implement single-point logout for a single device and a single application. After receiving the logout request, GenAuth will delete the user's session of APP 1 on the current device, so APP 1 on the user's current device is logged out, and APP 1 and APP 2 are still logged in on other devices.

For example: The user logged in to APP 1 on the mobile phone, browser, and desktop, and logged in to APP 2 on the browser and desktop. After exiting APP 1 in the browser, APP 1 on the mobile phone and desktop remains logged in, and APP 2 on the browser and desktop remains logged in.

![](~@imagesZhCn/concepts/app-device-logout-2.png)

#### Single-point sign-out for single application across devices

As shown in the figure below, the user has logged into APP 1 on the mobile phone, browser, and desktop, and has logged into APP 2 on the browser and desktop.

![](~@imagesZhCn/concepts/app-device-logout-1.png)

Now we want to implement single-point sign-out for single application across devices. After receiving the sign-out request, GenAuth will delete all sessions of the user under APP 1, so the user's APP 1 application on any device is in the sign-out state, but is still in the sign-in state under APP 2.
For example: The user has logged into APP 1 on the mobile phone, browser, and desktop, and has logged into APP 2 on the browser and desktop. After exiting APP 1 in the browser, APP 1 on the mobile phone and desktop are all exited, and APP 2 on the browser and desktop remains logged in.

![](~@imagesZhCn/concepts/app-device-logout-3.png)

#### Single-device cross-application single-point logout

As shown in the figure below, the user logged in to APP 1 on the mobile phone, browser, and desktop, and logged in to APP 2 on the browser and desktop.

![](~@imagesZhCn/concepts/app-device-logout-1.png)

Now we want to implement a single-device cross-application single-point logout. After receiving the logout request, GenAuth will delete the user's session for all applications on the current device, so the user is logged out of any application on the current device.
For example: The user logged in to APP 1 on the mobile phone, browser, and desktop, and logged in to APP 2 on the browser and desktop. After logging out of APP 1 on the browser, APP 1 on the mobile phone and desktop remains logged in, APP 2 on the browser is logged out, and APP 2 on the desktop remains logged in.

![](~@imagesZhCn/concepts/app-device-logout-4.png)

#### Cross-device cross-application single sign-out

As shown in the figure below, the user logged into APP 1 on the mobile phone, browser, and desktop, and logged into APP 2 on the browser and desktop.

![](~@imagesZhCn/concepts/app-device-logout-1.png)

Now we want to implement cross-device cross-application single sign-out. After receiving the sign-out request, GenAuth will delete all sessions of the user under all applications, so the user is signed out of any application on any device.
For example: The user logged into APP 1 on the mobile phone, browser, and desktop, and logged into APP 2 on the browser and desktop. After exiting APP 1 in the browser, APP 1 on the mobile phone and desktop will exit, and APP 2 on the browser and desktop will exit.

![](~@imagesZhCn/concepts/app-device-logout-5.png)

### Log out of business system and external identity source

The above logout operations all log out users from GenAuth. The business system must handle the logout callback of GenAuth and execute the logout action from its own business system. After logging out from GenAuth, the callback is made to the logout endpoint of the business system. This endpoint is responsible for logging out of all business systems and notifying the relevant external identity source to log out the user.

![](~@imagesZhCn/concepts/app-device-logout-6.png)
