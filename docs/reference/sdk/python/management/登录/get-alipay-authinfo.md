# Get Alipay AuthInfo

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

This interface is used to obtain the [initialization parameter AuthInfo](https://opendocs.alipay.com/open/218/105325) required to initiate Alipay authentication.

## Method name

`ManagementClient.get_alipay_auth_info`

## Request parameters

| Name                 | Type   | <div style="width:80px">Required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>     | <div style="width:200px">Sample value</div> |
| -------------------- | ------ | -------------------------------------- | ------------------------------------------- | ---------------------------------------------- | ------------------------------------------- |
| extIdpConnidentifier | string | Yes                                    | -                                           | External identity source connection identifier | `wework`                                    |

## Request response

Type: `GetAlipayAuthInfoRespDto`

| Name       | Type                                                       | Description                                                                                                  |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| statusCode | number                                                     | Business status code, which can be used to determine whether the operation is successful, 200 means success. |
| message    | string                                                     | description                                                                                                  |
| apiCode    | number                                                     | subdivided error code, which can be used to get the specific error type.                                     |
| requestId  | string                                                     | request ID. It will be returned when the request fails.                                                      |
| data       | <a href="#AlipayAuthInfoDataDto">AlipayAuthInfoDataDto</a> | response data                                                                                                |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "authInfo": "apiname=com.alipay.account.auth&app_id=xxxxx&app_name=mc&auth_type=AUTHACCOUNT&biz_type=openservice&method=alipay.open.auth.sdk.code.get&pid=xxxxx&product_id=APP_FAST_LOGIN&scope=kuaijie&sign_type=RSA2&target_ id=20141225xxxx&sign=fMcp4GtiM6rxSIeFnJCVePJKV43eXrUP86CQgiLhDHH2u%2FdN75eEvmywc2ulkm7qKRetkU9fbVZtJIqFdM JcJ9Yp%2BJI%2FF%2FpESafFR6rB2fRjiQQLGXvxmDGVMjPSxHxVtIqpZy5FDoKUSjQ2%2FILDKpu3%2F%2BtAtm2jRw1rUoMhgt0%3D"
  }
}
```

## Data structure

### <a id="AlipayAuthInfoDataDto"></a> AlipayAuthInfoDataDto

| Name     | Type   | <div style="width:80px">Is it required?</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div>                                                                                                                                                                                                                                                                                                                                                                                            |
| -------- | ------ | --------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authInfo | string | Yes                                           | AuthInfo required to pull up Alipay        | `apiname=com.alipay.account.auth&app_id=xxxxx&app_name=mc&auth_type=AUTHACCOUNT&biz_type=openservice&method=alipay.open.auth.sdk.code.get&pid=xxxxx&product_id=APP_FAST_LOGIN&scope=kuaijie&sign_type=RSA2&target_ id=20141225xxxx&sign=fMcp4GtiM6rxSIeFnJCVePJKV43eXrUP86CQgiLhDHH2u%2FdN75eEvmywc2ulkm7qKRetkU9fbVZtJIqFdM JcJ9Yp%2BJI%2FF%2FpESafFR6rB2fRjiQQLGXvxmDGVMjPSxHxVtIqpZy5FDoKUSjQ2%2FILDKpu3%2F%2BtAtm2jRw1rUoMhgt0%3D` |
