# List of complete interfaces for APP code scanning login

<LastUpdated/>

{{$localeConfig.brandName}} provides a REST-based code scanning login interface that developers can call directly.

## Generate QR code

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/api/qrcode/gene" description="This interface will return the QR code ID (random) and QR code link.">
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User pool ID" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="customeData" type="string" description="Custom data field, which will be written into the original data of the QR code." />
<ApiMethodParam name="scene" type="string" required description="Scene value. It is a constant value, fill in APP_AUTH." />
</template>
<template slot="response">
<ApiMethodResponse>
<template slot="description">

Field explanation:

- random: QR code unique mark, used for querying QR code status and user confirmation authorization interface.
- url: QR code image address.
- expiresIn: QR code validity period.

</template>

```json
{
  "code": 200,
  "data": {
    "random": "SzZrszCJNCFfVBDUCKLDtAYNBR96SK",
    "expiresIn": 120,
    "url": "https://files.authing.co/user-contentsqrcode/5fae2648201cfd526f0ec354/SzZrszCJNCFfVBDUCKLDtAYNBR96SK.png"
  }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

Generated QR code example:

![](https://files.authing.co/user-contentsqrcode/5fae2648201cfd526f0ec354/SzZrszCJNCFfVBDUCKLDtAYNBR96SK.png)

使用[在线二维码解码工具](https://cli.im/deqr) 查看二维码数据如下：

```json
{
  "scene": "APP_AUTH",
  "random": "SzZrszCJNCFfVBDUCKLDtAYNBR96SK",
  "userPoolId": "5fae2648201cfd526f0ec354",
  "createdAt": "2020-11-13T06:23:25.396Z",
  "expiresIn": 120,
  "customData": {}
}
```

## Query QR code status

<ApiMethodSpec method="get" host="https://core.genauth.ai" path="/api/qrcode/check">
<template slot="queryParams">
<ApiMethodParam name="random" type="string" required description="QR code ID." />
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
  "code": 200,
  "message": "Query QR code status successfully!",
  "data": {
    "random": "SzZrszCJNCFfVBDUCKLDtAYNBR96SK",
    "userInfo": {},
    "status": 0,
    "ticket": null,
    "scannedUserId": null
  }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

Request result field description:

- status
  - 0: Not scanned.
  - 1: Scanned but the user has not clicked to agree to authorization or cancel authorization. At this time, the user's avatar and nickname will be returned, but no other confidential information will be included. It can be used for front-end avatar display.
  - 2: User agrees to authorization
  - 3: User cancels authorization
  - -1: Expired
- userInfo:
  - By default, after the user scans the code, the nickname and avatar fields will be included
  - Developers can also configure the return of complete user information (including login credentials token)
- ticket: used to exchange for complete user information. **This field will only appear after the user agrees to authorization. **See below for details.

## Use ticket to exchange for user information

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/api/qrcode/userinfo">
<template slot="bodyParams">
<ApiMethodParam name="ticket" type="string" required description="Ticket returned by the query QR code status interface" />
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
  "code": 200,
  "message": "Exchange for user information successfully",
  "data": {
    "id": "5e05bbf2d51b3761d5c71070",
    "email": "983132@qq.com",
    "emailVerified": false,
    "oauth": "",
    "username": "983132@qq.com",
    "nickname": "",
    "company": "",
    "photo": "https://usercontents.authing.co/authing-avatar.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiOTgzMTMyQHFxLmNvbSIsImlxxxxxxxxx",
    "phone": "",
    "tokenExpiredAt": "2020-01-11T08:08:18.000Z",
    "loginsCount": 1,
    "lastIp": "::1",
    "signedUp": "2019-12-27T08:08:18.115Z",
    "blocked": false,
    "isDeleted": false
  }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-info
Note: By default, this interface is only allowed to be called on the server side, that is, after initialization with the user pool key.

The default validity period of the ticket is 300 seconds.

Developers can modify it in the [{{$localeConfig.brandName}} console](https://console.genauth.ai/console/userpool) **Basic Configuration** -> **Basic Settings** -> **App Scan Code Login Web Custom Configuration**. **For details, see [Custom Configuration Item Page](./customize-settings.md). **
:::

## APP-side mark scanned code

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/api/qrcode/scanned" description="The APP side marks that the code has been scanned. After marking the code scanned, the web side will be able to obtain the nickname and avatar of the current user.">
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="User login credentials." />
</template>
<template slot="bodyParams">
<ApiMethodParam name="random" type="string" required description="QR code ID." />
</template>
<template slot="response">
<ApiMethodResponse>

```js
{
    code: 200,
    message: "QR code scanning confirmed successfully",
    data: {
        random: "", // Return as is
        status: 0,
        description: "xxxx",
    }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-info
The APP needs to meet two conditions:

1. The user must be logged in
2. The user's user pool ID matches the QR code user pool ID.

:::

## APP side agrees to authorization

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/api/qrcode/confirm" description="APP side agrees to authorization. Before calling this interface, you need to call the scanned interface first.">
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="User login credentials." />
</template>
<template slot="bodyParams">
<ApiMethodParam name="random" type="string" required description="QR code ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```js
{
    code: 200,
    message: "Authorization login successful",
    data: {
        random: "", // Return as is
        status: 1,
        description: "xxxx",
    }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-info
The APP needs to meet two conditions:

1. The user must be logged in
2. The user's user pool ID matches the QR code user pool ID.
   :::

## Cancel authorization on the APP

<ApiMethodSpec method="post" host="https://core.genauth.ai" path="/api/qrcode/cancel" description="App end cancels authorization. Before calling this interface, you need to call the scanned interface first.">
<template slot="headers">
<ApiMethodParam name="x-authing-userpool-id" type="string" required description="User pool ID" />
<ApiMethodParam name="Authorization" type="string" required description="User login credentials." />
</template>
<template slot="bodyParams">
<ApiMethodParam name="random" type="string" required description="QR code ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```js
{
    code: 200,
    message: "Cancel authorization successfully",
    data: {
        random: "", // Return as is
        status: -1,
        description: "xxxx",
    }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-info
The APP needs to meet two conditions:

1. The user must be logged in
2. The user's user pool ID matches the QR code user pool ID.

:::
