---
tags:
  - SAML Process
---

# SAML2 Overview

<LastUpdated/>

Security Assertion Markup Language (SAML, pronounced sam-el) is an open source standard data format based on **XML**, which exchanges authentication and authorization data between parties, especially between identity providers and service providers. SAML2.0 can implement cross-domain single sign-on (SSO) based on the network to reduce the management overhead of distributing multiple authentication tokens to a user.

## SAML Subject

In the SAML protocol, **two subjects** are involved:

Service Provider **Service Provider**, referred to as **SP**. What is a service provider? For example: Alibaba Cloud Console, Tencent Cloud Console, AWS Console are all service providers.

Identity Provider **Identity Provider**, referred to as **IdP**. What is an identity provider? GenAuth can be used as an identity provider. The identity provider can send an identity assertion to the SP. The so-called identity assertion is a token issued by GenAuth that can identify a person's identity. However, in the SAML protocol, the format of this token is XML. There are other identity providers, such as Okta, SSOCircle, and Auth0, which can return identity assertions to the SP.

The two subjects exchange information through the user's browser. In terms of method, the SP can return a redirect HTTP response with parameters, allowing the user to immediately send information to the IdP through the parameters. The IdP will return a form and a JS code that submits the form immediately, so that the user can immediately send the information to the SP.

In summary, the SP provides services and needs to know the user's identity, so it needs to ask the IdP. The IdP knows the user's identity. When the user successfully logs in to the IdP, the IdP sends the user's identity to the SP in the form of a SAML assertion. SP trusts the identity assertion sent by IdP, thereby granting the user relevant permissions in SP.

## SAML Request

When the user's identity cannot be authenticated, SP will send SAML Request information to IdP (sent through the browser) to request IdP to authenticate the user's identity.

The form of a SAML Request initiated by **Alibaba Cloud Console** is as follows:

```
GET https://core.genauth.ai/api/saml-idp/5e10927e4ecfd464fb4edaf6?SAMLRequest=fZJLT%2BMwFIX3%2FIrI%2B7yct9Wk6kyFQGJERQKL2RnnJnWV2Blfp2L%2BPaGlDLOApaV7vnN0j lfrl3FwjmBQalWS0AuIA0roVqq%2BJI%2FNtZuTdXW1Qj4OdGKb2e7VA%2FyZAa2zQQRjF91PrXAe wdRgjlLA48NdSfbWTsh8H2WvpPL4IP%2FOyhN69N9Qfl3fE2e7UKTi9mR9EQhtwOOLz5LAE8o%2FU p9P8qRyZTv5CYRBQTOIQXRtnMbdcwwt71LiXGsj4JSwJB0fEIhzuy0Jp9AXgvaHgwzzPA%2FjfXag bRYlebeP%2BmI5wh1HlEf4J0Oc4Vah5cqWhAY0cIPCpXkTRiwoWJJ5eZH%2BJs7OaKuFHn5IdS5sN oppjhKZ4iMgs4LVm193jHoBez4fIbtpmp27u68b4jxdiqdvxS9TKGTnqr9nTe%2FGpDovw06JzWfC9wB%2B2Y5UXy8VRlmcpkWUpUlGY5p8TLfyP7tW78%2F%2Fv0f1Cg%3D%3D
```

