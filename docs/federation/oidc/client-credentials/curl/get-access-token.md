The caller needs to send a POST request to the following address.

Request address: `https://{application domain name}.genauth.ai/oidc/token`

Parameter description:

| Parameter name | Description                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| grant_type     | Fill in client_credentials.                                                                                               |
| client_id      | Programming access account Key.                                                                                           |
| client_secret  | Programming access account Secret.                                                                                        |
| scope          | Requested permission items, each permission item is in the format of `resource identifier:operation` separated by spaces. |

Response result:

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjF6aXlIVG15M184MDRDOU1jUENHVERmYWJCNThBNENlZG9Wa3VweXdVeU0ifQ.eyJqdGkiOiJ2S1ZGV3FKemltTm5MSTlYZy0zam0iLCJpYXQiOjE2MTI1MDA2OTgsImV4cCI6MTYxMjUwNDI5OCwic2NvcGUiOiJib29rIiwiaXNzIjoiaHR0cHM6Ly9zdGVhbS10YWxrLmF1dGhpbmcuY24vb2lkYyIsImF1ZCI6IjYwMWJmMzVhY2E1ZDM4NzVjNDY3NDgyYyIsImF6cCI6IjYwMTkzYzYxMGY5MTE3ZTdjYjA0OTE1OSJ9.DS0l6zdlr_bGLqmDQRxvHUL4fmyLS5je6bqUCSSo06OIWSfcDZMZAqH5aYXP7Hzm4SiT6sfOCP_IiPSOxJPgFPYAmQTPSvJ5e6zs9jNeZyep_O6NWjlOGbDirskZE1pSZO_16ceiFr3jprSp13ff6O6Fa9YkY-8b_L3ouDqKhtb_4051pWZif-VzgXSkmvflTmqauJul9b5PzaeGWL-PKOrHrUiHjJwf9wqtR-3C8voFmi9pmxrUJYGSJoxwcxxSEceUY3d9oJU3v7e6FOnT_EMxfQCrAgzXR21bOitsAutOVXg1N9H0QJiNBESorCcj6yi1fVePTeDI5nY6xj9oDw",
  "expires_in": 3600,
  "token_type": "Bearer",
  "scope": "book",
  "rejected_scope": "message table"
}
```
