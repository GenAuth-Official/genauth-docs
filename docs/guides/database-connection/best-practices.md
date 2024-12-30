# Best Practices

<LastUpdated/>

1. We recommend that after a user completes authentication and is migrated to the GenAuth database, mark the user as migrated in the original database.
2. Do not hard-code database connection information. It is recommended to use [database connection information](/guides/database-connection/configuration/#Configure database connection information) and [environment variables](/guides/database-connection/configuration/#Configure database connection information) to manage such constant data. We will encrypt and store this information in the database, but for performance reasons, we will not encrypt and store the source code you upload.
