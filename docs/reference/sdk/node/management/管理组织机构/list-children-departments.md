E5%A4%87#tag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86/apiCode) |
| requestId | string | Request ID. Returned when the request fails. |
| data | <a href="#IsUserInDepartmentDataDto">IsUserInDepartmentDataDto</a> | data |

Sample result:

```json
{
  "statusCode": 200,
  "message": "Operation successful",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "inDepartment": true
  }
}
```

## Data structure

### <a id="IsUserInDepartmentDataDto"></a> IsUserInDepartmentDataDto

| Name         | Type    | <div style="width:80px">Is it required</div> | <div style="width:300px">Description</div> | <div style="width:200px">Sample value</div> |
| ------------ | ------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| inDepartment | boolean | yes                                          | in this department                         | `true`                                      |
