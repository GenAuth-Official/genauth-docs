# GenAuth User Authentication API

The GenAuth User Authentication API processes all requests on behalf of the end user. It provides authentication-related endpoints, including login, registration, logout, MFA, session validation, and support for the OIDC standard protocol.

Commonly used endpoints include:

- Login: Supports password login, verification code login, social login, and QR code login.
- Registration: Supports password-based registration and verification code registration.
- Token Lifecycle Management: Includes obtaining, validating, and revoking `access_token`.
- Logout: Supports both frontend browser logout and backend `access_token` revocation.
- User Profile Management: Allows updating user information, binding phone numbers, and binding email addresses.
- MFA Management: Supports binding and unbinding MFA factors.
- User Resource Management: Enables retrieving user roles, groups, and organizational structures.
- Messaging Service: Supports sending SMS and verification codes.

<!-- ## 获取帮助

有任何建议或者问题反馈，欢迎在 [GenAuth 论坛](https://forum.genauth.ai/)中提出。 -->
