# OAuth Scopes supported by Github

<LastUpdated/>

When initiating a Github login, you can request the user to grant the required Gtihub permissions by specifying the scope parameter. If the user agrees to the permissions contained in the scope, the Github Access Token will have the corresponding permissions. If the user denies certain permissions, the Github Access Token cannot be used to access the corresponding Github API.

When you specify a scope when configuring a connection, Github will display the selected permissions on the Github confirmation page for the user to confirm.

If your application does not have a browser environment for end users to confirm authorization, you do not need to select any scopes. For more information, please refer to [Authorizing OAuth apps](https://docs.github.com/en/developers/apps/authorizing-oauth-apps#device-flow).

You can send a HEAD request to the relevant Github API with the token to see which scopes it requires:

```shell
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

- X-OAuth-Scopes: The scopes that the current token has.
- X-Accepted-OAuth-Scopes: The scopes required by this API.

# What Scopes do

| Name                                     | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`(no scope)`**                         | Grants read-only access to public information (including user profile information, public repository information, and gists)                                                                                                                                                                                                                                                                             |
| **`repo`**                               | Grants full permissions to repositories (including private ones). This includes read/write permissions to repository and organization code, commit status, repository and organization projects, invites, collaborators, adding team memberships, deployment status, and repository webhooks. Also grants permissions to manage user projects.                                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;repo:status      | Grants read/write permissions to commit status in public and private repositories. This scope is only needed to grant other users or services permissions to private repository commit status, not code.                                                                                                                                                                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;repo_deployment  | Grants access to [deployment status](https://docs.github.com/cn/rest/reference/repos#deployments) for public and private repositories. This scope is only needed to grant other users or services access to deployment status, not code.                                                                                                                                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;public_repo      | Limits access to public repositories. This includes read/write permissions for code, commit status, repository projects, collaborators, and deployment status for public repositories and organizations. This permission is also needed for public repositories with stars.                                                                                                                              |
| **`repo:invite`**                        | Grants permission to accept/decline invitations to collaborate on a repository. This scope is only needed to grant other users or services access, not code.                                                                                                                                                                                                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;security_events  | Grants read and write permissions to security events in the [code scanning API](https://docs.github.com/cn/rest/reference/code-scanning) and read and write permissions to security events in the [password scanning API](https://docs.github.com/cn/rest/reference/secret-scanning). This scope is only needed to grant other users or services access to security events, not to grant access to code. |
| **`admin:repo_hook`**                    | Grants read, write, ping, and delete permissions to repository hooks in a public or private repository. The `repo` and `public_repo` scopes grant full access to a repository, including repository hooks. Use the `admin:repo_hook` scope to restrict access to repository hooks only.                                                                                                                  |
| &nbsp;&nbsp;&nbsp;&nbsp;write:repo_hook  | Grants read, write, and ping permissions to hooks in public or private repositories.                                                                                                                                                                                                                                                                                                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;read:repo_hook   | Grants read and ping permissions to hooks in public or private repositories.                                                                                                                                                                                                                                                                                                                             |
| **`admin:org`**                          | Full management of an organization and its teams, projects, and members.                                                                                                                                                                                                                                                                                                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;write:org        | Read and write permissions to organization memberships, organization projects, and team memberships.                                                                                                                                                                                                                                                                                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;read:org         | Read-only permissions to organization memberships, organization projects, and team memberships.                                                                                                                                                                                                                                                                                                          |
| **`admin:public_key`**                   | Full management of public keys.                                                                                                                                                                                                                                                                                                                                                                          |
| &nbsp;&nbsp;&nbsp;&nbsp;write:public_key | Create, list, and view details of public keys.                                                                                                                                                                                                                                                                                                                                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;read:public_key  | List and view details of public keys.                                                                                                                                                                                                                                                                                                                                                                    |
| **`admin:org_hook`**                     | Grants read, write, ping, and delete permissions on organization hooks. **Note:** OAuth tokens can only perform these actions on organization hooks created by an OAuth application. Personal access tokens can only perform these actions on organization hooks created by the user.                                                                                                                    |
| **`gist`**                               | Grants write permissions on gists.                                                                                                                                                                                                                                                                                                                                                                       |
| **`notifications`**                      | Grants read permissions on user notifications, mark threads as read permissions, follow and unfollow permissions on repositories, and read, write, and delete permissions on thread subscriptions.                                                                                                                                                                                                       |
| **`user`**                               | Grants read/write permissions on profiles only. Note that this scope includes `user:email` and `user:follow`.                                                                                                                                                                                                                                                                                            |
| &nbsp;&nbsp;&nbsp;&nbsp;read:user        | Grants permission to read a user's profile data.                                                                                                                                                                                                                                                                                                                                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;user:email       | Grants read permission to the user's email address.                                                                                                                                                                                                                                                                                                                                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;user:follow      | Grants permission to follow or unfollow other users.                                                                                                                                                                                                                                                                                                                                                     |
| **`delete_repo`**                        | Grants permission to delete manageable repositories.                                                                                                                                                                                                                                                                                                                                                     |
| **`write:discussion`**                   | Grants read and write permission to team discussions.                                                                                                                                                                                                                                                                                                                                                    |
| &nbsp;&nbsp;&nbsp;&nbsp;read:discussion  | Grants read permission to team discussions.                                                                                                                                                                                                                                                                                                                                                              |
| **`write:packages`**                     | Grants permission to upload or publish packages in GitHub Packages.                                                                                                                                                                                                                                                                                                                                      |
| **`read:packages`**                      | Grants permission to download or install packages from GitHub Packages.                                                                                                                                                                                                                                                                                                                                  |
| **`delete:packages`**                    | Grants permission to delete packages from GitHub Packages.                                                                                                                                                                                                                                                                                                                                               |
| **`admin:gpg_key`**                      | Full management of GPG keys.                                                                                                                                                                                                                                                                                                                                                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;write:gpg_key    | Create, list, and view details of GPG keys.                                                                                                                                                                                                                                                                                                                                                              |
| &nbsp;&nbsp;&nbsp;&nbsp;read:gpg_key     | List and view details of GPG keys.                                                                                                                                                                                                                                                                                                                                                                       |