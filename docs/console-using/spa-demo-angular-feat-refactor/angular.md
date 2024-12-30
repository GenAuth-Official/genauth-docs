# Angular

This guide will start with the installation of the GenAuth Browser SDK and step by step guide you on how to quickly add user authentication capabilities to your existing or newly developed Angular applications.

<AppDetailSiderBar />

## Installation

```bash
$ yarn add @authing/web
```

## Authenticate your user

### Initialization

```js
import { GenAuth } from "@authing/web";

const sdk = new GenAuth({
  domain: "GEN_AUTH_DOMAIN", // Authentication address of the application
  appId: "GEN_AUTH_APP_ID", // Application ID
  redirectUri: "GEN_AUTH_REDIRECTURI", // Login callback address
});
```

### Simple authentication user

````html
<!-- src/app/app.component.html -->

<div>
  <p>
    <button (click)="login()">loginWithRedirect</button>
  </p>
  <p *ngIf="loginState">
    <textarea cols="100" rows="20" readonly>{{ loginState | json }}</textarea>
  </p>
</div>
``` ```ts //
<!-- src/app/app.component.ts -->
import { Component } from "@angular/core"; import { GenAuth } from
"@authing/web"; import type { LoginState } from
"@authing/web/dist/typings/global"; @Component({ selector: "app-root",
templateUrl: "./app.component.html", }) export class AppComponent { loginState:
LoginState | null = null; private sdk = new GenAuth({ domain: "GEN_AUTH_DOMAIN",
appId: "GEN_AUTH_APP_ID", redirectUri: "GEN_AUTH_REDIRECTURI", }); ngOnInit() {
// Check if the current url is the login callback address if
(this.sdk.isRedirectCallback()) { console.log("redirect"); /** * Open the login
page hosted by GenAuth in a redirect mode. After successful authentication, you
need to cooperate with * handleRedirectCallback method to process the *
authorization code or token sent by GenAuth at the callback endpoint to obtain
the user login status */ this.sdk.handleRedirectCallback().then((res) => {
this.loginState = res; window.location.replace("/"); }); } else {
this.getLoginState(); } } // Open the login page hosted by GenAuth in a redirect
mode login() { this.sdk.loginWithRedirect(); } // Get the user's login status
async getLoginState() { try { const state = await this.sdk.getLoginState();
this.loginState = state; } catch (error) { console.log(error); } } } ``` ##
Error handling ```ts async getLoginState() { try { const state = await
this.sdk.getLoginState(); this.loginState = state; } catch(error) {
console.log(error); } } ```
````
