# Audit Overview

<LastUpdated/>

::: hint-info
For information about the {{$localeConfig.brandName}} user pool version that supports the various benefits of the "Audit Log" function, please check the [official website "Price" page](https://www.genauth.ai/pricing). If your version does not support this benefit and you want to try it, you can activate the trial period. For an introduction to the trial period and how to activate it, please check [Trial Period](/guides/basics/trial/README.md).
:::

Security and compliance are critical to the operation of an enterprise or organization and are the cornerstone of the operation of enterprises and organizations. It is not easy to achieve security and compliance. GenAuth provides operational auditing functions to help enterprises and organizations maintain security and compliance while their business continues to grow.

## Log classification

The audit function provided by GenAuth is divided into two aspects:

- [Administrator action operation log](./administrator-action.md): You can get the actions of all administrator users through the identity management platform
- [User action log](./user-action.md): You can clearly restore the user's behavior in the platform to support the compliance management of the enterprise, and can also be used for backtracking and determining responsibilities after the incident.

## Log content

Whether it is the administrator action log or the user action log, it is mainly composed of the following 5 parts to record what resources the operator operated at what time:

- Resource: the affected user or resource.
- Action: what action was taken, whether it is accessing resources or issuing certificates.
- Related information: the project or server where this action occurred.
- Operator: the person who implemented the action.
- Date: the time when the action was taken.
