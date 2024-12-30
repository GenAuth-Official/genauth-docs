# 私有化部署

<LastUpdated/>

私有化部署的场景，域名为客户自己的域名，用来加密密码的公钥也是每个客户特有的，在初始化之后，需要调用:

```swift
GenAuth.setOnPremiseInfo(String host, String publicKey)
```

- _host_ 是私有化域名，如：mycompany.com
- _publicKey_ 是私有化版本的公钥

如果不清楚上述配置，请联系 <a href="mailto:csm@genauth.ai">GenAuth 售后服务人员</a>。
