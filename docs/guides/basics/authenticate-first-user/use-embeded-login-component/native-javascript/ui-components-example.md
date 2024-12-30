**In your HTML file, use `script` and `link` tags to import the file directly, and use the global variable `GuardFactory`. **

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GenAuth Guard Demo</title>
    <script src="https://cdn.authing.co/packages/guard/5.1.0/guard.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.authing.co/packages/guard/5.1.0/guard.min.css"
    />
  </head>
  <body>
    <div id="authing-guard-container"></div>

    <script>
      const guard = new GuardFactory.Guard({
        // You can view your APP ID in the app details page of the GenAuth console
        appId: "GEN_AUTH_APP_ID",

        // If you are using a privately deployed GenAuth service, you need to pass in a custom host, such as:
        // host: 'https://my-authing-app.example.com',

        // By default, the first callback address you configured in the GenAuth console will be used as the callback address for this authentication.
        // If you have configured multiple callback addresses, you can also specify them manually (this address also needs to be added to the "Login Callback URL" of the application):
        // redirectUri: "YOUR_REDIRECT_URI"
      });

      // Mount GenAuth Guard
      guard.start("#authing-guard-container");
    </script>
  </body>
</html>
```
