!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `createOrganization` method of `ManagementClient` to obtain the `OrganizationSingleRespDto` object and create an organization:

```java
CreateOrganizationReqDto reqDto = new CreateOrganizationReqDto();
reqDto.setOrganizationName("Steam Memory");
reqDto.setOrganizationCode("steamory");
OrganizationSingleRespDto response = managementClient.createOrganization(reqDto);
System.out.println(JsonUtils.serialize(response));
```