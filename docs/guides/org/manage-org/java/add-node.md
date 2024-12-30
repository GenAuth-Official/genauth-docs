!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `createDepartment` method of `ManagementClient` to add a department:

> You need to specify the ID of the parent node (ParentDepartmentId). If the department's parent is the root organization, call the getOrganization method to obtain it through OrganizationCode; if the department's parent is another department, call the getDepartment method to obtain it.

```java
GetOrganizationDto getOrganizationDto = new GetOrganizationDto();
getOrganizationDto.setOrganizationCode("code");
OrganizationSingleRespDto organization = client.getOrganization(getOrganizationDto);
System.out.println(JsonUtils.serialize(organization));

CreateDepartmentReqDto createDepartmentReqDto = new CreateDepartmentReqDto();
createDepartmentReqDto.setParentDepartmentId("GEN_AUTH_DEP_ID");
createDepartmentReqDto.setName("Development Department");
createDepartmentReqDto.setOrganizationCode("steamory");
DepartmentSingleRespDto department = client.createDepartment(createDepartmentReqDto);
```
