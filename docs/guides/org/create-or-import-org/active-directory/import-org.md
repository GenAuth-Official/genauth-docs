#### Create an AD connection in the {{$localeConfig.brandName}} console

Enter the [{{$localeConfig.brandName}} console](https://console.genauth.ai/console/userpool), and follow the instructions in the figure below to find **Connect Identity Source**/**Connect Active Directory**:

![](https://cdn.genauth.ai/img/20210126190459.png)

::: img-description
Create an AD connection
:::

You need to enter the following fields:

- **Connection Identifier**: This is the unique identifier for this connection and cannot be modified after setting.
- **Display Name**: If set, the {{$localeConfig.brandName}} login form will display a "Log in with {displayName}" button.
- **Application Logo**

Then click the "**Save**" button. After successful creation, you will get a **Provisioning Ticket Url**, which will be used in the following steps:

![](https://cdn.genauth.ai/blog/20201109141645.png)

Then you need to enable this AD connection for your application:

![](https://cdn.genauth.ai/img/20210126190629.png)

#### Run {{$localeConfig.brandName}} AD Connector on Windows

Before installing {{$localeConfig.brandName}} AD Connector, please ensure that the above conditions are met:

- Windows server;
- Active Directory installed on the server;
- The machine running {{$localeConfig.brandName}} AD Connector can connect to Active Directory;
- A user account and password with read permissions for Active Directory.

First, you need to [download](https://download.genauth.ai/app/{{$localeConfig.brandName}}-AD-Connector-latest.exe) {{$localeConfig.brandName}} AD Connector, which is an exe file that needs to be run on your Windows AD server and is responsible for communicating with {{$localeConfig.brandName}}. {{$localeConfig.brandName}} AD Connector needs to be **installed in the LAN AD domain environment**, but it does not have to be installed on the server running the AD service, as long as {{$localeConfig.brandName}} AD Connector can access the AD user directory.

##### Install {{$localeConfig.brandName}} AD Connector

Click [here](https://download.genauth.ai/app/{{$localeConfig.brandName}}-AD-Connector-latest.exe) to download the latest {{$localeConfig.brandName}} AD Connector.

Upload the downloaded file to the machine in the AD domain environment, double-click the application to install it.

![](https://cdn.genauth.ai/docs/20200414213654.png)

The system may issue a warning, click "Run anyway".

![](https://cdn.genauth.ai/blog/image%20%28521%29.png)

Select the language and click "OK".

![](https://cdn.genauth.ai/docs/20200414213931.png)

Click "Next".

![](https://cdn.genauth.ai/blog/20201109213415.png)

Accept the license agreement and click "Next".

![](https://cdn.genauth.ai/blog/20201109213443.png)

Select the software installation directory and click "Install".

![](https://cdn.genauth.ai/blog/20201109213500.png)

Wait for the installation to complete.

![](https://cdn.genauth.ai/blog/20201109213517.png)

Click "Finish" and a command line window will pop up, waiting for the installation to complete.

![](https://cdn.genauth.ai/docs/20200414214751.png)

An error message about missing optional dependencies may appear during the process, which can be ignored. If you see the following interface, it means the installation is successful. You can press any key to exit:

![](https://cdn.genauth.ai/docs/20200414214912.png)

After that, you can see the AuthingADConnector service on the Windows service management page:

![](https://cdn.genauth.ai/blog/20201109214605.png)

Next, open the browser and visit http://127.0.0.1:9743, and you will see the following interface:

![](https://cdn.genauth.ai/docs/eirog1.png)

Fill in your Provisioning Ticket Url, AD server link address (please fill in **http://ws.genauth.ai:8855**), Base DN, domain user name, password, and then click the "**Save**" button.

![](https://cdn.genauth.ai/docs/serths2.png)
After that, click "Test Connection" and the following result will appear, indicating that the connection is normal:

![](https://cdn.genauth.ai/docs/20200414220049.png)

::: hint-info
If you encounter a problem that the connection test between Connector and {{$localeConfig.brandName}} fails, please wait for a while. It may be due to network delay that the handshake between Connector and {{$localeConfig.brandName}} has not been completed.
:::

::: hint-info
If you encounter an AD-related error, please check whether the AD server link and account and password information are correct.
:::
