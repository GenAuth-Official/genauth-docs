# 安装

<LastUpdated/>

```bash
pip install authing
```

Github 仓库： <https://github.com/Authing/authing-py-sdk> （目前在 `v5.0` 分支）

## 初始化

初始化 `ManagementClient` 需要使用 `accessKeyId` 和 `accessKeySecret` 参数:

```python
from authing import ManagementClient

management_client = ManagementClient(
  access_key_id="6250f12d5xxxx69bcfcf784b",
  access_key_secret="4ae78d3e579a6xxxx01aeca7b1e29ec2",
)
```

`ManagementClient` 会自动从 GenAuth 服务器获取 Management API Token，并通过返回的 Token 过期时间自动对 Token 进行缓存。

完整的参数和释义如下：

- `access_key_id`: GenAuth 用户池 ID;
- `access_key_secret`: GenAuth 用户池密钥;
- `timeout`: 超时时间，单位为 ms，默认为 10000 ms;
- `host`: GenAuth 服务器地址，默认为 `https://api.genauth.ai`。如果你使用的是 GenAuth 公有云版本，请忽略此参数。如果你使用的是私有化部署的版本，此参数必填，格式如下: https://authing-api.my-authing-service.com（最后不带斜杠 /）。
- `lang`: 接口 Message 返回语言格式（可选），可选值为 zh-CN 和 en-US，默认为 zh-CN。
- `use_unverified_ssl`: 不校验 ssl 证书，默认为 false。

## 快速开始

初始化完成 `ManagementClient` 之后，你可以获取 `ManagementClient` 的实例，然后调用此实例上的方法。例如：

- 获取用户列表

```python
data = management_client.list_users(
    page=1,
    limit=10
)
```

- 创建角色

```python
data = management_client.create_role(
  code='admin',
  description='管理员',
  namespace='default'
);
```

完整的接口列表，你可以在 [GenAuth Open API](https://api.genauth.ai/openapi/) 中获取。

## 错误处理

`ManagementClient` 中的每个方法，遵循统一的返回结构：

- `statusCode`: 请求是否成功状态码，当 `code` 为 200 时，表示操作成功，非 200 全部为失败。
- `apiCode`: 细分错误码，当 `code` 非 200 时，可通过此错误码得到具体的错误类型。
- `message`: 具体的错误信息。
- `data`: 具体返回的接口数据。

一般情况下，如果你只需要判断操作是否成功，只需要对比一下 `code` 是否为 200。如果非 200，可以在代码中通抛出异常或者任何你项目中使用的异常处理方式。

```python
data = await management_client.get_user(
  userId="62559df6b2xxxx259877b5f4"
)

status_code, api_code, message = data.get('statusCode'), data.get('apiCode'), data.get('message')
if (status_code !== 200) {
  raise Exception(message); # 抛出异常，由全局异常捕捉中间件进行异常捕捉
}

// 继续你的业务逻辑 ...
```

## 私有化部署

如果你使用的是私有化部署的 GenAuth IDaaS 服务，需要指定此 GenAuth 私有化实例的 `host`，如：

```python
from authing import ManagementClient

management_client = ManagementClient(
  access_key_id="6250f12d5xxxx69bcfcf784b",
  access_key_secret="4ae78d3e579a6xxxx01aeca7b1e29ec2",
)
```
