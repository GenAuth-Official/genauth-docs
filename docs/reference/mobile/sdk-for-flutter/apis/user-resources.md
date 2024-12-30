# 用户相关资源

<LastUpdated/>

## 获取登录日志

```dart
static Future<AuthResult> getLoginHistory(int page, int limit, [bool? success, String? start, String? end]) async
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

```dart
AuthResult result = await AuthClient.getLoginHistory(1, 10);
```

## 获取登录应用

```dart
static Future<Result> getLoggedApps() async 
```

**示例代码**

```dart
AuthResult result = await AuthClient.getLoggedApps();
```


## 获取具备访问权限的应用

```dart
static Future<Result> getAccessibleApps() async
```

**示例代码**

```dart
AuthResult result = await AuthClient.getAccessibleApps();
```


## 获取租户列表

```dart
static Future<Result> getTenantList() async
```

**示例代码**

```dart
AuthResult result = await AuthClient.getTenantList();
```


## 获取角色列表

```dart
static Future<Result> getRoleList([String? namespace]) async
```

**请求参数**

`namespace`: 所属权限分组的 code

**示例代码**

```dart
AuthResult result = await AuthClient.getRoleList();
```

## 获取分组列表

```dart
static Future<Result> getGroupList() async
```

**示例代码**

```dart
AuthResult result = await AuthClient.getGroupList();
```

## 获取部门列表

```dart
static Future<AuthResult> getDepartmentList(int page, int limit, [bool? withCustomData, String? sortBy, String? orderBy]) async
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

```dart
AuthResult result = await AuthClient.getDepartmentList(1, 10);
```


## 获取被授权的资源列表

```dart
static Future<Result> getAuthorizedResources([String? namespace, String? resourceType]) async
```

**请求参数**

| 名称  | 说明 |
| :---- | :---- |
| namespace | 所属权限分组的 code |
| resourceType | 资源类型，如数据、API、菜单、按钮 |

**示例代码**

```dart
AuthResult result = await AuthClient.getAuthorizedResources(1, 10);
```
