!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `deleteDepartment` method of `ManagementClient` to delete the node:

```java
DeleteDepartmentReqDto deleteDepartmentReqDto = new DeleteDepartmentReqDto();
deleteDepartmentReqDto.setDepartmentId("GEN_AUTH_DEP_ID");
IsSuccessRespDto isSuccessRespDto = client.deleteDepartment(deleteDepartmentReqDto);
```
