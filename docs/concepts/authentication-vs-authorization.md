# Authentication vs Authorization

<LastUpdated/>

When developing or managing an application, we often see two nouns - authentication and authorization, which are more similar in English - authentication and authorization. Although these two terms often appear in the same context, they are very different in concept.

Authentication means confirming your own identity, while authorization means granting access to the system. In simple terms, authentication is the process of verifying your identity, while authorization is the process of verifying that you have access.

## What is Authentication

Authentication is about verifying your credentials, such as username/email and password, to verify the identity of the visitor. The system determines whether you are who you say you are using credentials. In public and private networks, the system verifies the user's identity through the login password. Identity authentication is usually completed through username and password, and sometimes authentication can be not only in the form of password, but also through other factors such as mobile phone verification code or biometrics.

In some application systems, in order to pursue higher security, multiple authentication factors are often required to be used in combination, which is what we often call multi-factor authentication.

Common authentication methods

- Username and password authentication
- Mobile phone and SMS verification code authentication
- Email and email verification code authentication
- Biometric authentication of face recognition/fingerprint recognition
- OTP authentication
- Radius network authentication

## What is authorization

Authorization occurs after the system completes identity authentication, and ultimately grants you full access to resources such as information, files, databases, funds, locations, almost anything. In simple terms, authorization determines your ability to access the system and to what extent.

Authorization is the process of determining whether an authenticated user can access a specific resource. It verifies whether you have the authority to grant you access to resources such as information, databases, files, etc. Authorization usually confirms your permissions after verification. In simple terms, it's like giving someone official permission to do something or anything.

For example, the process of verifying and confirming an email address and password in an organization is called authentication, but determining which employee can access which floor is called authorization. Let's say you are traveling and are about to board a plane. When you show your ticket and some identification before checking in, you receive a boarding pass proving that the airport authority has authenticated your identity. But that's not it. The flight attendant must authorize you to board the flight you are supposed to take and give you access to the interior of the aircraft and its resources.

## Authentication vs. Authorization

| Authentication                                                                                                                                                                          | Authorization                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication confirms identity to grant access to the system.                                                                                                                         | Authorization determines whether you have access to a resource.                                                                                         |
| It is the process of verifying the user's credentials to gain access to the user.                                                                                                       | It is the process of verifying whether access is allowed.                                                                                               |
| It determines whether the user is who he claims to be.                                                                                                                                  | It determines what the user can and cannot access.                                                                                                      |
| Authentication usually requires a username and password.                                                                                                                                | The authentication factors required for authorization may vary, depending on the security level.                                                        |
| Authentication is the first step of authorization and is therefore always the first step.                                                                                               | Authorization is completed after successful authentication.                                                                                             |
| For example, students of a particular university need to authenticate themselves before accessing the student link of the university's official website. This is called authentication. | For example, authorization determines what information the student is authorized to access on the university's website after successful authentication. |

### Authentication, authorization, confirmation and authentication

| Concept        | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| Authentication | Confirm the identity of the declarant.                               |
| Authorization  | Obtain the delegated authority of the user.                          |
| Confirmation   | The user confirms the authorization.                                 |
| Authentication | The process of verifying the authenticity of the declared authority. |
