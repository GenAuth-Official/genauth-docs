# Create or import an organization

<LastUpdated/>

If you haven't created your own organization yet, we recommend that you use {{$localeConfig.brandName}} as the primary identity source to store user and organization data; if you store your own organization data elsewhere, we also support importing or syncing third-party organization data to {{$localeConfig.brandName}}.

## Create an organization

You can choose to create it using the console or API & SDK.

<StackSelector snippet="create-org" selectLabel="Select method" :order="['dashboard', 'java', 'javascript']"/>

## Import organization

{{$localeConfig.brandName}} Organization supports importing organizations and users from the following channels:

- [Excel](/connections/excel/)
- Sync Center Sync (new version)
  - [WeChat for Enterprise](/connections/wechatwork/)
  - [DingTalk](/connections/dingtalk-oa/)
  - [Feishu](/connections/lark/)
  - [LDAP Server](/connections/ldap/)
  - ...
- You can also use API & SDK to [write user import scripts](/guides/migrations/use-api.md).
