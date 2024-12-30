---
{
  noSidebar: true,
  noToc: true,
  noFeedback: true,
  fullWidthPage: true,
  title: "Use OIDC authorization code + PKCE mode",
  bannerTitle: "Use OIDC authorization code + PKCE mode",
  steps:
    [
      {
        title: "Splice login authorization link",
        subTitle: "Splice login authorization link and guide users to click",
      },
      {
        title: "Jump to {{$localeConfig.brandName}} for authentication",
        subTitle: "Guide users to click the login link and jump to {{$localeConfig.brandName}} for authentication",
      },
      {
        title: "Handle callback",
        subTitle: "Use the authorization code code + code_verifier on the front end to exchange for AccessToken and IdToken and optional Refresh token",
      },
      {
        title: "Complete authentication",
        subTitle: "The server authenticates the user and executes the subsequent process",
      },
    ],
}
---

<IntegrationDetail backLink="/guides/federation/oidc.html"/>
