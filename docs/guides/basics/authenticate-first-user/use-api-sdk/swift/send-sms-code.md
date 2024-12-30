Use the `sendSmsCode` method to send the verification code:

```swift
self.client?.sendSmsCode(phone: textPhone.text!, completion: { status in
    print(status)
})
```