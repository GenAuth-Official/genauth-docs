---
meta:
  - name: description
    content: Deploy a transit proxy server
---

# How to deploy a transit proxy server

<LastUpdated/>

## HTTP proxy

The following takes [goproxy](https://github.com/snail007/goproxy/blob/master/README_ZH.md) as an example to briefly introduce the deployment process of https proxy. For detailed official documents, please see: [https://github.com/snail007/goproxy/blob/master/README_ZH.md](https://github.com/snail007/goproxy/blob/master/README_ZH.md).

Run as root:

```
curl -L https://mirrors.host900.com/snail007/goproxy/install_auto.sh | bash
```

Wait for it to finish. When the following prompt is output, it means that the installation is successful:

```
>>> installing ...
>>> install done, thanks for using snail007/goproxy free_10.0
>>> install path /usr/bin/proxy
>>> configuration path /etc/proxy
>>> uninstall just exec : rm /usr/bin/proxy && rm -rf /etc/proxy
>>> How to using? Please visit : https://snail007.github.io/goproxy/manual/zh/
```

Run (replace $PORT with the port you want to use):

```
proxy http -t tcp -p "0.0.0.0:$PORT"
```

When the following prompt appears, it means the operation is successful:

```
2020/09/23 19:25:34 tcp http(s) proxy on [::]:xxxxxx
```

Please make sure that the server's firewall rules allow {{$localeConfig.brandName}} server to access. The external IP of {{$localeConfig.brandName}} server is:

```
52.80.250.250
140.179.19.50
```