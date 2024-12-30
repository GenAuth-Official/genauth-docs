!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `updateDepartment` method of `ManagementClient` to modify the department:

```java
UpdateDepartmentReqDto updateDepartmentReqDto = new UpdateDepartmentReqDto();
updateDepartmentReqDto.setOrganizationCode("steamory");
updateDepartmentReqDto.setDepartmentId("GEN_AUTH_DEP_ID");
// Modify the department name
updateDepartmentReqDto.setName("Product Department");
DepartmentSingleRespDto departmentSingleRespDto = client.updateDepartment(updateDepartmentReqDto);
```
