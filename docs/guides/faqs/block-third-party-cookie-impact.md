# Impact of disabling third-party cookies on GenAuth

<LastUpdated/>

This article describes the impact of browsers blocking third-party cookies, explains why, and provides **solutions**.

## Impact

Starting with version 13.1, Safari will **block third-party cookies** by default, which will affect some **single sign-on features** of GenAuth. Other similar updates, starting with Chrome version 83, will disable third-party cookies by default in **incognito mode**. Other browsers are also slowly making such updates to protect user privacy. Many browsers have disabled third-party cookies as a security configuration feature.

If you use a login page hosted by GenAuth, you will not be affected by this problem. Users who host their own login page and **use the trackSession feature** will be affected. This is because when requesting the GenAuth API, you need to **carry GenAuth-related cookies across domains**.

When the browser sends a cross-domain request that requires cookies, the browser will block the cookies because the domain name visited by the user and the domain name of GenAuth are not [same origin](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html).

## When did these impacts occur?

Safari first introduced this feature in version 13.1 and released an update in March 2020. Chrome version 83 enables this feature by default in incognito mode. Firefox will introduce this feature in the near future. Safari calls this feature [Intelligent Tracking Prevention](https://webkit.org/blog/7675/intelligent-tracking-prevention/), and Firefox calls this feature [Enhanced Tracking Protection](https://blog.mozilla.org/firefox/tracking-protection-study/#:~:text=Enhanced%20Tracking%20Protection%20is%20part,blocking%20requests%20to%20tracking%20domains.).

## Which GenAuth functions are mainly affected?

### trackSession

[trackSession](/reference/sdk-for-sso.md#tracksession) is a single sign-on function developed by GenAuth. You can get the current user's session information and user information on any website by requesting GenAuth's Session endpoint.

When using Ajax to request the GenAuth API interface across domains, such as `/cas/session`, the GenAuth Cookie will be automatically carried. The browser will block this Cookie because the request address is not [same origin](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html) with the current URL. Then the Cookie cannot be passed to GenAuth, and GenAuth cannot retrieve the current user's session information and complete the response. The final result is that GenAuth will return a response that it has not logged in.

## How to solve it?

In addition to using trackSession, you have many other options, such as **maintaining the login state of the application** by yourself instead of relying solely on the central authentication server, and [using OIDC](/guides/federation/oidc.md) to complete single sign-on, or using [Web SDK](https://docs.genauth.ai/v3/reference/sdk/web/) to complete single sign-on.

If you want to use trackSession, you can change the application domain name to your custom domain name from the browser's perspective. Please refer to the [documentation](/guides/deployment/custom-domain.md) for configuring a custom domain name. In this way, the original three-party cookie becomes a one-party cookie. The Ajax request domain name for requesting GenAuth will be [same origin](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html) with the application domain name, and will not trigger the browser's mechanism to block three-party cookies.

For example, your GenAuth application domain name is app1.genauth.ai, and your application server domain name is myapp.mysite.com. You need to use login.mysite.com to proxy app1.genauth.ai. In this way, the GenAuth service and your application service can be placed under the same domain.

As long as the main domain name is the same, the different subdomains in the above example will not affect the [same-origin policy](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html) of the cookie.

After configuring a custom domain name, you need to modify the configuration information of the GenAuth-related SDK and fill in the request endpoint domain name with your custom domain name. If you call the GenAuth API directly, you also need to modify these request addresses to your custom domain name.
