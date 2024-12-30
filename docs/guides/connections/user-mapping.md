# Account matching rules for identity source connection

<LastUpdated/>

When a user logs in using a third-party identity source configured by the administrator, we will merge the user information according to the account matching rules for identity source connection. Friendly reminder, if the corresponding matching field in the identity source is not credible, there will be a risk of user identity information being used by a third party, so please use this function with caution.

Whether the identity source connection supports account matching rules will only take effect when the administrator enables this login method in the configuration. The detailed matching rules are shown in the following table:

<table>
  <thead>
    <tr>
      <th>Identity source</th>
      <th>Connection method</th>
      <th>Support account matching rules</th>
      <th>Matching fields</th>
      </tr>
  </thead>  <tr>
      <td>Gitlab (gitlab)</td>
      <td>Web</td>
      <td>Yes</td>
      <td>Email</td>
  </tr>
    <tr>
      <td rowspan=7>WeChat (wechat)</td>
      <td>PC web scan code</td>
      <td>No</td>
      <td>None</td>
    </tr>
    <tr>
      <td>WeChat browser web login</td>
      <td>No</td>
      <td>None</td>
    </tr>
    <tr>
       <td>Mini-program pulls up APP Login</td>
       <td>No</td>
       <td>None</td>
    </tr>
    <tr>
       <td>Mobile APP </td>
       <td>No</td>
       <td>None</td>
    </tr>
   <tr>
       <td>Scan QR code for small login</td>
       <td>Yes</td>
       <td>Mobile number</td>
    </tr>
   <tr>
       <td>Follow public account scan code </td>
       <td>No</td>
       <td>None</td>
    </tr>
   <tr>
       <td>Internal login of mini-program </td>
       <td>No</td>
       <td>None</td>
    </tr>
  <tr>
      <td>Github</td>
      <td>Web</td>
      <td>Yes</td>
      <td>Email</td>
  </tr><tr>
  <td rowspan='2' >WeChat for Business (WeCom)</td>
    <td>WeChat for Business Internal Application Scan Code/Web Authorization Login</td>
    <td>Yes</td>
    <td>Mobile Number, Email
</td>
  </tr><tr>
    <td>WeChat for Business Third-Party Application Scan Code Authorization Login</td>
    <td>No</td>
    <td>None</td>
  </tr><tr>
  <td rowspan='2'>Lark</td>
    <td>Feishu App Store Application</td>
    <td>Yes</td>
    <td>Mobile Number, Email</td>
  </tr><tr>
    <td>Lark Enterprise Self-built Application</td>
    <td>Yes</td>
    <td>Mobile phone number, email</td>
  </tr><tr>
  <td>Slack</td>
    <td>Web</td>
    <td>Yes</td>
    <td>Email</td>
  </tr><tr>
  <td>DingTalk</td>
   <td>Web</td>
    <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>LinkedIn</td>
  <td>Web</td>
    <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>Twitter</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>Facebook</td>
  <td>Web</td>
      <td>Yes</td>
    <td>Email</td>
  </tr><tr>
  <td>Baidu</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td rowspan='2'>Apple</td>
  <td>Web</td>
      <td>Yes</td>
    <td>Email</td>
  </tr><tr>
  <td>Mobile</td>
      <td>Yes</td>
    <td>Email</td>
  </tr><tr>
  <td rowspan='2'>Alipay</td>
  <td>Web</td>
      <td>No</td>
  <td>None</td>
  </tr><tr>
<td>Mobile</td>
 <td>No</td>
 <td>None</td>
  </tr><tr>
  <td>QQ</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>Google</td>
  <td>Web</td>
      <td>Yes</td>
    <td>Email</td>
  </tr><tr>
  <td>OAuth 2.0</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>OIDC</td>
  <td>Web</td>
      <td>Yes</td>
    <td>Mobile phone number, email</td>
  </tr><tr>
  <td>SMAL</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>CAS</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>LDAP</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>Azure AD</td>
  <td>Web</td>
     <td>Yes</td>
    <td>Mobile phone number, email</td>
  </tr><tr>
  <td>Windows AD</td>
  <td>Web</td>
      <td>No</td>
    <td>None</td>
  </tr><tr>
  <td>Qingyun</td>
  <td>Web</td>
       <td>Yes</td>
    <td>Mobile phone number, email</td>
  </tr>
</table>
