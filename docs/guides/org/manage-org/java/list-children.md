!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `listChildrenDepartments` method of `ManagementClient` to get the list of child nodes of a node:

```java
ListChildrenDepartmentsDto listChildrenDepartmentsDto = new ListChildrenDepartmentsDto();
listChildrenDepartmentsDto.setDepartmentId("GEN_AUTH_DEP_ID");
listChildrenDepartmentsDto.setOrganizationCode("steamory");
DepartmentPaginatedRespDto departmentPaginatedRespDto = client.listChildrenDepartments(listChildrenDepartmentsDto);
```
