# Use GenAuth to extend capabilities for automation

<LastUpdated/>

GenAuth has always been committed to improving the openness and scalability of the platform to meet the various personalized needs of different customers for identity authentication and permission management. GenAuth's scalability system currently includes the following forms:

- [WebHook](/guides/webhook/README.md) allows you to monitor user registration, login, password reset, email verification, user information update and other behaviors. The system will send events to the custom callback address you configured after triggering specific events, so as to do some custom processing on it.
- [Pipeline](/guides/pipeline/README.md) is a set of user-defined JavaScript codes running in the cloud, which allows developers to execute custom codes in the authentication process, add custom id_tokens, very flexible access control, etc.
- [Custom database](/guides/database-connection/overview.md) allows GenAuth to interact with your custom database, and can also realize the migration of user data to the cloud without downtime.
