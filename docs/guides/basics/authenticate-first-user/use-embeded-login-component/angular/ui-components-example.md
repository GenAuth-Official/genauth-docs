**First, install the GenAuth library through npm/yarn/cnpm.**

It is recommended to use npm (stable version v3.1.21) or yarn, which can better cooperate with the [webpack](https://webpack.js.org/) packaging tool, and can also be safely packaged and deployed in the production environment to enjoy the many benefits brought by the entire ecosystem and tool chain.
If your network environment is not good, you can also use [cnpm](https://github.com/cnpm/cnpm) .

Run the following command line to install the GenAuth Angular.JS library:

```sh
$ yarn add @authing/guard-angular

# OR

$ npm install @authing/guard-angular --save
```

**Next, complete the configuration in your Angular application:**

First, you need to add to the project's angular.json:

```json
// Code example: https://github.com/Authing/Guard/blob/master/examples/guard-angular/normal/angular.json
{
  "projects": {
    "architect": {
      "build": {
        "styles": ["node_modules/@authing/guard-angular/dist/guard.min.css"]
      }
    }
  }
}
```

Initialize in the Angular project:

`app.module.ts`

```js
// Code example: https://github.com/Authing/Guard/blob/master/examples/guard-angular/normal/src/app/app.module.ts
// app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GuardModule } from "@authing/guard-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuardModule.forRoot({
      appId: "GEN_AUTH_APP_ID",
      // If you are using a privately deployed GenAuth service, you need to pass in a custom host, such as:
      // host: 'https://my-authing-app.example.com',

      // By default, the first callback address you configured in the GenAuth console will be used as the callback address for this authentication.
      // If you have configured multiple callback addresses, you can also specify them manually (this address also needs to be added to the "Login callback URL" of the application):
      // redirectUri: "YOUR_REDIRECT_URI",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

`embed.component.ts`

```js
// Code example: https://github.com/Authing/Guard/blob/master/examples/guard-angular/normal/src/app/pages/embed/embed.component.ts
import { Component } from "@angular/core";
import { GuardService, User } from "@authing/guard-angular";

@Component({
  selector: "embed-container",
  templateUrl: "./embed.component.html",
  styleUrls: ["./embed.component.css"]
})
export class LoginComponent {
  constructor(private guard: GuardService) {}

  ngOnInit() {
    // Use the start method to mount the Guard component to the DOM node you specify, and return userInfo after successful login
    this.guard.client
      .start("#authing-guard-container")
      .then((userInfo: User) => {
        console.log("userInfo: ", userInfo);
      });
  }
}
```
