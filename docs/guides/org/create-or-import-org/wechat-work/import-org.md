#### Get the WeChat Enterprise Development Configuration

1. Get the Enterprise ID (CorpId)

Click the **My Enterprise** first-level menu, you can find the Enterprise ID (**CorpId**) at the bottom of the **Enterprise Information** page:

![](https://cdn.genauth.ai/blog/20201019221428.png)

2. Enable "Address Book Synchronization" API interface synchronization

Click the **Management Tools** first-level menu, select **Address Book Synchronization**:

![](https://cdn.genauth.ai/blog/20201019221456.png)

Click "Enable API Interface Synchronization"

![](https://cdn.genauth.ai/blog/20201019221602.png)

3. Get the "Address Book Synchronization" development Secret

![](https://cdn.genauth.ai/blog/20201019221611.png)

4. Set up the receiving event server

Click **Re-obtain** to randomly generate a Token and EncodingAESKey (you can also choose to generate it yourself).

![](https://cdn.genauth.ai/blog/20201019221634.png)

The URL needs to be filled in with a link that meets the following format:

```
https://core.genauth.ai/connections/enterprise/wechatwork/<YOUR_USERPOOL_ID>/<YOUR_WECHATWORK_CORPID>/callback
```

Replace YOUR_USERPOOL_ID with the user pool ID and YOUR_WECHATWORK_CORPID with the enterprise ID of WeChat for Enterprise ID (CorpId), for example:

```
https://core.genauth.ai/connections/enterprise/wechatwork/59f86b4832eb28071bdd9214/ww736adab7f131153d/callback
```

Click Save at this time and an error message "openapi callback address request failed" will appear:

![](https://cdn.genauth.ai/blog/20201019221705.png)

This is normal because we have not yet filled in the enterprise WeChat development configuration into {{$localeConfig.brandName}}, see below for details.

#### Configure WeChat Work Address Book

Fill in the following information in the form:

1. Corporate ID (CorpId)
2. Enterprise Address Book Secret
3. Address Book Event Synchronization Token
4. Address Book Event Synchronization EncodingAESKey

![](https://cdn.genauth.ai/blog/20201019221723.png)

#### Initial Synchronization

Click **Import from WeChat Work** in the upper right corner.

![](https://cdn.genauth.ai/blog/20201019221744.png)

#### Incremental Synchronization

> Enabling Address Book API Event Synchronization allows any changes you make in WeChat Work (including employee additions, deletions, modifications, and querying, department additions, deletions, modifications, and querying, and moving member departments, etc.) to be synchronized to the organization of {{$localeConfig.brandName}}.

> If you don't need this feature, you can skip this step.

Go back to the page for setting up the receiving event server, click Save, and you should be able to see a success prompt.

![](https://cdn.genauth.ai/blog/20201019221810.png)

Then the operations you perform in WeChat for Business will be synchronized to {{$localeConfig.brandName}}!
