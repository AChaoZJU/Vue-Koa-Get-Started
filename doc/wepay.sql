/*
 Navicat Premium Data Transfer

 Source Server         : wyy
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : wepay

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 02/11/2019 15:21:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for buyer
-- ----------------------------
DROP TABLE IF EXISTS `buyer`;
CREATE TABLE `buyer` (
  `buyerId` int(11) NOT NULL,
  `buyerName` varchar(255) DEFAULT NULL,
  `buyerPassword` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(0) DEFAULT NULL,
  `bankCard` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `balance` double(255,0) DEFAULT NULL,
  `realName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`buyerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for good
-- ----------------------------
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` double(10,2) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `info` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `amount` int(255) DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `soldAmount` int(255) DEFAULT '0',
  `sellerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `sellerId` (`sellerId`),
  CONSTRAINT `sellerId` FOREIGN KEY (`sellerId`) REFERENCES `seller` (`sellerId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of good
-- ----------------------------
BEGIN;
INSERT INTO `good` VALUES (39, 'dasdsadsad', 0.00, 'http://localhost:9111/v2-86a93ff3ffb65d5b02abb4b183fa9967_hd.jpg', 'asdsadsadsa', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (40, 'g01', 0.00, 'http://localhost:9111/IMG_1218.JPG', 'zzzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (41, 'g03', 0.00, 'http://localhost:9111/v2-76dc57fa773db19a7f220fea8e65478f_hd.jpg', 'zzzzzzzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (42, 'g04', 0.00, 'http://localhost:9111/thread_207352205088017_20190828180950_s_2162796_o_w_2448_h_3264_44970.jpg', 'zzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (43, 'g05', 0.00, 'http://localhost:9111/WechatIMG342.jpeg', 'zzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (44, 'g06', 0.00, 'http://localhost:9111/WechatIMG344.jpeg', 'zzzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (46, 'g08', 0.00, 'http://localhost:9111/v2-86a93ff3ffb65d5b02abb4b183fa9967_hd.jpg', 'zzzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (47, 'g09', 0.00, 'http://localhost:9111/v2-86a93ff3ffb65d5b02abb4b183fa9967_hd.jpg', 'zzzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (48, 'g10', 0.00, 'http://localhost:9111/v2-5a62af2c18f9a6d4715283857e3b7b58_hd.jpg', 'zzzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (49, 'g11', 0.00, 'http://localhost:9111/2dccc409e04d0c8f0fc3cb84f69894b7.jpg', 'zzzzzz', 0, NULL, 0, NULL);
INSERT INTO `good` VALUES (51, 'g12', 0.00, 'http://localhost:9111/v2-8d86d8d030dd2453fbc42a555338a9f2_hd.jpg', 'This is a description', 0, NULL, 0, NULL);
COMMIT;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `buyerId` int(11) DEFAULT NULL,
  `goodId` int(11) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `unitPrice` decimal(10,2) DEFAULT NULL,
  `orderStatus` varchar(255) DEFAULT NULL,
  `orderTime` datetime DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `buyerId` (`buyerId`),
  KEY `goodId` (`goodId`),
  CONSTRAINT `buyerId` FOREIGN KEY (`buyerId`) REFERENCES `buyer` (`buyerId`),
  CONSTRAINT `goodId` FOREIGN KEY (`goodId`) REFERENCES `good` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for seller
-- ----------------------------
DROP TABLE IF EXISTS `seller`;
CREATE TABLE `seller` (
  `sellerId` int(11) NOT NULL,
  `sellerName` varchar(255) DEFAULT NULL,
  `sellerPassword` varchar(255) DEFAULT NULL,
  `balance` int(255) DEFAULT NULL,
  `bankCard` varchar(255) DEFAULT NULL,
  `realName` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(0) DEFAULT NULL,
  `sellerImgUrl` varchar(255) DEFAULT NULL,
  `bankName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sellerId`),
  KEY `sellerId` (`sellerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seller
-- ----------------------------
BEGIN;
INSERT INTO `seller` VALUES (1, NULL, '$2a$10$x3f0Y2SNAmyAfqhKVAV.7uE7RHs3FDGuSYw.LlZhOFoyK7cjfZ.Q6', NULL, NULL, NULL, NULL, NULL, NULL, 'admin@qq.com');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
