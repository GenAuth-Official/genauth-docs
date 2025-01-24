---
home: true
noSidebar: true
mainTitle: "Documentation Center"
subTitle: "Here, take the first step to get excited! Learn how to use {{$localeConfig.brandName}} and the APIs provided by {{$localeConfig.brandName}}."
searchPlaceholder: Please enter keywords to search for product documentation
hotSearchText: Hot Search
exploreUse: Explore the use of {{$localeConfig.brandName}}
banner:
  - title: GenAuth API/SDK V3 Officially Launched！
    text: GenAuth API/SDK V3 is now available, offering HTTP API and SDKs for over 10 different languages and frameworks, allowing you to flexibly build secure and stable authentication processes in just 5 minutes！
    url: /reference/
    btnText: View Docs
    icon: https://files.authing.co/authing-docs-v2/images/common/banner-icon.svg
    background: https://files.authing.co/authing-docs-v2/images/common/banner-bg.png

hotSearch:
  - text: How to Authenticate Users
    link: /guides/authentication/
  - text: How to Authorize Users
    link: /guides/authorization/
  - text: Implementing Single Sign-On Quickly
    link: /guides/app-new/sso/
  - text: Adding Social Login
    link: /guides/authentication/social/
  - text: How to Validate Tokens
    link: /guides/faqs/how-to-validate-user-token.html
sdkConfig:
  ios:
    name: iOS Swift
    link: /reference/sdk-for-ios/
    icon: iOS
  android:
    name: Android
    link: /reference/sdk-for-android/
    icon: Android
  flutter:
    name: Flutter
    link: /reference/sdk-for-flutter/
    icon: Flutter
  javascript:
    name: JavaScript
    link: /reference/guard/web.html
    icon: JavaScript
  reactNative:
    name: React Native
    link: /reference/sdk-for-react-native/
    icon: React-Native
  cSharp:
    name: C Sharp
    link: /reference/sdk-for-csharp/
    icon: csharp
  react:
    name: React
    link: /reference/guard/web.html
    icon: React-Native
  angular:
    name: Angular
    link: /reference/guard/web.html
    icon: Angular
  vue:
    name: Vue
    link: /reference/guard/web.html
    icon: Vue
  python:
    name: Python
    link: /reference/sdk-for-python/
    icon: Python
  nodeJs:
    name: Node.js
    link: /reference/sdk-for-node/
    icon: Nodejs
  ruby:
    name: Ruby
    link: /reference/sdk-for-ruby.html
    icon: Ruby
  ruby-api:
    name: Ruby
    link: /reference/sdk-for-ruby.html
    icon: Ruby
  java:
    name: Java
    link: /reference/sdk-for-java/
    icon: Java
  golang:
    name: Golang
    link: /reference/sdk-for-go/
    icon: Go
  php:
    name: PHP
    link: /reference/sdk-for-php/
    icon: php
sections:
  - title: Concepts
    description: Understand the foundation of {{$localeConfig.brandName}} system architecture
    links:
      - text: What is a User Pool
        link: /concepts/user-pool
      - text: What is Authentication
        link: /concepts/authentication.html
      - text: What is Authorization
        link: /concepts/authorization.html
    knowMore:
      link: /concepts/
  - title: Quick Start
    description: Learn how to build solutions step by step according to our instructions.
    links:
      - text: Using the Hosted Login Page
        link: /guides/basics/authenticate-first-user/use-hosted-login-page
      - text: Using the Login Form Component
        link: /guides/basics/authenticate-first-user/use-embeded-login-component/
      - text: Using API & SDK
        link: /guides/basics/authenticate-first-user/use-api-sdk/
    knowMore:
      link: /guides/basics/authenticate-first-user/
  - title: Application Integration
    description: Integrate existing or local applications into GenAuth.
    links:
      - text: Logging into Alibaba Cloud through {{$localeConfig.brandName}}
        link: /integration/ali-cloud/
      - text: Logging into Tencent Cloud through {{$localeConfig.brandName}}
        link: /integration/tencent-cloud/
      - text: Logging into Huawei Cloud through {{$localeConfig.brandName}}
        link: /integration/huawei-cloud/
    knowMore:
      link: /integration/
  # - title: Join APN
  #   description: Join the Application Partnership Network provided by GenAuth
  #   links:
  #     - text: What is APN
  #       link: /apn/
  #     - text: Integrating Your Application with OIDC
  #       link: /apn/integrated-oidc/
  #     - text: Testing OIDC Capability Based on {{$localeConfig.brandName}}
  #       link: /apn/test-oidc/
  #   knowMore:
  #     link: /apn/
explores:
  - title: Authenticating Users
    links:
      - icon: authing-login-password
        link: /guides/authentication/basic/password/
        text: Authenticate with Account and Password
      - icon: authing-xingzhuangjiehe1
        link: /guides/authentication/basic/sms/
        text: Authenticate with SMS Verification Code
      - icon: authing-wechat-mobile
        link: /guides/authentication/social/
        text: Authenticate with Social Login
    knowMore:
      link: /guides/authentication/
  - title: Managing User Permissions
    links:
      - icon: authing-certification
        link: /guides/access-control/choose-the-right-access-control-model.html
        text: Choosing the Right Access Control Model
      - icon: authing-genggaimima
        link: /guides/access-control/rbac.html
        text: Integrating RBAC Permission Model into Your Application System
      - icon: authing-Token-2
        link: /guides/access-control/abac.html
        text: Integrating ABAC Permission Model into Your Application System
    knowMore:
      link: /guides/access-control/
  - title: Managing User Directories
    links:
      - icon: authing-sousuo
        link: /guides/users/search.html
        text: Searching Users
      - icon: authing-zidingyiziduan-3
        link: /guides/users/user-defined-field/
        text: Adding Custom User Fields
      - icon: authing-bianzu3
        link: /guides/users/ldap-user-directory.html
        text: Using {{$localeConfig.brandName}}'s LDAP User Directory
    knowMore:
      link: /guides/users/
  - title: Managing User Accounts
    links:
      - icon: authing-login
        link: /guides/user/create-user/
        text: Creating User Accounts
      - icon: authing-xiangqing
        link: /guides/user/user-profile
        text: Viewing User Details
      - icon: authing-port-kz
        link: /guides/users/user-defined-field/
        text: Extending User Properties
    knowMore:
      link: /guides/user/
  - title: Connecting External Identity Sources (IdP)
    links:
      - icon: authing-wechat-mobile
        link: /guides/connections/social.html
        text: Social Login Configuration Documentation
      - icon: authing-oidc_logo
        link: /guides/connections/enterprise.html
        text: Enterprise Identity Source Configuration Documentation
      - icon: authing-database
        link: /guides/database-connection/overview/
        text: Using a Custom Database
    knowMore:
      link: /guides/connections/
  - title: FAQ
    links:
      - icon: authing-ID1
        link: /guides/faqs/get-userpool-id-and-secret.html
        text: How to Get User Pool ID
      - icon: authing-anquanyuguanlibeifen
        link: /guides/security/config-domain.html
        text: How to Configure Web Security Domain
      - icon: authing-token-3
        link: /guides/faqs/how-to-validate-user-token.html
        text: Validating User Credentials (Token)
    knowMore:
      link: /guides/faqs/get-userpool-id-and-secret.html
---
