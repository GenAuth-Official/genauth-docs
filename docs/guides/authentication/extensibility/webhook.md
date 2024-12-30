# Use Webhook to listen to authentication events

<LastUpdated/>

[Webhooks](/guides/webhook/) allows you to listen to user registration, login and other behaviors, so as to perform some custom processing on them. When your user logs in, registers, changes password, and verifies MFA (for a detailed list of events, see [List of events supported by Webhook](/guides/webhook/#Supported events)), an HTTP POST request will be sent to the remote HTTP URL you configured, where you can complete related event processing, such as:

- After the user registers at {{$localeConfig.brandName}}, synchronize the user information to the OA system;
- After the user modifies the user information, synchronize the changes in the user information to the OA system;
- After the user's email is verified, add corresponding points to the user, etc.

For more details, see [Webhooks](/guides/webhook/).
