!!!include(common/init-java-mngmt-sdk.md)!!!

**Still** use the `updateDepartment` method of `ManagementClient` to move the department:

> You need to specify the new parent node (ParentDepartmentId) of the node being moved.

```java
UpdateDepartmentReqDto updateDepartmentReqDto = new UpdateDepartmentReqDto();
updateDepartmentReqDto.setOrganizationCode("steamory");
updateDepartmentReqDto.setDepartmentId("GEN_AUTH_DEP_ID");
updateDepartmentReqDto.setParentDepartmentId("GEN_AUTH_DEP_ID");
DepartmentSingleRespDto departmentSingleRespDto = client.updateDepartment(updateDepartmentReqDto);
```
