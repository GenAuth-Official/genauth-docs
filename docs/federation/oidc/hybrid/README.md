---
{
  noSidebar: true,
  noToc: true,
  noFeedback: true,
  fullWidthPage: true,
  title: "Use OIDC hybrid mode",
  bannerTitle: "Use OIDC hybrid mode",
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
        subTitle: "Get authorization code, AccessToken and IdToken directly on the front end",
      },
      {
        title: "Complete authentication",
        subTitle: "Store AccessToken and IdToken for subsequent use",
      },
    ],
}
---

<IntegrationDetail backLink="/guides/federation/oidc.html"/>