**SAMLRequest parameters** are sent to the IdP in the URL via **query**, SAMLRequest The content is as follows: `fZJLT+MwFIX3/IrI+7yct9Wk6kyFQGJERQKL2RnnJnWV2Blfp2L+PaGlDLOApaV7vnN0jlfrl3FwjmBQalWS0AuIA0roVqq+JI/NtZuTdXW1Qj4OdGKb2e7VA /yZAa2zQQRjF91PrXAewdRgjlLA48NdSfbWTsh8H2WvpPL4IP/OyhN69N9Qfl3fE2e7UKTi9mR9EQhtwOOLz5LAE8o/Up9P8qRyZTv5CYRBQTOIQXRtnMbdcw wt71LiXGsj4JSwJB0fEIhzuy0Jp9AXgvaHgwzzPA/jfXagbRYlebeP+mI5wh1HlEf4J0Oc4Vah5cqWhAY0cIPCpXkTRiwoWJJ5eZH+Js7OaKuFHn5IdS5sNop pjhKZ4iMgs4LVm193jHoBez4fIbtpmp27u68b4jxdiqdvxS9TKGTnqr9nTe/GpDovw06JzWfC9wB+2Y5UXy8VRlmcpkWUpUlGY5p8TLfyP7tW78//v0f1Cg==` [base64 decode + inflate decode](https://www.samltool.com/decode.php) ```xml <?xml version="1.0" encoding="UTF-8"?> <saml2p:AuthnRequest AssertionConsumerServiceURL="https://signin.aliyun.com/saml/SSO" Destination="https://core.genauth.ai/api/saml-idp/5e10927e4ecfd464fb4edaf6" ForceAuthn="false" ID="a2eg9c2gjji188814h7j2d7358fh3g9" IsPassive="false" IssueInstant="2020-09-28T13:09:57.896Z" ProtocolBinding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Version="2.0" xmlns:saml2p="urn:oasis:names:tc:SAML:2.0:protocol">
<saml2:Issuer
xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion">https://signin.aliyun.com/1374669376572425/saml/SSO
</saml2:Issuer>
</saml2p:AuthnRequest>

````

## SAML Response

After the IdP receives the SAML Request, a login box will pop up to authenticate the user's identity:
![SAML IdP confirms identity with the user](https://cdn.genauth.ai/docs/20200928211618.png)

After the user completes the login at the IdP, the SAML IdP sends the user's **identity assertion** to SP (placed in a form and sent via a browser POST request). The SAML IdP's response is as follows:

```html
<form
  id="saml-form"
  method="post"
  action="https://signin.aliyun.com/saml/SSO"
  autocomplete="off"
>
  <input
    type="hidden"
    name="SAMLResponse"
    id="saml-response"
    value="PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiIHhtbG5zOnNhbWw9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iIElEPSJfNjJiMTc3YzEtYTkxOS00MmY2LTk1ODYtNDdmMTNiNzEwODFmIiBWZXJzaW9uPSIyLjAiIElzc3VlSW5zdGFudD0iMjAyMC0wOS0yOFQxMzozMDozMS43ODhaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9zaWduaW4uYWxpeXVuLmNvbS9zYW1sL1NTTyIgSW5SZXNwb25zZVRvPSJhNDlmOGVkaTMxY2owYTJhNDU5ZzAzMzFjM2Q5YzEwIj4KICA8c2FtbDpJc3N1ZXI+aHR0cHM6Ly8yMG5xdWx2b3FwYnAuYXV0aGluZy5jbjwvc2FtbDpJc3N1ZXI+CiAgPHNhbWxwOlN0YXR1cz4KICAgIDxzYW1scDpTdGF0dXNDb2RlIFZhbHVlPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6c3RhdHVzOlN1Y2Nlc3MiLz4KICA8L3NhbWxwOlN0YXR1cz4KICA8c2FtbDpBc3NlcnRpb24geG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeG1sbnM6eHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpzYW1sPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIiBJRD0iX2ZhZTk1YjQ3LWNiZjMtNGEyMC1hZGQwLTk5ZDg1NmI0MTI0ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjAtMDktMjhUMTM6MzA6MzEuNzg4WiI+CiAgICA8c2FtbDpJc3N1ZXI+aHR0cHM6Ly8yMG5xdWx2b3FwYnAuYXV0aGluZy5jbjwvc2FtbDpJc3N1ZXI+PGRzOlNpZ25hdHVyZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+PGRzOlNpZ25lZEluZm8+PGRzOkNhbm9uaWNhbGl6YXRpb25NZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48ZHM6U2lnbmF0dXJlTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3JzYS1zaGExIi8+PGRzOlJlZmVyZW5jZSBVUkk9IiNfZmFlOTViNDctY2JmMy00YTIwLWFkZDAtOTlkODU2YjQxMjRlIj48ZHM6VHJhbnNmb3Jtcz48ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI2VudmVsb3BlZC1zaWduYXR1cmUiLz48ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIi8+PC9kczpUcmFuc2Zvcm1zPjxkczpEaWdlc3RNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjc2hhMSIvPjxkczpEaWdlc3RWYWx1ZT4vb2w2bEMxaitzbWRvbmw0OCtsSlR6VWVxbnc9PC9kczpEaWdlc3RWYWx1ZT48L2RzOlJlZmVyZW5jZT48L2RzOlNpZ25lZEluZm8+PGRzOlNpZ25hdHVyZVZhbHVlPmF3emNFMGRwOEJ6VFc0YjRQRmFSWDdOS09DOTViTHFPblBlQUtJL0NzRGZHYUpkbXpDSzBmVmxpeitlNlh6Qmx1S2ZCcFF0clFvbktsN2sydlZOYVBGeDlQcFNWendLOTFITEd2WVEwcUIzNnVBNEhGdm0vM00zMURMM1pSRlBScTY4WmFWQUc2bE1WZDBZYmlJblZ2OUZXd3NpKzZqRXBGK1BSbG1rb3FBST08L2RzOlNpZ25hdHVyZVZhbHVlPjxkczpLZXlJbmZvPjxkczpYNTA5RGF0YT48ZHM6WDUwOUNlcnRpZmljYXRlPk1JSUNRakNDQWF1Z0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRMEZBREErTVFzd0NRWURWUVFHRXdKMWN6RVNNQkFHQTFVRUNBd0o1THFMNWE2ZTVMaUtNUXd3Q2dZRFZRUUtEQU56YzNNeERUQUxCZ05WQkFNTUJITnpjM013SGhjTk1qQXdNVEF6TVRNeE9ERTBXaGNOTWpFd01UQXlNVE14T0RFMFdqQStNUXN3Q1FZRFZRUUdFd0oxY3pFU01CQUdBMVVFQ0F3SjVMcUw1YTZlNUxpS01Rd3dDZ1lEVlFRS0RBTnpjM014RFRBTEJnTlZCQU1NQkhOemMzTXdnWjh3RFFZSktvWklodmNOQVFFQkJRQURnWTBBTUlHSkFvR0JBTU5XbE1rNEwrVGNXd3lkOXBsVFBMaEhML1VNQ1BHSmd2NVZwOHZhQXA0V01zR3R3T0xJMVVOV2NjSXFNZVUwS2FzSnFyS3hIWXZxOUp6Wmg0ZmZ0Rm1vd0J6MzZ2ejBlSVVzUDVQS3ZGVUxrQzF2anJkbitRSlhiSjUxYWxaWktmUGdsMUhJOHc2bGgxMmFXVGphS1ErS2VtSXR0cUxxSmdMV09ZQVhQSXN6QWdNQkFBR2pVREJPTUIwR0ExVWREZ1FXQkJUVDEwNGhWWVZuUHBnN2FGckRpWFBTaGJ0eFVUQWZCZ05WSFNNRUdEQVdnQlRUMTA0aFZZVm5QcGc3YUZyRGlYUFNoYnR4VVRBTUJnTlZIUk1FQlRBREFRSC9NQTBHQ1NxR1NJYjNEUUVCRFFVQUE0R0JBQjYrMXhLN0dNSmE1TTZVamcvd2Q0RXR3eThOZFRGNnlwU3FOMzZCZDVPZFBtd1U5SHpEdUdqS2kzWndvb1BJR1JCOHBpTHNLazExTTRJaEFGNEMyUi9Kc3ZWWXdXT1lnb2pXNEgxaFI1d2syam43cGx0V3FSUGRmWkJsMFlmc0R5c1VQN2s4L01jaE9XWDdXaWZOeHBlM0dkU0tOMTdDa2RSakw5MjRiVjBsPC9kczpYNTA5Q2VydGlmaWNhdGU+PC9kczpYNTA5RGF0YT48L2RzOktleUluZm8+PC9kczpTaWduYXR1cmU+CiAgICA8c2FtbDpTdWJqZWN0PgogICAgICA8c2FtbDpOYW1lSUQgRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoxLjE6bmFtZWlkLWZvcm1hdDp1bnNwZWNpZmllZCI+eWV6dXdlaUBhdXRoaW5nLm9uYWxpeXVuLmNvbTwvc2FtbDpOYW1lSUQ+CiAgICAgIDxzYW1sOlN1YmplY3RDb25maXJtYXRpb24gTWV0aG9kPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6Y206YmVhcmVyIj4KICAgICAgICA8c2FtbDpTdWJqZWN0Q29uZmlybWF0aW9uRGF0YSBOb3RPbk9yQWZ0ZXI9IjIwMjAtMDktMjhUMTQ6MzA6MzEuNzg4WiIgUmVjaXBpZW50PSJodHRwczovL3NpZ25pbi5hbGl5dW4uY29tL3NhbWwvU1NPIiBJblJlc3BvbnNlVG89ImE0OWY4ZWRpMzFjajBhMmE0NTlnMDMzMWMzZDljMTAiLz4KICAgICAgPC9zYW1sOlN1YmplY3RDb25maXJtYXRpb24+CiAgICA8L3NhbWw6U3ViamVjdD4KICAgIDxzYW1sOkNvbmRpdGlvbnMgTm90QmVmb3JlPSIyMDIwLTA5LTI4VDEzOjMwOjMxLjc4OFoiIE5vdE9uT3JBZnRlcj0iMjAyMC0wOS0yOFQxNDozMDozMS43ODhaIj4KICAgICAgPHNhbWw6QXVkaWVuY2VSZXN0cmljdGlvbj4KICAgICAgICA8c2FtbDpBdWRpZW5jZT5odHRwczovL3NpZ25pbi5hbGl5dW4uY29tLzEzNzQ2NjkzNzY1NzI0MjUvc2FtbC9TU088L3NhbWw6QXVkaWVuY2U+CiAgICAgIDwvc2FtbDpBdWRpZW5jZVJlc3RyaWN0aW9uPgogICAgPC9zYW1sOkNvbmRpdGlvbnM+PHNhbWw6QXV0aG5TdGF0ZW1lbnQgQXV0aG5JbnN0YW50PSIyMDIwLTA5LTI4VDEzOjMwOjMxLjg4OFoiIFNlc3Npb25JbmRleD0ib29ldW1jcTZlSGpkZHIxSDNGeXpvdTdDcy1PR1RzTmwiPjxzYW1sOkF1dGhuQ29udGV4dD48c2FtbDpBdXRobkNvbnRleHRDbGFzc1JlZj51cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YWM6Y2xhc3Nlczp1bnNwZWNpZmllZDwvc2FtbDpBdXRobkNvbnRleHRDbGFzc1JlZj48L3NhbWw6QXV0aG5Db250ZXh0Pjwvc2FtbDpBdXRoblN0YXRlbWVudD48c2FtbDpBdHRyaWJ1dGVTdGF0ZW1lbnQ+PHNhbWw6QXR0cmlidXRlIE5hbWU9ImVtYWlsIiBOYW1lRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXR0cm5hbWUtZm9ybWF0OmJhc2ljIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTp0eXBlPSJ4czpzdHJpbmciPnllenV3ZWlAYXV0aGluZy5jbjwvc2FtbDpBdHRyaWJ1dGVWYWx1ZT48L3NhbWw6QXR0cmlidXRlPjxzYW1sOkF0dHJpYnV0ZSBOYW1lPSJuYW1lIiBOYW1lRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXR0cm5hbWUtZm9ybWF0OmJhc2ljIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTp0eXBlPSJ4czpzdHJpbmciLz48L3NhbWw6QXR0cmlidXRlPjxzYW1sOkF0dHJpYnV0ZSBOYW1lPSJ1c2VybmFtZSIgTmFtZUZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmF0dHJuYW1lLWZvcm1hdDpiYXNpYyI+PHNhbWw6QXR0cmlidXRlVmFsdWUgeG1sbnM6eHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4c2k6dHlwZT0ieHM6c3RyaW5nIj55ZXp1d2VpQGF1dGhpbmcuY248L3NhbWw6QXR0cmlidXRlVmFsdWU+PC9zYW1sOkF0dHJpYnV0ZT48c2FtbDpBdHRyaWJ1dGUgTmFtZT0icGhvbmUiIE5hbWVGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphdHRybmFtZS1mb3JtYXQ6YmFzaWMiPjxzYW1sOkF0dHJpYnV0ZVZhbHVlIHhtbG5zOnhzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSIgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeHNpOnR5cGU9InhzOnN0cmluZyI+bnVsbDwvc2FtbDpBdHRyaWJ1dGVWYWx1ZT48L3NhbWw6QXR0cmlidXRlPjwvc2FtbDpBdHRyaWJ1dGVTdGF0ZW1lbnQ+PC9zYW1sOkFzc2VydGlvbj4KPC9zYW1scDpSZXNwb25zZT4="
  />
  <input type="hidden" name="RelayState" id="relay-state" value="" />
</form>
<script type="text/javascript">
  (function () {
    document.forms[0].submit();
  })();
</script>
````

There is nothing mysterious about it. It is just an **HTML form** and **a piece of JS code that immediately submits the form**. The **SAML Response** information is as follows:

```
PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiIHhtbG5zOnNhbWw9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphc3NlcnRpb24iIElEPSJfNjJiMTc3YzEtYTkxOS00MmY2LTk1ODYtNDdmMTNiNzEwODFmIiBWZXJzaW9uPSIyLjAiIElzc3VlSW5zdGFudD0iMjAyMC0wOS0yOFQxMzozMDozMS43ODhaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9zaWduaW4uYWxpeXVuLmNvbS9zYW1sL1NTTyIgSW5SZXNwb25zZVRvPSJhNDlmOGVkaTMxY2owYTJhNDU5ZzAzMzFjM2Q5YzEwIj4KICA8c2FtbDpJc3N1ZXI+aHR0cHM6Ly8yMG5xdWx2b3FwYnAuYXV0aGluZy5jbjwvc2FtbDpJc3N1ZXI+CiAgPHNhbWxwOlN0YXR1cz4KICAgIDxzYW1scDpTdGF0dXNDb2RlIFZhbHVlPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6c3RhdHVzOlN1Y2Nlc3MiLz4KICA8L3NhbWxwOlN0YXR1cz4KICA8c2FtbDpBc3NlcnRpb24geG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeG1sbnM6eHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpzYW1sPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIiBJRD0iX2ZhZTk1YjQ3LWNiZjMtNGEyMC1hZGQwLTk5ZDg1NmI0MTI0ZSIgVmVyc2lvbj0iMi4wIiBJc3N1ZUluc3RhbnQ9IjIwMjAtMDktMjhUMTM6MzA6MzEuNzg4WiI+CiAgICA8c2FtbDpJc3N1ZXI+aHR0cHM6Ly8yMG5xdWx2b3FwYnAuYXV0aGluZy5jbjwvc2FtbDpJc3N1ZXI+PGRzOlNpZ25hdHVyZSB4bWxuczpkcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnIyI+PGRzOlNpZ25lZEluZm8+PGRzOkNhbm9uaWNhbGl6YXRpb25NZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzEwL3htbC1leGMtYzE0biMiLz48ZHM6U2lnbmF0dXJlTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3JzYS1zaGExIi8+PGRzOlJlZmVyZW5jZSBVUkk9IiNfZmFlOTViNDctY2JmMy00YTIwLWFkZDAtOTlkODU2YjQxMjRlIj48ZHM6VHJhbnNmb3Jtcz48ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI2VudmVsb3BlZC1zaWduYXR1cmUiLz48ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIi8+PC9kczpUcmFuc2Zvcm1zPjxkczpEaWdlc3RNZXRob2QgQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjc2hhMSIvPjxkczpEaWdlc3RWYWx1ZT4vb2w2bEMxaitzbWRvbmw0OCtsSlR6VWVxbnc9PC9kczpEaWdlc3RWYWx1ZT48L2RzOlJlZmVyZW5jZT48L2RzOlNpZ25lZEluZm8+PGRzOlNpZ25hdHVyZVZhbHVlPmF3emNFMGRwOEJ6VFc0YjRQRmFSWDdOS09DOTViTHFPblBlQUtJL0NzRGZHYUpkbXpDSzBmVmxpeitlNlh6Qmx1S2ZCcFF0clFvbktsN2sydlZOYVBGeDlQcFNWendLOTFITEd2WVEwcUIzNnVBNEhGdm0vM00zMURMM1pSRlBScTY4WmFWQUc2bE1WZDBZYmlJblZ2OUZXd3NpKzZqRXBGK1BSbG1rb3FBST08L2RzOlNpZ25hdHVyZVZhbHVlPjxkczpLZXlJbmZvPjxkczpYNTA5RGF0YT48ZHM6WDUwOUNlcnRpZmljYXRlPk1JSUNRakNDQWF1Z0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRMEZBREErTVFzd0NRWURWUVFHRXdKMWN6RVNNQkFHQTFVRUNBd0o1THFMNWE2ZTVMaUtNUXd3Q2dZRFZRUUtEQU56YzNNeERUQUxCZ05WQkFNTUJITnpjM013SGhjTk1qQXdNVEF6TVRNeE9ERTBXaGNOTWpFd01UQXlNVE14T0RFMFdqQStNUXN3Q1FZRFZRUUdFd0oxY3pFU01CQUdBMVVFQ0F3SjVMcUw1YTZlNUxpS01Rd3dDZ1lEVlFRS0RBTnpjM014RFRBTEJnTlZCQU1NQkhOemMzTXdnWjh3RFFZSktvWklodmNOQVFFQkJRQURnWTBBTUlHSkFvR0JBTU5XbE1rNEwrVGNXd3lkOXBsVFBMaEhML1VNQ1BHSmd2NVZwOHZhQXA0V01zR3R3T0xJMVVOV2NjSXFNZVUwS2FzSnFyS3hIWXZxOUp6Wmg0ZmZ0Rm1vd0J6MzZ2ejBlSVVzUDVQS3ZGVUxrQzF2anJkbitRSlhiSjUxYWxaWktmUGdsMUhJOHc2bGgxMmFXVGphS1ErS2VtSXR0cUxxSmdMV09ZQVhQSXN6QWdNQkFBR2pVREJPTUIwR0ExVWREZ1FXQkJUVDEwNGhWWVZuUHBnN2FGckRpWFBTaGJ0eFVUQWZCZ05WSFNNRUdEQVdnQlRUMTA0aFZZVm5QcGc3YUZyRGlYUFNoYnR4VVRBTUJnTlZIUk1FQlRBREFRSC9NQTBHQ1NxR1NJYjNEUUVCRFFVQUE0R0JBQjYrMXhLN0dNSmE1TTZVamcvd2Q0RXR3eThOZFRGNnlwU3FOMzZCZDVPZFBtd1U5SHpEdUdqS2kzWndvb1BJR1JCOHBpTHNLazExTTRJaEFGNEMyUi9Kc3ZWWXdXT1lnb2pXNEgxaFI1d2syam43cGx0V3FSUGRmWkJsMFlmc0R5c1VQN2s4L01jaE9XWDdXaWZOeHBlM0dkU0tOMTdDa2RSakw5MjRiVjBsPC9kczpYNTA5Q2VydGlmaWNhdGU+PC9kczpYNTA5RGF0YT48L2RzOktleUluZm8+PC9kczpTaWduYXR1cmU+CiAgICA8c2FtbDpTdWJqZWN0PgogICAgICA8c2FtbDpOYW1lSUQgRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoxLjE6bmFtZWlkLWZvcm1hdDp1bnNwZWNpZmllZCI+eWV6dXdlaUBhdXRoaW5nLm9uYWxpeXVuLmNvbTwvc2FtbDpOYW1lSUQ+CiAgICAgIDxzYW1sOlN1YmplY3RDb25maXJtYXRpb24gTWV0aG9kPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6Y206YmVhcmVyIj4KICAgICAgICA8c2FtbDpTdWJqZWN0Q29uZmlybWF0aW9uRGF0YSBOb3RPbk9yQWZ0ZXI9IjIwMjAtMDktMjhUMTQ6MzA6MzEuNzg4WiIgUmVjaXBpZW50PSJodHRwczovL3NpZ25pbi5hbGl5dW4uY29tL3NhbWwvU1NPIiBJblJlc3BvbnNlVG89ImE0OWY4ZWRpMzFjajBhMmE0NTlnMDMzMWMzZDljMTAiLz4KICAgICAgPC9zYW1sOlN1YmplY3RDb25maXJtYXRpb24+CiAgICA8L3NhbWw6U3ViamVjdD4KICAgIDxzYW1sOkNvbmRpdGlvbnMgTm90QmVmb3JlPSIyMDIwLTA5LTI4VDEzOjMwOjMxLjc4OFoiIE5vdE9uT3JBZnRlcj0iMjAyMC0wOS0yOFQxNDozMDozMS43ODhaIj4KICAgICAgPHNhbWw6QXVkaWVuY2VSZXN0cmljdGlvbj4KICAgICAgICA8c2FtbDpBdWRpZW5jZT5odHRwczovL3NpZ25pbi5hbGl5dW4uY29tLzEzNzQ2NjkzNzY1NzI0MjUvc2FtbC9TU088L3NhbWw6QXVkaWVuY2U+CiAgICAgIDwvc2FtbDpBdWRpZW5jZVJlc3RyaWN0aW9uPgogICAgPC9zYW1sOkNvbmRpdGlvbnM+PHNhbWw6QXV0aG5TdGF0ZW1lbnQgQXV0aG5JbnN0YW50PSIyMDIwLTA5LTI4VDEzOjMwOjMxLjg4OFoiIFNlc3Npb25JbmRleD0ib29ldW1jcTZlSGpkZHIxSDNGeXpvdTdDcy1PR1RzTmwiPjxzYW1sOkF1dGhuQ29udGV4dD48c2FtbDpBdXRobkNvbnRleHRDbGFzc1JlZj51cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YWM6Y2xhc3Nlczp1bnNwZWNpZmllZDwvc2FtbDpBdXRobkNvbnRleHRDbGFzc1JlZj48L3NhbWw6QXV0aG5Db250ZXh0Pjwvc2FtbDpBdXRoblN0YXRlbWVudD48c2FtbDpBdHRyaWJ1dGVTdGF0ZW1lbnQ+PHNhbWw6QXR0cmlidXRlIE5hbWU9ImVtYWlsIiBOYW1lRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXR0cm5hbWUtZm9ybWF0OmJhc2ljIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTp0eXBlPSJ4czpzdHJpbmciPnllenV3ZWlAYXV0aGluZy5jbjwvc2FtbDpBdHRyaWJ1dGVWYWx1ZT48L3NhbWw6QXR0cmlidXRlPjxzYW1sOkF0dHJpYnV0ZSBOYW1lPSJuYW1lIiBOYW1lRm9ybWF0PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXR0cm5hbWUtZm9ybWF0OmJhc2ljIj48c2FtbDpBdHRyaWJ1dGVWYWx1ZSB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTp0eXBlPSJ4czpzdHJpbmciLz48L3NhbWw6QXR0cmlidXRlPjxzYW1sOkF0dHJpYnV0ZSBOYW1lPSJ1c2VybmFtZSIgTmFtZUZvcm1hdD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmF0dHJuYW1lLWZvcm1hdDpiYXNpYyI+PHNhbWw6QXR0cmlidXRlVmFsdWUgeG1sbnM6eHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4c2k6dHlwZT0ieHM6c3RyaW5nIj55ZXp1d2VpQGF1dGhpbmcuY248L3NhbWw6QXR0cmlidXRlVmFsdWU+PC9zYW1sOkF0dHJpYnV0ZT48c2FtbDpBdHRyaWJ1dGUgTmFtZT0icGhvbmUiIE5hbWVGb3JtYXQ9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphdHRybmFtZS1mb3JtYXQ6YmFzaWMiPjxzYW1sOkF0dHJpYnV0ZVZhbHVlIHhtbG5zOnhzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYSIgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeHNpOnR5cGU9InhzOnN0cmluZyI+bnVsbDwvc2FtbDpBdHRyaWJ1dGVWYWx1ZT48L3NhbWw6QXR0cmlidXRlPjwvc2FtbDpBdHRyaWJ1dGVTdGF0ZW1lbnQ+PC9zYW1sOkFzc2VydGlvbj4KPC9zYW1scDpSZXNwb25zZT4=
```

After [base64 decode + inflate decoding](https://www.samltool.com/decode.php), it becomes:

```xml
<samlp:Response
	xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"
	xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" ID="_62b177c1-a919-42f6-9586-47f13b71081f" Version="2.0" IssueInstant="2020-09-28T13:30:31.788Z" Destination="https://signin.aliyun.com/saml/SSO" InResponseTo="a49f8edi31cj0a2a459g0331c3d9c10">
	<saml:Issuer>https://20nqulvoqpbp.genauth.ai</saml:Issuer>
	<samlp:Status>
		<samlp:StatusCode Value="urn:oasis:names:tc:SAML:2.0:status:Success"/>
	</samlp:Status>
	<saml:Assertion
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xmlns:xs="http://www.w3.org/2001/XMLSchema"
		xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion" ID="_fae95b47-cbf3-4a20-add0-99d856b4124e" Version="2.0" IssueInstant="2020-09-28T13:30:31.788Z">
		<saml:Issuer>https://20nqulvoqpbp.genauth.ai</saml:Issuer>
		<ds:Signature
			xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
			<ds:SignedInfo>
				<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
				<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
				<ds:Reference URI="#_fae95b47-cbf3-4a20-add0-99d856b4124e">
					<ds:Transforms>
						<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
						<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
					</ds:Transforms>
					<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
					<ds:DigestValue>/ol6lC1j+smdonl48+lJTzUeqnw=</ds:DigestValue>
				</ds:Reference>
			</ds:SignedInfo>
			<ds:SignatureValue>awzcE0dp8BzTW4b4PFaRX7NKOC95bLqOnPeAKI/CsDfGaJdmzCK0fVliz+e6XzBluKfBpQtrQonKl7k2vVNaPFx9PpSVzwK91HLGvYQ0qB36uA4HFvm/3M31DL3ZRFPRq68ZaVAG6lMVd0YbiInVv9FWwsi+6jEpF+PRlmkoqAI=</ds:SignatureValue>
			<ds:KeyInfo>
				<ds:X509Data>
					<ds:X509Certificate>MIICQjCCAaugAwIBAgIBADANBgkqhkiG9w0BAQ0FADA+MQswCQYDVQQGEwJ1czESMBAGA1UECAwJ5LqL5a6e5LiKMQwwCgYDVQQKDANzc3MxDTALBgNVBAMMBHNzc3MwHhcNMjAwMTAzMTMxODE0WhcNMjEwMTAyMTMxODE0WjA+MQswCQYDVQQGEwJ1czESMBAGA1UECAwJ5LqL5a6e5LiKMQwwCgYDVQQKDANzc3MxDTALBgNVBAMMBHNzc3MwgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMNWlMk4L+TcWwyd9plTPLhHL/UMCPGJgv5Vp8vaAp4WMsGtwOLI1UNWccIqMeU0KasJqrKxHYvq9JzZh4fftFmowBz36vz0eIUsP5PKvFULkC1vjrdn+QJXbJ51alZZKfPgl1HI8w6lh12aWTjaKQ+KemIttqLqJgLWOYAXPIszAgMBAAGjUDBOMB0GA1UdDgQWBBTT104hVYVnPpg7aFrDiXPShbtxUTAfBgNVHSMEGDAWgBTT104hVYVnPpg7aFrDiXPShbtxUTAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBDQUAA4GBAB6+1xK7GMJa5M6Ujg/wd4Etwy8NdTF6ypSqN36Bd5OdPmwU9HzDuGjKi3ZwooPIGRB8piLsKk11M4IhAF4C2R/JsvVYwWOYgojW4H1hR5wk2jn7pltWqRPdfZBl0YfsDysUP7k8/MchOWX7WifNxpe3GdSKN17CkdRjL924bV0l</ds:X509Certificate>
				</ds:X509Data>
			</ds:KeyInfo>
		</ds:Signature>
		<saml:Subject>
			<saml:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified">yezuwei@authing.onaliyun.com</saml:NameID>
			<saml:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
				<saml:SubjectConfirmationData NotOnOrAfter="2020-09-28T14:30:31.788Z" Recipient="https://signin.aliyun.com/saml/SSO" InResponseTo="a49f8edi31cj0a2a459g0331c3d9c10"/>
			</saml:SubjectConfirmation>
		</saml:Subject>
		<saml:Conditions NotBefore="2020-09-28T13:30:31.788Z" NotOnOrAfter="2020-09-28T14:30:31.788Z">
			<saml:AudienceRestriction>
				<saml:Audience>https://signin.aliyun.com/1374669376572425/saml/SSO</saml:Audience>
			</saml:AudienceRestriction>
		</saml:Conditions>
		<saml:AuthnStatement AuthnInstant="2020-09-28T13:30:31.888Z" SessionIndex="ooeumcq6eHjddr1H3Fyzou7Cs-OGTsNl">
			<saml:AuthnContext>
				<saml:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:unspecified</saml:AuthnContextClassRef>
			</saml:AuthnContext>
		</saml:AuthnStatement>
		<saml:AttributeStatement>
			<saml:Attribute Name="email" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
				<saml:AttributeValue
					xmlns:xs="http://www.w3.org/2001/XMLSchema"
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">yezuwei@genauth.ai
				</saml:AttributeValue>
			</saml:Attribute>
			<saml:Attribute Name="name" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
				<saml:AttributeValue
					xmlns:xs="http://www.w3.org/2001/XMLSchema"
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string"/>
				</saml:Attribute>
				<saml:Attribute Name="username" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
					<saml:AttributeValue
						xmlns:xs="http://www.w3.org/2001/XMLSchema"
						xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">yezuwei@genauth.ai
					</saml:AttributeValue>
				</saml:Attribute>
				<saml:Attribute Name="phone" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
					<saml:AttributeValue
						xmlns:xs="http://www.w3.org/2001/XMLSchema"
						xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">null
					</saml:AttributeValue>
				</saml:Attribute>
			</saml:AttributeStatement>
		</saml:Assertion>
	</samlp:Response>
```

This content is the **identity assertion** of the user, that is, the **user's Token**, but this Token is passed in XML format.

Reading to this point, you may be wondering how SP and IdP handle these long XML information. GenAuth will solve these cumbersome processing, and you only need to focus on **how to correctly configure GenAuth IdP** to communicate with the SAML SP.
