---
meta:
  - name: description
    content: Application scenario
---

# Application scenario

<LastUpdated/>

::: hint-success
Pipeline allows developers to execute custom code during the authentication process to implement Webhook notifications, extended user fields, access control and other capabilities. If you have good ideas and application scenarios, you are welcome to [supplement the template](https://github.com/authing/pipeline/blob/master/CONTRIBUTING.md) for us.
:::

## Webhook notification

* [Feishu group notification](https://github.com/Authing/pipeline/blob/master/src/templates/lark-notify.js)
* [Slack group notification](https://github.com/Authing/pipeline/blob/master/src/templates/slack-notify.js)
* [DingTalk group notification](https://github.com/Authing/pipeline/blob/master/src/templates/dingtalk-notify.js)

## Extend user fields

* [Add user custom fields](https://github.com/Authing/pipeline/blob/master/src/templates/persist-metadata.js)
* [Change default avatar](https://github.com/Authing/pipeline/blob/master/src/templates/change-default-avatar.js)
* [Write the latest location to the user's MetaData every time they log in](https://github.com/Authing/pipeline/blob/master/src/templates/add-location-to-metadata.js)
* [Dynamically generate avatars using the ui-avatars API](https://github.com/Authing/pipeline/blob/master/src/templates/change-avatar-to-ui-avatars.js)
* [Supplement the user's geographic location information field](https://github.com/Authing/pipeline/blob/master/src/templates/fill-user-address-field.js)
* [Get the user's repo list through the GitHub API](https://github.com/Authing/pipeline/blob/master/src/templates/get-repos-from-github-api.js)

## Access Control

* [Register email suffix whitelist](https://github.com/Authing/pipeline/blob/master/src/templates/email-domain-whitelist.js)
* [Dynamically load whitelist through API](https://github.com/Authing/pipeline/blob/master/src/templates/load-whitelist-on-cloud.js)
* [Force email verification before login](https://github.com/Authing/pipeline/blob/master/src/templates/force-email-verified.js)
* [Force phone number verification before login](https://github.com/Authing/pipeline/blob/master/src/templates/force-phone-verified.js)
* [Register IP range whitelist](https://github.com/Authing/pipeline/blob/master/src/templates/ip-range-whitelist.js)
* [According to IP Risk score blocks users](https://github.com/Authing/pipeline/blob/master/src/templates/ip-risk-analysis.js)
* [Register mobile phone number whitelist](https://github.com/Authing/pipeline/blob/master/src/templates/phone-whitelist.js)
* [Prohibit specific registration/login](https://github.com/Authing/pipeline/blob/master/src/templates/block-specific-connection.js)
* [Prohibit registration/login from 3-6 am every Sunday morning due to system maintenance](https://github.com/Authing/pipeline/blob/master/src/templates/block-on-weekend.js)

## OIDC authentication process

* [Add custom ID Token field](https://github.com/Authing/pipeline/blob/master/src/templates/add-custom-idtoken.js)
* [Add custom Access Token Field](https://github.com/Authing/pipeline/blob/master/src/templates/add-custom-accesstoken.js)
