!!!include(common/init-swift-auth-sdk.md)!!!

Set custom fields:

```swift
self.client?.setUdv(key: "HelloDate", value: Date(), completion:{ status in
    if(status.errors == nil) {
        //Success
         print(status.data?.setUdv ?? "")
    } else {
        //Failure
        print(status.errors ?? "")
    }
})
```

Get the latest custom data of the user:

```swift
self.client?.listUdv(completion:{ status in
    if(status.errors == nil) {
        //Success
         print(status.data?.udv ?? "")
    } else {
        //Failure
        print(status.errors ?? "")
    }
})
```
