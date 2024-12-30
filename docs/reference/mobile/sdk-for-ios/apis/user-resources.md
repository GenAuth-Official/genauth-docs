# 用户相关资源

<LastUpdated/>

## 获取登录日志

```swift
func getLoginHistory(page: Int = 1, limit: Int = 10, success: Bool? = nil, start: String? = nil, end: String? = nil, completion: @escaping (Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| page | 当前页数，从 1 开始 |
| limit | 显示条目，最大不能超过 50，默认为 10 |
| success | 是否登录成功，可根据是否登录成功进行筛选 |
| start | 开始时间，为单位为毫秒的时间戳 |
| end | 结束时间，为单位为毫秒的时间戳 |

**示例代码**

```swift
AuthClient().getLoginHistory(page: 1, limit: 10) { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 获取登录应用

```swift
func getLoggedApps(completion: @escaping(Response) -> Void)
```

**示例代码**

```swift
AuthClient().getLoggedApps() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```


## 获取具备访问权限的应用

```swift
func getAccessibleApps(completion: @escaping(Response) -> Void)
```

**示例代码**

```swift
AuthClient().getAccessibleApps() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```


## 获取租户列表

```swift
func getTenantList(completion: @escaping(Response) -> Void)
```

**示例代码**

```swift
AuthClient().getTenantList() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```


## 获取角色列表

```swift
func getRoleList(namespace: String? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

`namespace`: 所属权限分组的 code

**示例代码**

```swift
AuthClient().getRoleList() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 获取分组列表

```swift
func getGroupList(completion: @escaping(Response) -> Void)
```

**示例代码**

```swift
AuthClient().getGroupList() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 获取部门列表

```swift
func getDepartmentList(page: Int = 1, limit: Int = 10, withCustomData: Bool = false, sortBy: String = "JoinDepartmentAt", orderBy: String = "Desc", completion: @escaping(Response)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| page | 当前页数，从 1 开始 |
| limit | 显示条目，最大不能超过 50，默认为 10 |
| withCustomData | 是否获取部门的自定义数据 |
| sortBy | 排序依据，如 部门创建时间 `DepartmentCreatedAt`、加入部门时间 `JoinDepartmentAt`、部门名称 `DepartmentName`、部门标志符 `DepartmemtCode` |
| orderBy | 增序或降序 |

**示例代码**

```swift
AuthClient().getDepartmentList(page: 1, limit: 10) { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```


## 获取被授权的资源列表

```swift
func getAuthorizedResources(namespace: String? = nil, resourceType: String? = nil, completion: @escaping(Response) -> Void)
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| namespace | 所属权限分组的 code |
| resourceType | 资源类型，如数据、API、菜单、按钮 |

**示例代码**

```swift
AuthClient().getAuthorizedResources() { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```
