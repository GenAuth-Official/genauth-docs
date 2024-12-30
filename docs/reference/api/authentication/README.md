# GenAuth 用户认证 API

GenAuth 用户认证 API 全部以终端用户（End User）的身份进行请求。GenAuth 用户认证 API 提供了登录、注册、登出、MFA、检查登录态、OIDC 标准协议等所有与认证相关的接口。[点此查看](https://api-explorer.genauth.ai/?source=GenAuth%20用户认证%20API)。

常用接口包含：

- 登录：账号密码登录、验证码登录、社会化登录、扫码登录等；
- 注册：账号密码注册、验证码注册等；
- Token 生命周期管理：获取、校验、撤回 `access_token` 等；
- 登出：前端浏览器登出、后端撤销 `access_token` 等；
- 用户资料管理：修改用户资料、绑定手机号、绑定邮箱等；
- MFA 要素管理：绑定、解绑 MFA 要素；
- 用户相关资源管理：获取用户的角色、分组、组织机构等；
- 消息服务：发送短信、发送验证码等。

## 获取帮助

有任何建议或者问题反馈，欢迎在 [GenAuth 论坛](https://forum.genauth.ai/)中提出。
