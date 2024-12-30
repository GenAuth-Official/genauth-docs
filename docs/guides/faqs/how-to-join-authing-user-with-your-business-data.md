# Join your business data with the {{$localeConfig.brandName}} user

<LastUpdated/>

If you use {{$localeConfig.brandName}} , your user data will be securely stored in the {{$localeConfig.brandName}} cloud database, and you do not need to save an additional copy of the user data. You need to join your business data with the {{$localeConfig.brandName}} user locally, and associate the user ID with the business data.

For example, your business system has an order table (orders), and its table structure is as follows:

```sql
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_no` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Order number',
  `order_sn` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Transaction number',
  `supplier_id` int(11) NOT NULL COMMENT 'Merchant code',
  `supplier_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Merchant name',
  `order_status` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'Order status 0 unpaid, 1 paid, 2 shipped, 3 signed, -1 return application, -2 returning, -3 returned, -4 transaction cancelled',
  `after_status` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'User after-sales status 0 not initiated after-sales 1 applied for after-sales -1 after-sales cancelled 2 in progress 200 completed',
  `product_count` int(11) NOT NULL DEFAULT '0' COMMENT 'Quantity of goods',
  `product_amount_total` decimal(12,4) NOT NULL COMMENT 'Total price of goods',
  `order_amount_total` decimal(12,4) NOT NULL DEFAULT '0.0000' COMMENT 'Actual payment amount',
  `logistics_fee` decimal(12,4) NOT NULL COMMENT 'Freight amount',
  `address_id` int(11) NOT NULL COMMENT 'Delivery address code',
  `pay_channel` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'Payment channel 0 Balance 1 WeChat 2 Alipay',
  `out_trade_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Order payment number',
  `escrow_trade_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Third-party payment serial number',
  `pay_time` int(11) NOT NULL DEFAULT '0' COMMENT 'Payment time',
  `delivery_time` int(11) NOT NULL DEFAULT '0' COMMENT 'Delivery time',
  `order_settlement_status` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'Order settlement status 0 Unsettled 1 Settled',
  `order_settlement_time` int(11) NOT NULL DEFAULT '0' COMMENT 'Order settlement time',
  `is_package` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT 'Is it a package?',
  `is_integral` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT 'Is it an integral product?',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_order_sn_unique` (`order_sn`),
  KEY `order_order_sn_order_status_out_trade_no_index` (`order_sn`,`order_status`,`out_trade_no`(191))
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

You can create a field `owner_id` to represent the ID of the order owner:

- Data type is varchar(32);
- The value it stores should be the ID of the user {{$localeConfig.brandName}};

```sql
ALTER TABLE orders ADD COLUMN `owner_id` varchar(32) NOT NULL COMMENT 'Order owner user ID',
```

If you need to query all orders of a certain user, you can use the following `SQL` statement:

```sql
SELECT * FROM orders WHERE owner_id = '6035120c3xxxxxe890e080db'
```