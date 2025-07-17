const BRAND_NAME_ZH_CN = "GenAuth";
const BRAND_NAME_EN_US = "GenAuth";

const DATABASE_CONNECTION_MENU_EN = {
  title: "Custom database",
  path: "/guides/database-connection/overview.html",
  children: [
    {
      title: "Configure database connection and scripting",
      path: "/guides/database-connection/configuration/",
    },
    {
      title: `Lazy migration of users to ${BRAND_NAME_EN_US}`,
      path: "/guides/database-connection/lazy-migration",
    },
    {
      title: "Fully use a custom database to save user data",
      path: "/guides/database-connection/custom-user-store.md",
    },
    {
      title: "Best Practice",
      path: "/guides/database-connection/best-practices.md",
    },
  ],
};

/**
 * 菜单
 */
const zhCnNavBar = {
  "/guides/": [
    {
      title: "Quick Start",
      children: [
        {
          title: "Authenticate Your First User",
          path: "/guides/basics/authenticate-first-user/",
          children: [
            {
              title: "Overview",
              path: "/guides/basics/authenticate-first-user/overview/",
            },
            {
              title: "Use Hosted Login Page",
              path: "/guides/basics/authenticate-first-user/use-hosted-login-page",
            },
            {
              title: "Use Embedded Login Component",
              path: "/guides/basics/authenticate-first-user/use-embeded-login-component/",
            },
            {
              title: "Use API & SDK",
              path: "/guides/basics/authenticate-first-user/use-api-sdk/",
            },
            {
              title: "Validate User Token",
              path: "/guides/basics/authenticate-first-user/how-to-validate-user-token",
            },
            {
              title: "Implement Access Control",
              path: "/guides/basics/authenticate-first-user/how-to-implement-access-control",
            },
            {
              title: "Logout",
              path: "/guides/basics/authenticate-first-user/how-to-logout-user",
            },
            {
              title: "What's Next",
              path: "/guides/basics/authenticate-first-user/what-to-do-next",
            },
          ],
        },
        {
          title: "Integration Methods for Different Applications",
          children: [
            {
              title: `Integrate ${BRAND_NAME_ZH_CN} with Regular Web Apps`,
              path: "/guides/basics/platform-guide/integrate-with-regular-web-app",
            },
            {
              title: `Integrate ${BRAND_NAME_ZH_CN} with Single Page Apps`,
              path: "/guides/basics/platform-guide/integrate-with-spa",
            },
            {
              title: `Integrate ${BRAND_NAME_ZH_CN} with Mobile Apps`,
              path: "/guides/basics/platform-guide/integrate-with-mobile-app",
            },
            // {
            //   title: `Integrate ${BRAND_NAME_ZH_CN} with Backend API Services`,
            //   path:
            //     "/guides/basics/platform-guide/integrate-with-backend-app",
            // },
          ],
        },
        // {
        //   title: "Trial Period",
        //   path: "/guides/basics/trial/",
        //   children: [
        //     {
        //       title: "Admin Operations",
        //       path: "/guides/basics/trial/admin",
        //     },
        //     {
        //       title: "End User Operations",
        //       path: "/guides/basics/trial/end-user",
        //     },
        //   ],
        // },
        {
          title: "Console Overview",
          path: "/guides/basics/console/",
        },
      ],
    },
    {
      title: "Authentication",
      path: "/guides/authentication/",
      children: [
        {
          title: "Overview",
          path: "/guides/authentication/overview/",
        },
        {
          title: "Username Password Authentication",
          path: "/guides/authentication/basic/password/",
        },
        {
          title: "SMS Code Authentication",
          path: "/guides/authentication/basic/sms/",
        },
        {
          title: "Social Login Authentication",
          path: "/guides/authentication/social/",
        },
        // {
        //   title: "Social Login on Mobile",
        //   path: "/guides/authentication/social/mobile/",
        // },
        {
          title: "QR Code Login",
          path: "/guides/authentication/qrcode/",
          children: [
            {
              title: "Use Self-built App for QR Code Login",
              path: "/guides/authentication/qrcode/use-self-build-app/overview",
              children: [
                {
                  title: "Overview",
                  path: "/guides/authentication/qrcode/use-self-build-app/overview",
                },
                {
                  title: "Complete API List",
                  path: "/guides/authentication/qrcode/use-self-build-app/full-api-list",
                },
                {
                  title: "Custom Settings",
                  path: "/guides/authentication/qrcode/use-self-build-app/customize-settings",
                },
              ],
            },
            {
              title: "Use WeChat Mini Program for QR Code Login",
              path: "/guides/authentication/qrcode/use-wechat-miniprogram/",
            },
          ],
        },
        {
          title: "Authentication in Mini Programs",
          path: "/guides/authentication/wechat-mini-program/",
        },
        // {
        //   title: "One-click Mobile Login",
        //   path: "/guides/oneauth/",
        // },
        {
          title: "Implement Single Sign-On (SSO)",
          path: "/guides/app-new/sso/",
        },
        {
          title: "Mobile SSO",
          path: "/guides/authentication/mobile-sso/",
        },
        {
          title: "Multi-factor Authentication",
          path: "/guides/security/mfa/",
        },
        {
          title: "Extend Authentication Process",
          path: "/guides/authentication/extensibility/",
          children: [
            // {
            //   title: "Add Custom User Fields",
            //   path: "/guides/authentication/extensibility/user-defined-field",
            // },
            // {
            //   title: "Add Custom Role Fields",
            //   path: "/guides/authentication/extensibility/role-extend",
            // },
            {
              title: "Add Custom Fields to IdToken",
              path: "/guides/authentication/extensibility/customize-id-token",
            },
            // {
            //   title: "Use Custom Database for Authentication",
            //   path: "/guides/authentication/extensibility/database-connection",
            // },
            {
              title: "Extend Authentication Process with Pipeline",
              path: "/guides/authentication/extensibility/pipeline",
            },
            {
              title: "Monitor Authentication Events with Webhook",
              path: "/guides/authentication/extensibility/webhook",
            },
          ],
        },
        {
          title: "Customize Login UI",
          path: "/guides/authentication/branding/",
        },
      ],
    },
    {
      title: "Access Control",
      path: "/guides/access-control/",
      children: [
        {
          title: "Choose the Right Access Control Model",
          path: "/guides/access-control/choose-the-right-access-control-model",
        },
        {
          title: "Integrate RBAC Model",
          path: "/guides/access-control/rbac",
        },
        {
          title: "Integrate ABAC Model",
          path: "/guides/access-control/abac",
        },
        // {
        //   title: "Use Permission Groups",
        //   path: "/guides/access-control/resource-group",
        // },
        // {
        //   title: "Manage Resource Permissions",
        //   path: "/guides/access-control/resource-acl",
        // },
        {
          title: "Manage New Data Resource Permissions",
          path: "/guides/access-control/data-permission/",
          children: [
            {
              title: "Permission Space",
              path: "/guides/access-control/data-permission/permission-space",
            },
            {
              title: "Role Management",
              path: "/guides/access-control/data-permission/roles-management",
            },
            {
              title: "Data Resources",
              path: "/guides/access-control/data-permission/data-resoources",
            },
            {
              title: "Data Policies and Authorization",
              path: "/guides/access-control/data-permission/policy/",
              children: [
                {
                  title: "Data Policies and OPA",
                  path: "/guides/access-control/data-permission/policy/data-policy-and-opa",
                },
              ],
            },
            {
              title: "Permission View",
              path: "/guides/access-control/data-permission/data-permission-view",
            },
          ],
        },
      ],
    },
    {
      title: "Authorization",
      path: "/guides/authorization/",
      children: [
        {
          title: "User Consent Authorization",
          path: "/guides/authorization/user-consent-authz",
        },
        {
          title: "Machine-to-Machine (M2M) Authorization",
          path: "/guides/authorization/m2m-authz",
        },
      ],
    },
    {
      title: "Adaptive MFA",
      children: [
        {
          title: "GenAuth CAMFA Overview",
          path: "/guides/adaptive-mfa/intro",
        },
        {
          title: "Integrate GenAuth Guard for Continuous Adaptive MFA",
          path: "/guides/adaptive-mfa/guard",
        },
        {
          title:
            "Integrate Existing IAM/IDaaS/Auth Systems with GenAuth Adaptive MFA",
          path: "/guides/adaptive-mfa/legacy",
        },
        {
          title:
            "Advanced MFA: Continuous Adaptive Multi-Factor Authentication (CAMFA) Guide",
          path: "/guides/adaptive-mfa/camfa",
        },
        // {
        //   title: "Adaptive MFA Orchestration/Policy Configuration Guide",
        //   path: "/guides/adaptive-mfa/config",
        // },
      ],
    },
    {
      title: "User Account Management",
      path: "/guides/user/",
      children: [
        {
          title: "User Field Definitions",
          path: "/guides/user/user-profile",
        },
        {
          title: "Admin Create Account",
          path: "/guides/user/create-user/",
        },
        // {
        //   title: "Account Lifecycle Management",
        //   path: "/guides/user/life-cycle-management",
        // },
        {
          title: "Manage User Accounts",
          path: "/guides/user/manage-profile",
        },
        // {
        //   title: 'Add Roles and Assign Permissions to Users',
        //   path: '/guides/user/role-and-permission'
        // },
        {
          title: "Link Accounts",
          path: "/guides/user/bind-social-account",
        },
        // {
        //   title: "Manage User Custom Data",
        //   path: "/guides/user/user-defined-field/",
        // },
        {
          title: "View Login History",
          path: "/guides/user/login-history",
        },
        {
          title: "View User Geolocation",
          path: "/guides/user/geo",
        },
        {
          title: "Enhance Account Security",
          path: "/guides/user/security",
        },
        {
          title: "Manage Login Sessions",
          path: "/guides/user/login-state",
        },
        {
          title: "Control Application Access",
          path: "/guides/user/application-access",
        },
        {
          title: "User Group Management",
          path: "/guides/user/user-group",
        },
        {
          title: "Invitation Management",
          path: "/guides/user/invitation-management",
        },
      ],
    },
    {
      title: "User Directory Management",
      path: "/guides/users/",
      children: [
        {
          title: "User Directory Settings",
          path: "/guides/users/settings",
        },
        // {
        //   title: "Add Custom User Fields",
        //   path: "/guides/users/user-defined-field/",
        // },
        {
          title: "Search Users",
          path: "/guides/users/search",
        },
        // {
        //   title: "Use LDAP User Directory",
        //   path: "/guides/users/ldap-user-directory",
        // },
      ],
    },
    {
      title: "Applications",
      path: "/guides/app-new/",
      children: [
        {
          title: "Self-built Applications",
          path: "/guides/app-new/create-app/",
          children: [
            {
              title: "Create Self-built Application",
              path: "/guides/app-new/create-app/create-app",
            },
            {
              title: "Quick Start",
              path: "/guides/app-new/create-app/quick-start",
            },
            {
              title: "Application Configuration",
              path: "/guides/app-new/create-app/app-configuration",
            },
            {
              title: "Protocol Configuration",
              path: "/guides/app-new/create-app/protocol-config",
              children: [
                {
                  title: "Configure OIDC Protocol",
                  path: "/guides/federation/oidc",
                },
                {
                  title: "Custom OIDC Scope",
                  path: "/guides/app-new/create-app/oidc-scope",
                },
                {
                  title: "Configure OAuth Protocol",
                  path: "/guides/federation/oauth",
                },
                {
                  title: "Configure SAML Protocol",
                  path: "/guides/federation/saml",
                },
                {
                  title: "Configure CAS Protocol",
                  path: "/guides/federation/cas",
                },
              ],
            },
            {
              title: "Login Control",
              path: "/guides/app-new/create-app/login-control",
            },
            {
              title: "Access Authorization",
              path: "/guides/app-new/create-app/application-access-control",
            },
            {
              title: "Branding",
              path: "/guides/app-new/create-app/customize-guard",
            },
            {
              title: "Security Management",
              path: "/guides/app-new/create-app/security-management",
            },
            // {
            //   title: "Advanced Settings",
            //   path: "/guides/app-new/create-app/advanced-settings",
            // },
            // {
            //   title: "Tenant Configuration",
            //   path: "/guides/app-new/create-app/tenant-config",
            // },
          ],
        },
        {
          title: "Single Sign-On SSO",
          path: "/guides/app-new/sso/",
          children: [
            {
              title: "Application Panel",
              path: "/guides/dashboard/",
            },
            // {
            //   title: "Integration Application SSO Solutions",
            //   path: "/guides/apn/",
            //   children: [],
            // },
            {
              title: "Self-built Application SSO Solutions",
              path: "/guides/app-new/sso/create-app-sso.md",
            },
            // {
            //   title: "Third-party SSO Solutions",
            //   path: "/guides/app-new/sso/third-party-sso/",
            //   children: [
            //     {
            //       title: "Lark Workspace SSO Solution",
            //       path: "/guides/lark-sso/",
            //     },
            //     {
            //       title: "WeCom SSO Solution",
            //       path: "/guides/qiwei-sso/",
            //     },
            //     {
            //       title: "DingTalk SSO Solution",
            //       path: "/guides/dingding-sso/",
            //     },
            //     {
            //       title: "WeLink SSO Solution",
            //       path: "/guides/welink-sso/",
            //     },
            //   ],
            // },
            // {
            //   title: "ASA Form Fill",
            //   path: "/guides/asa/",
            // },
            // {
            //   title: "ASAD Form Fill",
            //   path: "/guides/asad/",
            // },
            // {
            //   title: "Gateway Form Fill",
            //   path: "/guides/gateway/",
            // },
          ],
        },
      ],
    },
    {
      title: "Become a Federation Authentication Identity Provider",
      path: "/guides/federation/",
      children: [
        {
          title: "Become an OpenID Connect Identity Provider",
          path: "/guides/federation/oidc.md",
        },
        {
          title: "Become an OAuth2.0 Identity Provider",
          path: "/guides/federation/oauth.md",
        },
        {
          title: "Become a SAML2 Identity Provider",
          path: "/guides/federation/saml.md",
        },
        {
          title: "Become a CAS Identity Provider",
          path: "/guides/federation/cas.md",
        },
      ],
    },
    {
      title: "Connect External Identity Providers (IdP)",
      path: "/guides/connections/",
      children: [
        {
          title: "Social Identity Providers",
          path: "/guides/connections/social.html",
          children: [
            {
              title: "WeChat PC QR Code",
              path: "/guides/connections/social/wechat-pc/",
            },
            {
              title: "WeChat PC Mini Program QR Code",
              path: "/guides/connections/social/wechat-miniprogram-qrconnect/",
            },
            {
              title: "WeChat Official Account Follow",
              path: "/guides/connections/social/wechatmp-qrcode/",
            },
            {
              title: "WeChat Mobile",
              path: "/guides/connections/social/wechat-mobile/",
            },
            {
              title: "APP Launch WeChat Mini Program",
              path: "/guides/connections/social/wechat-miniprogram-applaunch/",
            },
            {
              title: "Huawei",
              path: "/guides/connections/social/huawei/",
            },
            {
              title: "Huawei Mobile",
              path: "/guides/connections/social/huawei-mobile/",
            },
            {
              title: "Honor",
              path: "/guides/connections/social/honor/",
            },
            {
              title: "Xiaomi",
              path: "/guides/connections/social/xiaomi/",
            },
            {
              title: "Xiaomi Mobile",
              path: "/guides/connections/social/xiaomi-mobile/",
            },
            {
              title: "Tencent QQ",
              path: "/guides/connections/social/qq/",
            },
            {
              title: "Tencent QQ Mobile",
              path: "/guides/connections/social/qq-mobile/",
            },
            {
              title: "Sina Weibo",
              path: "/guides/connections/social/weibo/",
            },
            {
              title: "Sina Weibo Mobile",
              path: "/guides/connections/social/weibo-mobile/",
            },
            {
              title: "Douyin Mobile",
              path: "/guides/connections/social/douyin-mobile/",
            },
            {
              title: "Kuaishou Mobile",
              path: "/guides/connections/social/kuaishou-mobile/",
            },
            {
              title: "GitHub",
              path: "/guides/connections/social/github/",
            },
            {
              title: "GitHub Mobile",
              path: "/guides/connections/social/github-mobile/",
            },
            {
              title: "Facebook",
              path: "/guides/connections/social/facebook/",
            },
            {
              title: "Facebook Mobile",
              path: "/guides/connections/social/facebook-mobile/",
            },
            {
              title: "Twitter",
              path: "/guides/connections/social/twitter/",
            },
            {
              title: "Twitter Mobile",
              path: "/guides/connections/social/twitter-mobile/",
            },
            {
              title: "Google Web",
              path: "/guides/connections/social/google/",
            },
            {
              title: "Google Mobile",
              path: "/guides/connections/social/google-mobile/",
            },
            {
              title: "Apple Mobile",
              path: "/guides/connections/social/apple-mobile/",
            },
            {
              title: "Apple Web",
              path: "/guides/connections/social/apple-web/",
            },
            {
              title: "AWS",
              path: "/guides/connections/social/aws/",
            },
            {
              title: "Alipay",
              path: "/guides/connections/social/alipay-web/",
            },
            {
              title: "Slack",
              path: "/guides/connections/social/slack/",
            },
            {
              title: "Slack Mobile",
              path: "/guides/connections/social/slack-mobile/",
            },
            {
              title: "Gitee",
              path: "/guides/connections/social/gitee/",
            },
            {
              title: "Gitee Mobile",
              path: "/guides/connections/social/gitee-mobile/",
            },
            {
              title: "GitLab",
              path: "/guides/connections/social/gitlab/",
            },
            {
              title: "GitLab Mobile",
              path: "/guides/connections/social/gitlab-mobile/",
            },
            {
              title: "Baidu",
              path: "/guides/connections/social/baidu/",
            },
            {
              title: "Baidu Mobile",
              path: "/guides/connections/social/baidu-mobile/",
            },
            {
              title: "Yidun (One-click Login)",
              path: "/guides/connections/social/yidun/",
            },
            {
              title: "QingCloud",
              path: "/guides/connections/social/qingcloud/",
            },
            {
              title: "Instagram",
              path: "/guides/connections/social/instagram/",
            },
            {
              title: "LinkedIn",
              path: "/guides/connections/social/linkedin/",
            },
            {
              title: "LinkedIn Mobile",
              path: "/guides/connections/social/linkedin-mobile/",
            },
            {
              title: "Line Mobile",
              path: "/guides/connections/social/line-mobile/",
            },
            {
              title: "Amazon",
              path: "/guides/connections/social/amazon/",
            },
            {
              title: "Amazon Mobile",
              path: "/guides/connections/social/amazon-mobile/",
            },
            {
              title: "OPPO Mobile",
              path: "/guides/connections/social/oppo-mobile/",
            },
          ],
        },
        // {
        //  title: "Identity Provider Connection Account Association",
        //  path: "/guides/connections/account-association"
        //},
        //{
        //  title: "Identity Provider Connection Account Matching Rules",
        // path: "/guides/connections/user-mapping"
        //},
        // DATABASE_CONNECTION_MENU
        // {
        //   title: "Custom Database",
        //   path: "/guides/database-connection/overview.html",
        //   children: [
        //     {
        //       title: "Configure Database Connection and Write Scripts",
        //       path: "/guides/database-connection/configuration/",
        //     },
        //     {
        //       title: `Lazy Migration of Users to ${BRAND_NAME_ZH_CN}`,
        //       path: "/guides/database-connection/lazy-migration",
        //     },
        //     {
        //       title: "Fully Use Custom Database to Store User Data",
        //       path: "/guides/database-connection/custom-user-store.md",
        //     },
        //     {
        //       title: "Best Practices",
        //       path: "/guides/database-connection/best-practices.md",
        //     },
        //   ],
        // },
        {
          title: "Account Binding",
          path: "/guides/connections/account-binding.md",
        },
      ],
    },
    {
      title: "WeChat Ecosystem Full Scenario Capabilities",
      path: "/guides/wechat-ecosystem/",
      children: [
        {
          title: "When Developing with WeChat Mobile Apps",
          path: "/guides/wechat-ecosystem/wechat-mobile-app",
        },
        {
          title: "When Developing with WeChat Web Apps",
          path: "/guides/wechat-ecosystem/wechat-web-app",
        },
        {
          title: "When Developing with WeChat Official Accounts",
          path: "/guides/wechat-ecosystem/wechat-public-account-app",
        },
        {
          title: "When Developing with WeChat Mini Programs",
          path: "/guides/wechat-ecosystem/wechat-miniprogram-app",
        },
      ],
      // children: [
      //   {
      //     title: "Follow Official Account Login",
      //     path: "/guides/wechat-ecosystem/wechat-offical-account"
      //   },
      //   {
      //     title: "PC Website WeChat QR Code Login",
      //     path: "/guides/wechat-ecosystem/wechat-pc/"
      //   },
      //   {
      //     title: "PC Website Mini Program QR Code Login",
      //     path: "/guides/wechat-ecosystem/wechat-miniprogram-qrcode/"
      //   },
      //   {
      //     title: "WeChat In-App Web Page Authorization Login",
      //     path: "/guides/wechat-ecosystem/wechat-webpage-authorization"
      //   },
      //   {
      //     title: "Mini Program WeChat Login",
      //     path: "/guides/wechat-ecosystem/wechat-miniprogram"
      //   },
      //   {
      //     title: "Mobile APP WeChat Login",
      //     path: "/guides/wechat-ecosystem/wechat-mobile"
      //   },
      //   {
      //     title: "Mobile APP Mini Program Login",
      //     path: "/guides/wechat-ecosystem/wechat-miniprogram-applaunch"
      //   }
      // ]
    },
    {
      title: `Migrate Users to ${BRAND_NAME_ZH_CN}`,
      path: "/guides/migrations/",
      children: [
        {
          title: "Import Users Using SDK",
          path: "/guides/migrations/use-api",
        },
        {
          title: "Custom Password Encryption Method",
          path: "/guides/extensibility/custom-password-script",
        },
      ],
    },
    // {
    //   title: "Manage Organizations",
    //   path: "/guides/org/",
    //   children: [
    //     {
    //       title: "Create or Import Organizations",
    //       path: "/guides/org/create-or-import-org/",
    //     },
    //     {
    //       title: "Manage Organizations",
    //       path: "/guides/org/manage-org/",
    //     },
    //     {
    //       title: "Manage Member Lifecycle",
    //       path: "/guides/org/staff-life-cycle-management/",
    //     },
    //     {
    //       title: "Manage End Devices",
    //       path: "/guides/org/device-management/",
    //     },
    //   ],
    // },
    {
      title: "Security Settings",
      children: [
        {
          title: "General Security",
          children: [
            {
              title: "Configure Web Security Domain",
              path: "/guides/security/config-domain",
            },
            {
              title: "Configure Registration Rate Limit",
              path: "/guides/security/config-register-limit",
            },
            {
              title: "Configure Login Failure Limit",
              path: "/guides/security/config-login-fail-limit",
            },
          ],
        },
        {
          title: "Password Security",
          path: "/guides/security/pw-security/",
          children: [
            {
              title: "Password Policy",
              path: "/guides/security/pw-security/pw-policy",
            },
            {
              title: "Custom Password Encryption Method",
              path: "/guides/security/pw-security/custom-password-script",
            },
          ],
        },
        {
          title: "Multi-factor Authentication",
          path: "/guides/security/mfa/",
          children: [
            {
              title: "SMS Code Based MFA",
              path: "/guides/security/mfa/sms",
            },
            {
              title: "Email Code Based MFA",
              path: "/guides/security/mfa/email-code",
            },
            {
              title: "Time-based One-time Password MFA",
              path: "/guides/security/mfa/totp",
            },
            {
              title: "Face Recognition Based MFA",
              path: "/guides/security/mfa/face-recognition",
            },
            {
              title: "Integrate MFA via SDK",
              path: "/guides/security/mfa/mfa-sdk",
            },
            {
              title: "MFA Policy Configuration",
              path: "/guides/security/mfa/policy-based-mfa-configuration",
            },
          ],
        },
      ],
    },
    {
      title: "Branding",
      children: [
        {
          title: "Global Login Box",
          path: "/guides/customize/global-guard/",
        },
        {
          title: "Message Settings",
          children: [
            {
              title: "Configure Email Service and Templates",
              path: "/guides/userpool-config/email/",
            },
            {
              title: "Configure SMS Service and Templates",
              path: "/guides/userpool-config/sms/",
            },
          ],
        },
        {
          title: "Custom Domain",
          path: "/guides/customize/domain/customized-domain",
        },
        {
          title: "Application Panel",
          path: "/guides/customize/app-panel/",
        },
      ],
    },
    {
      title: "Automation",
      path: "/guides/extensibility/",
      children: [
        {
          title: "Pipeline",
          path: "/guides/pipeline/",
          children: [
            {
              title: "Create Your First Pipeline Function",
              path: "/guides/pipeline/write-your-first-pipeline-function",
            },
            {
              title: "Pipeline API Reference",
              path: "/guides/pipeline/pipeline-function-api-doc",
            },
            {
              title: "Pipeline Use Cases",
              path: "/guides/pipeline/usage",
            },
            {
              title: "Pipeline User Object",
              path: "/guides/pipeline/user-object",
            },
            {
              title: "Pipeline Context Object",
              path: "/guides/pipeline/context-object",
            },
            {
              title: "Use Environment Variables in Pipeline",
              path: "/guides/pipeline/env",
            },
            {
              title: "Available Node Modules",
              path: "/guides/pipeline/available-node-modules",
            },
            {
              title: "How to Debug",
              path: "/guides/pipeline/how-to-debug",
            },
            {
              title: "Private Deployment",
              path: "/guides/pipeline/private-cloud",
            },
          ],
        },
        {
          title: "Webhooks",
          path: "/guides/webhook/",
        },
        // DATABASE_CONNECTION_MENU,
      ],
    },
    {
      title: "Audit Logs",
      path: "/guides/audit/",
      children: [
        {
          title: "User Action Audit",
          path: "/guides/audit/user-action",
        },
        {
          title: "Administrator Action Audit",
          path: "/guides/audit/administrator-action",
        },
      ],
    },
    {
      title: "Setting",
      children: [
        {
          title: "Basic Configuration",
          path: "/guides/userpool-config/basic-config",
        },

        {
          title: "Developer",
          path: "/guides/userpool-config/developer-config",
        },
        // {
        //   title: "Cooperator Admin",
        //   path: "/guides/userpool-config/collaboration-adminstrator",
        // },
        {
          title: "Cooperator Admin(New)",
          path: "/guides/userpool-config/new-collaboration-adminstrator",
        },
      ],
    },
    {
      title: "FAQ",
      children: [
        {
          title: "How to get the user pool ID",
          path: "/guides/faqs/get-userpool-id-and-secret.md",
        },
        {
          title: "How to get the application ID",
          path: "/guides/faqs/get-app-id-and-secret.md",
        },
        {
          title: "How to validate the user identity credential (token)",
          path: "/guides/faqs/how-to-validate-user-token",
        },
        {
          title: `User pool with unified domain name`,
          path: "/guides/faqs/union-domain",
        },
        {
          title: "How to identify the source of users",
          path: "/guides/faqs/how-to-identify-the-source-users",
        },
        {
          title: `Join the local table ${BRAND_NAME_ZH_CN} users with your business data`,
          path: "/guides/faqs/how-to-join-authing-user-with-your-business-data",
        },
        {
          title: `The impact of disabling third-party cookies on GenAuth`,
          path: "/guides/faqs/block-third-party-cookie-impact",
        },
        {
          title: "How to deploy a transit proxy server",
          path: "/guides/faqs/how-to-build-a-proxy",
        },
        {
          title: `How to obtain the ${BRAND_NAME_ZH_CN} server cluster IP`,
          path: "/guides/faqs/public-ips",
        },
        {
          title: "Pipeline FAQ",
          path: "/guides/faqs/pipeline",
        },
      ],
    },
  ],
  "/reference/": [
    {
      title: "API",
      redirect: "/reference/api/authentication/",
      children: [
        {
          title: "Authentication API",
          path: "/reference/api/authentication/",
        },
        {
          title: "Management API",
          path: "/reference/api/management/",
        },
      ],
    },
    {
      title: "SDK",
      path: "/reference/sdk/",
      redirect: "/reference/sdk/java/install.html",
      children: [
        // 自动生成粘贴开始
        {
          title: "Java",
          path: "/reference/sdk/java/",
          redirect: "/reference/sdk/java/install.html",
          children: [
            {
              title: "Installation and use",
              path: "/reference/sdk/java/install.md",
            },
            {
              title: "User authentication module",
              children: [
                {
                  title: "Login",
                  children: [
                    {
                      title: "Account password login",
                      path: "/reference/sdk/java/authentication/登录/signin-by-account-password.md",
                    },
                    {
                      title: "Username password login",
                      path: "/reference/sdk/java/authentication/登录/signin-by-username-password.md",
                    },
                    {
                      title: "Mobile phone number password login",
                      path: "/reference/sdk/java/authentication/登录/signin-by-phone-password.md",
                    },
                    {
                      title: "Email password login",
                      path: "/reference/sdk/java/authentication/登录/signin-by-email-password.md",
                    },
                    {
                      title: "Login by email verification code",
                      path: "/reference/sdk/java/authentication/登录/signin-by-email-passcode.md",
                    },
                    {
                      title: "Login by mobile phone verification code",
                      path: "/reference/sdk/java/authentication/登录/signin-by-phone-passcode.md",
                    },
                    {
                      title: "LDAP account login",
                      path: "/reference/sdk/java/authentication/登录/signin-by-ldap.md",
                    },
                    {
                      title: "AD account login",
                      path: "/reference/sdk/java/authentication/登录/signin-by-ad.md",
                    },
                    {
                      title: "Generate login address",
                      path: "/reference/sdk/java/authentication/登录/build-authorize-url.md",
                    },
                    {
                      title: "Login with user credentials",
                      path: "/reference/sdk/java/authentication/登录/signin",
                    },
                    {
                      title: "Login with mobile social networking",
                      path: "/reference/sdk/java/authentication/登录/signin-by-mobile",
                    },
                    {
                      title: "Get Alipay AuthInfo",
                      path: "/reference/sdk/java/authentication/登录/get-alipay-authinfo",
                    },
                    {
                      title: "Generate a QR code for login",
                      path: "/reference/sdk/java/authentication/登录/gene-qrcode",
                    },
                    {
                      title: "Query QR code status",
                      path: "/reference/sdk/java/authentication/登录/check-qrcode-status",
                    },
                    {
                      title: "Use QR code ticket to exchange for TokenSet",
                      path: "/reference/sdk/java/authentication/登录/exchange-tokenset-with-qrcode-ticket",
                    },
                    {
                      title:
                        "Self-built APP scan code login: APP end modifies QR code status",
                      path: "/reference/sdk/java/authentication/登录/change-qrcode-status",
                    },
                  ],
                },
                {
                  title: "Logout",
                  children: [
                    {
                      title: "Front-end logout",
                      path: "/reference/sdk/java/authentication/登出/front-channel-logout.md",
                    },
                    {
                      title: "Back-end logout",
                      path: "/reference/sdk/java/authentication/登出/backend-channel-logout.md",
                    },
                  ],
                },
                {
                  title: "Manage Token",
                  children: [
                    {
                      title: "Get Token",
                      path: "/reference/sdk/java/authentication/manage-token/get-access-token.md",
                    },
                    {
                      title: "Verify Token",
                      path: "/reference/sdk/java/authentication/manage-token/introspect-token.md",
                    },
                    {
                      title: "Revoke Token",
                      path: "/reference/sdk/java/authentication/manage-token/revoke-token.md",
                    },
                  ],
                },
                {
                  title: "Register",
                  children: [
                    {
                      title: "Username and Password Registration",
                      path: "/reference/sdk/java/authentication/Register/signup-by-username-password.md",
                    },
                    {
                      title: "Email Password Registration",
                      path: "/reference/sdk/java/authentication/Register/signup-by-email-password.md",
                    },
                    {
                      title: "Mobile phone verification code registration",
                      path: "/reference/sdk/java/authentication/Register/signup-by-phone-passcode.md",
                    },
                    {
                      title: "Email verification code registration",
                      path: "/reference/sdk/java/authentication/Register/signup-by-email-passcode.md",
                    },
                    {
                      title: "Register",
                      path: "/reference/sdk/java/authentication/Register/signup",
                    },
                  ],
                },
                {
                  title: "User information",
                  children: [
                    {
                      title: "Get user information",
                      path: "/reference/sdk/java/authentication/用户资料/get-profile",
                    },
                    {
                      title: "Modify user information",
                      path: "/reference/sdk/java/authentication/用户资料/update-profile",
                    },
                    {
                      title: "Bind email",
                      path: "/reference/sdk/java/authentication/用户资料/bind-email",
                    },
                    {
                      title: "Unbind email",
                      path: "/reference/sdk/java/authentication/用户资料/unbind-email",
                    },
                    {
                      title: "Bind phone number",
                      path: "/reference/sdk/java/authentication/用户资料/bind-phone",
                    },
                    {
                      title: "Unbind phone number",
                      path: "/reference/sdk/java/authentication/用户资料/unbind-phone",
                    },
                    {
                      title:
                        "Get password strength and account security rating",
                      path: "/reference/sdk/java/authentication/用户资料/get-security-info",
                    },
                    {
                      title: "Change password",
                      path: "/reference/sdk/java/authentication/用户资料/update-password",
                    },
                    {
                      title: "Initiate verification request to change email",
                      path: "/reference/sdk/java/authentication/用户资料/verify-update-email-request",
                    },
                    {
                      title: "Change email",
                      path: "/reference/sdk/java/authentication/用户资料/update-email",
                    },
                    {
                      title:
                        "Initiate verification request to change mobile phone number",
                      path: "/reference/sdk/java/authentication/用户资料/verify-update-phone-request",
                    },
                    {
                      title: "Change mobile phone number",
                      path: "/reference/sdk/java/authentication/用户资料/update-phone",
                    },
                    {
                      title: "Initiate forgotten password request",
                      path: "/reference/sdk/java/authentication/用户资料/verify-reset-password-request",
                    },
                    {
                      title: "Forgot password",
                      path: "/reference/sdk/java/authentication/用户资料/reset-password",
                    },
                    {
                      title: "Initiate account cancellation request",
                      path: "/reference/sdk/java/authentication/用户资料/verify-delete-account-request",
                    },
                    {
                      title: "Cancel account",
                      path: "/reference/sdk/java/authentication/用户资料/delete-account",
                    },
                  ],
                },
                {
                  title: "Account Binding",
                  children: [
                    {
                      title:
                        "Generate a link to bind an external identity source",
                      path: "/reference/sdk/java/authentication/账号绑定/generate-link-extidp-url",
                    },
                    {
                      title: "Unbind an external identity source",
                      path: "/reference/sdk/java/authentication/账号绑定/unlink-extidp",
                    },
                    {
                      title: "Get the bound external identity source",
                      path: "/reference/sdk/java/authentication/账号绑定/get-identities",
                    },
                    {
                      title:
                        "Get the list of external identity sources enabled by the application",
                      path: "/reference/sdk/java/authentication/账号绑定/get-application-enabled-extidps",
                    },
                  ],
                },
                {
                  title: "MFA Factor Management",
                  children: [
                    {
                      title:
                        "Initiate binding MFA Authentication factor request",
                      path: "/reference/sdk/java/authentication/mfa-要素管理/send-enroll-factor-request",
                    },
                    {
                      title: "Bind MFA authentication factor",
                      path: "/reference/sdk/java/authentication/mfa-要素管理/enroll-factor",
                    },
                    {
                      title: "Unbind MFA authentication factor",
                      path: "/reference/sdk/java/authentication/mfa-要素管理/reset-factor",
                    },
                    {
                      title: "Get all bound MFA authentication factors",
                      path: "/reference/sdk/java/authentication/mfa-要素管理/list-enrolled-factors",
                    },
                    {
                      title: "Get a bound MFA authentication factor",
                      path: "/reference/sdk/java/authentication/mfa-要素管理/get-factor",
                    },
                    {
                      title: "Get bindable MFA authentication factors",
                      path: "/reference/sdk/java/authentication/mfa-要素管理/list-factors-to-enroll",
                    },
                  ],
                },
                {
                  title: "User-related resources",
                  children: [
                    {
                      title: "Get login log",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-login-history",
                    },
                    {
                      title: "Get login application",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-logged-in-apps",
                    },
                    {
                      title: "Get applications with access permissions",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-accessible-apps",
                    },
                    {
                      title: "Get tenant list",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-tenant-list",
                    },
                    {
                      title: "Get role list",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-role-list",
                    },
                    {
                      title: "Get group list",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-group-list",
                    },
                    {
                      title: "Get department list",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-department-list",
                    },
                    {
                      title: "Get authorized resource list",
                      path: "/reference/sdk/java/authentication/用户相关资源/get-my-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Message service",
                  children: [
                    {
                      title: "Send SMS",
                      path: "/reference/sdk/java/authentication/消息服务/send-sms",
                    },
                    {
                      title: "Send Email",
                      path: "/reference/sdk/java/authentication/消息服务/send-email",
                    },
                  ],
                },
                {
                  title: "Authentication",
                  children: [
                    {
                      title: "String type resource authentication",
                      path: "/reference/sdk/java/authentication/鉴权/check-permission-string-resource",
                    },
                    {
                      title: "Array type resource authentication",
                      path: "/reference/sdk/java/authentication/鉴权/check-permission-array-resource",
                    },
                    {
                      title: "Tree type resource authentication",
                      path: "/reference/sdk/java/authentication/鉴权/check-permission-tree-resource",
                    },
                    {
                      title: `Get the user's authorized resource list under the login application`,
                      path: `/reference/sdk/java/authentication/鉴权/get-user-auth-resource-list`,
                    },
                    {
                      title: `Get the user's specified resource permission list under the login application`,
                      path: "/reference/sdk/java/authentication/鉴权/get-user-auth-resource-permission-list",
                    },
                    {
                      title:
                        "Get the structure list of authorized resources under the user login application",
                      path: "/reference/sdk/java/authentication/鉴权/get-user-auth-resource-struct",
                    },
                  ],
                },
                {
                  title: "Others",
                  children: [
                    {
                      title: "Get server public information",
                      path: "/reference/sdk/java/authentication/其他/system",
                    },
                    {
                      title: "Get country list",
                      path: "/reference/sdk/java/authentication/其他/get-country-list",
                    },
                  ],
                },
                {
                  title: "OIDC module",
                  path: "/reference/sdk/java/authentication/oidc.md",
                },
                {
                  title: "OAuth module",
                  path: "/reference/sdk/java/authentication/oauth.md",
                },
                {
                  title: "SAML module",
                  path: "/reference/sdk/java/authentication/saml.md",
                },
                {
                  title: "CAS module",
                  path: "/reference/sdk/java/authentication/cas.md",
                },
                {
                  title: "Events",
                  path: "/reference/sdk/java/authentication/events.md",
                },
              ],
            },
            {
              title: "Management module",
              children: [
                {
                  title: "Manage users",
                  children: [
                    {
                      title: "Get user list",
                      path: "/reference/sdk/java/management/管理用户/list-users",
                    },
                    {
                      title: "Get user information",
                      path: "/reference/sdk/java/management/管理用户/get-user",
                    },
                    {
                      title: "Get user information in batches",
                      path: "/reference/sdk/java/management/管理用户/get-user-batch",
                    },
                    {
                      title: "Create users",
                      path: "/reference/sdk/java/management/管理用户/create-user",
                    },
                    {
                      title: "Create users in batches",
                      path: "/reference/sdk/java/management/管理用户/create-users-batch",
                    },
                    {
                      title: "Modify user information",
                      path: "/reference/sdk/java/management/管理用户/update-user",
                    },
                    {
                      title: "Batch modify user information",
                      path: "/reference/sdk/java/management/管理用户/update-user-batch",
                    },
                    {
                      title: "Delete user",
                      path: "/reference/sdk/java/management/管理用户/delete-users-batch",
                    },
                    {
                      title: `Get the user's external identity source`,
                      path: "/reference/sdk/java/management/管理用户/get-user-identities",
                    },
                    {
                      title: "Get user role list",
                      path: "/reference/sdk/java/management/管理用户/get-user-roles",
                    },
                    {
                      title: "Get user real-name authentication information",
                      path: "/reference/sdk/java/management/管理用户/get-user-principal-authentication-info",
                    },
                    {
                      title: "Delete user real-name authentication information",
                      path: "/reference/sdk/java/management/管理用户/reset-user-principal-authentication-info",
                    },
                    {
                      title: "Get user department list",
                      path: "/reference/sdk/java/management/管理用户/get-user-departments",
                    },
                    {
                      title: "Set user department",
                      path: "/reference/sdk/java/management/管理用户/set-user-departments",
                    },
                    {
                      title: "Get user group list",
                      path: "/reference/sdk/java/management/管理用户/get-user-groups",
                    },
                    {
                      title: "Get user MFA binding information",
                      path: "/reference/sdk/java/management/管理用户/get-user-mfa-info",
                    },
                    {
                      title: "Get the archived user list",
                      path: "/reference/sdk/java/management/管理用户/list-archived-users",
                    },
                    {
                      title: "Force offline users",
                      path: "/reference/sdk/java/management/管理用户/kick-users",
                    },
                    {
                      title: "Judge whether the user exists",
                      path: "/reference/sdk/java/management/管理用户/is-user-exists",
                    },
                    {
                      title: "Get user-accessible applications",
                      path: "/reference/sdk/java/management/管理用户/get-user-accessible-apps",
                    },
                    {
                      title: "Get user-authorized applications",
                      path: "/reference/sdk/java/management/管理用户/get-user-authorized-apps",
                    },
                    {
                      title: "Determine whether the user has a certain role",
                      path: "/reference/sdk/java/management/管理用户/has-any-role",
                    },
                    {
                      title: `Get the user's login history`,
                      path: "/reference/sdk/java/management/管理用户/get-user-login-history",
                    },
                    {
                      title:
                        "Get the application that the user has logged in to",
                      path: "/reference/sdk/java/management/管理用户/get-user-loggedin-apps",
                    },
                    {
                      title:
                        "Get the identity source that the user has logged in to",
                      path: "/reference/sdk/java/management/管理用户/get-user-logged-in-identities",
                    },
                    {
                      title: "User resignation",
                      path: "/reference/sdk/java/management/管理用户/resign-user",
                    },
                    {
                      title: "Batch user resignation",
                      path: "/reference/sdk/java/management/管理用户/resign-user-batch",
                    },
                    {
                      title: "Get all resources authorized by the user",
                      path: "/reference/sdk/java/management/管理用户/get-user-authorized-resources",
                    },
                    {
                      title:
                        "Check whether a user has a session login status in the application",
                      path: "/reference/sdk/java/management/管理用户/check-session-status",
                    },
                    {
                      title: "Import user OTP",
                      path: "/reference/sdk/java/management/管理用户/import-otp",
                    },
                    {
                      title: "Set user MFA status",
                      path: "/reference/sdk/java/management/管理用户/set-user-mfa-status",
                    },
                    {
                      title: "Get user MFA status",
                      path: "/reference/sdk/java/management/管理用户/get-user-mfa-status",
                    },
                  ],
                },
                {
                  title: "Management Roles",
                  children: [
                    {
                      title: "Get Role Details",
                      path: "/reference/sdk/java/management/角色管理/get-role",
                    },
                    {
                      title: "Assign Roles",
                      path: "/reference/sdk/java/management/角色管理/assign-role",
                    },
                    {
                      title: "Remove Assigned Roles",
                      path: "/reference/sdk/java/management/角色管理/revoke-role",
                    },
                    {
                      title: "Get a List of Resources Authorized by a Role",
                      path: "/reference/sdk/java/management/角色管理/get-role-authorized-resources",
                    },
                    {
                      title: "Get a List of Role Members",
                      path: "/reference/sdk/java/management/角色管理/list-role-members",
                    },
                    {
                      title: "Get the department list of the role",
                      path: "/reference/sdk/java/management/角色管理/list-role-departments",
                    },
                    {
                      title: "Create a role",
                      path: "/reference/sdk/java/management/角色管理/create-role",
                    },
                    {
                      title: "Get a list of roles",
                      path: "/reference/sdk/java/management/角色管理/list-roles",
                    },
                    {
                      title:
                        "Delete roles within a single permission group (permission space)",
                      path: "/reference/sdk/java/management/角色管理/delete-roles-batch",
                    },
                    {
                      title: "Batch create roles",
                      path: "/reference/sdk/java/management/角色管理/create-roles-batch",
                    },
                    {
                      title: "Modify roles",
                      path: "/reference/sdk/java/management/角色管理/update-role",
                    },
                    {
                      title: "Cross-permission group (space) deletion of roles",
                      path: "/reference/sdk/java/management/角色管理/multiple-namespace-delete-roles-batch",
                    },
                    {
                      title: "Check whether the role Code or name is available",
                      path: "/reference/sdk/java/management/角色管理/check-role-params",
                    },
                    {
                      title: "Role list paging query",
                      path: "/reference/sdk/java/management/角色管理/list-role-assignments",
                    },
                  ],
                },
                {
                  title: "Manage user groups",
                  children: [
                    {
                      title: "Get group details",
                      path: "/reference/sdk/java/management/分组管理/get-group",
                    },
                    {
                      title: "Get group list",
                      path: "/reference/sdk/java/management/分组管理/list-groups",
                    },
                    {
                      title: "Create groups",
                      path: "/reference/sdk/java/management/分组管理/create-group",
                    },
                    {
                      title: "Batch create groups",
                      path: "/reference/sdk/java/management/分组管理/create-groups-batch",
                    },
                    {
                      title: "Modify groups",
                      path: "/reference/sdk/java/management/分组管理/update-group",
                    },
                    {
                      title: "Batch delete groups",
                      path: "/reference/sdk/java/management/分组管理/delete-groups-batch",
                    },
                    {
                      title: "Add group members",
                      path: "/reference/sdk/java/management/分组管理/add-group-members",
                    },
                    {
                      title: "Batch remove group members",
                      path: "/reference/sdk/java/management/分组管理/remove-group-members",
                    },
                    {
                      title: "Get group member list",
                      path: "/reference/sdk/java/management/分组管理/list-group-members",
                    },
                    {
                      title: "Get group authorized resource list",
                      path: "/reference/sdk/java/management/分组管理/get-group-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Manage custom fields",
                  children: [
                    {
                      title: "Get a list of user built-in fields",
                      path: "/reference/sdk/java/management/管理自定义字段/get-user-base-fields",
                    },
                    {
                      title: "Modify user built-in field configuration",
                      path: "/reference/sdk/java/management/管理自定义字段/set-user-base-fields",
                    },
                    {
                      title: "Get a list of custom fields",
                      path: "/reference/sdk/java/management/管理自定义字段/get-custom-fields",
                    },
                    {
                      title: "Create/modify custom field definitions",
                      path: "/reference/sdk/java/management/管理自定义字段/set-custom-fields",
                    },
                    {
                      title: "Set the value of a custom field",
                      path: "/reference/sdk/java/management/管理自定义字段/set-custom-data",
                    },
                    {
                      title:
                        "Get custom field values ​​for users, groups, roles, and organizations",
                      path: "/reference/sdk/java/management/管理自定义字段/get-custom-data",
                    },
                  ],
                },
                {
                  title: "Manage Resources and Permissions",
                  children: [
                    {
                      title: "Create Resources",
                      path: "/reference/sdk/java/management/访问控制管理/create-resource",
                    },
                    {
                      title: "Batch Create Resources",
                      path: "/reference/sdk/java/management/访问控制管理/create-resources-batch",
                    },
                    {
                      title: "Get Resource Details",
                      path: "/reference/sdk/java/management/访问控制管理/get-resource",
                    },
                    {
                      title: "Batch Get Resource Details",
                      path: "/reference/sdk/java/management/访问控制管理/get-resources-batch",
                    },
                    {
                      title: "Get Resource List by Page",
                      path: "/reference/sdk/java/management/访问控制管理/list-resources",
                    },
                    {
                      title: "Modify resources",
                      path: "/reference/sdk/java/management/访问控制管理/update-resource",
                    },
                    {
                      title: "Delete resources",
                      path: "/reference/sdk/java/management/访问控制管理/delete-resource",
                    },
                    {
                      title: "Batch delete resources",
                      path: "/reference/sdk/java/management/访问控制管理/delete-resources-batch",
                    },
                    {
                      title:
                        "Associate/unassociate application resources to tenants",
                      path: "/reference/sdk/java/management/访问控制管理/associate-tenant-resource",
                    },
                    {
                      title: "Create permission groups",
                      path: "/reference/sdk/java/management/访问控制管理/create-namespace",
                    },
                    {
                      title: "Batch create permission groups",
                      path: "/reference/sdk/java/management/访问控制管理/create-namespaces-batch",
                    },
                    {
                      title: "Get permission group details",
                      path: "/reference/sdk/java/management/访问控制管理/get-namespace",
                    },
                    {
                      title: "Batch get permission group details",
                      path: "/reference/sdk/java/management/访问控制管理/get-namespaces-batch",
                    },
                    {
                      title: "Modify permission group information",
                      path: "/reference/sdk/java/management/访问控制管理/update-namespace",
                    },
                    {
                      title: "Delete permission group information",
                      path: "/reference/sdk/java/management/访问控制管理/delete-namespace",
                    },
                    {
                      title: "Batch delete permission groups",
                      path: "/reference/sdk/java/management/访问控制管理/delete-namespaces-batch",
                    },
                    {
                      title: "Authorized resources",
                      path: "/reference/sdk/java/management/访问控制管理/authorize-resources",
                    },
                    {
                      title:
                        "Get a list of resources authorized by a certain subject",
                      path: "/reference/sdk/java/management/访问控制管理/get-authorized-resources",
                    },
                    {
                      title:
                        "Determine whether the user has permission to perform a certain operation on a certain resource",
                      path: "/reference/sdk/java/management/访问控制管理/is-action-allowed",
                    },
                    {
                      title: "Get the subject authorized by the resource",
                      path: "/reference/sdk/java/management/访问控制管理/get-resource-authorized-targets",
                    },
                  ],
                },
                {
                  title: "Manage data resources and permissions",
                  children: [
                    {
                      title: "Create permission space",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-permission-namespace",
                    },
                    {
                      title: "Batch create permission spaces",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-permission-namespaces-batch",
                    },
                    {
                      title: "Get permission space details",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-permission-namespace",
                    },
                    {
                      title: "Batch get permission space details list",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-permission-namespaces-batch",
                    },
                    {
                      title: "Paged get permission space list",
                      path: "/reference/sdk/java/management/管理数据资源与权限/list-permission-namespaces",
                    },
                    {
                      title: "Modify Permission Space",
                      path: "/reference/sdk/java/management/管理数据资源与权限/update-permission-namespace",
                    },
                    {
                      title: "Delete Permission Space",
                      path: "/reference/sdk/java/management/管理数据资源与权限/delete-permission-namespace",
                    },
                    {
                      title: "Batch Delete Permission Space",
                      path: "/reference/sdk/java/management/管理数据资源与权限/delete-permission-namespaces-batch",
                    },
                    {
                      title:
                        "Check whether the permission space Code or name is available",
                      path: "/reference/sdk/java/management/管理数据资源与权限/check-permission-namespace-exists",
                    },
                    {
                      title:
                        "Paginated query of all roles in the permission space",
                      path: "/reference/sdk/java/management/管理数据资源与权限/list-permission-namespace-roles",
                    },
                    {
                      title: "Create data resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-data-resource",
                    },
                    {
                      title: "Create string data resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-string-data-resource",
                    },
                    {
                      title: "Create array data resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-array-data-resource",
                    },
                    {
                      title: "Create tree data resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-tree-data-resource",
                    },
                    {
                      title: "Get data resource list",
                      path: "/reference/sdk/java/management/管理数据资源与权限/list-data-resources",
                    },
                    {
                      title: "Get data resource information",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-data-resource",
                    },
                    {
                      title: "Modify data resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/update-data-resource",
                    },
                    {
                      title: "Delete data resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/delete-data-resource",
                    },
                    {
                      title: "Check data resource name or Code Is it available",
                      path: "/reference/sdk/java/management/管理数据资源与权限/check-data-resource-exists",
                    },
                    {
                      title: "Create data resource extension fields",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-dnef",
                    },
                    {
                      title: "Batch create data resource extension fields",
                      path: "/reference/sdk/java/management/管理数据资源与权限/batch-create-dnef",
                    },
                    {
                      title: "Delete data resource extension fields",
                      path: "/reference/sdk/java/management/管理数据资源与权限/delete-dnef",
                    },
                    {
                      title: "Modify data resource extension fields",
                      path: "/reference/sdk/java/management/管理数据资源与权限/update-dnef",
                    },
                    {
                      title: "Get data resource extension field list",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-dnef-list",
                    },
                    {
                      title: "Create data policy",
                      path: "/reference/sdk/java/management/管理数据资源与权限/create-data-policy",
                    },
                    {
                      title: "Get data policy list",
                      path: "/reference/sdk/java/management/管理数据资源与权限/list-data-policies",
                    },
                    {
                      title: "Get a list of simple data policy information",
                      path: "/reference/sdk/java/management/管理数据资源与权限/list-simple-data-policies",
                    },
                    {
                      title: "Get data policy information",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-data-policy",
                    },
                    {
                      title: "Modify data policy",
                      path: "/reference/sdk/java/management/管理数据资源与权限/update-data-policy",
                    },
                    {
                      title: "Delete data policy",
                      path: "/reference/sdk/java/management/管理数据资源与权限/delete-data-policy",
                    },
                    {
                      title: "Check whether the data policy name exists",
                      path: "/reference/sdk/java/management/管理数据资源与权限/check-data-policy-exists",
                    },
                    {
                      title:
                        "Get all the information of the authorized subjects under the data policy",
                      path: "/reference/sdk/java/management/管理数据资源与权限/list-data-policy-targets",
                    },
                    {
                      title: "Authorize Data Policy",
                      path: "/reference/sdk/java/management/管理数据资源与权限/authorize-data-policies",
                    },
                    {
                      title: "Revoke Data Policy",
                      path: "/reference/sdk/java/management/管理数据资源与权限/revoke-data-policy",
                    },
                    {
                      title: "Get User Permission List",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-user-permission-list",
                    },
                    {
                      title: "Judge user permissions",
                      path: "/reference/sdk/java/management/管理数据资源与权限/check-permission",
                    },
                    {
                      title: "Judge external user permissions",
                      path: "/reference/sdk/java/management/管理数据资源与权限/check-external-user-permission",
                    },
                    {
                      title: "Get user-specified resource permission list",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-user-resource-permission-list",
                    },
                    {
                      title: "Get a list of users authorized to use resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/list-resource-targets",
                    },
                    {
                      title: "Get a list of user-authorized resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-user-resource-struct",
                    },
                    {
                      title:
                        "Get the structure list of external user authorization resources",
                      path: "/reference/sdk/java/management/管理数据资源与权限/get-external-user-resource-struct",
                    },
                    {
                      title: `Judge the user's permissions under the same level resources of the tree resource`,
                      path: "/reference/sdk/java/management/管理数据资源与权限/check-user-same-level-permission",
                    },
                  ],
                },
                {
                  title: "Manage Applications",
                  children: [
                    {
                      title: "Get Application Details",
                      path: "/reference/sdk/java/management/管理应用/get-application",
                    },
                    {
                      title: "Get Application List",
                      path: "/reference/sdk/java/management/管理应用/list-applications",
                    },
                    {
                      title: "Get Simple Application Information",
                      path: "/reference/sdk/java/management/管理应用/get-application-simple-info",
                    },
                    {
                      title: "Get Simple Application Information List",
                      path: "/reference/sdk/java/management/管理应用/list-application-simple-info",
                    },
                    {
                      title: "Create Application",
                      path: "/reference/sdk/java/management/管理应用/create-application",
                    },
                    {
                      title: "Delete application",
                      path: "/reference/sdk/java/management/管理应用/delete-application",
                    },
                    {
                      title: "Get application key",
                      path: "/reference/sdk/java/management/管理应用/get-application-secret",
                    },
                    {
                      title: "Refresh application key",
                      path: "/reference/sdk/java/management/管理应用/refresh-application-secret",
                    },
                    {
                      title:
                        "Get the current logged-in user of the application",
                      path: "/reference/sdk/java/management/管理应用/list-application-active-users",
                    },
                    {
                      title:
                        "Get the default access authorization strategy of the application",
                      path: "/reference/sdk/java/management/管理应用/get-application-permission-strategy",
                    },
                    {
                      title:
                        "Update the default access authorization strategy of the application",
                      path: "/reference/sdk/java/management/管理应用/update-application-permission-strategy",
                    },
                    {
                      title: "Authorize application access permissions",
                      path: "/reference/sdk/java/management/管理应用/authorize-application-access",
                    },
                    {
                      title: "Delete application access authorization records",
                      path: "/reference/sdk/java/management/管理应用/revoke-application-access",
                    },
                    {
                      title: "Check whether the domain name is available",
                      path: "/reference/sdk/java/management/管理应用/check-domain-available",
                    },
                    {
                      title: "Get user MFA trigger data under the application",
                      path: "/reference/sdk/java/management/管理应用/get-application-mfa-trigger-data",
                    },
                  ],
                },
                {
                  title: "Manage Identity Sources",
                  children: [
                    {
                      title: "Get Identity Source List",
                      path: "/reference/sdk/java/management/外部身份源管理/list-ext-idp",
                    },
                    {
                      title: "Get Identity Source Details",
                      path: "/reference/sdk/java/management/外部身份源管理/get-ext-idp",
                    },
                    {
                      title: "Create Identity Source",
                      path: "/reference/sdk/java/management/外部身份源管理/create-ext-idp",
                    },
                    {
                      title: "Update Identity Source Configuration",
                      path: "/reference/sdk/java/management/外部身份源管理/update-ext-idp",
                    },
                    {
                      title: "Delete Identity Source",
                      path: "/reference/sdk/java/management/外部身份源管理/delete-ext-idp",
                    },
                    {
                      title:
                        "Create a new connection under an existing identity source",
                      path: "/reference/sdk/java/management/外部身份源管理/create-ext-idp-conn",
                    },
                    {
                      title: "Update Identity Source Connection",
                      path: "/reference/sdk/java/management/外部身份源管理/update-ext-idp-conn",
                    },
                    {
                      title: "Delete Identity Source Connection",
                      path: "/reference/sdk/java/management/外部身份源管理/delete-ext-idp-conn",
                    },
                    {
                      title: "Identity Source Connection Switch",
                      path: "/reference/sdk/java/management/外部身份源管理/change-ext-idp-conn-state",
                    },
                    {
                      title: "Tenant Associate Identity Source",
                      path: "/reference/sdk/java/management/外部身份源管理/change-ext-idp-conn-association-state",
                    },
                    {
                      title:
                        "Get the list of identity sources in the tenant console",
                      path: "/reference/sdk/java/management/外部身份源管理/list-tenant-ext-idp",
                    },
                    {
                      title:
                        "Connection details of applications under identity sources",
                      path: "/reference/sdk/java/management/外部身份源管理/ext-idp-conn-apps",
                    },
                  ],
                },
                {
                  title: "Manage security configuration",
                  children: [
                    {
                      title: "Get security configuration",
                      path: "/reference/sdk/java/management/管理安全配置/get-security-settings",
                    },
                    {
                      title: "Modify security configuration",
                      path: "/reference/sdk/java/management/管理安全配置/update-security-settings",
                    },
                    {
                      title:
                        "Get global multi-factor authentication configuration",
                      path: "/reference/sdk/java/management/管理安全配置/get-global-mfa-settings",
                    },
                    {
                      title:
                        "Modify global multi-factor authentication configuration",
                      path: "/reference/sdk/java/management/管理安全配置/update-global-mfa-settings",
                    },
                  ],
                },
                {
                  title: "Manage message service",
                  children: [
                    {
                      title: "Get the list of email templates",
                      path: "/reference/sdk/java/management/管理消息服务/get-email-templates",
                    },
                    {
                      title: "Modify email template",
                      path: "/reference/sdk/java/management/管理消息服务/update-email-template",
                    },
                    {
                      title: "Preview email template",
                      path: "/reference/sdk/java/management/管理消息服务/preview-email-template",
                    },
                    {
                      title: "Get third-party email service configuration",
                      path: "/reference/sdk/java/management/管理消息服务/get-email-provider",
                    },
                    {
                      title: "Configure third-party email service",
                      path: "/reference/sdk/java/management/管理消息服务/config-email-provier",
                    },
                  ],
                },
                {
                  title: "Manage Pipeline",
                  children: [
                    {
                      title: "Create Pipeline function",
                      path: "/reference/sdk/java/management/管理-pipeline/create-pipeline-function",
                    },
                    {
                      title: "Get Pipeline function details",
                      path: "/reference/sdk/java/management/管理-pipeline/get-pipeline-function",
                    },
                    {
                      title: "Re-upload Pipeline function",
                      path: "/reference/sdk/java/management/管理-pipeline/reupload-pipeline-function",
                    },
                    {
                      title: "Modify Pipeline function",
                      path: "/reference/sdk/java/management/管理-pipeline/update-pipeline-function",
                    },
                    {
                      title: "Modify Pipeline function order",
                      path: "/reference/sdk/java/management/管理-pipeline/update-pipeline-order",
                    },
                    {
                      title: "Delete Pipeline function",
                      path: "/reference/sdk/java/management/管理-pipeline/delete-pipeline-function",
                    },
                    {
                      title: "Get Pipeline function list",
                      path: "/reference/sdk/java/management/管理-pipeline/list-pipeline-functions",
                    },
                    {
                      title: "Get Pipeline log",
                      path: "/reference/sdk/java/management/管理-pipeline/get-pipeline-logs",
                    },
                  ],
                },
                {
                  title: "Manage Webhook",
                  children: [
                    {
                      title: "Create Webhook",
                      path: "/reference/sdk/java/management/管理-webhook/create-webhook",
                    },
                    {
                      title: "Get Webhook List",
                      path: "/reference/sdk/java/management/管理-webhook/list-webhooks",
                    },
                    {
                      title: "Modify Webhook Configuration",
                      path: "/reference/sdk/java/management/管理-webhook/update-webhook",
                    },
                    {
                      title: "Delete Webhook",
                      path: "/reference/sdk/java/management/管理-webhook/delete-webhook",
                    },
                    {
                      title: "Get Webhook Log",
                      path: "/reference/sdk/java/management/管理-webhook/get-webhook-logs",
                    },
                    {
                      title: "Manually trigger Webhook execution",
                      path: "/reference/sdk/java/management/管理-webhook/trigger-webhook",
                    },
                    {
                      title: "Get Webhook details",
                      path: "/reference/sdk/java/management/管理-webhook/get-webhook",
                    },
                    {
                      title: "Get Webhook event list",
                      path: "/reference/sdk/java/management/管理-webhook/get-webhook-event-list",
                    },
                  ],
                },
                {
                  title: "Get audit log",
                  children: [
                    {
                      title: "Get user behavior log",
                      path: "/reference/sdk/java/management/管理审计日志/get-user-action-logs",
                    },
                    {
                      title: "Get administrator action log",
                      path: "/reference/sdk/java/management/管理审计日志/get-admin-audit-logs",
                    },
                  ],
                },
                {
                  title: "Manage metering and billing",
                  children: [
                    {
                      title: "Get package details",
                      path: "/reference/sdk/java/management/管理计量计费/get-current-package-info",
                    },
                    {
                      title: "Get usage details",
                      path: "/reference/sdk/java/management/管理计量计费/get-usage-info",
                    },
                    {
                      title: "Get MAU usage records",
                      path: "/reference/sdk/java/management/管理计量计费/get-mau-period-usage-history",
                    },
                    {
                      title: "Get all rights",
                      path: "/reference/sdk/java/management/管理计量计费/get-all-rights-items",
                    },
                    {
                      title: "Get order list",
                      path: "/reference/sdk/java/management/管理计量计费/get-orders",
                    },
                    {
                      title: "Get order details",
                      path: "/reference/sdk/java/management/管理计量计费/get-order-detail",
                    },
                    {
                      title: "Get order payment details",
                      path: "/reference/sdk/java/management/管理计量计费/get-order-pay-detail",
                    },
                  ],
                },
                {
                  title: "Events",
                  path: "/reference/sdk/java/management/events.md",
                },
              ],
            },
          ],
        },
        {
          title: "Node.js",
          path: "/reference/sdk/node/",
          redirect: "/reference/sdk/node/install.html",
          children: [
            {
              title: "Installation and Usage",
              path: "/reference/sdk/node/install.md",
            },
            {
              title: "Authentication Module",
              children: [
                {
                  title: "Login",
                  children: [
                    {
                      title: "Sign in with Account Password",
                      path: "/reference/sdk/node/authentication/登录/signin-by-account-password.md",
                    },
                    {
                      title: "Sign in with Username Password",
                      path: "/reference/sdk/node/authentication/登录/signin-by-username-password.md",
                    },
                    {
                      title: "Sign in with Phone Password",
                      path: "/reference/sdk/node/authentication/登录/signin-by-phone-password.md",
                    },
                    {
                      title: "Sign in with Email Password",
                      path: "/reference/sdk/node/authentication/登录/signin-by-email-password.md",
                    },
                    {
                      title: "Sign in with Email Passcode",
                      path: "/reference/sdk/node/authentication/登录/signin-by-email-passcode.md",
                    },
                    {
                      title: "Sign in with Phone Passcode",
                      path: "/reference/sdk/node/authentication/登录/signin-by-phone-passcode.md",
                    },
                    {
                      title: "Sign in with LDAP Account",
                      path: "/reference/sdk/node/authentication/登录/signin-by-ldap.md",
                    },
                    {
                      title: "Sign in with AD Account",
                      path: "/reference/sdk/node/authentication/登录/signin-by-ad.md",
                    },
                    {
                      title: "Generate Login URL",
                      path: "/reference/sdk/node/authentication/登录/build-authorize-url.md",
                    },
                    {
                      title: "Sign in with User Credentials",
                      path: "/reference/sdk/node/authentication/登录/signin",
                    },
                    {
                      title: "Sign in with Mobile Social Login",
                      path: "/reference/sdk/node/authentication/登录/signin-by-mobile",
                    },
                    {
                      title: "Get Alipay AuthInfo",
                      path: "/reference/sdk/node/authentication/登录/get-alipay-authinfo",
                    },
                    {
                      title: "Generate QR Code for Login",
                      path: "/reference/sdk/node/authentication/登录/gene-qrcode",
                    },
                    {
                      title: "Check QR Code Status",
                      path: "/reference/sdk/node/authentication/登录/check-qrcode-status",
                    },
                    {
                      title: "Exchange TokenSet with QR Code Ticket",
                      path: "/reference/sdk/node/authentication/登录/exchange-tokenset-with-qrcode-ticket",
                    },
                    {
                      title:
                        "Custom APP QR Code Login: Change QR Code Status on APP Side",
                      path: "/reference/sdk/node/authentication/登录/change-qrcode-status",
                    },
                  ],
                },
                {
                  title: "Logout",
                  children: [
                    {
                      title: "Frontend Logout",
                      path: "/reference/sdk/node/authentication/登出/front-channel-logout.md",
                    },
                    {
                      title: "Backend Logout",
                      path: "/reference/sdk/node/authentication/登出/backend-channel-logout.md",
                    },
                  ],
                },
                {
                  title: "Token Management",
                  children: [
                    {
                      title: "Get Token",
                      path: "/reference/sdk/node/authentication/管理-token/get-access-token.md",
                    },
                    {
                      title: "Validate Token",
                      path: "/reference/sdk/node/authentication/管理-token/introspect-token.md",
                    },
                    {
                      title: "Revoke Token",
                      path: "/reference/sdk/node/authentication/管理-token/revoke-token.md",
                    },
                  ],
                },
                {
                  title: "Registration",
                  children: [
                    {
                      title: "Register with Username Password",
                      path: "/reference/sdk/node/authentication/注册/signup-by-username-password.md",
                    },
                    {
                      title: "Register with Email Password",
                      path: "/reference/sdk/node/authentication/注册/signup-by-email-password.md",
                    },
                    {
                      title: "Register with Phone Passcode",
                      path: "/reference/sdk/node/authentication/注册/signup-by-phone-passcode.md",
                    },
                    {
                      title: "Register with Email Passcode",
                      path: "/reference/sdk/node/authentication/注册/signup-by-email-passcode.md",
                    },
                    {
                      title: "Register",
                      path: "/reference/sdk/node/authentication/注册/signup",
                    },
                  ],
                },
                {
                  title: "User Profile",
                  children: [
                    {
                      title: "Get User Profile",
                      path: "/reference/sdk/node/authentication/用户资料/get-profile",
                    },
                    {
                      title: "Update User Profile",
                      path: "/reference/sdk/node/authentication/用户资料/update-profile",
                    },
                    {
                      title: "Bind Email",
                      path: "/reference/sdk/node/authentication/用户资料/bind-email",
                    },
                    {
                      title: "Unbind Email",
                      path: "/reference/sdk/node/authentication/用户资料/unbind-email",
                    },
                    {
                      title: "Bind Phone",
                      path: "/reference/sdk/node/authentication/用户资料/bind-phone",
                    },
                    {
                      title: "Unbind Phone",
                      path: "/reference/sdk/node/authentication/用户资料/unbind-phone",
                    },
                    {
                      title: "Get Password Strength and Account Security Score",
                      path: "/reference/sdk/node/authentication/用户资料/get-security-info",
                    },
                    {
                      title: "Update Password",
                      path: "/reference/sdk/node/authentication/用户资料/update-password",
                    },
                    {
                      title: "Initiate Email Update Verification Request",
                      path: "/reference/sdk/node/authentication/用户资料/verify-update-email-request",
                    },
                    {
                      title: "Update Email",
                      path: "/reference/sdk/node/authentication/用户资料/update-email",
                    },
                    {
                      title: "Initiate Phone Update Verification Request",
                      path: "/reference/sdk/node/authentication/用户资料/verify-update-phone-request",
                    },
                    {
                      title: "Update Phone",
                      path: "/reference/sdk/node/authentication/用户资料/update-phone",
                    },
                    {
                      title: "Initiate Forgot Password Request",
                      path: "/reference/sdk/node/authentication/用户资料/verify-reset-password-request",
                    },
                    {
                      title: "Reset Password",
                      path: "/reference/sdk/node/authentication/用户资料/reset-password",
                    },
                    {
                      title: "Initiate Account Deletion Request",
                      path: "/reference/sdk/node/authentication/用户资料/verify-delete-account-request",
                    },
                    {
                      title: "Delete Account",
                      path: "/reference/sdk/node/authentication/用户资料/delete-account",
                    },
                  ],
                },
                {
                  title: "Account Binding",
                  children: [
                    {
                      title: "Generate External Identity Source Binding Link",
                      path: "/reference/sdk/node/authentication/账号绑定/generate-link-extidp-url",
                    },
                    {
                      title: "Unbind External Identity Source",
                      path: "/reference/sdk/node/authentication/账号绑定/unlink-extidp",
                    },
                    {
                      title: "Get Bound External Identity Sources",
                      path: "/reference/sdk/node/authentication/账号绑定/get-identities",
                    },
                    {
                      title:
                        "Get Application Enabled External Identity Sources List",
                      path: "/reference/sdk/node/authentication/账号绑定/get-application-enabled-extidps",
                    },
                  ],
                },
                {
                  title: "MFA Factor Management",
                  children: [
                    {
                      title: "Initiate MFA Factor Binding Request",
                      path: "/reference/sdk/node/authentication/mfa-要素管理/send-enroll-factor-request",
                    },
                    {
                      title: "Bind MFA Factor",
                      path: "/reference/sdk/node/authentication/mfa-要素管理/enroll-factor",
                    },
                    {
                      title: "Unbind MFA Factor",
                      path: "/reference/sdk/node/authentication/mfa-要素管理/reset-factor",
                    },
                    {
                      title: "Get All Bound MFA Factors",
                      path: "/reference/sdk/node/authentication/mfa-要素管理/list-enrolled-factors",
                    },
                    {
                      title: "Get Specific Bound MFA Factor",
                      path: "/reference/sdk/node/authentication/mfa-要素管理/get-factor",
                    },
                    {
                      title: "Get Available MFA Factors for Binding",
                      path: "/reference/sdk/node/authentication/mfa-要素管理/list-factors-to-enroll",
                    },
                  ],
                },
                {
                  title: "User Related Resources",
                  children: [
                    {
                      title: "Get Login History",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-login-history",
                    },
                    {
                      title: "Get Login Applications",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-logged-in-apps",
                    },
                    {
                      title: "Get Accessible Applications",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-accessible-apps",
                    },
                    {
                      title: "Get Tenant List",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-tenant-list",
                    },
                    {
                      title: "Get Role List",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-role-list",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-group-list",
                    },
                    {
                      title: "Get Department List",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-department-list",
                    },
                    {
                      title: "Get Authorized Resources List",
                      path: "/reference/sdk/node/authentication/用户相关资源/get-my-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Message Service",
                  children: [
                    {
                      title: "Send SMS",
                      path: "/reference/sdk/node/authentication/消息服务/send-sms",
                    },
                    {
                      title: "Send Email",
                      path: "/reference/sdk/node/authentication/消息服务/send-email",
                    },
                  ],
                },
                {
                  title: "Authorization",
                  children: [
                    {
                      title: "String Resource Authorization",
                      path: "/reference/sdk/node/authentication/鉴权/check-permission-string-resource",
                    },
                    {
                      title: "Array Resource Authorization",
                      path: "/reference/sdk/node/authentication/鉴权/check-permission-array-resource",
                    },
                    {
                      title: "Tree Resource Authorization",
                      path: "/reference/sdk/node/authentication/鉴权/check-permission-tree-resource",
                    },
                    {
                      title:
                        "Get User Authorized Resources List in Login Application",
                      path: "/reference/sdk/node/authentication/鉴权/get-user-auth-resource-list",
                    },
                    {
                      title:
                        "Get User Resource Permissions List in Login Application",
                      path: "/reference/sdk/node/authentication/鉴权/get-user-auth-resource-permission-list",
                    },
                    {
                      title:
                        "Get User Resource Permissions Structure in Login Application",
                      path: "/reference/sdk/node/authentication/鉴权/get-user-auth-resource-struct",
                    },
                  ],
                },
                {
                  title: "WeChat Related APIs",
                  children: [
                    {
                      title: "Decrypt WeChat Mini Program Data",
                      path: "/reference/sdk/node/authentication/微信相关接口/decrypt-wechat-miniprogram-data",
                    },
                    {
                      title:
                        "Get WeChat Mini Program and Official Account Access Token",
                      path: "/reference/sdk/node/authentication/微信相关接口/get-wechat-access-token",
                    },
                  ],
                },
                {
                  title: "Others",
                  children: [
                    {
                      title: "Get Server Public Information",
                      path: "/reference/sdk/node/authentication/其他/system",
                    },
                    {
                      title: "Get Country List",
                      path: "/reference/sdk/node/authentication/其他/get-country-list",
                    },
                  ],
                },
                {
                  title: "OIDC Module",
                  path: "/reference/sdk/node/authentication/oidc.md",
                },
                {
                  title: "OAuth Module",
                  path: "/reference/sdk/node/authentication/oauth.md",
                },
                {
                  title: "SAML Module",
                  path: "/reference/sdk/node/authentication/saml.md",
                },
                {
                  title: "CAS Module",
                  path: "/reference/sdk/node/authentication/cas.md",
                },
                {
                  title: "Events",
                  path: "/reference/sdk/node/authentication/events.md",
                },
              ],
            },
            {
              title: "Management Module",
              children: [
                {
                  title: "User Management",
                  children: [
                    {
                      title: "Get User List",
                      path: "/reference/sdk/node/management/管理用户/list-users",
                    },
                    {
                      title: "Get User Information",
                      path: "/reference/sdk/node/management/管理用户/get-user",
                    },
                    {
                      title: "Batch Get User Information",
                      path: "/reference/sdk/node/management/管理用户/get-user-batch",
                    },
                    {
                      title: "Create User",
                      path: "/reference/sdk/node/management/管理用户/create-user",
                    },
                    {
                      title: "Batch Create Users",
                      path: "/reference/sdk/node/management/管理用户/create-users-batch",
                    },
                    {
                      title: "Update User Profile",
                      path: "/reference/sdk/node/management/管理用户/update-user",
                    },
                    {
                      title: "Batch Update User Profile",
                      path: "/reference/sdk/node/management/管理用户/update-user-batch",
                    },
                    {
                      title: "Delete Users",
                      path: "/reference/sdk/node/management/管理用户/delete-users-batch",
                    },
                    {
                      title: "Get User External Identity Sources",
                      path: "/reference/sdk/node/management/管理用户/get-user-identities",
                    },
                    {
                      title: "Get User Role List",
                      path: "/reference/sdk/node/management/管理用户/get-user-roles",
                    },
                    {
                      title: "Get User Real-name Authentication Information",
                      path: "/reference/sdk/node/management/管理用户/get-user-principal-authentication-info",
                    },
                    {
                      title: "Delete User Real-name Authentication Information",
                      path: "/reference/sdk/node/management/管理用户/reset-user-principal-authentication-info",
                    },
                    {
                      title: "Get User Department List",
                      path: "/reference/sdk/node/management/管理用户/get-user-departments",
                    },
                    {
                      title: "Set User Departments",
                      path: "/reference/sdk/node/management/管理用户/set-user-departments",
                    },
                    {
                      title: "Get User Group List",
                      path: "/reference/sdk/node/management/管理用户/get-user-groups",
                    },
                    {
                      title: "Get User MFA Binding Information",
                      path: "/reference/sdk/node/management/管理用户/get-user-mfa-info",
                    },
                    {
                      title: "Get Archived User List",
                      path: "/reference/sdk/node/management/管理用户/list-archived-users",
                    },
                    {
                      title: "Force Logout Users",
                      path: "/reference/sdk/node/management/管理用户/kick-users",
                    },
                    {
                      title: "Check if User Exists",
                      path: "/reference/sdk/node/management/管理用户/is-user-exists",
                    },
                    {
                      title: "Get User Accessible Applications",
                      path: "/reference/sdk/node/management/管理用户/get-user-accessible-apps",
                    },
                    {
                      title: "Get User Authorized Applications",
                      path: "/reference/sdk/node/management/管理用户/get-user-authorized-apps",
                    },
                    {
                      title: "Check if User Has Role",
                      path: "/reference/sdk/node/management/管理用户/has-any-role",
                    },
                    {
                      title: "Get User Login History",
                      path: "/reference/sdk/node/management/管理用户/get-user-login-history",
                    },
                    {
                      title: "Get User Previously Logged In Applications",
                      path: "/reference/sdk/node/management/管理用户/get-user-loggedin-apps",
                    },
                    {
                      title: "Get User Previously Logged In Identity Sources",
                      path: "/reference/sdk/node/management/管理用户/get-user-logged-in-identities",
                    },
                    {
                      title: "User Resignation",
                      path: "/reference/sdk/node/management/管理用户/resign-user",
                    },
                    {
                      title: "Batch User Resignation",
                      path: "/reference/sdk/node/management/管理用户/resign-user-batch",
                    },
                    {
                      title: "Get User Authorized Resources",
                      path: "/reference/sdk/node/management/管理用户/get-user-authorized-resources",
                    },
                    {
                      title: "Check User Session Status in Application",
                      path: "/reference/sdk/node/management/管理用户/check-session-status",
                    },
                    {
                      title: "Import User OTP",
                      path: "/reference/sdk/node/management/管理用户/import-otp",
                    },
                    {
                      title: "Set User MFA Status",
                      path: "/reference/sdk/node/management/管理用户/set-user-mfa-status",
                    },
                    {
                      title: "Get User MFA Status",
                      path: "/reference/sdk/node/management/管理用户/get-user-mfa-status",
                    },
                  ],
                },
                {
                  title: "Organization Management",
                  children: [
                    {
                      title: "Get Organization Details",
                      path: "/reference/sdk/node/management/管理组织机构/get-organization",
                    },
                    {
                      title: "Batch Get Organization Details",
                      path: "/reference/sdk/node/management/管理组织机构/get-organization-batch",
                    },
                    {
                      title: "Get Organization List",
                      path: "/reference/sdk/node/management/管理组织机构/list-organizations",
                    },
                    {
                      title: "Create Organization",
                      path: "/reference/sdk/node/management/管理组织机构/create-organization",
                    },
                    {
                      title: "Update Organization",
                      path: "/reference/sdk/node/management/管理组织机构/update-organization",
                    },
                    {
                      title: "Delete Organization",
                      path: "/reference/sdk/node/management/管理组织机构/delete-organization",
                    },
                    {
                      title: "Search Organizations",
                      path: "/reference/sdk/node/management/管理组织机构/search-organizations",
                    },
                    {
                      title: "Get Department Information",
                      path: "/reference/sdk/node/management/管理组织机构/get-department",
                    },
                    {
                      title: "Create Department",
                      path: "/reference/sdk/node/management/管理组织机构/create-department",
                    },
                    {
                      title: "Update Department",
                      path: "/reference/sdk/node/management/管理组织机构/update-department",
                    },
                    {
                      title: "Delete Department",
                      path: "/reference/sdk/node/management/管理组织机构/delete-department",
                    },
                    {
                      title: "Search Departments",
                      path: "/reference/sdk/node/management/管理组织机构/search-departments",
                    },
                    {
                      title: "Get Child Department List",
                      path: "/reference/sdk/node/management/管理组织机构/list-children-departments",
                    },
                    {
                      title: "Get Department Member List",
                      path: "/reference/sdk/node/management/管理组织机构/list-department-members",
                    },
                    {
                      title: "Get Department Direct Member ID List",
                      path: "/reference/sdk/node/management/管理组织机构/list-department-member-ids",
                    },
                    {
                      title: "Search Department Members",
                      path: "/reference/sdk/node/management/管理组织机构/search-department-members",
                    },
                    {
                      title: "Add Department Members",
                      path: "/reference/sdk/node/management/管理组织机构/add-department-members",
                    },
                    {
                      title: "Remove Department Members",
                      path: "/reference/sdk/node/management/管理组织机构/remove-department-members",
                    },
                    {
                      title: "Get Parent Department Information",
                      path: "/reference/sdk/node/management/管理组织机构/get-parent-department",
                    },
                    {
                      title: "Check if User is in Department",
                      path: "/reference/sdk/node/management/管理组织机构/is-user-in-department",
                    },
                  ],
                },
                {
                  title: "Role Management",
                  children: [
                    {
                      title: "Get Role Details",
                      path: "/reference/sdk/node/management/管理角色/get-role",
                    },
                    {
                      title: "Assign Role",
                      path: "/reference/sdk/node/management/管理角色/assign-role",
                    },
                    {
                      title: "Revoke Role",
                      path: "/reference/sdk/node/management/管理角色/revoke-role",
                    },
                    {
                      title: "Get Role Authorized Resources",
                      path: "/reference/sdk/node/management/管理角色/get-role-authorized-resources",
                    },
                    {
                      title: "Get Role Member List",
                      path: "/reference/sdk/node/management/管理角色/list-role-members",
                    },
                    {
                      title: "Get Role Department List",
                      path: "/reference/sdk/node/management/管理角色/list-role-departments",
                    },
                    {
                      title: "Create Role",
                      path: "/reference/sdk/node/management/管理角色/create-role",
                    },
                    {
                      title: "Get Role List",
                      path: "/reference/sdk/node/management/管理角色/list-roles",
                    },
                    {
                      title: "Delete Roles",
                      path: "/reference/sdk/node/management/管理角色/delete-roles-batch",
                    },
                    {
                      title: "Batch Create Roles",
                      path: "/reference/sdk/node/management/管理角色/create-roles-batch",
                    },
                    {
                      title: "Update Role",
                      path: "/reference/sdk/node/management/管理角色/update-role",
                    },
                  ],
                },
                {
                  title: "User Group Management",
                  children: [
                    {
                      title: "Get Group Details",
                      path: "/reference/sdk/node/management/管理用户分组/get-group",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference/sdk/node/management/管理用户分组/list-groups",
                    },
                    {
                      title: "Create Group",
                      path: "/reference/sdk/node/management/管理用户分组/create-group",
                    },
                    {
                      title: "Batch Create Groups",
                      path: "/reference/sdk/node/management/管理用户分组/create-groups-batch",
                    },
                    {
                      title: "Update Group",
                      path: "/reference/sdk/node/management/管理用户分组/update-group",
                    },
                    {
                      title: "Batch Delete Groups",
                      path: "/reference/sdk/node/management/管理用户分组/delete-groups-batch",
                    },
                    {
                      title: "Add Group Members",
                      path: "/reference/sdk/node/management/管理用户分组/add-group-members",
                    },
                    {
                      title: "Batch Remove Group Members",
                      path: "/reference/sdk/node/management/管理用户分组/remove-group-members",
                    },
                    {
                      title: "Get Group Member List",
                      path: "/reference/sdk/node/management/管理用户分组/list-group-members",
                    },
                    {
                      title: "Get Group Authorized Resources",
                      path: "/reference/sdk/node/management/管理用户分组/get-group-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Custom Field Management",
                  children: [
                    {
                      title: "Get User Built-in Fields List",
                      path: "/reference/sdk/node/management/管理自定义字段/get-user-base-fields",
                    },
                    {
                      title: "Update User Built-in Fields Configuration",
                      path: "/reference/sdk/node/management/管理自定义字段/set-user-base-fields",
                    },
                    {
                      title: "Get Custom Fields List",
                      path: "/reference/sdk/node/management/管理自定义字段/get-custom-fields",
                    },
                    {
                      title: "Create/Update Custom Field Definition",
                      path: "/reference/sdk/node/management/管理自定义字段/set-custom-fields",
                    },
                    {
                      title: "Set Custom Field Value",
                      path: "/reference/sdk/node/management/管理自定义字段/set-custom-data",
                    },
                    {
                      title:
                        "Get Custom Field Values for User, Group, Role, Organization",
                      path: "/reference/sdk/node/management/管理自定义字段/get-custom-data",
                    },
                  ],
                },
                {
                  title: "Resource and Permission Management",
                  children: [
                    {
                      title: "Create Resource",
                      path: "/reference/sdk/node/management/管理资源与权限/create-resource",
                    },
                    {
                      title: "Batch Create Resources",
                      path: "/reference/sdk/node/management/管理资源与权限/create-resources-batch",
                    },
                    {
                      title: "Get Resource Details",
                      path: "/reference/sdk/node/management/管理资源与权限/get-resource",
                    },
                    {
                      title: "Batch Get Resource Details",
                      path: "/reference/sdk/node/management/管理资源与权限/get-resources-batch",
                    },
                    {
                      title: "Get Resource List with Pagination",
                      path: "/reference/sdk/node/management/管理资源与权限/list-resources",
                    },
                    {
                      title: "Update Resource",
                      path: "/reference/sdk/node/management/管理资源与权限/update-resource",
                    },
                    {
                      title: "Delete Resource",
                      path: "/reference/sdk/node/management/管理资源与权限/delete-resource",
                    },
                    {
                      title: "Batch Delete Resources",
                      path: "/reference/sdk/node/management/管理资源与权限/delete-resources-batch",
                    },
                    {
                      title:
                        "Associate/Disassociate Application Resources to Tenant",
                      path: "/reference/sdk/node/management/管理资源与权限/associate-tenant-resource",
                    },
                    {
                      title: "Create Permission Group",
                      path: "/reference/sdk/node/management/管理资源与权限/create-namespace",
                    },
                    {
                      title: "Batch Create Permission Groups",
                      path: "/reference/sdk/node/management/管理资源与权限/create-namespaces-batch",
                    },
                    {
                      title: "Get Permission Group Details",
                      path: "/reference/sdk/node/management/管理资源与权限/get-namespace",
                    },
                    {
                      title: "Batch Get Permission Group Details",
                      path: "/reference/sdk/node/management/管理资源与权限/get-namespaces-batch",
                    },
                    {
                      title: "Update Permission Group Information",
                      path: "/reference/sdk/node/management/管理资源与权限/update-namespace",
                    },
                    {
                      title: "Delete Permission Group Information",
                      path: "/reference/sdk/node/management/管理资源与权限/delete-namespace",
                    },
                    {
                      title: "Batch Delete Permission Groups",
                      path: "/reference/sdk/node/management/管理资源与权限/delete-namespaces-batch",
                    },
                    {
                      title: "Authorize Resources",
                      path: "/reference/sdk/node/management/管理资源与权限/authorize-resources",
                    },
                    {
                      title: "Get List of Authorized Resources for a Subject",
                      path: "/reference/sdk/node/management/管理资源与权限/get-authorized-resources",
                    },
                    {
                      title: "Check if User Has Permission for Resource Action",
                      path: "/reference/sdk/node/management/管理资源与权限/is-action-allowed",
                    },
                    {
                      title: "Get Authorized Subjects for Resource",
                      path: "/reference/sdk/node/management/管理资源与权限/get-resource-authorized-targets",
                    },
                  ],
                },
                {
                  title: "Manage Data Resources and Permissions",
                  children: [
                    {
                      title: "Create Permission Namespace",
                      path: "/reference/sdk/node/management/管理数据资源与权限/create-permission-namespace",
                    },
                    {
                      title: "Batch Create Permission Namespaces",
                      path: "/reference/sdk/node/management/管理数据资源与权限/create-permission-namespaces-batch",
                    },
                    {
                      title: "Get Permission Namespace Details",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-permission-namespace",
                    },
                    {
                      title: "Batch Get Permission Namespace Details List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-permission-namespaces-batch",
                    },
                    {
                      title: "Get Paginated Permission Namespace List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/list-permission-namespaces",
                    },
                    {
                      title: "Update Permission Namespace",
                      path: "/reference/sdk/node/management/管理数据资源与权限/update-permission-namespace",
                    },
                    {
                      title: "Delete Permission Namespace",
                      path: "/reference/sdk/node/management/管理数据资源与权限/delete-permission-namespace",
                    },
                    {
                      title: "Batch Delete Permission Namespaces",
                      path: "/reference/sdk/node/management/管理数据资源与权限/delete-permission-namespaces-batch",
                    },
                    {
                      title:
                        "Check if Permission Namespace Code or Name is Available",
                      path: "/reference/sdk/node/management/管理数据资源与权限/check-permission-namespace-exists",
                    },
                    {
                      title:
                        "Get Paginated Role List Under Permission Namespace",
                      path: "/reference/sdk/node/management/管理数据资源与权限/list-permission-namespace-roles",
                    },
                    {
                      title: "Create Data Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/create-data-resource",
                    },
                    {
                      title: "Create String Data Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/create-string-data-resource",
                    },
                    {
                      title: "Create Array Data Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/create-array-data-resource",
                    },
                    {
                      title: "Create Tree Data Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/create-tree-data-resource",
                    },
                    {
                      title: "Get Data Resource List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/list-data-resources",
                    },
                    {
                      title: "Get Data Resource Information",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-data-resource",
                    },
                    {
                      title: "Update Data Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/update-data-resource",
                    },
                    {
                      title: "Delete Data Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/delete-data-resource",
                    },
                    {
                      title: "Check if Data Resource Name or Code is Available",
                      path: "/reference/sdk/node/management/管理数据资源与权限/check-data-resource-exists",
                    },
                    {
                      title: "Create Data Policy",
                      path: "/reference/sdk/node/management/管理数据资源与权限/create-data-policy",
                    },
                    {
                      title: "Get Data Policy List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/list-data-policies",
                    },
                    {
                      title: "Get Simple Data Policy List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/list-simple-data-policies",
                    },
                    {
                      title: "Get Data Policy Information",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-data-policy",
                    },
                    {
                      title: "Update Data Policy",
                      path: "/reference/sdk/node/management/管理数据资源与权限/update-data-policy",
                    },
                    {
                      title: "Delete Data Policy",
                      path: "/reference/sdk/node/management/管理数据资源与权限/delete-data-policy",
                    },
                    {
                      title: "Check if Data Policy Name Exists",
                      path: "/reference/sdk/node/management/管理数据资源与权限/check-data-policy-exists",
                    },
                    {
                      title:
                        "Get All Authorized Subjects Information Under Data Policy",
                      path: "/reference/sdk/node/management/管理数据资源与权限/list-data-policy-targets",
                    },
                    {
                      title: "Authorize Data Policies",
                      path: "/reference/sdk/node/management/管理数据资源与权限/authorize-data-policies",
                    },
                    {
                      title: "Revoke Data Policy",
                      path: "/reference/sdk/node/management/管理数据资源与权限/revoke-data-policy",
                    },
                    {
                      title: "Get User Permission List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-user-permission-list",
                    },
                    {
                      title: "Check User Permission",
                      path: "/reference/sdk/node/management/管理数据资源与权限/check-permission",
                    },
                    {
                      title: "Check External User Permission",
                      path: "/reference/sdk/node/management/管理数据资源与权限/check-external-user-permission",
                    },
                    {
                      title: "Get User Specific Resource Permission List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-user-resource-permission-list",
                    },
                    {
                      title: "Get List of Users Authorized for Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/list-resource-targets",
                    },
                    {
                      title: "Get User Authorized Resource Structure List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-user-resource-struct",
                    },
                    {
                      title:
                        "Get External User Authorized Resource Structure List",
                      path: "/reference/sdk/node/management/管理数据资源与权限/get-external-user-resource-struct",
                    },
                    {
                      title:
                        "Check User Permission for Same Level Resources in Tree Resource",
                      path: "/reference/sdk/node/management/管理数据资源与权限/check-user-same-level-permission",
                    },
                  ],
                },
                {
                  title: "Manage Applications",
                  children: [
                    {
                      title: "Get Application Details",
                      path: "/reference/sdk/node/management/管理应用/get-application",
                    },
                    {
                      title: "Get Application List",
                      path: "/reference/sdk/node/management/管理应用/list-applications",
                    },
                    {
                      title: "Get Application Basic Information",
                      path: "/reference/sdk/node/management/管理应用/get-application-simple-info",
                    },
                    {
                      title: "Get Application Basic Information List",
                      path: "/reference/sdk/node/management/管理应用/list-application-simple-info",
                    },
                    {
                      title: "Create Application",
                      path: "/reference/sdk/node/management/管理应用/create-application",
                    },
                    {
                      title: "Delete Application",
                      path: "/reference/sdk/node/management/管理应用/delete-application",
                    },
                    {
                      title: "Get Application Secret",
                      path: "/reference/sdk/node/management/管理应用/get-application-secret",
                    },
                    {
                      title: "Refresh Application Secret",
                      path: "/reference/sdk/node/management/管理应用/refresh-application-secret",
                    },
                    {
                      title: "Get Current Active Users of Application",
                      path: "/reference/sdk/node/management/管理应用/list-application-active-users",
                    },
                    {
                      title:
                        "Get Application Default Access Authorization Strategy",
                      path: "/reference/sdk/node/management/管理应用/get-application-permission-strategy",
                    },
                    {
                      title:
                        "Update Application Default Access Authorization Strategy",
                      path: "/reference/sdk/node/management/管理应用/update-application-permission-strategy",
                    },
                    {
                      title: "Authorize Application Access",
                      path: "/reference/sdk/node/management/管理应用/authorize-application-access",
                    },
                    {
                      title: "Delete Application Access Authorization Record",
                      path: "/reference/sdk/node/management/管理应用/revoke-application-access",
                    },
                    {
                      title: "Check Domain Availability",
                      path: "/reference/sdk/node/management/管理应用/check-domain-available",
                    },
                    {
                      title: "Get Application User MFA Trigger Data",
                      path: "/reference/sdk/node/management/管理应用/get-application-mfa-trigger-data",
                    },
                  ],
                },
                {
                  title: "Manage Identity Sources",
                  children: [
                    {
                      title: "Get Identity Source List",
                      path: "/reference/sdk/node/management/管理身份源/list-ext-idp",
                    },
                    {
                      title: "Get Identity Source Details",
                      path: "/reference/sdk/node/management/管理身份源/get-ext-idp",
                    },
                    {
                      title: "Create Identity Source",
                      path: "/reference/sdk/node/management/管理身份源/create-ext-idp",
                    },
                    {
                      title: "Update Identity Source Configuration",
                      path: "/reference/sdk/node/management/管理身份源/update-ext-idp",
                    },
                    {
                      title: "Delete Identity Source",
                      path: "/reference/sdk/node/management/管理身份源/delete-ext-idp",
                    },
                    {
                      title:
                        "Create New Connection Under Existing Identity Source",
                      path: "/reference/sdk/node/management/管理身份源/create-ext-idp-conn",
                    },
                    {
                      title: "Update Identity Source Connection",
                      path: "/reference/sdk/node/management/管理身份源/update-ext-idp-conn",
                    },
                    {
                      title: "Delete Identity Source Connection",
                      path: "/reference/sdk/node/management/管理身份源/delete-ext-idp-conn",
                    },
                    {
                      title: "Identity Source Connection Switch",
                      path: "/reference/sdk/node/management/管理身份源/change-ext-idp-conn-state",
                    },
                    {
                      title: "Tenant Associate Identity Source",
                      path: "/reference/sdk/node/management/管理身份源/change-ext-idp-conn-association-state",
                    },
                    {
                      title: "Get Identity Source List in Tenant Console",
                      path: "/reference/sdk/node/management/管理身份源/list-tenant-ext-idp",
                    },
                    {
                      title:
                        "Application Connection Details Under Identity Source",
                      path: "/reference/sdk/node/management/管理身份源/ext-idp-conn-apps",
                    },
                  ],
                },
                {
                  title: "Manage Security Configuration",
                  children: [
                    {
                      title: "Get Security Configuration",
                      path: "/reference/sdk/node/management/管理安全配置/get-security-settings",
                    },
                    {
                      title: "Update Security Configuration",
                      path: "/reference/sdk/node/management/管理安全配置/update-security-settings",
                    },
                    {
                      title: "Get Global MFA Configuration",
                      path: "/reference/sdk/node/management/管理安全配置/get-global-mfa-settings",
                    },
                    {
                      title: "Update Global MFA Configuration",
                      path: "/reference/sdk/node/management/管理安全配置/update-global-mfa-settings",
                    },
                  ],
                },
                {
                  title: "Manage Message Service",
                  children: [
                    {
                      title: "Get Email Template List",
                      path: "/reference/sdk/node/management/管理消息服务/get-email-templates",
                    },
                    {
                      title: "Update Email Template",
                      path: "/reference/sdk/node/management/管理消息服务/update-email-template",
                    },
                    {
                      title: "Preview Email Template",
                      path: "/reference/sdk/node/management/管理消息服务/preview-email-template",
                    },
                    {
                      title: "Get Third-party Email Service Configuration",
                      path: "/reference/sdk/node/management/管理消息服务/get-email-provider",
                    },
                    {
                      title: "Configure Third-party Email Service",
                      path: "/reference/sdk/node/management/管理消息服务/config-email-provier",
                    },
                  ],
                },
                {
                  title: "Manage Pipeline",
                  children: [
                    {
                      title: "Create Pipeline Function",
                      path: "/reference/sdk/node/management/管理-pipeline/create-pipeline-function",
                    },
                    {
                      title: "Get Pipeline Function Details",
                      path: "/reference/sdk/node/management/管理-pipeline/get-pipeline-function",
                    },
                    {
                      title: "Re-upload Pipeline Function",
                      path: "/reference/sdk/node/management/管理-pipeline/reupload-pipeline-function",
                    },
                    {
                      title: "Update Pipeline Function",
                      path: "/reference/sdk/node/management/管理-pipeline/update-pipeline-function",
                    },
                    {
                      title: "Update Pipeline Function Order",
                      path: "/reference/sdk/node/management/管理-pipeline/update-pipeline-order",
                    },
                    {
                      title: "Delete Pipeline Function",
                      path: "/reference/sdk/node/management/管理-pipeline/delete-pipeline-function",
                    },
                    {
                      title: "Get Pipeline Function List",
                      path: "/reference/sdk/node/management/管理-pipeline/list-pipeline-functions",
                    },
                    {
                      title: "Get Pipeline Logs",
                      path: "/reference/sdk/node/management/管理-pipeline/get-pipeline-logs",
                    },
                  ],
                },
                {
                  title: "Manage Webhook",
                  children: [
                    {
                      title: "Create Webhook",
                      path: "/reference/sdk/node/management/管理-webhook/create-webhook",
                    },
                    {
                      title: "Get Webhook List",
                      path: "/reference/sdk/node/management/管理-webhook/list-webhooks",
                    },
                    {
                      title: "Update Webhook Configuration",
                      path: "/reference/sdk/node/management/管理-webhook/update-webhook",
                    },
                    {
                      title: "Delete Webhook",
                      path: "/reference/sdk/node/management/管理-webhook/delete-webhook",
                    },
                    {
                      title: "Get Webhook Logs",
                      path: "/reference/sdk/node/management/管理-webhook/get-webhook-logs",
                    },
                    {
                      title: "Manually Trigger Webhook Execution",
                      path: "/reference/sdk/node/management/管理-webhook/trigger-webhook",
                    },
                    {
                      title: "Get Webhook Details",
                      path: "/reference/sdk/node/management/管理-webhook/get-webhook",
                    },
                    {
                      title: "Get Webhook Event List",
                      path: "/reference/sdk/node/management/管理-webhook/get-webhook-event-list",
                    },
                  ],
                },
                {
                  title: "Get Audit Logs",
                  children: [
                    {
                      title: "Get User Action Logs",
                      path: "/reference/sdk/node/management/获取审计日志/get-user-action-logs",
                    },
                    {
                      title: "Get Admin Operation Logs",
                      path: "/reference/sdk/node/management/获取审计日志/get-admin-audit-logs",
                    },
                  ],
                },
                {
                  title: "Manage Metering and Billing",
                  children: [
                    {
                      title: "Get Package Details",
                      path: "/reference/sdk/node/management/管理计量计费/get-current-package-info",
                    },
                    {
                      title: "Get Usage Details",
                      path: "/reference/sdk/node/management/管理计量计费/get-usage-info",
                    },
                    {
                      title: "Get MAU Usage Records",
                      path: "/reference/sdk/node/management/管理计量计费/get-mau-period-usage-history",
                    },
                    {
                      title: "Get All Rights Items",
                      path: "/reference/sdk/node/management/管理计量计费/get-all-rights-items",
                    },
                    {
                      title: "Get Order List",
                      path: "/reference/sdk/node/management/管理计量计费/get-orders",
                    },
                    {
                      title: "Get Order Details",
                      path: "/reference/sdk/node/management/管理计量计费/get-order-detail",
                    },
                    {
                      title: "Get Order Payment Details",
                      path: "/reference/sdk/node/management/管理计量计费/get-order-pay-detail",
                    },
                  ],
                },
                {
                  title: "Events",
                  path: "/reference/sdk/node/management/events.md",
                },
              ],
            },
          ],
        },
        {
          title: "Python",
          path: "/reference/sdk/python/",
          redirect: "/reference/sdk/python/install.html",
          children: [
            {
              title: "Installation and Usage",
              path: "/reference/sdk/python/install.md",
            },
            {
              title: "Authentication Module",
              children: [
                {
                  title: "Login",
                  children: [
                    {
                      title: "Login with Account Password",
                      path: "/reference/sdk/python/authentication/登录/signin-by-account-password.md",
                    },
                    {
                      title: "Login with Username Password",
                      path: "/reference/sdk/python/authentication/登录/signin-by-username-password.md",
                    },
                    {
                      title: "Login with Phone Password",
                      path: "/reference/sdk/python/authentication/登录/signin-by-phone-password.md",
                    },
                    {
                      title: "Login with Email Password",
                      path: "/reference/sdk/python/authentication/登录/signin-by-email-password.md",
                    },
                    {
                      title: "Login with Email Passcode",
                      path: "/reference/sdk/python/authentication/登录/signin-by-email-passcode.md",
                    },
                    {
                      title: "Login with Phone Passcode",
                      path: "/reference/sdk/python/authentication/登录/signin-by-phone-passcode.md",
                    },
                    {
                      title: "Login with LDAP Account",
                      path: "/reference/sdk/python/authentication/登录/signin-by-ldap.md",
                    },
                    {
                      title: "Login with AD Account",
                      path: "/reference/sdk/python/authentication/登录/signin-by-ad.md",
                    },
                    {
                      title: "Login with User Credentials",
                      path: "/reference/sdk/python/authentication/登录/signin",
                    },
                    {
                      title: "Login with Mobile Social Login",
                      path: "/reference/sdk/python/authentication/登录/signin-by-mobile",
                    },
                    {
                      title: "Get Alipay AuthInfo",
                      path: "/reference/sdk/python/authentication/登录/get-alipay-authinfo",
                    },
                    {
                      title: "Generate QR Code for Login",
                      path: "/reference/sdk/python/authentication/登录/gene-qrcode",
                    },
                    {
                      title: "Check QR Code Status",
                      path: "/reference/sdk/python/authentication/登录/check-qrcode-status",
                    },
                    {
                      title: "Exchange TokenSet with QR Code Ticket",
                      path: "/reference/sdk/python/authentication/登录/exchange-tokenset-with-qrcode-ticket",
                    },
                    {
                      title:
                        "Custom APP QR Code Login: Change QR Code Status on APP Side",
                      path: "/reference/sdk/python/authentication/登录/change-qrcode-status",
                    },
                  ],
                },
                {
                  title: "Logout",
                  children: [
                    {
                      title: "Frontend Logout",
                      path: "/reference/sdk/python/authentication/登出/front-channel-logout.md",
                    },
                    {
                      title: "Backend Logout",
                      path: "/reference/sdk/python/authentication/登出/backend-channel-logout.md",
                    },
                  ],
                },
                {
                  title: "Register",
                  children: [
                    {
                      title: "Register with Username Password",
                      path: "/reference/sdk/python/authentication/注册/signup-by-username-password.md",
                    },
                    {
                      title: "Register with Email Password",
                      path: "/reference/sdk/python/authentication/注册/signup-by-email-password.md",
                    },
                    {
                      title: "Register with Phone Passcode",
                      path: "/reference/sdk/python/authentication/注册/signup-by-phone-passcode.md",
                    },
                    {
                      title: "Register with Email Passcode",
                      path: "/reference/sdk/python/authentication/注册/signup-by-email-passcode.md",
                    },
                    {
                      title: "Register",
                      path: "/reference/sdk/python/authentication/注册/signup",
                    },
                  ],
                },
                {
                  title: "User Profile",
                  children: [
                    {
                      title: "Get User Profile",
                      path: "/reference/sdk/python/authentication/用户资料/get-profile",
                    },
                    {
                      title: "Update User Profile",
                      path: "/reference/sdk/python/authentication/用户资料/update-profile",
                    },
                    {
                      title: "Bind Email",
                      path: "/reference/sdk/python/authentication/用户资料/bind-email",
                    },
                    {
                      title: "Unbind Email",
                      path: "/reference/sdk/python/authentication/用户资料/unbind-email",
                    },
                    {
                      title: "Bind Phone",
                      path: "/reference/sdk/python/authentication/用户资料/bind-phone",
                    },
                    {
                      title: "Unbind Phone",
                      path: "/reference/sdk/python/authentication/用户资料/unbind-phone",
                    },
                    {
                      title: "Get Password Strength and Account Security Score",
                      path: "/reference/sdk/python/authentication/用户资料/get-security-info",
                    },
                    {
                      title: "Update Password",
                      path: "/reference/sdk/python/authentication/用户资料/update-password",
                    },
                    {
                      title: "Initiate Email Update Verification Request",
                      path: "/reference/sdk/python/authentication/用户资料/verify-update-email-request",
                    },
                    {
                      title: "Update Email",
                      path: "/reference/sdk/python/authentication/用户资料/update-email",
                    },
                    {
                      title: "Initiate Phone Update Verification Request",
                      path: "/reference/sdk/python/authentication/用户资料/verify-update-phone-request",
                    },
                    {
                      title: "Update Phone",
                      path: "/reference/sdk/python/authentication/用户资料/update-phone",
                    },
                    {
                      title: "Initiate Reset Password Request",
                      path: "/reference/sdk/python/authentication/用户资料/verify-reset-password-request",
                    },
                    {
                      title: "Reset Password",
                      path: "/reference/sdk/python/authentication/用户资料/reset-password",
                    },
                    {
                      title: "Initiate Account Deletion Request",
                      path: "/reference/sdk/python/authentication/用户资料/verify-delete-account-request",
                    },
                    {
                      title: "Delete Account",
                      path: "/reference/sdk/python/authentication/用户资料/delete-account",
                    },
                  ],
                },
                {
                  title: "Account Binding",
                  children: [
                    {
                      title: "Generate External Identity Provider Link",
                      path: "/reference/sdk/python/authentication/账号绑定/generate-link-extidp-url",
                    },
                    {
                      title: "Unbind External Identity Provider",
                      path: "/reference/sdk/python/authentication/账号绑定/unlink-extidp",
                    },
                    {
                      title: "Get Bound External Identity Providers",
                      path: "/reference/sdk/python/authentication/账号绑定/get-identities",
                    },
                    {
                      title:
                        "Get Application Enabled External Identity Providers",
                      path: "/reference/sdk/python/authentication/账号绑定/get-application-enabled-extidps",
                    },
                  ],
                },
                {
                  title: "MFA Factor Management",
                  children: [
                    {
                      title: "Initiate MFA Factor Enrollment Request",
                      path: "/reference/sdk/python/authentication/mfa-要素管理/send-enroll-factor-request",
                    },
                    {
                      title: "Enroll MFA Factor",
                      path: "/reference/sdk/python/authentication/mfa-要素管理/enroll-factor",
                    },
                    {
                      title: "Reset MFA Factor",
                      path: "/reference/sdk/python/authentication/mfa-要素管理/reset-factor",
                    },
                    {
                      title: "Get All Enrolled MFA Factors",
                      path: "/reference/sdk/python/authentication/mfa-要素管理/list-enrolled-factors",
                    },
                    {
                      title: "Get Specific Enrolled MFA Factor",
                      path: "/reference/sdk/python/authentication/mfa-要素管理/get-factor",
                    },
                    {
                      title: "Get Available MFA Factors",
                      path: "/reference/sdk/python/authentication/mfa-要素管理/list-factors-to-enroll",
                    },
                  ],
                },
                {
                  title: "User Related Resources",
                  children: [
                    {
                      title: "Get Login History",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-login-history",
                    },
                    {
                      title: "Get Logged In Applications",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-logged-in-apps",
                    },
                    {
                      title: "Get Accessible Applications",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-accessible-apps",
                    },
                    {
                      title: "Get Tenant List",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-tenant-list",
                    },
                    {
                      title: "Get Role List",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-role-list",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-group-list",
                    },
                    {
                      title: "Get Department List",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-department-list",
                    },
                    {
                      title: "Get Authorized Resource List",
                      path: "/reference/sdk/python/authentication/用户相关资源/get-my-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Message Service",
                  children: [
                    {
                      title: "Send SMS",
                      path: "/reference/sdk/python/authentication/消息服务/send-sms",
                    },
                    {
                      title: "Send Email",
                      path: "/reference/sdk/python/authentication/消息服务/send-email",
                    },
                  ],
                },
                {
                  title: "WeChat Related APIs",
                  children: [
                    {
                      title: "Decrypt WeChat Mini Program Data",
                      path: "/reference/sdk/python/authentication/微信相关接口/decrypt-wechat-miniprogram-data",
                    },
                    {
                      title: "Get Mini Program Phone Number",
                      path: "/reference/sdk/python/authentication/微信相关接口/get-wechat-miniprogram-phone",
                    },
                    {
                      title:
                        "Get GenAuth Server Cached WeChat Mini Program/Official Account Access Token",
                      path: "/reference/sdk/python/authentication/微信相关接口/get-wechat-access-token",
                    },
                  ],
                },
                {
                  title: "Others",
                  children: [
                    {
                      title: "Get Server Public Information",
                      path: "/reference/sdk/python/authentication/其他/system",
                    },
                    {
                      title: "Get Country List",
                      path: "/reference/sdk/python/authentication/其他/get-country-list",
                    },
                  ],
                },
                {
                  title: "OIDC Module",
                  path: "/reference/sdk/python/authentication/oidc.md",
                },
                {
                  title: "OAuth Module",
                  path: "/reference/sdk/python/authentication/oauth.md",
                },
                {
                  title: "SAML Module",
                  path: "/reference/sdk/python/authentication/saml.md",
                },
                {
                  title: "CAS Module",
                  path: "/reference/sdk/python/authentication/cas.md",
                },
                {
                  title: "Events",
                  path: "/reference/sdk/python/authentication/events.md",
                },
              ],
            },
            {
              title: "Management Module",
              children: [
                {
                  title: "User Management",
                  children: [
                    {
                      title: "Get User List",
                      path: "/reference/sdk/python/management/管理用户/list-users",
                    },
                    {
                      title: "Get User Information",
                      path: "/reference/sdk/python/management/管理用户/get-user",
                    },
                    {
                      title: "Batch Get User Information",
                      path: "/reference/sdk/python/management/管理用户/get-user-batch",
                    },
                    {
                      title: "Create User",
                      path: "/reference/sdk/python/management/管理用户/create-user",
                    },
                    {
                      title: "Batch Create Users",
                      path: "/reference/sdk/python/management/管理用户/create-users-batch",
                    },
                    {
                      title: "Update User Profile",
                      path: "/reference/sdk/python/management/管理用户/update-user",
                    },
                    {
                      title: "Batch Update User Profile",
                      path: "/reference/sdk/python/management/管理用户/update-user-batch",
                    },
                    {
                      title: "Delete Users",
                      path: "/reference/sdk/python/management/管理用户/delete-users-batch",
                    },
                    {
                      title: "Get User External Identity Sources",
                      path: "/reference/sdk/python/management/管理用户/get-user-identities",
                    },
                    {
                      title: "Get User Role List",
                      path: "/reference/sdk/python/management/管理用户/get-user-roles",
                    },
                    {
                      title: "Get User Real-name Authentication Info",
                      path: "/reference/sdk/python/management/管理用户/get-user-principal-authentication-info",
                    },
                    {
                      title: "Delete User Real-name Authentication Info",
                      path: "/reference/sdk/python/management/管理用户/reset-user-principal-authentication-info",
                    },
                    {
                      title: "Get User Department List",
                      path: "/reference/sdk/python/management/管理用户/get-user-departments",
                    },
                    {
                      title: "Set User Departments",
                      path: "/reference/sdk/python/management/管理用户/set-user-departments",
                    },
                    {
                      title: "Get User Group List",
                      path: "/reference/sdk/python/management/管理用户/get-user-groups",
                    },
                    {
                      title: "Get User MFA Binding Info",
                      path: "/reference/sdk/python/management/管理用户/get-user-mfa-info",
                    },
                    {
                      title: "Get Archived User List",
                      path: "/reference/sdk/python/management/管理用户/list-archived-users",
                    },
                    {
                      title: "Force Logout Users",
                      path: "/reference/sdk/python/management/管理用户/kick-users",
                    },
                    {
                      title: "Check if User Exists",
                      path: "/reference/sdk/python/management/管理用户/is-user-exists",
                    },
                    {
                      title: "Get User Accessible Apps",
                      path: "/reference/sdk/python/management/管理用户/get-user-accessible-apps",
                    },
                    {
                      title: "Get User Authorized Apps",
                      path: "/reference/sdk/python/management/管理用户/get-user-authorized-apps",
                    },
                    {
                      title: "Check if User Has Role",
                      path: "/reference/sdk/python/management/管理用户/has-any-role",
                    },
                    {
                      title: "Get User Login History",
                      path: "/reference/sdk/python/management/管理用户/get-user-login-history",
                    },
                    {
                      title: "Get User Previously Logged In Apps",
                      path: "/reference/sdk/python/management/管理用户/get-user-loggedin-apps",
                    },
                    {
                      title: "Get User Previously Logged In Identity Sources",
                      path: "/reference/sdk/python/management/管理用户/get-user-logged-in-identities",
                    },
                    {
                      title: "User Resignation",
                      path: "/reference/sdk/python/management/管理用户/resign-user",
                    },
                    {
                      title: "Batch User Resignation",
                      path: "/reference/sdk/python/management/管理用户/resign-user-batch",
                    },
                    {
                      title: "Get User Authorized Resources",
                      path: "/reference/sdk/python/management/管理用户/get-user-authorized-resources",
                    },
                    {
                      title: "Check User Session Status in Application",
                      path: "/reference/sdk/python/management/管理用户/check-session-status",
                    },
                    {
                      title: "Import User OTP",
                      path: "/reference/sdk/python/management/管理用户/import-otp",
                    },
                  ],
                },
                {
                  title: "Organization Management",
                  children: [
                    {
                      title: "Get Organization Details",
                      path: "/reference/sdk/python/management/管理组织机构/get-organization",
                    },
                    {
                      title: "Batch Get Organization Details",
                      path: "/reference/sdk/python/management/管理组织机构/get-organization-batch",
                    },
                    {
                      title: "Get Organization List",
                      path: "/reference/sdk/python/management/管理组织机构/list-organizations",
                    },
                    {
                      title: "Create Organization",
                      path: "/reference/sdk/python/management/管理组织机构/create-organization",
                    },
                    {
                      title: "Update Organization",
                      path: "/reference/sdk/python/management/管理组织机构/update-organization",
                    },
                    {
                      title: "Delete Organization",
                      path: "/reference/sdk/python/management/管理组织机构/delete-organization",
                    },
                    {
                      title: "Search Organization List",
                      path: "/reference/sdk/python/management/管理组织机构/search-organizations",
                    },
                    {
                      title: "Get Department Info",
                      path: "/reference/sdk/python/management/管理组织机构/get-department",
                    },
                    {
                      title: "Create Department",
                      path: "/reference/sdk/python/management/管理组织机构/create-department",
                    },
                    {
                      title: "Update Department",
                      path: "/reference/sdk/python/management/管理组织机构/update-department",
                    },
                    {
                      title: "Delete Department",
                      path: "/reference/sdk/python/management/管理组织机构/delete-department",
                    },
                    {
                      title: "Search Departments",
                      path: "/reference/sdk/python/management/管理组织机构/search-departments",
                    },
                    {
                      title: "Get Child Department List",
                      path: "/reference/sdk/python/management/管理组织机构/list-children-departments",
                    },
                    {
                      title: "Get Department Member List",
                      path: "/reference/sdk/python/management/管理组织机构/list-department-members",
                    },
                    {
                      title: "Get Department Direct Member ID List",
                      path: "/reference/sdk/python/management/管理组织机构/list-department-member-ids",
                    },
                    {
                      title: "Search Department Members",
                      path: "/reference/sdk/python/management/管理组织机构/search-department-members",
                    },
                    {
                      title: "Add Department Members",
                      path: "/reference/sdk/python/management/管理组织机构/add-department-members",
                    },
                    {
                      title: "Remove Department Members",
                      path: "/reference/sdk/python/management/管理组织机构/remove-department-members",
                    },
                    {
                      title: "Get Parent Department Info",
                      path: "/reference/sdk/python/management/管理组织机构/get-parent-department",
                    },
                    {
                      title: "Check if User is in Department",
                      path: "/reference/sdk/python/management/管理组织机构/is-user-in-department",
                    },
                  ],
                },
                {
                  title: "Role Management",
                  children: [
                    {
                      title: "Get Role Details",
                      path: "/reference/sdk/python/management/管理角色/get-role",
                    },
                    {
                      title: "Assign Role",
                      path: "/reference/sdk/python/management/管理角色/assign-role",
                    },
                    {
                      title: "Revoke Role",
                      path: "/reference/sdk/python/management/管理角色/revoke-role",
                    },
                    {
                      title: "Get Role Authorized Resources",
                      path: "/reference/sdk/python/management/管理角色/get-role-authorized-resources",
                    },
                    {
                      title: "Get Role Member List",
                      path: "/reference/sdk/python/management/管理角色/list-role-members",
                    },
                    {
                      title: "Get Role Department List",
                      path: "/reference/sdk/python/management/管理角色/list-role-departments",
                    },
                    {
                      title: "Create Role",
                      path: "/reference/sdk/python/management/管理角色/create-role",
                    },
                    {
                      title: "Get Role List",
                      path: "/reference/sdk/python/management/管理角色/list-roles",
                    },
                    {
                      title: "Delete Roles",
                      path: "/reference/sdk/python/management/管理角色/delete-roles-batch",
                    },
                    {
                      title: "Batch Create Roles",
                      path: "/reference/sdk/python/management/管理角色/create-roles-batch",
                    },
                    {
                      title: "Update Role",
                      path: "/reference/sdk/python/management/管理角色/update-role",
                    },
                  ],
                },
                {
                  title: "User Group Management",
                  children: [
                    {
                      title: "Get Group Details",
                      path: "/reference/sdk/python/management/管理用户分组/get-group",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference/sdk/python/management/管理用户分组/list-groups",
                    },
                    {
                      title: "Create Group",
                      path: "/reference/sdk/python/management/管理用户分组/create-group",
                    },
                    {
                      title: "Batch Create Groups",
                      path: "/reference/sdk/python/management/管理用户分组/create-groups-batch",
                    },
                    {
                      title: "Update Group",
                      path: "/reference/sdk/python/management/管理用户分组/update-group",
                    },
                    {
                      title: "Batch Delete Groups",
                      path: "/reference/sdk/python/management/管理用户分组/delete-groups-batch",
                    },
                    {
                      title: "Add Group Members",
                      path: "/reference/sdk/python/management/管理用户分组/add-group-members",
                    },
                    {
                      title: "Batch Remove Group Members",
                      path: "/reference/sdk/python/management/管理用户分组/remove-group-members",
                    },
                    {
                      title: "Get Group Member List",
                      path: "/reference/sdk/python/management/管理用户分组/list-group-members",
                    },
                    {
                      title: "Get Group Authorized Resources",
                      path: "/reference/sdk/python/management/管理用户分组/get-group-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Custom Field Management",
                  children: [
                    {
                      title: "Get User Built-in Field List",
                      path: "/reference/sdk/python/management/管理自定义字段/get-user-base-fields",
                    },
                    {
                      title: "Update User Built-in Field Configuration",
                      path: "/reference/sdk/python/management/管理自定义字段/set-user-base-fields",
                    },
                    {
                      title: "Get Custom Field List",
                      path: "/reference/sdk/python/management/管理自定义字段/get-custom-fields",
                    },
                    {
                      title: "Create/Update Custom Field Definition",
                      path: "/reference/sdk/python/management/管理自定义字段/set-custom-fields",
                    },
                    {
                      title: "Set Custom Field Value",
                      path: "/reference/sdk/python/management/管理自定义字段/set-custom-data",
                    },
                    {
                      title:
                        "Get Custom Field Values for User/Group/Role/Organization",
                      path: "/reference/sdk/python/management/管理自定义字段/get-custom-data",
                    },
                  ],
                },
                {
                  title: "Resource and Permission Management",
                  children: [
                    {
                      title: "Create Resource",
                      path: "/reference/sdk/python/management/管理资源与权限/create-resource",
                    },
                    {
                      title: "Batch Create Resources",
                      path: "/reference/sdk/python/management/管理资源与权限/create-resources-batch",
                    },
                    {
                      title: "Get Resource Details",
                      path: "/reference/sdk/python/management/管理资源与权限/get-resource",
                    },
                    {
                      title: "Batch Get Resource Details",
                      path: "/reference/sdk/python/management/管理资源与权限/get-resources-batch",
                    },
                    {
                      title: "Get Resource List by Page",
                      path: "/reference/sdk/python/management/管理资源与权限/list-resources",
                    },
                    {
                      title: "Update Resource",
                      path: "/reference/sdk/python/management/管理资源与权限/update-resource",
                    },
                    {
                      title: "Delete Resource",
                      path: "/reference/sdk/python/management/管理资源与权限/delete-resource",
                    },
                    {
                      title: "Batch Delete Resources",
                      path: "/reference/sdk/python/management/管理资源与权限/delete-resources-batch",
                    },
                    {
                      title:
                        "Associate/Disassociate Application Resources to Tenant",
                      path: "/reference/sdk/python/management/管理资源与权限/associate-tenant-resource",
                    },
                    {
                      title: "Create Permission Namespace",
                      path: "/reference/sdk/python/management/管理资源与权限/create-namespace",
                    },
                    {
                      title: "Batch Create Permission Namespaces",
                      path: "/reference/sdk/python/management/管理资源与权限/create-namespaces-batch",
                    },
                    {
                      title: "Get Permission Namespace Details",
                      path: "/reference/sdk/python/management/管理资源与权限/get-namespace",
                    },
                    {
                      title: "Batch Get Permission Namespace Details",
                      path: "/reference/sdk/python/management/管理资源与权限/get-namespaces-batch",
                    },
                    {
                      title: "Update Permission Namespace",
                      path: "/reference/sdk/python/management/管理资源与权限/update-namespace",
                    },
                    {
                      title: "Delete Permission Namespace",
                      path: "/reference/sdk/python/management/管理资源与权限/delete-namespace",
                    },
                    {
                      title: "Batch Delete Permission Namespaces",
                      path: "/reference/sdk/python/management/管理资源与权限/delete-namespaces-batch",
                    },
                    {
                      title: "Authorize Resources",
                      path: "/reference/sdk/python/management/管理资源与权限/authorize-resources",
                    },
                    {
                      title: "Get Authorized Resource List for Principal",
                      path: "/reference/sdk/python/management/管理资源与权限/get-authorized-resources",
                    },
                    {
                      title: "Check if User Has Permission for Resource Action",
                      path: "/reference/sdk/python/management/管理资源与权限/is-action-allowed",
                    },
                    {
                      title: "Get Authorized Principals for Resource",
                      path: "/reference/sdk/python/management/管理资源与权限/get-resource-authorized-targets",
                    },
                  ],
                },
                {
                  title: "管理应用",
                  children: [
                    {
                      title: "获取应用详情",
                      path: "/reference/sdk/python/management/管理应用/get-application",
                    },
                    {
                      title: "获取应用列表",
                      path: "/reference/sdk/python/management/管理应用/list-applications",
                    },
                    {
                      title: "获取应用简单信息",
                      path: "/reference/sdk/python/management/管理应用/get-application-simple-info",
                    },
                    {
                      title: "获取应用简单信息列表",
                      path: "/reference/sdk/python/management/管理应用/list-application-simple-info",
                    },
                    {
                      title: "创建应用",
                      path: "/reference/sdk/python/management/管理应用/create-application",
                    },
                    {
                      title: "删除应用",
                      path: "/reference/sdk/python/management/管理应用/delete-application",
                    },
                    {
                      title: "获取应用密钥",
                      path: "/reference/sdk/python/management/管理应用/get-application-secret",
                    },
                    {
                      title: "刷新应用密钥",
                      path: "/reference/sdk/python/management/管理应用/refresh-application-secret",
                    },
                    {
                      title: "获取应用当前登录用户",
                      path: "/reference/sdk/python/management/管理应用/list-application-active-users",
                    },
                    {
                      title: "获取应用默认访问授权策略",
                      path: "/reference/sdk/python/management/管理应用/get-application-permission-strategy",
                    },
                    {
                      title: "更新应用默认访问授权策略",
                      path: "/reference/sdk/python/management/管理应用/update-application-permission-strategy",
                    },
                    {
                      title: "授权应用访问权限",
                      path: "/reference/sdk/python/management/管理应用/authorize-application-access",
                    },
                    {
                      title: "删除应用访问授权记录",
                      path: "/reference/sdk/python/management/管理应用/revoke-application-access",
                    },
                    {
                      title: "检测域名是否可用",
                      path: "/reference/sdk/python/management/管理应用/check-domain-available",
                    },
                  ],
                },
                {
                  title: "管理身份源",
                  children: [
                    {
                      title: "获取身份源列表",
                      path: "/reference/sdk/python/management/管理身份源/list-ext-idp",
                    },
                    {
                      title: "获取身份源详情",
                      path: "/reference/sdk/python/management/管理身份源/get-ext-idp",
                    },
                    {
                      title: "创建身份源",
                      path: "/reference/sdk/python/management/管理身份源/create-ext-idp",
                    },
                    {
                      title: "更新身份源配置",
                      path: "/reference/sdk/python/management/管理身份源/update-ext-idp",
                    },
                    {
                      title: "删除身份源",
                      path: "/reference/sdk/python/management/管理身份源/delete-ext-idp",
                    },
                    {
                      title: "在某个已有身份源下创建新连接",
                      path: "/reference/sdk/python/management/管理身份源/create-ext-idp-conn",
                    },
                    {
                      title: "更新身份源连接",
                      path: "/reference/sdk/python/management/管理身份源/update-ext-idp-conn",
                    },
                    {
                      title: "删除身份源连接",
                      path: "/reference/sdk/python/management/管理身份源/delete-ext-idp-conn",
                    },
                    {
                      title: "身份源连接开关",
                      path: "/reference/sdk/python/management/管理身份源/change-ext-idp-conn-state",
                    },
                    {
                      title: "租户关联身份源",
                      path: "/reference/sdk/python/management/管理身份源/change-ext-idp-conn-association-state",
                    },
                    {
                      title: "租户控制台获取身份源列表",
                      path: "/reference/sdk/python/management/管理身份源/list-tenant-ext-idp",
                    },
                    {
                      title: "身份源下应用的连接详情",
                      path: "/reference/sdk/python/management/管理身份源/ext-idp-conn-apps",
                    },
                  ],
                },
                {
                  title: "管理安全配置",
                  children: [
                    {
                      title: "获取安全配置",
                      path: "/reference/sdk/python/management/管理安全配置/get-security-settings",
                    },
                    {
                      title: "修改安全配置",
                      path: "/reference/sdk/python/management/管理安全配置/update-security-settings",
                    },
                    {
                      title: "获取全局多因素认证配置",
                      path: "/reference/sdk/python/management/管理安全配置/get-global-mfa-settings",
                    },
                    {
                      title: "修改全局多因素认证配置",
                      path: "/reference/sdk/python/management/管理安全配置/update-global-mfa-settings",
                    },
                  ],
                },
                {
                  title: "管理消息服务",
                  children: [
                    {
                      title: "获取邮件模版列表",
                      path: "/reference/sdk/python/management/管理消息服务/get-email-templates",
                    },
                    {
                      title: "修改邮件模版",
                      path: "/reference/sdk/python/management/管理消息服务/update-email-template",
                    },
                    {
                      title: "预览邮件模版",
                      path: "/reference/sdk/python/management/管理消息服务/preview-email-template",
                    },
                    {
                      title: "获取第三方邮件服务配置",
                      path: "/reference/sdk/python/management/管理消息服务/get-email-provider",
                    },
                    {
                      title: "配置第三方邮件服务",
                      path: "/reference/sdk/python/management/管理消息服务/config-email-provier",
                    },
                  ],
                },
                {
                  title: "管理 Pipeline",
                  children: [
                    {
                      title: "创建 Pipeline 函数",
                      path: "/reference/sdk/python/management/管理-pipeline/create-pipeline-function",
                    },
                    {
                      title: "获取 Pipeline 函数详情",
                      path: "/reference/sdk/python/management/管理-pipeline/get-pipeline-function",
                    },
                    {
                      title: "重新上传 Pipeline 函数",
                      path: "/reference/sdk/python/management/管理-pipeline/reupload-pipeline-function",
                    },
                    {
                      title: "修改 Pipeline 函数",
                      path: "/reference/sdk/python/management/管理-pipeline/update-pipeline-function",
                    },
                    {
                      title: "修改 Pipeline 函数顺序",
                      path: "/reference/sdk/python/management/管理-pipeline/update-pipeline-order",
                    },
                    {
                      title: "删除 Pipeline 函数",
                      path: "/reference/sdk/python/management/管理-pipeline/delete-pipeline-function",
                    },
                    {
                      title: "获取 Pipeline 函数列表",
                      path: "/reference/sdk/python/management/管理-pipeline/list-pipeline-functions",
                    },
                    {
                      title: "获取 Pipeline 日志",
                      path: "/reference/sdk/python/management/管理-pipeline/get-pipeline-logs",
                    },
                  ],
                },
                {
                  title: "管理 Webhook",
                  children: [
                    {
                      title: "创建 Webhook",
                      path: "/reference/sdk/python/management/管理-webhook/create-webhook",
                    },
                    {
                      title: "获取 Webhook 列表",
                      path: "/reference/sdk/python/management/管理-webhook/list-webhooks",
                    },
                    {
                      title: "修改 Webhook 配置",
                      path: "/reference/sdk/python/management/管理-webhook/update-webhook",
                    },
                    {
                      title: "删除 Webhook",
                      path: "/reference/sdk/python/management/管理-webhook/delete-webhook",
                    },
                    {
                      title: "获取 Webhook 日志",
                      path: "/reference/sdk/python/management/管理-webhook/get-webhook-logs",
                    },
                    {
                      title: "手动触发 Webhook 执行",
                      path: "/reference/sdk/python/management/管理-webhook/trigger-webhook",
                    },
                    {
                      title: "获取 Webhook 详情",
                      path: "/reference/sdk/python/management/管理-webhook/get-webhook",
                    },
                    {
                      title: "获取 Webhook 事件列表",
                      path: "/reference/sdk/python/management/管理-webhook/get-webhook-event-list",
                    },
                  ],
                },
                {
                  title: "获取审计日志",
                  children: [
                    {
                      title: "获取用户行为日志",
                      path: "/reference/sdk/python/management/获取审计日志/get-user-action-logs",
                    },
                    {
                      title: "获取管理员操作日志",
                      path: "/reference/sdk/python/management/获取审计日志/get-admin-audit-logs",
                    },
                  ],
                },
                {
                  title: "管理计量计费",
                  children: [
                    {
                      title: "获取套餐详情",
                      path: "/reference/sdk/python/management/管理计量计费/get-current-package-info",
                    },
                    {
                      title: "获取用量详情",
                      path: "/reference/sdk/python/management/管理计量计费/get-usage-info",
                    },
                    {
                      title: "获取 MAU 使用记录",
                      path: "/reference/sdk/python/management/管理计量计费/get-mau-period-usage-history",
                    },
                    {
                      title: "获取所有权益",
                      path: "/reference/sdk/python/management/管理计量计费/get-all-rights-items",
                    },
                    {
                      title: "获取订单列表",
                      path: "/reference/sdk/python/management/管理计量计费/get-orders",
                    },
                    {
                      title: "获取订单详情",
                      path: "/reference/sdk/python/management/管理计量计费/get-order-detail",
                    },
                    {
                      title: "获取订单支付明细",
                      path: "/reference/sdk/python/management/管理计量计费/get-order-pay-detail",
                    },
                  ],
                },
                {
                  title: "事件",
                  path: "/reference/sdk/python/management/events.md",
                },
              ],
            },
          ],
        },
        // 自动生成粘贴结束
        // {
        //   title: "Android",
        //   path: "/reference/mobile/sdk-for-android/",
        //   redirect: "/reference/mobile/sdk-for-android/install.html",
        //   children: [
        //     {
        //       title: "Installation and Usage",
        //       path: "/reference/mobile/sdk-for-android/install",
        //     },
        //     {
        //       title: "User Authentication Module",
        //       children: [
        //         {
        //           title: "Login",
        //           children: [
        //             {
        //               title: "Login with Account Password",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-account-password.md",
        //             },
        //             {
        //               title: "Login with Username Password",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-username-password.md",
        //             },
        //             {
        //               title: "Login with Phone Password",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-phone-password.md",
        //             },
        //             {
        //               title: "Login with Email Password",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-email-password.md",
        //             },
        //             {
        //               title: "Login with Email Passcode",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-email-passcode.md",
        //             },
        //             {
        //               title: "Login with Phone Passcode",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-phone-passcode.md",
        //             },
        //             {
        //               title: "Login with LDAP Account",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-ldap.md",
        //             },
        //             {
        //               title: "Login with AD Account",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-ad.md",
        //             },
        //             {
        //               title: "One-Click Login with Phone Number",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-oneauth",
        //             },
        //             {
        //               title: "Mobile Social Login",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/signin-by-mobile",
        //             },
        //             {
        //               title: "Check QR Code Status",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/check-qrcode-status",
        //             },
        //             {
        //               title:
        //                 "Custom APP QR Code Login: Change QR Code Status on APP Side",
        //               path: "/reference/mobile/sdk-for-android/apis/登录/change-qrcode-status",
        //             },
        //           ],
        //         },
        //         {
        //           title: "Register",
        //           children: [
        //             {
        //               title: "Register with Username Password",
        //               path: "/reference/mobile/sdk-for-android/apis/注册/signup-by-username-password.md",
        //             },
        //             {
        //               title: "Register with Email Password",
        //               path: "/reference/mobile/sdk-for-android/apis/注册/signup-by-email-password.md",
        //             },
        //             {
        //               title: "Register with Phone Passcode",
        //               path: "/reference/mobile/sdk-for-android/apis/注册/signup-by-phone-passcode.md",
        //             },
        //             {
        //               title: "Register with Email Passcode",
        //               path: "/reference/mobile/sdk-for-android/apis/注册/signup-by-email-passcode.md",
        //             },
        //           ],
        //         },
        //         {
        //           title: "User Profile",
        //           children: [
        //             {
        //               title: "Get User Profile",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/get-profile",
        //             },
        //             {
        //               title: "Update User Profile",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/update-profile",
        //             },
        //             {
        //               title: "Bind Email",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/bind-email",
        //             },
        //             {
        //               title: "Unbind Email",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/unbind-email",
        //             },
        //             {
        //               title: "Bind Phone",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/bind-phone",
        //             },
        //             {
        //               title: "Unbind Phone",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/unbind-phone",
        //             },
        //             {
        //               title: "Get Password Strength and Account Security Score",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/get-security-info",
        //             },
        //             {
        //               title: "Update Password",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/update-password",
        //             },
        //             {
        //               title: "Initiate Email Update Verification Request",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/verify-update-email-request",
        //             },
        //             {
        //               title: "Update Email",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/update-email",
        //             },
        //             {
        //               title: "Initiate Phone Update Verification Request",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/verify-update-phone-request",
        //             },
        //             {
        //               title: "Update Phone",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/update-phone",
        //             },
        //             {
        //               title: "Initiate Reset Password Request",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/verify-reset-password-request",
        //             },
        //             {
        //               title: "Reset Password",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/reset-password",
        //             },
        //             {
        //               title: "Initiate Account Deletion Request",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/verify-delete-account-request",
        //             },
        //             {
        //               title: "Delete Account",
        //               path: "/reference/mobile/sdk-for-android/apis/用户资料/delete-account",
        //             },
        //           ],
        //         },
        //         {
        //           title: "Account Binding",
        //           children: [
        //             {
        //               title: "Link External Identity Provider",
        //               path: "/reference/mobile/sdk-for-android/apis/账号绑定/link-extidp",
        //             },
        //             {
        //               title: "Unlink External Identity Provider",
        //               path: "/reference/mobile/sdk-for-android/apis/账号绑定/unlink-extidp",
        //             },
        //             {
        //               title: "Get Linked External Identity Providers",
        //               path: "/reference/mobile/sdk-for-android/apis/账号绑定/get-identities",
        //             },
        //             {
        //               title: "Get Enabled External Identity Providers",
        //               path: "/reference/mobile/sdk-for-android/apis/账号绑定/get-extidps",
        //             },
        //           ],
        //         },
        //         {
        //           title: "MFA Factor Management",
        //           children: [
        //             {
        //               title: "Initiate MFA Factor Enrollment Request",
        //               path: "/reference/mobile/sdk-for-android/apis/mfa-要素管理/send-enroll-factor-request",
        //             },
        //             {
        //               title: "Enroll MFA Factor",
        //               path: "/reference/mobile/sdk-for-android/apis/mfa-要素管理/enroll-factor",
        //             },
        //             {
        //               title: "Reset MFA Factor",
        //               path: "/reference/mobile/sdk-for-android/apis/mfa-要素管理/reset-factor",
        //             },
        //             {
        //               title: "List Enrolled MFA Factors",
        //               path: "/reference/mobile/sdk-for-android/apis/mfa-要素管理/list-enrolled-factors",
        //             },
        //             {
        //               title: "Get Enrolled MFA Factor",
        //               path: "/reference/mobile/sdk-for-android/apis/mfa-要素管理/get-factor",
        //             },
        //             {
        //               title: "List Available MFA Factors",
        //               path: "/reference/mobile/sdk-for-android/apis/mfa-要素管理/list-factors-to-enroll",
        //             },
        //           ],
        //         },
        //         {
        //           title: "User Resources",
        //           children: [
        //             {
        //               title: "Get Login History",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-login-history",
        //             },
        //             {
        //               title: "Get Logged In Applications",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-logged-in-apps",
        //             },
        //             {
        //               title: "Get Accessible Applications",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-accessible-apps",
        //             },
        //             {
        //               title: "Get Tenant List",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-tenant-list",
        //             },
        //             {
        //               title: "Get Role List",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-role-list",
        //             },
        //             {
        //               title: "Get Group List",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-group-list",
        //             },
        //             {
        //               title: "Get Department List",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-department-list",
        //             },
        //             {
        //               title: "Get Authorized Resources List",
        //               path: "/reference/mobile/sdk-for-android/apis/用户相关资源/get-my-authorized-resources",
        //             },
        //           ],
        //         },
        //         {
        //           title: "Message Service",
        //           children: [
        //             {
        //               title: "Send SMS",
        //               path: "/reference/mobile/sdk-for-android/apis/消息服务/send-sms",
        //             },
        //             {
        //               title: "Send Email",
        //               path: "/reference/mobile/sdk-for-android/apis/消息服务/send-email",
        //             },
        //           ],
        //         },
        //         {
        //           title: "Others",
        //           children: [
        //             {
        //               title: "Get Server Public Information",
        //               path: "/reference/mobile/sdk-for-android/apis/其他/system",
        //             },
        //             {
        //               title: "Get Country List",
        //               path: "/reference/mobile/sdk-for-android/apis/其他/get-country-list",
        //             },
        //           ],
        //         },
        //         {
        //           title: "OIDC Module",
        //           path: "/reference/mobile/sdk-for-android/apis/oidc.md",
        //         },
        //         {
        //           title: "Events",
        //           path: "/reference/mobile/sdk-for-android/apis/events.md",
        //         },
        //       ],
        //     },
        //     {
        //       title: "Compliance Guidelines",
        //       path: "/reference/mobile/sdk-for-android/compliance-guidelines.md",
        //     },
        //   ],
        // },
        // {
        //   title: "Flutter",
        //   path: "/reference/mobile/sdk-for-flutter/",
        //   children: [
        //     {
        //       title: "Installation and Usage",
        //       path: "/reference/mobile/sdk-for-flutter/quick",
        //     },
        //     {
        //       title: "User Authentication Module",
        //       path: "/reference/mobile/sdk-for-flutter/apis/",
        //       children: [
        //         "/reference/mobile/sdk-for-flutter/apis/login",
        //         "/reference/mobile/sdk-for-flutter/apis/register",
        //         "/reference/mobile/sdk-for-flutter/apis/user",
        //         "/reference/mobile/sdk-for-flutter/apis/mfa",
        //         "/reference/mobile/sdk-for-flutter/apis/user-resources",
        //         "/reference/mobile/sdk-for-flutter/apis/message",
        //         "/reference/mobile/sdk-for-flutter/apis/utils",
        //         "/reference/mobile/sdk-for-flutter/apis/oidc",
        //         "/reference/mobile/sdk-for-flutter/apis/options",
        //         "/reference/mobile/sdk-for-flutter/apis/enum",
        //       ],
        //     },
        //     {
        //       title: "Flutter SDK Change Log",
        //       path: "/reference/mobile/sdk-for-flutter/change-log",
        //     },
        //   ],
        // },
        // {
        //   title: "iOS",
        //   path: "/reference/mobile/sdk-for-ios/",
        //   children: [
        //     {
        //       title: "Installation and Usage",
        //       path: "/reference/mobile/sdk-for-ios/quick",
        //     },
        //     {
        //       title: "User Authentication Module",
        //       path: "/reference/mobile/sdk-for-ios/apis/",
        //       children: [
        //         "/reference/mobile/sdk-for-ios/apis/login",
        //         "/reference/mobile/sdk-for-ios/apis/register",
        //         "/reference/mobile/sdk-for-ios/apis/user",
        //         "/reference/mobile/sdk-for-ios/apis/mfa",
        //         "/reference/mobile/sdk-for-ios/apis/user-resources",
        //         "/reference/mobile/sdk-for-ios/apis/message",
        //         "/reference/mobile/sdk-for-ios/apis/utils",
        //         "/reference/mobile/sdk-for-ios/apis/oidc",
        //         "/reference/mobile/sdk-for-ios/apis/options",
        //         "/reference/mobile/sdk-for-ios/apis/enum",
        //         "/reference/mobile/sdk-for-ios/apis/events",
        //       ],
        //     },
        //     {
        //       title: "Error Codes",
        //       path: "/reference/mobile/sdk-for-ios/errorcode",
        //     },
        //     {
        //       title: "iOS SDK Change Log",
        //       path: "/reference/mobile/sdk-for-ios/change-log",
        //     },
        //   ],
        // },
        // {
        //   title: "Mini Program",
        //   path: "/reference/sdk/miniapp/",
        //   children: [
        //     {
        //       title: "Getting Started",
        //       path: "/reference/sdk/miniapp/quick",
        //     },
        //     {
        //       title: "Error Handling",
        //       path: "/reference/sdk/miniapp/process-error",
        //     },
        //     {
        //       title: "Version Update",
        //       path: "/reference/sdk/miniapp/changelog",
        //     },
        //   ],
        // },
        // {
        // title: '微信网页授权（开发中）',
        // path: '/reference/sdk/weixin-official-account/',
        // children: [
        //   {
        //     title: '开始集成',
        //     path: '/reference/sdk/weixin-official-account/quick'
        //   },
        //   {
        //     title: '版本更新',
        //     path: '/reference/sdk/changelog-authing-js-sdk'
        //   }
        // ]
        // },
        // {
        //   title: '单点登录 SSO',
        //   path: '/reference/sdk/web',
        //   children: [
        //     {
        //       title: '开始集成',
        //       path: '/reference/sdk/web/quick'
        //     },
        //     {
        //       title: '版本更新',
        //       path: '/reference/sdk/web/changelog'
        //     }
        //   ]
        // }
      ],
    },
    // {
    // title: 'Guard 登录组件（开发中）',
    // path: '/reference/guard/',
    // children: [
    //   {
    //     title: 'Web Guard（开发中）',
    //     path: '/reference/guard/web'
    //   },
    //   {
    //     title: '更新日志',
    //     children: [
    //       {
    //         title: "Web Guard 更新日志",
    //         path: "/reference/guard/changelog-web"
    //       }
    //     ]
    //   }
    // ]
    // },
    // {
    //   title: "Frameworks Integration",
    //   path: "https://docs.genauth.ai/reference/frameworks.html",
    // },
    // {
    //   title: "Radius",
    //   path: "https://docs.genauth.ai/reference/radius/",
    // },
    {
      title: "Error Codes",
      path: "/reference/error-code",
    },
  ],
  "/agent/": [
    /*{
      title: "AgentAuth 概述",
      path: "/agent/agent-overview-zh",
    },
    {
      title: "AgentAuth 业务场景最佳实践",
      path: "/agent/best-practice-zh",
    },
    {
      title: "AgentAuth SDK 接入",
      path: "/agent/sdk-zh",
    },
    {
      title: "AgentAuth API 接入",
      path: "/agent/api-zh",
    },*/
    {
      title: "AgentAuth Overview",
      path: "/agent/agent-overview",
    },
    {
      title: "AgentAuth best practices for business scenarios",
      path: "/agent/best-practice",
    },
    {
      title: "AgentAuth SDK",
      path: "/agent/sdk",
    },
    {
      title: "AgentAuth API",
      path: "/agent/api",
    },
  ],
  "/reference-new/": [
    {
      title: "Single Page Web Application",
      path: "/reference-new/single-page-application/",
      redirect: "/reference-new/single-page-application/native-javascript",
      children: [
        {
          title: "Javascript",
          path: "/reference-new/single-page-application/native-javascript",
        },
        {
          title: "React",
          path: "/reference-new/single-page-application/react",
        },
        {
          title: "Vue",
          path: "/reference-new/single-page-application/vue",
        },
        {
          title: "Angular",
          path: "/reference-new/single-page-application/angular",
        },
      ],
    },
    {
      title: "Mobile and Client Applications",
      path: "/reference-new/mobile/",
      redirect: "/reference-new/mobile/sdk-for-android/",
      children: [
        {
          title: "Android",
          path: "/reference-new/mobile/sdk-for-android/",
          children: [
            {
              title: "Quick Start",
              path: "/reference-new/mobile/sdk-for-android/quick",
            },
            {
              title: "Hosted Pages",
              path: "/reference-new/mobile/sdk-for-android/develop",
            },
            {
              title: "Components",
              path: "/reference-new/mobile/sdk-for-android/component/",
              children: [
                {
                  title: "Tutorial",
                  children: [
                    "/reference-new/mobile/sdk-for-android/component/tutorial/example",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/basic-login",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/advanced-login",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/refine-login",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/basic-register",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/advanced-register",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/login-to-register",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/reset-password-by-phone",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/reset-password-by-email",
                    "/reference-new/mobile/sdk-for-android/component/tutorial/reset-password-all",
                  ],
                },
                {
                  title: "Basic Components",
                  children: [
                    {
                      title: "App Logo",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/app-logo",
                    },
                    {
                      title: "App Name",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/app-name",
                    },
                    {
                      title: "Account Input Box",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/account-edit-text",
                    },
                    {
                      title: "Password Input Box",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/password-edit-text",
                    },
                    {
                      title: "Password Confirmation Input Box",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/password-confirm-edit-text",
                    },
                    {
                      title: "Phone Number Input Box",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/phonenumber-edit-text",
                    },
                    {
                      title: "Verification Code Input Box",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/verifycode-edit-text",
                    },
                    {
                      title: "Get SMS Code Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/get-verifycode-button",
                    },
                    {
                      title: "Email Input Box",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/email-edit-text",
                    },
                    {
                      title: "Get Email Code Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/get-emailcode-button",
                    },
                    {
                      title: "Login Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/login-button",
                    },
                    {
                      title: "Error Text",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/error-text",
                    },
                    {
                      title: "Login Method Tab",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/login-method-tab",
                    },
                    {
                      title: "Login Container",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/login-container",
                    },
                    {
                      title: "Privacy Agreement",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/privacy-confirm-box",
                    },
                    {
                      title: "Register Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/register-button",
                    },
                    {
                      title: "Register Method Tab",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/register-method-tab",
                    },
                    {
                      title: "Register Container",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/register-container",
                    },
                    {
                      title: "Go to Register Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/go-register-button",
                    },
                    {
                      title: "Go to Login Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/go-login-button",
                    },
                    {
                      title: "Go to Forgot Password Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/go-forgot-password-button",
                    },
                    {
                      title: "Go to Feedback Button",
                      path: "/reference-new/mobile/sdk-for-android/component/basic/go-feedback-button",
                    },
                  ],
                },
                {
                  title: "Social Components",
                  children: [
                    {
                      title: "Social Login List",
                      path: "/reference-new/mobile/sdk-for-android/component/social/social-login-listview",
                    },
                  ],
                },
              ],
            },
            {
              title: "APIs",
              path: "/reference-new/mobile/sdk-for-android/apis/",
              children: [
                "/reference-new/mobile/sdk-for-android/apis/authentication/",
                "/reference-new/mobile/sdk-for-android/apis/protocol/",
                "/reference-new/mobile/sdk-for-android/apis/mfa/",
                "/reference-new/mobile/sdk-for-android/apis/scan/",
              ],
            },
            {
              title: "Social Login",
              path: "/reference-new/mobile/sdk-for-android/social/",
              children: [
                "/reference-new/mobile/sdk-for-android/social/wechat",
                "/reference-new/mobile/sdk-for-android/social/wecom",
                "/reference-new/mobile/sdk-for-android/social/alipay",
                "/reference-new/mobile/sdk-for-android/social/lark",
                "/reference-new/mobile/sdk-for-android/social/oneauth",
              ],
            },
            {
              title: "Typical Scenarios",
              path: "/reference-new/mobile/sdk-for-android/scenario/",
              children: [
                "/reference-new/mobile/sdk-for-android/scenario/logout",
                "/reference-new/mobile/sdk-for-android/scenario/splash",
                "/reference-new/mobile/sdk-for-android/scenario/tokens",
                "/reference-new/mobile/sdk-for-android/scenario/user-profile",
                "/reference-new/mobile/sdk-for-android/scenario/webview",
              ],
            },
            {
              title: "Private Deployment",
              path: "/reference-new/mobile/sdk-for-android/onpremise",
            },
            {
              title: "Version History",
              path: "/reference-new/mobile/sdk-for-android/version",
            },
          ],
        },
        {
          title: "C#",
          path: "/reference-new/mobile/sdk-for-csharp/",
          children: [
            {
              title: "User Authentication Module",
              path: "/reference-new/mobile/sdk-for-csharp/authentication/",
              children: [
                "/reference-new/mobile/sdk-for-csharp/authentication/AuthenticationClient",
                "/reference-new/mobile/sdk-for-csharp/authentication/StandardProtocol",
                "/reference-new/mobile/sdk-for-csharp/authentication/MfaAuthenticationClient",
              ],
            },
            {
              title: "Management Module",
              path: "/reference-new/mobile/sdk-for-csharp/management/",
              children: [
                "/reference-new/mobile/sdk-for-csharp/management/UsersManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/ApplicationManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/RolesManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/AclManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/GroupsManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/OrgManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/UdfManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/WhitelistManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/UserpoolManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/StatisticsManagementClient",
                "/reference-new/mobile/sdk-for-csharp/management/TenantManagementClient",
              ],
            },
          ],
        },
        {
          title: "Flutter",
          path: "/reference-new/mobile/sdk-for-flutter/",
          children: [
            {
              title: "Quick Start",
              path: "/reference-new/mobile/sdk-for-flutter/develop",
            },
            {
              title: "APIs",
              children: [
                "/reference-new/mobile/sdk-for-flutter/authentication/",
                "/reference-new/mobile/sdk-for-flutter/protocol/",
                "/reference-new/mobile/sdk-for-flutter/mfa/",
                "/reference-new/mobile/sdk-for-flutter/scan/",
                "/reference-new/mobile/sdk-for-flutter/social/",
              ],
            },
            {
              title: "Private Deployment",
              path: "/reference-new/mobile/sdk-for-flutter/onpremise",
            },
          ],
        },
        {
          title: "iOS",
          path: "/reference-new/mobile/sdk-for-ios/",
          children: [
            {
              title: "Quick Start",
              path: "/reference-new/mobile/sdk-for-ios/quick",
            },
            {
              title: "Hosted Pages",
              path: "/reference-new/mobile/sdk-for-ios/develop",
            },
            {
              title: "Components",
              path: "/reference-new/mobile/sdk-for-ios/component/",
              children: [
                {
                  title: "Tutorial",
                  children: [
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/example",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/basic-login",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/advanced-login",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/refine-login",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/basic-register",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/advanced-register",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/login-to-register",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/reset-password-by-phone",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/reset-password-by-email",
                    "/reference-new/mobile/sdk-for-ios/component/tutorial/reset-password-all",
                  ],
                },
                {
                  title: "Basic Components",
                  children: [
                    {
                      title: "App Logo",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/app-logo",
                    },
                    {
                      title: "App Name",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/app-name",
                    },
                    {
                      title: "Account Input Box",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/account-textfield",
                    },
                    {
                      title: "Password Input Box",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/password-textfield",
                    },
                    {
                      title: "Email Input Box",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/email-textfield",
                    },
                    {
                      title: "Phone Number Input Box",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/phonenumber-textfield",
                    },
                    {
                      title: "Verification Code Input Box",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/verifycode-textfield",
                    },
                    {
                      title: "Get Verification Code Button",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/get-verifycode-button",
                    },
                    {
                      title: "Login Button",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/login-button",
                    },
                    {
                      title: "Error Text",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/error-label",
                    },
                    {
                      title: "Login Method Tab",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/login-method-tab",
                    },
                    {
                      title: "Login Container",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/login-container",
                    },
                    {
                      title: "Privacy Agreement",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/privacy-confirm-box",
                    },
                    {
                      title: "Register Button",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/register-button",
                    },
                    {
                      title: "Register Method Tab",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/register-method-tab",
                    },
                    {
                      title: "Register Container",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/register-container",
                    },
                    {
                      title: "Go to Register Button",
                      path: "/reference-new/mobile/sdk-for-ios/component/basic/go-register-button",
                    },
                  ],
                },
                {
                  title: "Social Components",
                  children: [
                    {
                      title: "Social Login List",
                      path: "/reference-new/mobile/sdk-for-ios/component/social/social-login-listview",
                    },
                  ],
                },
              ],
            },
            {
              title: "APIs",
              path: "/reference-new/mobile/sdk-for-ios/apis/",
              children: [
                "/reference-new/mobile/sdk-for-ios/apis/authentication/",
                "/reference-new/mobile/sdk-for-ios/apis/protocol/",
                "/reference-new/mobile/sdk-for-ios/apis/mfa/",
                "/reference-new/mobile/sdk-for-ios/apis/scan/",
                "/reference-new/mobile/sdk-for-ios/apis/util/",
              ],
            },
            {
              title: "Social Login",
              path: "/reference-new/mobile/sdk-for-ios/social/",
              children: [
                "/reference-new/mobile/sdk-for-ios/social/wechat",
                "/reference-new/mobile/sdk-for-ios/social/wecom",
                "/reference-new/mobile/sdk-for-ios/social/lark",
                "/reference-new/mobile/sdk-for-ios/social/apple",
                "/reference-new/mobile/sdk-for-ios/social/oneauth",
              ],
            },
            {
              title: "Typical Scenarios",
              path: "/reference-new/mobile/sdk-for-ios/scenario/",
              children: [
                "/reference-new/mobile/sdk-for-ios/scenario/tokens",
                "/reference-new/mobile/sdk-for-ios/scenario/webview",
                "/reference-new/mobile/sdk-for-ios/scenario/logout",
                "/reference-new/mobile/sdk-for-ios/scenario/splash",
              ],
            },
            {
              title: "Private Deployment",
              path: "/reference-new/mobile/sdk-for-ios/onpremise",
            },
          ],
        },
        {
          title: "React Native",
          path: "/reference-new/mobile/sdk-for-react-native",
        },
      ],
    },
    {
      title: "Standard Web Application",
      path: "/reference-new/sdk-v5/",
      redirect: "/reference-new/sdk-v5/csharp/install.html",
      // Auto-generated paste start
      children: [
        {
          title: "Java",
          path: "/reference-new/sdk-v5/java/",
          redirect: "/reference-new/sdk-v5/java/install.html",
          children: [
            {
              title: "Installation and Usage",
              path: "/reference-new/sdk-v5/java/install.md",
            },
            {
              title: "User Authentication Module",
              path: "/reference-new/sdk-v5/java/authentication.md",
            },
            {
              title: "Management Module",
              children: [
                {
                  title: "User Management",
                  children: [
                    {
                      title: "Get User Information",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user",
                    },
                    {
                      title: "Batch Get User Information",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-batch",
                    },
                    {
                      title: "Get User List",
                      path: "/reference-new/sdk-v5/java/用户管理/list-users",
                    },
                    {
                      title: "Get User External Identity Sources",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-identities",
                    },
                    {
                      title: "Get User Role List",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-roles",
                    },
                    {
                      title: "Get User Real-name Authentication Information",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-principal-authentication-info",
                    },
                    {
                      title: "Delete User Real-name Authentication Information",
                      path: "/reference-new/sdk-v5/java/用户管理/reset-user-principal-authentication-info",
                    },
                    {
                      title: "Get User Department List",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-departments",
                    },
                    {
                      title: "Set User Departments",
                      path: "/reference-new/sdk-v5/java/用户管理/set-user-departments",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-groups",
                    },
                    {
                      title: "Delete Users",
                      path: "/reference-new/sdk-v5/java/用户管理/delete-users-batch",
                    },
                    {
                      title: "Get User MFA Binding Information",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-mfa-info",
                    },
                    {
                      title: "Get Archived User List",
                      path: "/reference-new/sdk-v5/java/用户管理/list-archived-users",
                    },
                    {
                      title: "Force User Logout",
                      path: "/reference-new/sdk-v5/java/用户管理/kick-users",
                    },
                    {
                      title: "Check if User Exists",
                      path: "/reference-new/sdk-v5/java/用户管理/is-user-exists",
                    },
                    {
                      title: "Create User",
                      path: "/reference-new/sdk-v5/java/用户管理/create-user",
                    },
                    {
                      title: "Batch Create Users",
                      path: "/reference-new/sdk-v5/java/用户管理/create-users-batch",
                    },
                    {
                      title: "Update User Profile",
                      path: "/reference-new/sdk-v5/java/用户管理/update-user",
                    },
                    {
                      title: "Get User Accessible Applications",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-accessible-apps",
                    },
                    {
                      title: "Get User Authorized Applications",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-authorized-apps",
                    },
                    {
                      title: "Check if User Has Role",
                      path: "/reference-new/sdk-v5/java/用户管理/has-any-role",
                    },
                    {
                      title: "Get User Login History",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-login-history",
                    },
                    {
                      title: "Get Applications User Has Logged Into",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-loggedin-apps",
                    },
                    {
                      title: "Get Identity Sources User Has Logged Into",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-logged-in-identities",
                    },
                    {
                      title: "Get All Resources Authorized to User",
                      path: "/reference-new/sdk-v5/java/用户管理/get-user-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Group Management",
                  children: [
                    {
                      title: "Get Group Details",
                      path: "/reference-new/sdk-v5/java/分组管理/get-group",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference-new/sdk-v5/java/分组管理/list-groups",
                    },
                    {
                      title: "Create Group",
                      path: "/reference-new/sdk-v5/java/分组管理/create-group",
                    },
                    {
                      title: "Batch Create Groups",
                      path: "/reference-new/sdk-v5/java/分组管理/create-groups-batch",
                    },
                    {
                      title: "Modify Group",
                      path: "/reference-new/sdk-v5/java/分组管理/update-group",
                    },
                    {
                      title: "Batch Delete Groups",
                      path: "/reference-new/sdk-v5/java/分组管理/delete-groups-batch",
                    },
                    {
                      title: "Add Group Members",
                      path: "/reference-new/sdk-v5/java/分组管理/add-group-members",
                    },
                    {
                      title: "Batch Remove Group Members",
                      path: "/reference-new/sdk-v5/java/分组管理/remove-group-members",
                    },
                    {
                      title: "Get Group Member List",
                      path: "/reference-new/sdk-v5/java/分组管理/list-group-members",
                    },
                    {
                      title: "Get Group Authorized Resource List",
                      path: "/reference-new/sdk-v5/java/分组管理/get-group-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Role Management",
                  children: [
                    {
                      title: "Get Role Details",
                      path: "/reference-new/sdk-v5/java/角色管理/get-role",
                    },
                    {
                      title: "Assign Role",
                      path: "/reference-new/sdk-v5/java/角色管理/assign-role",
                    },
                    {
                      title: "Remove Assigned Role",
                      path: "/reference-new/sdk-v5/java/角色管理/revoke-role",
                    },
                    {
                      title: "Get Role Authorized Resource List",
                      path: "/reference-new/sdk-v5/java/角色管理/get-role-authorized-resources",
                    },
                    {
                      title: "Get Role Member List",
                      path: "/reference-new/sdk-v5/java/角色管理/list-role-members",
                    },
                    {
                      title: "Get Role Department List",
                      path: "/reference-new/sdk-v5/java/角色管理/list-role-departments",
                    },
                    {
                      title: "Create Role",
                      path: "/reference-new/sdk-v5/java/角色管理/create-role",
                    },
                    {
                      title: "Get Role List",
                      path: "/reference-new/sdk-v5/java/角色管理/list-roles",
                    },
                    {
                      title: "Delete Role",
                      path: "/reference-new/sdk-v5/java/角色管理/delete-roles-batch",
                    },
                    {
                      title: "Batch Create Roles",
                      path: "/reference-new/sdk-v5/java/角色管理/create-roles-batch",
                    },
                    {
                      title: "Modify Role",
                      path: "/reference-new/sdk-v5/java/角色管理/update-role",
                    },
                  ],
                },
                {
                  title: "Organization Management",
                  children: [
                    {
                      title: "Get Top-level Organization List",
                      path: "/reference-new/sdk-v5/java/组织机构管理/list-organizations",
                    },
                    {
                      title: "Create Top-level Organization",
                      path: "/reference-new/sdk-v5/java/组织机构管理/create-organization",
                    },
                    {
                      title: "Modify Top-level Organization",
                      path: "/reference-new/sdk-v5/java/组织机构管理/update-organization",
                    },
                    {
                      title: "Delete Organization",
                      path: "/reference-new/sdk-v5/java/组织机构管理/delete-organization",
                    },
                    {
                      title: "Search Top-level Organization List",
                      path: "/reference-new/sdk-v5/java/组织机构管理/search-organizations",
                    },
                    {
                      title: "Get Department Information",
                      path: "/reference-new/sdk-v5/java/组织机构管理/get-department",
                    },
                    {
                      title: "Create Department",
                      path: "/reference-new/sdk-v5/java/组织机构管理/create-department",
                    },
                    {
                      title: "Modify Department",
                      path: "/reference-new/sdk-v5/java/组织机构管理/update-department",
                    },
                    {
                      title: "Delete Department",
                      path: "/reference-new/sdk-v5/java/组织机构管理/delete-department",
                    },
                    {
                      title: "Search Departments",
                      path: "/reference-new/sdk-v5/java/组织机构管理/search-departments",
                    },
                    {
                      title: "Get Sub-department List",
                      path: "/reference-new/sdk-v5/java/组织机构管理/list-children-departments",
                    },
                    {
                      title: "Get Department Member List",
                      path: "/reference-new/sdk-v5/java/组织机构管理/list-department-members",
                    },
                    {
                      title: "Get Department Direct Member ID List",
                      path: "/reference-new/sdk-v5/java/组织机构管理/list-department-member-ids",
                    },
                    {
                      title: "Search Department Members",
                      path: "/reference-new/sdk-v5/java/组织机构管理/search-department-members",
                    },
                    {
                      title: "Add Department Members",
                      path: "/reference-new/sdk-v5/java/组织机构管理/add-department-members",
                    },
                    {
                      title: "Remove Department Members",
                      path: "/reference-new/sdk-v5/java/组织机构管理/remove-department-members",
                    },
                    {
                      title: "Get Parent Department Information",
                      path: "/reference-new/sdk-v5/java/组织机构管理/get-parent-department",
                    },
                    {
                      title: "Check if User is in Department",
                      path: "/reference-new/sdk-v5/java/组织机构管理/is-user-in-department",
                    },
                  ],
                },
                {
                  title: "Access Control Management",
                  children: [
                    {
                      title: "Create Resource",
                      path: "/reference-new/sdk-v5/java/访问控制管理/create-resource",
                    },
                    {
                      title: "Batch Create Resources",
                      path: "/reference-new/sdk-v5/java/访问控制管理/create-resources-batch",
                    },
                    {
                      title: "Get Resource Details",
                      path: "/reference-new/sdk-v5/java/访问控制管理/get-resource",
                    },
                    {
                      title: "Batch Get Resource Details",
                      path: "/reference-new/sdk-v5/java/访问控制管理/get-resources-batch",
                    },
                    {
                      title: "Get Resource List by Page",
                      path: "/reference-new/sdk-v5/java/访问控制管理/list-resources",
                    },
                    {
                      title: "Modify Resource",
                      path: "/reference-new/sdk-v5/java/访问控制管理/update-resource",
                    },
                    {
                      title: "Delete Resource",
                      path: "/reference-new/sdk-v5/java/访问控制管理/delete-resource",
                    },
                    {
                      title: "Batch Delete Resources",
                      path: "/reference-new/sdk-v5/java/访问控制管理/delete-resources-batch",
                    },
                    {
                      title: "Create Permission Group",
                      path: "/reference-new/sdk-v5/java/访问控制管理/create-namespace",
                    },
                    {
                      title: "Batch Create Permission Groups",
                      path: "/reference-new/sdk-v5/java/访问控制管理/create-namespaces-batch",
                    },
                    {
                      title: "Get Permission Group Details",
                      path: "/reference-new/sdk-v5/java/访问控制管理/get-namespace",
                    },
                    {
                      title: "Batch Get Permission Group Details",
                      path: "/reference-new/sdk-v5/java/访问控制管理/get-namespaces-batch",
                    },
                    {
                      title: "Modify Permission Group Information",
                      path: "/reference-new/sdk-v5/java/访问控制管理/update-namespace",
                    },
                    {
                      title: "Delete Permission Group Information",
                      path: "/reference-new/sdk-v5/java/访问控制管理/delete-namespace",
                    },
                    {
                      title: "Batch Delete Permission Groups",
                      path: "/reference-new/sdk-v5/java/访问控制管理/delete-namespaces-batch",
                    },
                    {
                      title: "Authorize Resources",
                      path: "/reference-new/sdk-v5/java/访问控制管理/authorize-resources",
                    },
                    {
                      title: "Get Authorized Resource List for Subject",
                      path: "/reference-new/sdk-v5/java/访问控制管理/get-authorized-resources",
                    },
                    {
                      title: "Check if User Has Permission for Resource Action",
                      path: "/reference-new/sdk-v5/java/访问控制管理/is-action-allowed",
                    },
                  ],
                },
                {
                  title: "External Identity Source Management",
                  children: [
                    {
                      title: "Get Identity Source List",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/list-ext-idp",
                    },
                    {
                      title: "Get Identity Source Details",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/get-ext-idp",
                    },
                    {
                      title: "Create Identity Source",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/create-ext-idp",
                    },
                    {
                      title: "Update Identity Source Configuration",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/update-ext-idp",
                    },
                    {
                      title: "Delete Identity Source",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/delete-ext-idp",
                    },
                    {
                      title:
                        "Create New Connection Under Existing Identity Source",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/create-ext-idp-conn",
                    },
                    {
                      title: "Update Identity Source Connection",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/update-ext-idp-conn",
                    },
                    {
                      title: "Delete Identity Source Connection",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/delete-ext-idp-conn",
                    },
                    {
                      title: "Identity Source Connection Switch",
                      path: "/reference-new/sdk-v5/java/外部身份源管理/enable-ext-idp-conn",
                    },
                  ],
                },
                {
                  title: "Custom Field Management",
                  children: [
                    {
                      title: "Get User Pool Custom Field List",
                      path: "/reference-new/sdk-v5/java/自定义字段管理/get-custom-fields",
                    },
                    {
                      title: "Create/Modify Custom Field Definition",
                      path: "/reference-new/sdk-v5/java/自定义字段管理/set-custom-fields",
                    },
                    {
                      title: "Set Custom Field Value",
                      path: "/reference-new/sdk-v5/java/自定义字段管理/set-custom-data",
                    },
                    {
                      title:
                        "Get Custom Field Values for User/Group/Role/Organization",
                      path: "/reference-new/sdk-v5/java/自定义字段管理/get-custom-data",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Node.js",
          path: "/reference-new/sdk-v5/node/",
          redirect: "/reference-new/sdk-v5/node/install.html",
          children: [
            {
              title: "Installation and Usage",
              path: "/reference-new/sdk-v5/node/install.md",
            },
            {
              title: "User Authentication Module",
              path: "/reference-new/sdk-v5/node/authentication.md",
            },
            {
              title: "Management Module",
              children: [
                {
                  title: "User Management",
                  children: [
                    {
                      title: "Get User Information",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user",
                    },
                    {
                      title: "Batch Get User Information",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-batch",
                    },
                    {
                      title: "Get User List",
                      path: "/reference-new/sdk-v5/node/用户管理/list-users",
                    },
                    {
                      title: "Get User External Identity Sources",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-identities",
                    },
                    {
                      title: "Get User Role List",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-roles",
                    },
                    {
                      title: "Get User Real-name Authentication Information",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-principal-authentication-info",
                    },
                    {
                      title: "Delete User Real-name Authentication Information",
                      path: "/reference-new/sdk-v5/node/用户管理/reset-user-principal-authentication-info",
                    },
                    {
                      title: "Get User Department List",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-departments",
                    },
                    {
                      title: "Set User Departments",
                      path: "/reference-new/sdk-v5/node/用户管理/set-user-departments",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-groups",
                    },
                    {
                      title: "Delete Users",
                      path: "/reference-new/sdk-v5/node/用户管理/delete-users-batch",
                    },
                    {
                      title: "Get User MFA Binding Information",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-mfa-info",
                    },
                    {
                      title: "Get Archived User List",
                      path: "/reference-new/sdk-v5/node/用户管理/list-archived-users",
                    },
                    {
                      title: "Force User Logout",
                      path: "/reference-new/sdk-v5/node/用户管理/kick-users",
                    },
                    {
                      title: "Check if User Exists",
                      path: "/reference-new/sdk-v5/node/用户管理/is-user-exists",
                    },
                    {
                      title: "Create User",
                      path: "/reference-new/sdk-v5/node/用户管理/create-user",
                    },
                    {
                      title: "Batch Create Users",
                      path: "/reference-new/sdk-v5/node/用户管理/create-users-batch",
                    },
                    {
                      title: "Update User Profile",
                      path: "/reference-new/sdk-v5/node/用户管理/update-user",
                    },
                    {
                      title: "Get User Accessible Applications",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-accessible-apps",
                    },
                    {
                      title: "Get User Authorized Applications",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-authorized-apps",
                    },
                    {
                      title: "Check if User Has Role",
                      path: "/reference-new/sdk-v5/node/用户管理/has-any-role",
                    },
                    {
                      title: "Get User Login History",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-login-history",
                    },
                    {
                      title: "Get Applications User Has Logged Into",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-loggedin-apps",
                    },
                    {
                      title: "Get Identity Sources User Has Logged Into",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-logged-in-identities",
                    },
                    {
                      title: "Get All Resources Authorized to User",
                      path: "/reference-new/sdk-v5/node/用户管理/get-user-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Group Management",
                  children: [
                    {
                      title: "Get Group Details",
                      path: "/reference-new/sdk-v5/node/分组管理/get-group",
                    },
                    {
                      title: "Get Group List",
                      path: "/reference-new/sdk-v5/node/分组管理/list-groups",
                    },
                    {
                      title: "Create Group",
                      path: "/reference-new/sdk-v5/node/分组管理/create-group",
                    },
                    {
                      title: "Batch Create Groups",
                      path: "/reference-new/sdk-v5/node/分组管理/create-groups-batch",
                    },
                    {
                      title: "Modify Group",
                      path: "/reference-new/sdk-v5/node/分组管理/update-group",
                    },
                    {
                      title: "Batch Delete Groups",
                      path: "/reference-new/sdk-v5/node/分组管理/delete-groups-batch",
                    },
                    {
                      title: "Add Group Members",
                      path: "/reference-new/sdk-v5/node/分组管理/add-group-members",
                    },
                    {
                      title: "Batch Remove Group Members",
                      path: "/reference-new/sdk-v5/node/分组管理/remove-group-members",
                    },
                    {
                      title: "Get Group Member List",
                      path: "/reference-new/sdk-v5/node/分组管理/list-group-members",
                    },
                    {
                      title: "Get Group Authorized Resource List",
                      path: "/reference-new/sdk-v5/node/分组管理/get-group-authorized-resources",
                    },
                  ],
                },
                {
                  title: "Role Management",
                  children: [
                    {
                      title: "Get Role Details",
                      path: "/reference-new/sdk-v5/node/角色管理/get-role",
                    },
                    {
                      title: "Assign Role",
                      path: "/reference-new/sdk-v5/node/角色管理/assign-role",
                    },
                    {
                      title: "Remove Assigned Role",
                      path: "/reference-new/sdk-v5/node/角色管理/revoke-role",
                    },
                    {
                      title: "Get Role Authorized Resource List",
                      path: "/reference-new/sdk-v5/node/角色管理/get-role-authorized-resources",
                    },
                    {
                      title: "Get Role Member List",
                      path: "/reference-new/sdk-v5/node/角色管理/list-role-members",
                    },
                    {
                      title: "Get Role Department List",
                      path: "/reference-new/sdk-v5/node/角色管理/list-role-departments",
                    },
                    {
                      title: "Create Role",
                      path: "/reference-new/sdk-v5/node/角色管理/create-role",
                    },
                    {
                      title: "Get Role List",
                      path: "/reference-new/sdk-v5/node/角色管理/list-roles",
                    },
                    {
                      title: "Delete Role",
                      path: "/reference-new/sdk-v5/node/角色管理/delete-roles-batch",
                    },
                    {
                      title: "Batch Create Roles",
                      path: "/reference-new/sdk-v5/node/角色管理/create-roles-batch",
                    },
                    {
                      title: "Modify Role",
                      path: "/reference-new/sdk-v5/node/角色管理/update-role",
                    },
                  ],
                },
                {
                  title: "Organization Management",
                  children: [
                    {
                      title: "Get Top-level Organization List",
                      path: "/reference-new/sdk-v5/node/组织机构管理/list-organizations",
                    },
                    {
                      title: "Create Top-level Organization",
                      path: "/reference-new/sdk-v5/node/组织机构管理/create-organization",
                    },
                    {
                      title: "Modify Top-level Organization",
                      path: "/reference-new/sdk-v5/node/组织机构管理/update-organization",
                    },
                    {
                      title: "Delete Organization",
                      path: "/reference-new/sdk-v5/node/组织机构管理/delete-organization",
                    },
                    {
                      title: "Search Top-level Organization List",
                      path: "/reference-new/sdk-v5/node/组织机构管理/search-organizations",
                    },
                    {
                      title: "Get Department Information",
                      path: "/reference-new/sdk-v5/node/组织机构管理/get-department",
                    },
                    {
                      title: "Create Department",
                      path: "/reference-new/sdk-v5/node/组织机构管理/create-department",
                    },
                    {
                      title: "Modify Department",
                      path: "/reference-new/sdk-v5/node/组织机构管理/update-department",
                    },
                    {
                      title: "Delete Department",
                      path: "/reference-new/sdk-v5/node/组织机构管理/delete-department",
                    },
                    {
                      title: "Search Departments",
                      path: "/reference-new/sdk-v5/node/组织机构管理/search-departments",
                    },
                    {
                      title: "Get Sub-department List",
                      path: "/reference-new/sdk-v5/node/组织机构管理/list-children-departments",
                    },
                    {
                      title: "Get Department Member List",
                      path: "/reference-new/sdk-v5/node/组织机构管理/list-department-members",
                    },
                    {
                      title: "Get Department Direct Member ID List",
                      title: "获取部门直属成员 ID 列表",
                      path: "/reference-new/sdk-v5/node/组织机构管理/list-department-member-ids",
                    },
                    {
                      title: "搜索部门下的成员",
                      path: "/reference-new/sdk-v5/node/组织机构管理/search-department-members",
                    },
                    {
                      title: "部门下添加成员",
                      path: "/reference-new/sdk-v5/node/组织机构管理/add-department-members",
                    },
                    {
                      title: "部门下删除成员",
                      path: "/reference-new/sdk-v5/node/组织机构管理/remove-department-members",
                    },
                    {
                      title: "获取父部门信息",
                      path: "/reference-new/sdk-v5/node/组织机构管理/get-parent-department",
                    },
                    {
                      title: "判断用户是否在某个部门下",
                      path: "/reference-new/sdk-v5/node/组织机构管理/is-user-in-department",
                    },
                  ],
                },
                {
                  title: "访问控制管理",
                  children: [
                    {
                      title: "创建资源",
                      path: "/reference-new/sdk-v5/node/访问控制管理/create-resource",
                    },
                    {
                      title: "批量创建资源",
                      path: "/reference-new/sdk-v5/node/访问控制管理/create-resources-batch",
                    },
                    {
                      title: "获取资源详情",
                      path: "/reference-new/sdk-v5/node/访问控制管理/get-resource",
                    },
                    {
                      title: "批量获取资源详情",
                      path: "/reference-new/sdk-v5/node/访问控制管理/get-resources-batch",
                    },
                    {
                      title: "分页获取资源列表",
                      path: "/reference-new/sdk-v5/node/访问控制管理/list-resources",
                    },
                    {
                      title: "修改资源",
                      path: "/reference-new/sdk-v5/node/访问控制管理/update-resource",
                    },
                    {
                      title: "删除资源",
                      path: "/reference-new/sdk-v5/node/访问控制管理/delete-resource",
                    },
                    {
                      title: "批量删除资源",
                      path: "/reference-new/sdk-v5/node/访问控制管理/delete-resources-batch",
                    },
                    {
                      title: "创建权限分组",
                      path: "/reference-new/sdk-v5/node/访问控制管理/create-namespace",
                    },
                    {
                      title: "批量创建权限分组",
                      path: "/reference-new/sdk-v5/node/访问控制管理/create-namespaces-batch",
                    },
                    {
                      title: "获取权限分组详情",
                      path: "/reference-new/sdk-v5/node/访问控制管理/get-namespace",
                    },
                    {
                      title: "批量获取权限分组详情",
                      path: "/reference-new/sdk-v5/node/访问控制管理/get-namespaces-batch",
                    },
                    {
                      title: "修改权限分组信息",
                      path: "/reference-new/sdk-v5/node/访问控制管理/update-namespace",
                    },
                    {
                      title: "删除权限分组信息",
                      path: "/reference-new/sdk-v5/node/访问控制管理/delete-namespace",
                    },
                    {
                      title: "批量删除权限分组",
                      path: "/reference-new/sdk-v5/node/访问控制管理/delete-namespaces-batch",
                    },
                    {
                      title: "授权资源",
                      path: "/reference-new/sdk-v5/node/访问控制管理/authorize-resources",
                    },
                    {
                      title: "获取某个主体被授权的资源列表",
                      path: "/reference-new/sdk-v5/node/访问控制管理/get-authorized-resources",
                    },
                    {
                      title: "判断用户是否对某个资源的某个操作有权限",
                      path: "/reference-new/sdk-v5/node/访问控制管理/is-action-allowed",
                    },
                  ],
                },
                {
                  title: "外部身份源管理",
                  children: [
                    {
                      title: "获取身份源列表",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/list-ext-idp",
                    },
                    {
                      title: "获取身份源详情",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/get-ext-idp",
                    },
                    {
                      title: "创建身份源",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/create-ext-idp",
                    },
                    {
                      title: "更新身份源配置",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/update-ext-idp",
                    },
                    {
                      title: "删除身份源",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/delete-ext-idp",
                    },
                    {
                      title: "在某个已有身份源下创建新连接",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/create-ext-idp-conn",
                    },
                    {
                      title: "更新身份源连接",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/update-ext-idp-conn",
                    },
                    {
                      title: "删除身份源连接",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/delete-ext-idp-conn",
                    },
                    {
                      title: "身份源连接开关",
                      path: "/reference-new/sdk-v5/node/外部身份源管理/enable-ext-idp-conn",
                    },
                  ],
                },
                {
                  title: "自定义字段管理",
                  children: [
                    {
                      title: "获取用户池配置的自定义字段列表",
                      path: "/reference-new/sdk-v5/node/自定义字段管理/get-custom-fields",
                    },
                    {
                      title: "创建/修改自定义字段定义",
                      path: "/reference-new/sdk-v5/node/自定义字段管理/set-custom-fields",
                    },
                    {
                      title: "设置自定义字段的值",
                      path: "/reference-new/sdk-v5/node/自定义字段管理/set-custom-data",
                    },
                    {
                      title: "获取用户、分组、角色、组织机构的自定义字段值",
                      path: "/reference-new/sdk-v5/node/自定义字段管理/get-custom-data",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Python",
          path: "/reference-new/sdk-v5/python/",
          redirect: "/reference-new/sdk-v5/python/install.html",
          children: [
            {
              title: "安装使用",
              path: "/reference-new/sdk-v5/python/install.md",
            },
            {
              title: "用户认证模块",
              path: "/reference-new/sdk-v5/python/authentication.md",
            },
            {
              title: "管理模块",
              children: [
                {
                  title: "用户管理",
                  children: [
                    {
                      title: "获取用户信息",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user",
                    },
                    {
                      title: "批量获取用户信息",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-batch",
                    },
                    {
                      title: "获取用户列表",
                      path: "/reference-new/sdk-v5/python/用户管理/list-users",
                    },
                    {
                      title: "获取用户的外部身份源",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-identities",
                    },
                    {
                      title: "获取用户角色列表",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-roles",
                    },
                    {
                      title: "获取用户实名认证信息",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-principal-authentication-info",
                    },
                    {
                      title: "删除用户实名认证信息",
                      path: "/reference-new/sdk-v5/python/用户管理/reset-user-principal-authentication-info",
                    },
                    {
                      title: "获取用户部门列表",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-departments",
                    },
                    {
                      title: "设置用户所在部门",
                      path: "/reference-new/sdk-v5/python/用户管理/set-user-departments",
                    },
                    {
                      title: "获取分组列表",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-groups",
                    },
                    {
                      title: "删除用户",
                      path: "/reference-new/sdk-v5/python/用户管理/delete-users-batch",
                    },
                    {
                      title: "获取用户 MFA 绑定信息",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-mfa-info",
                    },
                    {
                      title: "获取已归档的用户列表",
                      path: "/reference-new/sdk-v5/python/用户管理/list-archived-users",
                    },
                    {
                      title: "强制下线用户",
                      path: "/reference-new/sdk-v5/python/用户管理/kick-users",
                    },
                    {
                      title: "判断用户是否存在",
                      path: "/reference-new/sdk-v5/python/用户管理/is-user-exists",
                    },
                    {
                      title: "创建用户",
                      path: "/reference-new/sdk-v5/python/用户管理/create-user",
                    },
                    {
                      title: "批量创建用户",
                      path: "/reference-new/sdk-v5/python/用户管理/create-users-batch",
                    },
                    {
                      title: "修改用户资料",
                      path: "/reference-new/sdk-v5/python/用户管理/update-user",
                    },
                    {
                      title: "获取用户可访问的应用",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-accessible-apps",
                    },
                    {
                      title: "获取用户授权的应用",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-authorized-apps",
                    },
                    {
                      title: "判断用户是否有某个角色",
                      path: "/reference-new/sdk-v5/python/用户管理/has-any-role",
                    },
                    {
                      title: "获取用户的登录历史记录",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-login-history",
                    },
                    {
                      title:
                        "通过用户 ID，获取用户曾经登录过的应用，可以选择指定用户 ID 类型等。",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-loggedin-apps",
                    },
                    {
                      title:
                        "通过用户 ID，获取用户曾经登录过的身份源，可以选择指定用户 ID 类型等。",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-logged-in-identities",
                    },
                    {
                      title: "获取用户被授权的所有资源",
                      path: "/reference-new/sdk-v5/python/用户管理/get-user-authorized-resources",
                    },
                  ],
                },
                {
                  title: "分组管理",
                  children: [
                    {
                      title: "获取分组详情",
                      path: "/reference-new/sdk-v5/python/分组管理/get-group",
                    },
                    {
                      title: "获取分组列表",
                      path: "/reference-new/sdk-v5/python/分组管理/list-groups",
                    },
                    {
                      title: "创建分组",
                      path: "/reference-new/sdk-v5/python/分组管理/create-group",
                    },
                    {
                      title: "批量创建分组",
                      path: "/reference-new/sdk-v5/python/分组管理/create-groups-batch",
                    },
                    {
                      title: "修改分组",
                      path: "/reference-new/sdk-v5/python/分组管理/update-group",
                    },
                    {
                      title: "批量删除分组",
                      path: "/reference-new/sdk-v5/python/分组管理/delete-groups-batch",
                    },
                    {
                      title: "添加分组成员",
                      path: "/reference-new/sdk-v5/python/分组管理/add-group-members",
                    },
                    {
                      title: "批量移除分组成员",
                      path: "/reference-new/sdk-v5/python/分组管理/remove-group-members",
                    },
                    {
                      title: "获取分组成员列表",
                      path: "/reference-new/sdk-v5/python/分组管理/list-group-members",
                    },
                    {
                      title: "获取分组被授权的资源列表",
                      path: "/reference-new/sdk-v5/python/分组管理/get-group-authorized-resources",
                    },
                  ],
                },
                {
                  title: "角色管理",
                  children: [
                    {
                      title: "获取角色详情",
                      path: "/reference-new/sdk-v5/python/角色管理/get-role",
                    },
                    {
                      title: "分配角色",
                      path: "/reference-new/sdk-v5/python/角色管理/assign-role",
                    },
                    {
                      title: "移除分配的角色",
                      path: "/reference-new/sdk-v5/python/角色管理/revoke-role",
                    },
                    {
                      title: "获取角色被授权的资源列表",
                      path: "/reference-new/sdk-v5/python/角色管理/get-role-authorized-resources",
                    },
                    {
                      title: "获取角色成员列表",
                      path: "/reference-new/sdk-v5/python/角色管理/list-role-members",
                    },
                    {
                      title: "获取角色的部门列表",
                      path: "/reference-new/sdk-v5/python/角色管理/list-role-departments",
                    },
                    {
                      title: "创建角色",
                      path: "/reference-new/sdk-v5/python/角色管理/create-role",
                    },
                    {
                      title: "获取角色列表",
                      path: "/reference-new/sdk-v5/python/角色管理/list-roles",
                    },
                    {
                      title: "删除角色",
                      path: "/reference-new/sdk-v5/python/角色管理/delete-roles-batch",
                    },
                    {
                      title: "批量创建角色",
                      path: "/reference-new/sdk-v5/python/角色管理/create-roles-batch",
                    },
                    {
                      title: "修改角色",
                      path: "/reference-new/sdk-v5/python/角色管理/update-role",
                    },
                  ],
                },
                {
                  title: "组织机构管理",
                  children: [
                    {
                      title: "获取顶层组织机构列表",
                      path: "/reference-new/sdk-v5/python/组织机构管理/list-organizations",
                    },
                    {
                      title: "创建顶层组织机构",
                      path: "/reference-new/sdk-v5/python/组织机构管理/create-organization",
                    },
                    {
                      title: "修改顶层组织机构",
                      path: "/reference-new/sdk-v5/python/组织机构管理/update-organization",
                    },
                    {
                      title: "删除组织机构",
                      path: "/reference-new/sdk-v5/python/组织机构管理/delete-organization",
                    },
                    {
                      title: "搜索顶层组织机构列表",
                      path: "/reference-new/sdk-v5/python/组织机构管理/search-organizations",
                    },
                    {
                      title: "获取部门信息",
                      path: "/reference-new/sdk-v5/python/组织机构管理/get-department",
                    },
                    {
                      title: "创建部门",
                      path: "/reference-new/sdk-v5/python/组织机构管理/create-department",
                    },
                    {
                      title: "修改部门",
                      path: "/reference-new/sdk-v5/python/组织机构管理/update-department",
                    },
                    {
                      title: "删除部门",
                      path: "/reference-new/sdk-v5/python/组织机构管理/delete-department",
                    },
                    {
                      title: "搜索部门",
                      path: "/reference-new/sdk-v5/python/组织机构管理/search-departments",
                    },
                    {
                      title: "获取子部门列表",
                      path: "/reference-new/sdk-v5/python/组织机构管理/list-children-departments",
                    },
                    {
                      title: "获取部门成员列表",
                      path: "/reference-new/sdk-v5/python/组织机构管理/list-department-members",
                    },
                    {
                      title: "获取部门直属成员 ID 列表",
                      path: "/reference-new/sdk-v5/python/组织机构管理/list-department-member-ids",
                    },
                    {
                      title: "搜索部门下的成员",
                      path: "/reference-new/sdk-v5/python/组织机构管理/search-department-members",
                    },
                    {
                      title: "部门下添加成员",
                      path: "/reference-new/sdk-v5/python/组织机构管理/add-department-members",
                    },
                    {
                      title: "部门下删除成员",
                      path: "/reference-new/sdk-v5/python/组织机构管理/remove-department-members",
                    },
                    {
                      title: "获取父部门信息",
                      path: "/reference-new/sdk-v5/python/组织机构管理/get-parent-department",
                    },
                    {
                      title: "判断用户是否在某个部门下",
                      path: "/reference-new/sdk-v5/python/组织机构管理/is-user-in-department",
                    },
                  ],
                },
                {
                  title: "访问控制管理",
                  children: [
                    {
                      title: "创建资源",
                      path: "/reference-new/sdk-v5/python/访问控制管理/create-resource",
                    },
                    {
                      title: "批量创建资源",
                      path: "/reference-new/sdk-v5/python/访问控制管理/create-resources-batch",
                    },
                    {
                      title: "获取资源详情",
                      path: "/reference-new/sdk-v5/python/访问控制管理/get-resource",
                    },
                    {
                      title: "批量获取资源详情",
                      path: "/reference-new/sdk-v5/python/访问控制管理/get-resources-batch",
                    },
                    {
                      title: "分页获取资源列表",
                      path: "/reference-new/sdk-v5/python/访问控制管理/list-resources",
                    },
                    {
                      title: "修改资源",
                      path: "/reference-new/sdk-v5/python/访问控制管理/update-resource",
                    },
                    {
                      title: "删除资源",
                      path: "/reference-new/sdk-v5/python/访问控制管理/delete-resource",
                    },
                    {
                      title: "批量删除资源",
                      path: "/reference-new/sdk-v5/python/访问控制管理/delete-resources-batch",
                    },
                    {
                      title: "创建权限分组",
                      path: "/reference-new/sdk-v5/python/访问控制管理/create-namespace",
                    },
                    {
                      title: "批量创建权限分组",
                      path: "/reference-new/sdk-v5/python/访问控制管理/create-namespaces-batch",
                    },
                    {
                      title: "获取权限分组详情",
                      path: "/reference-new/sdk-v5/python/访问控制管理/get-namespace",
                    },
                    {
                      title: "批量获取权限分组详情",
                      path: "/reference-new/sdk-v5/python/访问控制管理/get-namespaces-batch",
                    },
                    {
                      title: "修改权限分组信息",
                      path: "/reference-new/sdk-v5/python/访问控制管理/update-namespace",
                    },
                    {
                      title: "删除权限分组信息",
                      path: "/reference-new/sdk-v5/python/访问控制管理/delete-namespace",
                    },
                    {
                      title: "批量删除权限分组",
                      path: "/reference-new/sdk-v5/python/访问控制管理/delete-namespaces-batch",
                    },
                    {
                      title: "授权资源",
                      path: "/reference-new/sdk-v5/python/访问控制管理/authorize-resources",
                    },
                    {
                      title: "获取某个主体被授权的资源列表",
                      path: "/reference-new/sdk-v5/python/访问控制管理/get-authorized-resources",
                    },
                    {
                      title: "判断用户是否对某个资源的某个操作有权限",
                      path: "/reference-new/sdk-v5/python/访问控制管理/is-action-allowed",
                    },
                  ],
                },
                {
                  title: "外部身份源管理",
                  children: [
                    {
                      title: "获取身份源列表",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/list-ext-idp",
                    },
                    {
                      title: "获取身份源详情",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/get-ext-idp",
                    },
                    {
                      title: "创建身份源",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/create-ext-idp",
                    },
                    {
                      title: "更新身份源配置",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/update-ext-idp",
                    },
                    {
                      title: "删除身份源",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/delete-ext-idp",
                    },
                    {
                      title: "在某个已有身份源下创建新连接",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/create-ext-idp-conn",
                    },
                    {
                      title: "更新身份源连接",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/update-ext-idp-conn",
                    },
                    {
                      title: "删除身份源连接",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/delete-ext-idp-conn",
                    },
                    {
                      title: "身份源连接开关",
                      path: "/reference-new/sdk-v5/python/外部身份源管理/enable-ext-idp-conn",
                    },
                  ],
                },
                {
                  title: "自定义字段管理",
                  children: [
                    {
                      title: "获取用户池配置的自定义字段列表",
                      path: "/reference-new/sdk-v5/python/自定义字段管理/get-custom-fields",
                    },
                    {
                      title: "创建/修改自定义字段定义",
                      path: "/reference-new/sdk-v5/python/自定义字段管理/set-custom-fields",
                    },
                    {
                      title: "设置自定义字段的值",
                      path: "/reference-new/sdk-v5/python/自定义字段管理/set-custom-data",
                    },
                    {
                      title: "获取用户、分组、角色、组织机构的自定义字段值",
                      path: "/reference-new/sdk-v5/python/自定义字段管理/get-custom-data",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      // 自动生成粘贴结束
    },
    {
      title: "Framework Integration",
      path: "/reference-new/framework/",
      redirect: "/reference-new/frameworks/spring-security-cas/",
      children: [
        {
          title: "Spring CAS",
          path: "/reference-new/frameworks/spring-security-cas/",
        },
        {
          title: "Spring OAuth",
          path: "/reference-new/frameworks/spring-security-oauth/",
        },
        {
          title: "Spring OIDC",
          path: "/reference-new/frameworks/spring-security-oidc/",
        },
        {
          title: "Express OIDC",
          path: "/reference-new/frameworks/express-oidc-client/",
        },
        {
          title: "Express Passport",
          path: "/reference-new/frameworks/express-passport-openidconnect/",
        },
      ],
    },
    {
      title: "Others",
      path: "/reference-new/other/",
      redirect: "/reference-new/other/sdk-for-sso.html",
      children: [
        {
          title: "Single Sign-On (SSO)",
          path: "/reference-new/other/sdk-for-sso.html",
        },
        {
          title: "WeChat Mini Program",
          path: "/reference-new/other/sdk-for-wxapp.html",
        },
        {
          title: "WeChat Web Login",
          path: "/reference-new/other/sdk-for-wxmp.html",
        },
        { title: "Radius", path: "/reference-new/other/radius/" },
        { title: "Error Codes", path: "/reference-new/other/error-code.html" },
      ],
    },
  ],
  "/concepts/": [
    {
      title: `What is ${BRAND_NAME_ZH_CN}`,
      path: "/concepts/",
    },
    {
      title: "What is User Pool",
      path: "/concepts/user-pool",
    },
    {
      title: "What is Application",
      path: "/concepts/application",
    },
    {
      title: "What is Authentication",
      path: "/concepts/authentication",
    },
    {
      title: "What is Federation Authentication",
      path: "/concepts/federation",
    },
    {
      title: "What is Zero Trust Network",
      path: "/concepts/zero-trust-network",
    },
    {
      title: "Single Sign-On and Single Sign-Out",
      path: "/concepts/single-sign-on-and-single-sign-out",
    },
    {
      title: "What is Authorization",
      path: "/concepts/authorization",
    },
    {
      title: "Authentication vs Authorization",
      path: "/concepts/authentication-vs-authorization",
    },
    {
      title: "What is JWT Token",
      path: "/concepts/jwt-token",
    },
    {
      title: "What is ID Token",
      path: "/concepts/id-token",
    },
    {
      title: "What is Access Token",
      path: "/concepts/access-token",
    },
    {
      title: "What is Refresh Token",
      path: "/concepts/refresh-token",
    },
    {
      title: "Access Token vs Id Token",
      path: "/concepts/access-token-vs-id-token",
    },
    {
      title: "Understanding OIDC and OAuth2.0 Protocol",
      children: [
        {
          title: "OIDC and OAuth2.0 Overview",
          path: "/concepts/oidc/oidc-overview",
        },
        {
          title: "Choose OIDC Authorization Mode",
          path: "/concepts/oidc/choose-flow",
        },
        {
          title: "OIDC Common Questions",
          path: "/concepts/oidc-common-questions",
        },
      ],
    },
    {
      title: "Understanding SAML2 Protocol",
      children: [
        {
          title: "SAML2 Overview",
          path: "/concepts/saml/saml-overview",
        },
        {
          title: "SAML2 Flow",
          path: "/concepts/saml/saml-flow",
        },
        // {
        //   title: 'SAML2 Common Questions',
        //   path: '/concepts/saml/faq'
        // },
      ],
    },
    {
      title: "What is Multi-Factor Authentication",
      path: "/concepts/mfa",
    },
    {
      title: "Account Lifecycle Management",
      path: "/concepts/account-life-cycle-management",
    },
    {
      title: "Hosted Login Page vs Embeddable Login Component",
      path: "/concepts/embeded-vs-hosted",
    },
    {
      title: "CIAM and EIAM",
      path: "/concepts/ciam-and-eiam",
    },
    {
      title: "What is LDAP",
      path: "/concepts/ldap",
    },
    {
      title: "How QR Code Login Works",
      path: "/concepts/how-qrcode-works",
    },
    {
      title: "Basic Concepts of Cryptography",
      path: "/concepts/cryptography",
    },
  ],
  // "/integration/": [],
  "/frameworks/": [
    {
      title: "",
      path: "",
    },
  ],
  // "/apn/": [
  //   {
  //     title: "Overview",
  //     path: "/apn/overview/",
  //   },
  //   {
  //     title: "Integrate OIDC into Your Application",
  //     path: "/apn/integrated-oidc/",
  //   },
  //   {
  //     title: "Test OIDC Capabilities with GenAuth",
  //     path: "/apn/test-oidc/",
  //     children: [
  //       {
  //         title: "Step 1: Create a Custom Application in GenAuth",
  //         path: "/apn/test-oidc/get-oidc-parameter/step1",
  //       },
  //       {
  //         title: "Step 2: Click the Created Application to Get OIDC Parameters",
  //         path: "/apn/test-oidc/get-oidc-parameter/step2",
  //       },
  //       {
  //         title: "Step 3: Prepare a GenAuth User",
  //         path: "/apn/test-oidc/get-oidc-parameter/step3",
  //       },
  //       {
  //         title: "Step 4: Test Your Application Through GenAuth IDP",
  //         path: "/apn/test-oidc/get-oidc-parameter/step4",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Important Notes Before Joining APN",
  //     path: "/apn/attention/",
  //   },
  //   {
  //     title: "Invite Administrators",
  //     path: "/guides/userpool-config/collaboration-adminstrator",
  //   },
  //   {
  //     title: "Submit Application",
  //     path: "/apn/submit-app/",
  //   },
  //   {
  //     title: "More OIDC Testing Methods",
  //     path: "/apn/more-oidc-tests/",
  //     children: [
  //       {
  //         title: "Type 2: Authorization Code + PKCE Mode Testing",
  //         path: "/apn/more-oidc-tests/type2",
  //       },
  //       {
  //         title: "Type 3: Implicit Mode Testing",
  //         path: "/apn/more-oidc-tests/type3",
  //       },
  //       {
  //         title: "Type 4: Password Mode Testing",
  //         path: "/apn/more-oidc-tests/type4",
  //       },
  //       {
  //         title: "Type 5: Client Credentials Mode Testing",
  //         path: "/apn/more-oidc-tests/type5",
  //       },
  //     ],
  //   },
  // ],
  "/metadata/": [
    {
      title: "Metadata Overview",
      path: "/metadata/",
    },
    {
      title: "Metadata Features",
      children: [
        {
          title: "Feature 1: Data Object Management Entry",
          path: "/metadata/元数据功能说明/功能一：数据对象管理功能入口",
        },
        {
          title: "Feature 2: Field Management",
          path: "/metadata/元数据功能说明/功能二：字段管理",
        },
        {
          title: "Feature 3: Operation Management",
          path: "/metadata/元数据功能说明/功能三：操作管理",
        },
        {
          title: "Feature 4: Detail Page Management",
          path: "/metadata/元数据功能说明/功能四：详情页管理",
        },
        {
          title: "Feature 5: Domain Model",
          path: "/metadata/元数据功能说明/功能五：领域模型",
        },
      ],
    },
  ],
  "/guard/": [
    {
      title: "Overview",
      path: "/guard/",
    },
    {
      title: "React",
      path: "/guard/react",
    },
    {
      title: "Vue",
      path: "/guard/vue",
    },
    {
      title: "Angular",
      path: "/guard/angular",
    },
    {
      title: "Native JavaScript",
      path: "/guard/native-javascript",
    },
    {
      title: "Migration Guide",
      path: "/guard/migration",
    },
    {
      title: "Guard Changelog",
      path: "/guard/guard-changelog",
    },
  ],
  "/android/": [
    {
      title: "Getting Started",
      path: "/android/develop",
    },
    {
      title: "Quick Integration",
      path: "/android/quick",
    },
    {
      title: "Components",
      path: "/android/component/",
      children: [
        {
          title: "Tutorial",
          children: [
            "/android/component/tutorial/example",
            "/android/component/tutorial/basic-login",
            "/android/component/tutorial/advanced-login",
            "/android/component/tutorial/refine-login",
            "/android/component/tutorial/basic-register",
            "/android/component/tutorial/advanced-register",
            "/android/component/tutorial/login-to-register",
            "/android/component/tutorial/reset-password-by-phone",
            "/android/component/tutorial/reset-password-by-email",
            "/android/component/tutorial/reset-password-all",
          ],
        },
        {
          title: "Basic Components",
          children: [
            {
              title: "App Logo",
              path: "/android/component/basic/app-logo",
            },
            {
              title: "App Name",
              path: "/android/component/basic/app-name",
            },
            {
              title: "Account Input Box",
              path: "/android/component/basic/account-edit-text",
            },
            {
              title: "Password Input Box",
              path: "/android/component/basic/password-edit-text",
            },
            {
              title: "Password Confirmation Input Box",
              path: "/android/component/basic/password-confirm-edit-text",
            },
            {
              title: "Phone Number Input Box",
              path: "/android/component/basic/phonenumber-edit-text",
            },
            {
              title: "Verification Code Input Box",
              path: "/android/component/basic/verifycode-edit-text",
            },
            {
              title: "Get SMS Verification Code Button",
              path: "/android/component/basic/get-verifycode-button",
            },
            {
              title: "Email Input Box",
              path: "/android/component/basic/email-edit-text",
            },
            {
              title: "Get Email Verification Code Button",
              path: "/android/component/basic/get-emailcode-button",
            },
            {
              title: "Login Button",
              path: "/android/component/basic/login-button",
            },
            {
              title: "Error Text",
              path: "/android/component/basic/error-text",
            },
            {
              title: "Login Method Tab",
              path: "/android/component/basic/login-method-tab",
            },
            {
              title: "Login Container",
              path: "/android/component/basic/login-container",
            },
            {
              title: "Privacy Agreement",
              path: "/android/component/basic/privacy-confirm-box",
            },
            {
              title: "Register Button",
              path: "/android/component/basic/register-button",
            },
            {
              title: "Register Method Tab",
              path: "/android/component/basic/register-method-tab",
            },
            {
              title: "Register Container",
              path: "/android/component/basic/register-container",
            },
            {
              title: "Go to Register Button",
              path: "/android/component/basic/go-register-button",
            },
            {
              title: "Go to Login Button",
              path: "/android/component/basic/go-login-button",
            },
            {
              title: "Go to Forgot Password Button",
              path: "/android/component/basic/go-forgot-password-button",
            },
            {
              title: "Go to Feedback Button",
              path: "/android/component/basic/go-feedback-button",
            },
          ],
        },
        {
          title: "Social Components",
          children: [
            {
              title: "Social Login List",
              path: "/android/component/social/social-login-listview",
            },
          ],
        },
      ],
    },
    {
      title: "APIs",
      children: [
        "/android/apis/authentication/",
        "/android/apis/protocol/",
        "/android/apis/mfa/",
        "/android/apis/scan/",
      ],
    },
    {
      title: "Social Login",
      path: "/android/social/",
      children: [
        "/android/social/wechat",
        "/android/social/wecom",
        "/android/social/alipay",
        "/android/social/lark",
      ],
    },
    {
      title: "Common Scenarios",
      children: [
        "/android/scenario/splash",
        "/android/scenario/tokens",
        "/android/scenario/user-profile",
        "/android/scenario/webview",
      ],
    },
    {
      title: "Private Deployment",
      path: "/android/onpremise",
    },
    {
      title: "Version History",
      path: "/android/version",
    },
  ],
};

/**
 * 英文菜单
 */
const translatedZhCnNavBar = {};

const addPrefixToLink = (navbar, prefix) => {
  if (!navbar) {
    return;
  }
  return navbar.map((item) => ({
    ...item,
    path: item.path && `${prefix}${item.path}`,
    children:
      item.children &&
      item.children.map((link) => {
        if (typeof link === "string") {
          return `${prefix}${link}`;
        }
        return {
          ...link,
          path: `${prefix}${link.path}`,
          children: addPrefixToLink(link.children, prefix),
        };
      }),
  }));
};

/**
 * 给所有路径加上 /en
 */
const getEnUsNavBar = (sidebars) => {
  const enUsNavBar = {};

  for (let attr in sidebars) {
    enUsNavBar[`/en${attr}`] = addPrefixToLink(sidebars[attr], "/en");
  }

  return enUsNavBar;
};

module.exports = {
  zhCnNavBar,
  enUsNavBar: getEnUsNavBar(translatedZhCnNavBar),
  BRAND_NAME_ZH_CN,
  BRAND_NAME_EN_US,
};
