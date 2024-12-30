# Get server public information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If this document description is incorrect, please refer to V3 API.

The endpoint can obtain the server's public information, such as RSA256 public key, SM2 public key, GenAuth service version number, etc.

## Method name

`AuthenticationClient.getSystemInfo`

## Request parameters

| Name | Type | <div style="width:80px">Required</div> | Default value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Sample value</div> |
| ---- | ---- | -------------------------------------- | ------------- | ------------------------------------------ | ------------------------------------------------- |

## Sample code

```ts
import { AuthenticationClient, Models } from "authing-node-sdk";

const authenticationClient = new AuthenticationClient({
  // Need to replace with your GenAuth AppId, Secret and Host
  appId: "GEN_AUTH_APP_ID",
  appSecret: "GEN_AUTH_APP_SECRET",
  appHost: "GEN_AUTH_APP_HOST",
});

(async () => {
  const result = await authenticationClient.getSystemInfo();

  console.log(JSON.stringify(result, null, 2));
})();
```

## Request response

Type: `SystemInfoResp`

| Name      | Type                                                   | Description                                       |
| --------- | ------------------------------------------------------ | ------------------------------------------------- |
| rsa       | <a href="#SystmeInfoRSAConfig">SystmeInfoRSAConfig</a> | RSA256 encryption configuration information       |
| sm2       | <a href="#SystmeInfoSM2Config">SystmeInfoSM2Config</a> | National SM2 encryption configuration information |
| version   | <a href="#SystmeInfoVersion">SystmeInfoVersion</a>     | National SM2 encryption configuration information |
| publicIps | array                                                  | GenAuth service external IP list                  |

Sample result:

```json
{
  "rsa": {
    "publicKey": "xxxxxxxxxxxxxxxxxxxxxx"
  },
  "sm2": {
    "publicKey": "xxxxxxxxxxxxxxxxxxxxxx"
  },
  "version": {
    "server": "2.0.0",
    "console": "2.0.0",
    "login": "2.0.0"
  }
}
```

## Data structure

### <a id="SystmeInfoRSAConfig"></a> SystmeInfoRSAConfig

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| publicKey | string | Yes                                          | RSA256 public key                          | `xxxxxxxxxxxxxxxxxxxxxx`                    |

### <a id="SystmeInfoSM2Config"></a> SystmeInfoSM2Config

| Name      | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| publicKey | string | Yes                                           | SM2 public key                             | `xxxxxxxxxxxxxxxxxxxxxx`                    |

### <a id="SystmeInfoVersion"></a> SystmeInfoVersion

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| server  | string | yes                                           | GenAuth core service version number        | `2.0.0`                                     |
| console | string | yes                                           | GenAuth console version number             | `2.0.0`                                     |
| login   | string | yes                                           | GenAuth hosted login page version number   | `2.0.0`                                     |
