!!!include(common/init-java-auth-sdk.md)!!!

First, get the [AccessToken](https://docs.genauth.ai/concepts/access-token.html) from the object returned after calling the SDK login successfully and assign it to the AuthenticationClient:

```java
authenticationClient.setAccessToken("GEN_AUTH_ACCESSTOKEN");
```

Set custom fields in an entity class:

CustomData class:

```java
public class CustomData {
    private String school;
    public CustomData() {}
    public String getSchool() { return school; }
    public void setSchool(String school) { this.school = school; }
}
```

updateProfile method:

```java
UpdateUserProfileDto updateUserProfileDto = new UpdateUserProfileDto();
CustomData customData = new CustomData();
customData.setSchool("YOUR_SCHOOL");
updateUserProfileDto.setCustomData(customData);
authenticationClient.updateProfile(updateUserProfileDto);
```

Get the latest custom data of the user:

```java
GetProfileDto getProfileDto = new GetProfileDto();
// Set to get user custom data
getProfileDto.setWithCustomData(true);
UserSingleRespDto userSingleRespDto = authenticationClient.getProfile(getProfileDto);
CustomData res = (CustomData)userSingleRespDto.getData().getCustomData();
```
