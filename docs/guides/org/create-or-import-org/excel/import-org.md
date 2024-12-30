On the console organization management page, click the **Import Organization** - **Import from Excel** button in the upper right corner:

![](~@imagesZhCn/guides/org/import-from-excel.jpg)

Click to download the Excel template. The Excel template structure is as follows:

![](~@imagesZhCn/guides/org/excel-template.jpg)

The fields are explained as follows:

- Nickname: User nickname, can be empty, does not have to be unique;
- Username: User username, can be empty, must be unique;
- Email: User email, can be empty, and must fill in one of the mobile phone number, must be unique;
- Email verification: Whether the user's email has been verified, fill in "Yes" or "No";
- Mobile phone number: User's mobile phone number, can be empty, and must fill in one of the email, must be unique;
- Unionid: User unionid, can be empty, must be unique;
- Openid: User openid, can be empty, must be unique;
- Password: Password in plain text format;
- Company: Company name, optional;
- Gender: U for unknown, M for "male", W for "female";
- Disabled: Enter "Yes" or "No";
- **Department**: **Must be sorted in descending order of department, separated by '/', the first part will be used as the root node**, such as `Feifan Technology/R&D/Backend`.

After modifying the template, upload it.