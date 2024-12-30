!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `listDepartmentMembers` method of `ManagementClient` to get a list of members of a department:

```java
ListDepartmentMembersDto listDepartmentMembersDto = new ListDepartmentMembersDto();
listDepartmentMembersDto.setOrganizationCode("steamory");
listDepartmentMembersDto.setDepartmentId("GEN_AUTH_DEP_ID");
listDepartmentMembersDto.setSortBy("JoinDepartmentAt");
listDepartmentMembersDto.setOrderBy("Asc");
UserPaginatedRespDto userPaginatedRespDto = client.listDepartmentMembers(listDepartmentMembersDto);
```
