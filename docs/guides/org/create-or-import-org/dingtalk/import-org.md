#### Create a DingTalk application

1. You need to first register an enterprise internal application with **address book permissions** on the [DingTalk Open Platform](https://open.dingtalk.com/), as shown below:

![](https://cdn.genauth.ai/blog/20201019214932.png)

Select the development mode as enterprise self-development:

<img src="https://cdn.genauth.ai/blog/20201019214944.png" height="400px">

On the permission management page, add all permissions related to the address book:

![](https://cdn.genauth.ai/blog/20201019214954.png)

![](https://cdn.genauth.ai/blog/20201019215001.png)

#### Configure server export IP

Fill in your server export IP address here:

![](https://cdn.genauth.ai/blog/20201019215016.png)

Due to the limitation of the DingTalk platform, the same IP can only be used by one enterprise, so you need to deploy a proxy with https forwarding capability on the server corresponding to the **server export IP**, and {{$localeConfig.brandName}} will communicate with the DingTalk server through this proxy. You can use open source proxy solutions such as [goproxy](https://github.com/snail007/goproxy/blob/master/README_ZH.md), or purchase an anonymous proxy IP. If you don't know how to deploy, please see:

::: page-ref /guides/faqs/how-to-build-a-proxy.md
:::

#### Configure in {{$localeConfig.brandName}} console

Find **DingTalk Address Book** on **Connect Identity Source** - **Enterprise Identity Source** page:

![](https://cdn.genauth.ai/blog/20201019215241.png)

Here you need to fill in the following information:

- Enterprise ID (CorpId)
- AppKey of DingTalk application
- AppSecret of DingTalk application
- Server export proxy

![](https://cdn.genauth.ai/blog/20201019215306.png)

![](https://cdn.genauth.ai/blog/20201019215311.png)

Please make sure the application ID and key are correct, and the proxy is available, otherwise you may encounter the following prompt:

![](https://cdn.genauth.ai/blog/20201019215321.png)

#### First full synchronization

After successful configuration, you can import the organizational structure and users in the DingTalk corporate address book into the {{$localeConfig.brandName}} organization. Below we will take Beijing XX Co., Ltd. (virtual, hereinafter referred to as Feifan Company) as an example:

This is the initial organizational structure of Feifan Company, with a total of three departments and 4 employees:

<img src="https://cdn.genauth.ai/blog/20201019215342.png" height="400px">

In {{$localeConfig.brandName}} console user management - organizational structure page, click **Import organization** - Import from DingTalk:

![](https://cdn.genauth.ai/blog/20201019215351.png)

After a short while, DingTalk's organization will be imported into {{$localeConfig.brandName}} Organization:

![](https://cdn.genauth.ai/blog/20201019215400.png)

You can check the progress on the sync history page:

![](https://cdn.genauth.ai/blog/20201019215409.png)

#### Incremental sync from DingTalk to {{$localeConfig.brandName}} Organization

#### Synchronize changes in organizational structure

##### Add department

Here is a legal department:

![](https://cdn.genauth.ai/blog/20201019215430.png)

You can see that it is immediately synced to {{$localeConfig.brandName}} Organization:

![](https://cdn.genauth.ai/blog/20201019215440.png)

Add a Greater China department under the Commercialization department:

![](https://cdn.genauth.ai/blog/20201019215453.png)

After a while, it was also synchronized to {{$localeConfig.brandName}} Organization:

![](https://cdn.genauth.ai/blog/20201019215512.png)

##### Delete department

Delete the legal department:

![](https://cdn.genauth.ai/blog/20201019215532.png)

It is in {{$localeConfig.brandName}} It was also deleted in the organization:

![](https://cdn.genauth.ai/blog/20201019215541.png)

##### Modify the department

Here, the **R&D** department is renamed **Production Research**:

![](https://cdn.genauth.ai/blog/20201019215606.png)

You can see that it has also been successfully updated:

![](https://cdn.genauth.ai/blog/20201019215615.png)

#### Synchronize personnel changes

##### Add member

Add a new member under the operations department:

![](https://cdn.genauth.ai/blog/20201019215633.png)

![](https://cdn.genauth.ai/blog/20201019215639.png)

##### Delete member

Delete the member just added:

![](https://cdn.genauth.ai/blog/20201019215653.png)

![](https://cdn.genauth.ai/blog/20201019215700.png)

##### Modify member information

Change Xiaohong's name to Xiaohonghong:

![](https://cdn.genauth.ai/blog/20201019215713.png)

![](https://cdn.genauth.ai/blog/20201019215719.png)

#### View synchronization history

You can click **Import organization** - **View import history** Check the progress on the **Sync History** page:

![](https://cdn.genauth.ai/blog/20201019215747.png)

If the sync fails, you can see the detailed error log here:

![](https://cdn.genauth.ai/blog/20201019215801.png)

![](https://cdn.genauth.ai/blog/20201019215806.png)
