---
meta:
  - name: description
    content: Configure SMS service
---

# Configure SMS service

<LastUpdated/>

SMS verification allows users to log in using a one-time password sent to their mobile phone via SMS. {{$localeConfig.brandName}} **By default, the SMS service provided by the platform is used**. We also support custom configuration of **BlueCloud SMS service**, **Alibaba Cloud SMS service** and **Tencent Cloud SMS service**.

## Domestic SMS service

### Use default SMS service

- The default SMS service template is: verification code {S1}, which is valid for {S2} minutes. Please do not disclose it to others.
- The verification code is valid for 5 minutes.
- The SMS interface QPS is 100.
- It is recommended to use [Small login](https://www.genauth.ai/verify/) to obtain a mobile phone number for free on the web.

### Configure custom SMS service providers

We currently support the following SMS service providers:

- Alibaba Cloud SMS Service
- Chuanglan 253 SMS Service
- Tencent Cloud SMS Service

<StackSelector snippet="config-sms-provider" selectLabel="Select SMS service provider" :order="['aliyun', '253', 'tencent']"/>

## International SMS Service

International SMS service mainly supports SMS verification of overseas mobile phone numbers.

### Configure custom international SMS service providers

We currently support the following international SMS service providers:

- Alibaba Cloud
- Alibaba Cloud International

<StackSelector snippet="config-int-sms-provider" selectLabel="Select international SMS service provider" :order="['aliyun', 'aliyunInt']"/>
