# Create an application

<!--
Warning ⚠️:
Do not modify this document directly,
https://github.com/Authing/authing-docs-factory
Use this project to generate
-->

<LastUpdated />

> This document is automatically generated based on https://github.com/authing/authing-docs-factory based on https://api-explorer.genauth.ai V3 API, and is consistent with API parameters and return results. If the description of this document is incorrect, please refer to the V3 API.

Create an application

## Method name

`ManagementClient.createApplication`

## Request parameters

| Name            | Type   | <div style="width:80px">Is it required</div> | <div style="width:60px">Default value</div> | <div style="width:300px">Description</div>                                                                                                                                                               | <div style="width:200px">Sample value</div> |
| --------------- | ------ | -------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| appName         | string | Yes                                          | -                                           | Application name                                                                                                                                                                                         | `Sample application`                        |
| template        | string | No                                           | -                                           | Integrated application template type, **Required for integrated applications**. Integrated applications only need to fill in the `template` and `templateData` fields, and other fields will be ignored. | `github`                                    |
| templateData    | string | No                                           | -                                           | Integrated application configuration information, **required for integrated applications**.                                                                                                              | `github`                                    |
| appIdentifier   | string | No                                           | -                                           | Application unique identifier, **required for self-built applications**.                                                                                                                                 | `example`                                   |
| appLogo         | string | No                                           | -                                           | Application Logo link                                                                                                                                                                                    | `Sample Application`                        |
| appDescription  | string | No                                           | -                                           | Application description information                                                                                                                                                                      | `Sample Description Information`            |
| appType         | string | No                                           | web                                         | Application type                                                                                                                                                                                         | `web`                                       |
| defaultProtocol | string |
