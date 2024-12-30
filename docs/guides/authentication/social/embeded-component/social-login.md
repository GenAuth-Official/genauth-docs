{{$localeConfig.brandName}} Embed Login component can be embedded into your application and configured according to your needs. It is recommended for single-page applications. It allows you to easily add various social login methods so that your users can log in seamlessly and have a consistent login experience on different platforms.

Guard supports three front-end frameworks, React, Vue, and Angular, as well as native JS calls. Take the React component as an example: you can pass in socialConnections to specify the social login methods to be displayed. If not, all configured ones will be displayed by default.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { AuthingGuard } from "@authing/react-ui-components";
// Import css file
import "@authing/react-ui-components/lib/index.min.css";

const App = () => {
  const appId = "GEN_AUTH_APP_ID";
  const onLogin = (userInfo) => {
    console.log(userInfo);
  };
  return (
    <Guard
      appId={appId}
      config={{
        title: "{{$localeConfig.brandName}}",
        socialConnections: ["github"],
      }}
      onLogin={onLogin}
    />
  );
};

ReactDOM.render(<App />, root);
```

For detailed documentation, please see: [Login component](../../../../reference/guard/README.md).
