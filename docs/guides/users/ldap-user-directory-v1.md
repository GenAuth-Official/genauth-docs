---
meta:
  - name: description
    content: DAP User Directory
---

# LDAP User Directory using {{$localeConfig.brandName}}

<LastUpdated/>

{{$localeConfig.brandName}} supports viewing, modifying, adding and deleting user information using the LDAP protocol. This page contains some basic information and usage tutorials. If you don't know what the LDAP protocol is, you can read the concepts - [What is LDAP](/concepts/ldap.md) first.

## Basic information

| Information                     | Value                                               |
| :------------------------------ | :-------------------------------------------------- |
| Hostname                        | ldap://ldap.genauth.ai                              |
| Port                            | 1389                                                |
| LDAP Distinguished Name(BindDN) | ou=users, o=GEN_AUTH_USERPOOL_ID, dc=authing, dc=cn |
| Base DN                         | ou=users, o=GEN_AUTH_USERPOOL_ID, dc=authing, dc=cn |

`BindDN` is mainly used with `secret` to complete authentication, while `BaseDN` defines where the user operates from

```
dc=authing,dc=cn					- {{$localeConfig.brandName}}
└── o=GEN_AUTH_USERPOOL_ID			- userPool
    └── ou=users					- users(often used as BindDN, and BaseDN)
    	├── uid=USER_ID				- user
    	└── o=develop				- self-defined organization
			└── uid=USER_ID			- member of the organization
```

## Authentication method

Accessing the {{$localeConfig.brandName}} LDAP server requires the use of the [UserPool ID \(UserPool Id\) and UserPool Secret\)](/guides/faqs/get-userpool-id-and-secret.md) of {{$localeConfig.brandName}}. The authentication command is as follows:

Log in using the BindDN information and secret key of the user pool, search based on the user pool, and return results including user data and organization data

```bash
$ ldapsearch -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -LLL -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn"
```

If the key \(Secret\) is incorrect, the following information will be returned:

```
	ldap_bind: Invalid credentials (49)
	matched DN: ou=users, o=GEN_AUTH_USERPOOL_ID, dc=authing, dc=cn
	additional info: InvalidCredentialsError
```

This is an example of the returned result, which is generally different from your query result, for reference:

