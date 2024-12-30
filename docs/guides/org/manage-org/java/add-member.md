!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `addDepartmentMembers` method of the `ManagementClient` to add members to a department:

```java
AddDepartmentMembersReqDto addDepartmentMembersReqDto = new AddDepartmentMembersReqDto();
addDepartmentMembersReqDto.setOrganizationCode("steamory");
addDepartmentMembersReqDto.setDepartmentId("GEN_AUTH_DEP_ID");
List<String> userIdList = new ArrayList<>();
userIdList.add("GEN_AUTH_USERID");
addDepartmentMembersReqDto.setUserIds(userIdList);
IsSuccessRespDto isSuccessRespDto = client.addDepartmentMembers(addDepartmentMembersReqDto);
```
