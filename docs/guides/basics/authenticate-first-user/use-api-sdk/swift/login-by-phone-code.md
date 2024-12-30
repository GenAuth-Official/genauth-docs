Use the `sendSmsCode` method to log in with a mobile phone verification code:

```swift
self.client?.loginByPhoneCode(phone: textPhone.text!, code: textPhonecode.text!, completion:{ status in
    f(status.errors == nil) {
        //Success
        print(status.data?.loginByPhoneCode ?? "")
    } else {
        //Failure
        print(status.errors ?? "")
    }
})
```