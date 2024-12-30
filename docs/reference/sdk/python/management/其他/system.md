# Get server public information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

The endpoint can get the server's public information, such as RSA256 public key, SM2 public key, GenAuth service version number, etc.

## Method name

`ManagementClient.get_system_info`

## Request parameters

| Name | Type | <div style="width:80px">Is it required?</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ---- | ---- | --------------------------------------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |

## Request response

Type: `SystemInfoResp`

| Name      | Type                                                                                                       | Description                                       |
| --------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| rsa       | <a href="#SystmeInfoRSAConfig">SystmeInfoRSAConfig</a>                                                     | RSA256 encryption configuration information       |
| sm2       | <a href="#SystmeInfoRSAConfig">SystmeInfoRSAConfig</a> href="#SystmeInfoSM2Config">SystmeInfoSM2Config</a> | National SM2 encryption configuration information |
| version   | <a href="#SystmeInfoVersion">SystmeInfoVersion</a>                                                         | National SM2 encryption configuration information |
| publicIps | array                                                                                                      | GenAuth service external IP list                  |

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

| Name      | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| publicKey | string | Yes                                           | RSA256 public key                          | `xxxxxxxxxxxxxxxxxxxxxx`                    |

### <a id="SystmeInfoSM2Config"></a> SystmeInfoSM2Config

| Name      | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| --------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| publicKey | string | Yes                                           | SM2 public key                             | `xxxxxxxxxxxxxxxxxxxxxx`                    |

### <a id="SystmeInfoVersion"></a> SystmeInfoVersion

| Name    | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------- | ------ | --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| server  | string | Yes                                           | GenAuth core service version number        | `2.0.0`                                     |
| console | string | Yes                                           | GenAuth console version number             | `2.0.0`                                     |
| login   | string | Yes                                           | GenAuth hosted login page version number   | `2.0.0`                                     |
