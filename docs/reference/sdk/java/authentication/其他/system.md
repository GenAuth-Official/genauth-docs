# Get server public information

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

The endpoint can get the server's public information, such as RSA256 public key, SM2 public key, GenAuth service version number, etc.

## Method Name

`AuthenticationClient.getSystemInfo`

## Request Parameters

| Name | Type | <div style="width:80px">Is it required</div> | Default Value | <div style="width:300px">Description</div> | <div style="width:200px"></div>Example Value</div> |
| ---- | ---- | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |

## Request Response

Type： `SystemInfoResp`

| Name | Type | Description |
| --------- | ------------------------------------------------------ | ------------------------ |
| rsa | <a href="#SystmeInfoRSAConfig">SystmeInfoRSAConfig</a> | RSA256 encryption configuration information |
| sm2 | <a href="#SystmeInfoSM2Config">SystmeInfoSM2Config</a> | National SM2 encryption configuration information |
| version | <a href="#SystmeInfoVersion">SystmeInfoVersion</a> | National SM2 encryption configuration information |
| publicIps | array | GenAuth service external IP list |
Example Results：

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

## Data Structure

### <a id="SystmeInfoRSAConfig"></a> SystmeInfoRSAConfig

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| publicKey | string | Yes | RSA256 public key | `xxxxxxxxxxxxxxxxxxxxxx` | 

### <a id="SystmeInfoSM2Config"></a> SystmeInfoSM2Config 

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| publicKey | string | Yes | SM2 public key | `xxxxxxxxxxxxxxxxxxxxxx` | 

### <a id="SystmeInfoVersion"></a> SystmeInfoVersion 

| Name      | Type   | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Example Value</div> |
| --------- | ------ | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| server | string | yes | GenAuth core service version number | `2.0.0` |
| console | string | yes | GenAuth console version number | `2.0.0` |
| login | string | yes | GenAuth hosted login page version number | `2.0.0 `                              |
