# Migrate users to {{$localeConfig.brandName}}

<LastUpdated/>

If you want to import users from your system to {{$localeConfig.brandName}}, please be sure to read the instructions in this section.

If you want to migrate users to {{$localeConfig.brandName}} smoothly without downtime, you need to use the custom database function and write the corresponding database script. The first time a user authenticates, the user will be authenticated using the custom data script you configured. After successful authentication, the user will be migrated to the {{$localeConfig.brandName}} database; the second time a user authenticates, the {{$localeConfig.brandName}} database will be used for verification. When all users have authenticated at least once, the migration process is complete. For details, see [Lazy Migration of Users to {{$localeConfig.brandName}}](/guides/database-connection/lazy-migration.md).

If you want to use your own database to store user data and do not want to expose user data to {{$localeConfig.brandName}}, you can [use a custom database to store user data](/guides/database-connection/custom-user-store.md).

You can also choose to import all users into {{$localeConfig.brandName}} at once. We provide API & SDK to help you quickly write import scripts. For details, please see [Use SDK to import users](./use-api.md). In this process, you also need to confirm a question first: Can you get the user's plain text password? If you can get it, just use the plain text password to create a new user; if not, you need to [write a custom password function](/guides/extensibility/custom-password-script) first, so that when the user logs in in {{$localeConfig.brandName}}, the custom password encryption and verification function you wrote will be used, and the user's previous password will still be valid, without requiring the user to reset his or her password.

If you are using it for internal employees (EIAM), you can also import organizations and user directories from third-party enterprise identity sources such as WeChat for Business, DingTalk, LDAP Server, and Windows local Active Directory. For details, see this./import-from-third-party-identity-provider/README.md.