```bash
# User pool information
dn: ou=users,o=59f86b4832eb28071bdd9214,dc=authing,dc=cn
objectclass: organization
objectclass: top
o: 59f86b4832eb28071bdd9214
name:: cm9vdCDnlKjmiLfmsaA=

# User information under the user pool (test)
dn: uid=601d54c27569df18f85e2c71,ou=users,o=59f86b4832eb28071bdd9214,dc=authin
 g,dc=cn
id: 601d54c27569df18f85e2c71
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
email: 1409458062@qq.com
username: test
photo: https://files.authing.co/authing-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7b
 pl7Qp
objectclass: users
cn: test
uid: 601d54c27569df18f85e2c71

# User information under user pool (root)
dn: uid=5a597f35085a2000144a10ed,ou=users,o=59f86b4832eb28071bdd9214,dc=authin
 g,dc=cn
id: 5a597f35085a2000144a10ed
createdAt:: TW9uIEZlYiAwMSAyMDIxIDE3OjA1OjU0IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
updatedAt:: TW9uIEZlYiAwMSAyMDIxIDE3OjI2OjU5IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
email: root@genauth.ai
username: root
photo: https://files.authing.co/authing-console/default-user-avatar.png
lastIp:: Ojox
gender: U
registerSource: offcial:import
emailVerified: false
phoneVerified: false
lastLogin:: TW9uIEZlYiAwMSAyMDIxIDE3OjI2OjU5IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
blocked: false
signedUp:: TW9uIEZlYiAwMSAyMDIxIDE3OjA1OjU0IEdNVCswODAwICjkuK3lm73moIflh4bml7b
 pl7Qp
objectclass: users
cn: root
uid: 5a597f35085a2000144a10ed

# User information under user pool (188xxxx8888)
dn: uid=601d59a5f04ee72cb058bdbb,ou=users,o=59f86b4832eb28071bdd9214,dc=authin
 g,dc=cn
id: 601d59a5f04ee72cb058bdbb
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
phone: 188xxxx8888
photo: https://files.authing.co/authing-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7b
 pl7Qp
objectclass: users
uid: 601d59a5f04ee72cb058bdbb

# User information under the Xiaobai organization under the user pool (test)
dn: o=601d14d1267b84c06a32e463,ou=users,o=59f86b4832eb28071bdd9214,dc=authing,
 dc=cn
id: 601d14d1267b84c06a32e463
createdAt: 2021-02-05T09:50:09.073Z
updatedAt: 2021-02-05T09:50:09.073Z
userPoolId: 59f86b4832eb28071bdd9214
orgId: 601d14d15ac1c3f008997f53
name:: 5bCP55m9
description:: 6L+Z5piv5qC557uE57uH
code: 5584
o: 601d14d1267b84c06a32e463
objectclass: organization
path:: 5bCP55m9
parent: Root
parentId: 0
parentCode: root

# User information under the Xiaobai organization under the user pool (test)
dn: uid=601d54c27569df18f85e2c71,o=601d14d1267b84c06a32e463,ou=users,o=59f86b4
 832eb28071bdd9214,dc=authing,dc=cn
id: 601d54c27569df18f85e2c71
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
email: 1409458062@qq.com
username: test
photo: https://files.authing.co/authing-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7b
 pl7Qp
objectclass: organizationalPerson
cn: test
uid: 601d54c27569df18f85e2c71

# User information under the Xiaobai organization under the user pool (188xxxx8888)
dn: uid=601d59a5f04ee72cb058bdbb,o=601d14d1267b84c06a32e463,ou=users,o=59f86b4
 832eb28071bdd9214,dc=authing,dc=cn
id: 601d59a5f04ee72cb058bdbb
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7
 bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
phone: 188xxxx8888
photo: https://files.authing.co/authing-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7b
 pl7Qp
objectclass: organizationalPerson
uid: 601d59a5f04ee72cb058bdbb

```

## Search

Search based on user pool, and return results including user data and organizational data. -LLL indicates that information that does not match the filter condition is prohibited from being output. Without this option, you will get the number of entries in the obtained results and the requested partial information.

```bash
$ ldapsearch -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET"  -LLL -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn"
```

### Search Filter

Search and filter based on user pool, and the returned results include user data and organization data.

