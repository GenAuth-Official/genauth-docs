<ApiMethodSpec method="get" host="https://core.genauth.ai" path="/oidc/me" summary="Use access_token in exchange for user information"> <template slot="queryParams"> <ApiMethodParam name="access_token" type="string" required description="access_token" /> </template> <template slot="response"> <ApiMethodResponse> `json { "sub": "5f7174df27e0eb9c6d21436d", // The abbreviation of subject, which is the user ID "birthdate": null, "family_name": null, "gender": "U", "given_name": null, "locale": null, "middle_name": null, "name": null, "nickname": null, "picture": "https://usercontents.genauth.ai/authing-avatar.png", "preferred_username": null, "profile": null, "updated_at": "2020-09-28T05:33:15.892Z", "website": null, "zoneinfo": null } ` </ApiMethodResponse> </template> </ApiMethodSpec> curl request example: ```shell curl --request GET \ --url 'https://core.genauth.ai/oidc/me?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2 MDczYjhlYzFlZGQ2NTVlMDM0ZjdlYjQiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJ VIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja2 5hbWUiOm51bGwsInBpY3R1cmUiOiJodHRwczovL2ZpbGVzLmF1dGhpbmcuY28vYXV0aGluZy1jb25zb2xlL2RlZmF1bHQtdX Nlci1hdmF0YXIucG5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjpudWxsLCJ1cGRhdGVkX2F0IjoiM jAyMS0wNC0xMlQwMzozNzoyNi4wNTdaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsImFkZHJlc3MiOnsiY291b nRyeSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGwsInJlZ2lvbiI6bnVsbCwiZm9ybWF0dGVkIjpudWxsfSwicGhvbmVfbnVt YmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJlbWFpbCI6IndhbmdsYW90aWVAZnVsb25nLnRlY2gi LCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImV4dGVybmFsX2lkIjpudWxsLCJ1bmlvbmlkIjpudWxsLCJkYXRhIjp7InR5cGU iOiJ1c2VyIiwidXNlclBvb2xJZCI6IjYwNDg4OTIxMjMzN2M5ZjBhZWI4MjUwOCIsImFwcElkIjoiNjA2ZGFkYzFiZDYxZG ZiNTYyZTc4MDQ2IiwiaWQiOiI2MDczYjhlYzFlZGQ2NTVlMDM0ZjdlYjQiLCJ1c2VySWQiOiI2MDczYjhlYzFlZGQ2NTVlM DM0ZjdlYjQiLCJfaWQiOiI2MDczYjhlYzFlZGQ2NTVlMDM0ZjdlYjQiLCJwaG9uZSI6bnVsbCwiZW1haWwiOiJ3YW5nbGFvd GllQGZ1bG9uZy50ZWNoIiwidXNlcm5hbWUiOm51bGwsInVuaW9uaWQiOm51bGwsIm9wZW5pZCI6bnVsbCwiY2xpZW50SWQi OiI2MDQ4ODkyMTIzMzdjOWYwYWViODI1MDgifSwidXNlcnBvb2xfaWQiOiI2MDQ4ODkyMTIzMzdjOWYwYWViODI1MDgiLCJh dWQiOiI2MDZkYWRjMWJkNjFkZmI1NjJlNzgwNDYiLCJleHAiOjE2MTk0MDgyNDYsImlhdCI6MTYxODE5ODY0NiwiaXNzIjo iaHR0cHM6Ly9mdWxvbmctdWFtcy5hdXRoaW5nLmNuL29pZGMifQ.Un3uPEIh1OJaWbujkaFLfsbkLQqLwhHCiCRLbzxoxJ8' \

````

Return example:

```json
{
"sub": "5f7174df27e0eb9c6d21436d", // abbreviation of subject, which is the user ID
"birthdate": null,
"family_name": null,
"gender": "U",
" given_name": null,
"locale": null,
"middle_name": null,
"name": null,
"nickname": null,
"picture": "https://usercontents.genauth.ai/authing-avatar.png" ,
"preferred_username": null,
"profile": null,
"updated_at": "2020-09-28T05:33:15.892Z",
"website": null,
"zoneinfo": null
}
````
