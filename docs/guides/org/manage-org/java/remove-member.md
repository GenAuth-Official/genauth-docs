!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `removeDepartmentMembers` method of `ManagementClient` to remove members from a department:

```java
RemoveDepartmentMembersReqDto removeDepartmentMembersReqDto = new RemoveDepartmentMembersReqDto();
removeDepartmentMembersReqDto.setOrganizationCode("steamory");
removeDepartmentMembersReqDto.setDepartmentId("GEN_AUTH_DEP_ID");
List<String> userIdList = new ArrayList<>();
userIdList.add("GEN_AUTH_USERID)");
removeDepartmentMembersReqDto.setUserIds(userIdList);
IsSuccessRespDto isSuccessRespDto = client.removeDepartmentMembers(removeDepartmentMembersReqDto);
```

> If a user belongs to only one department, he cannot be removed.