> For all filtering functions, please refer to [RFC-2254](https://www.ietf.org/rfc/rfc2254.txt)

#### Equality

This item searches for all information with gender attribute under the user pool and the attribute value is U. Since organizations do not have this attribute, only users have this attribute, the result will return user information with gender U.

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -LLL -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s sub '(gender=U)'
```

#### inequality

Similar to inequality, this item searches for all information with the cn (user name) attribute under the user pool, and the attribute value is not hahhaha, because the organization does not have this attribute, only the user has this attribute, and the result will return the entry information of the user name not being `hahhaha` (in fact, only the user has the cn attribute, so the result is all user information).

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -LLL -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s sub '(!(cn=hahhaha))'
```

#### Greater than or equal to

Similar to the previous two, this item searches for all information with the code (organizational unit marker code) attribute under the user pool, and the attribute value is `greater than or equal to` 50. Because users do not have this attribute, only organizations have this attribute, the result will return the entry information with the organizational unit marker code greater than or equal to.

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -LLL -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s sub '(code>=50)'
```

#### Less than or equal to

This item searches for all information with the code (organizational unit marker code) attribute under the user pool, and the attribute value is `less than or equal to` 50. Because users do not have this attribute, only organizations have this attribute, the result will return the entry information with the organizational unit marker code greater than or equal to.

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -LLL -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s sub '((code<=50)'
```

#### Search mode

```
dc=authing,dc=cn					- {{$localeConfig.brandName}}
└── o=GEN_AUTH_USERPOOL_ID			- userPool
    └── ou=users					- users(often used as BindDN and BaseDN)
    	├── uid=USER1_ID				- user
    	└── o=develop				- self-defined organization
			└── uid=USER2_ID			- Members under the organization
```

##### base mode (only search for baseDN information)

Taking the above figure as an example, the base mode will only search and return the BaseDN information, that is, the `user pool` node information

```
dn: ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...
```

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s base
```

##### one mode (only search for subnodes under baseDN information)

Taking the above figure as an example, one mode will search for `BaseDN` and `BaseDN subnodes` and return relevant information.

```
dn: ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...

dn: uid=USER1_ID,ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...

dn: o=develop,ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...
```

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s one
```

##### sub mode (search for all nodes under baseDN information)

Using the above figure as an example, the sub mode will search for `BaseDN` and `all nodes under BaseDN` and return relevant information.

```
dn: ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...

dn: uid=USER1_ID,ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...

dn: o=develop,ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...

dn: uid=USER2_ID,o=develop,ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
...property related information...
```

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s sub
```

### Filter the returned results (return only the specified attributes)

If you have used SQL, this function is similar to `select`. Without adding filters, the result may be as follows:

```
dn: ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
cn: authing
username: authing
uid: user1
...other attributes...
```

Add relevant filter conditions as shown in the figure, and the result will be as follows

```
dn: ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn
uid: user1
```

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -b "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -s sub dn uid
```

## Add

Create a file named user.ldif and copy the following content into it:

```
dn: cn=authingUserName, ou=users, o=GEN_AUTH_USERPOOL_ID, dc=authing, dc=cn
objectClass: users
cn: authingUserName
```

Then execute the following command:

This operation will add a `user` to the `user pool`

```bash
$ ldapadd -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -f ./user.ldif
```

## Modify

Create a file named modify.ldif and copy the following content into it:

```
dn: cn=authingUserName, ou=users, o=GEN_AUTH_USERPOOL_ID, dc=authing, dc=cn
changetype: modify
replace: mail
mail: test@genauth.ai
```

Then execute the following command:

This operation will search for relevant user information in the `user pool` according to the `DN` in modify. If the search is successful, select the operation according to `changetype` `User information`, `information` comes from the information under `changetype`

```bash
$ ldapmodify -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" -f ./modify.ldif
```

## Delete

This operation will search for relevant user information in `user pool` according to `DN`. If the search is successful, it will be deleted. This is a sensitive operation

```bash
$ ldapdelete -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_USERPOOL_SECRET" "cn=authingUserName, ou=users, o=GEN_AUTH_USERPOOL_ID, dc=authing,dc=cn"
```

## Other

### compare

This operation is used to determine whether the `DN` value and the `specified entry value` in the `LDAP Server` directory tree belong to the same entry. If yes, it returns `true`, otherwise it returns `false`

```bash
$ ldapcompare -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_CLIENT_SECRET" "uid=uid,o=oid,ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" "gender:U"
```

### modifyDN

It is used to modify the `RDN` entry in the `LDAP Server`. It can be input from the standard entry information. `RDN` refers to the first item of `DN`, for example, `cn=oldUserName, o=5fa24415c124111859e23e4b, ou=users, o=GEN_AUTH_USERPOOL_ID, dc=authing, dc=cn" "cn=newUserName` in `cn=oldUserName`, since most of the relevant information of `user's DN` and `organizational DN` are values ​​related to `id`, when you modify `cn=oldUserName`, it is actually `equivalent to` modifying the username

```bash
$ ldapmodrdn -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_CLIENT_SECRET" "cn=oldUserName,o=5fa24415c124111859e23e4b,ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" "cn=newUserName"
```

### whoami

Used to verify the identity of the `LDAP server`. If you enter the correct bind DN and password, the specified information will be returned. Otherwise, the error `ldap_bind: invalid credentials(49)` will be prompted. This is usually caused by `wrong password`. Please check the `corresponding password` and `bind DN information`. Return information `user@genauth.ai`

```bash
$ ldapwhoami -H ldap://ldap.genauth.ai:1389 -x -D "ou=users,o=GEN_AUTH_USERPOOL_ID,dc=authing,dc=cn" -w "GEN_AUTH_CLIENT_SECRET"
```
