Initialize the [Node.js SDK](/reference/sdk-for-node/) `ManagementClient` using [User Pool ID (`userPoolId`) and User Pool Secret (`secret`)](/guides/faqs/get-userpool-id-and-secret.md):

```js
import { ManagementClient } from "authing-js-sdk";

const managementClient = new ManagementClient({
  userPoolId: "YOUR_USERPOOL_ID",
  secret: "YOUR_USERPOOL_SECRET",
});
```
