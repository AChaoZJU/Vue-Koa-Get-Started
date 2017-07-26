-- MySQL dump 10.13  Distrib 5.5.42, for osx10.6 (i386)
--
-- Host: 120.77.34.254    Database: wepay
-- ------------------------------------------------------
-- Server version	5.6.33-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buyer`
--
DROP Database IF EXISTS `wepay`;
CREATE Database wepay;

use wepay;

DROP TABLE IF EXISTS `buyer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `buyer` (
  `buyerId` int(11) NOT NULL AUTO_INCREMENT,
  `buyerName` varchar(50) DEFAULT NULL,
  `buyerPassword` varchar(20) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `phoneNumber` varchar(15) DEFAULT NULL,
  `bankCard` varchar(20) DEFAULT NULL,
  `address` varchar(50) NOT NULL,
  `balance` double DEFAULT '0',
  `realName` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`buyerId`),
  UNIQUE KEY `buyer_email_uindex` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyer`
--

LOCK TABLES `buyer` WRITE;
/*!40000 ALTER TABLE `buyer` DISABLE KEYS */;
INSERT INTO `buyer` VALUES (1,'小敏','1234','ssdcz','10016','12345','baita',98,'xiaoming'),(2,'小敏','123','dsaa','10016','123456','baita',1000,'xiaoming'),(3,'小敏','1234','mm','10016',NULL,'baita',1000,'xiaoming'),(5,NULL,'123','mmaa',NULL,NULL,'',0,NULL),(6,NULL,'123','kkk',NULL,'621700','',0,NULL),(7,NULL,'1243','hahah',NULL,NULL,'',0,NULL),(9,'uuu','123456','570111267@qq.com','18022333444',NULL,'Street No.21',1005.02,'Xie pi'),(10,NULL,'123456','1234567@qq.com',NULL,NULL,'',0,NULL),(13,NULL,'00000000','@p',NULL,NULL,'',0,NULL);
/*!40000 ALTER TABLE `buyer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `good`
--

DROP TABLE IF EXISTS `good`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `good` (
  `goodId` int(11) NOT NULL AUTO_INCREMENT,
  `goodName` varchar(100) NOT NULL,
  `unitPrice` double NOT NULL COMMENT '当前商品单价',
  `imgUrl` varchar(100) DEFAULT NULL,
  `goodInfo` varchar(400) DEFAULT NULL,
  `amount` int(11) NOT NULL COMMENT '商品余量',
  `goodAddress` varchar(100) DEFAULT NULL,
  `soldAmount` int(11) DEFAULT NULL COMMENT '销量\n',
  `sellerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`goodId`),
  UNIQUE KEY `good_goodName_uindex` (`goodName`),
  KEY `good_seller_sellerId_fk` (`sellerId`),
  CONSTRAINT `good_seller_sellerId_fk` FOREIGN KEY (`sellerId`) REFERENCES `seller` (`sellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `good`
--

LOCK TABLES `good` WRITE;
/*!40000 ALTER TABLE `good` DISABLE KEYS */;
INSERT INTO `good` VALUES (1,'辣条',1,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good001.jpg','好吃',100,'xxxxx',5,1),(2,'泡面',3,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good002.jpg','好吃2',1000,'xxxx',1,1),(3,'手机1',100,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good001.jpg','none',97,'xxx',2,1),(4,'手机2',100,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good002.jpg','none',100,'xxx',5,1),(5,'手机3',100,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good003.jpg','none',100,'xxx',6,1),(6,'手机4',100,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good004.jpg','none',100,'xxx',3,1),(7,'手机5',100,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good001.jpg','none',100,'xxx',1,1),(8,'手机6',100,'http://120.77.34.254/business-system/frontend/static/imgs/goodsImgs/good002.jpg','none',100,'xxx',10,1),(9,'鱼干',5,NULL,'xxx',-1,NULL,0,1);
/*!40000 ALTER TABLE `good` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `buyerId` int(11) DEFAULT NULL,
  `goodId` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `unitPrice` double DEFAULT NULL COMMENT '购物时的价格',
  `orderStatus` int(11) DEFAULT NULL COMMENT '0：未发货；\n1： 已发货但未确认收货；\n2： 确认收获（这个时候要转账）',
  `orderTime` date NOT NULL,
  PRIMARY KEY (`orderId`),
  KEY `order_buyer_buyer_id_fk` (`buyerId`),
  KEY `order_good_good_id_fk` (`goodId`),
  CONSTRAINT `order_buyer_buyer_id_fk` FOREIGN KEY (`buyerId`) REFERENCES `buyer` (`buyerId`),
  CONSTRAINT `order_good_good_id_fk` FOREIGN KEY (`goodId`) REFERENCES `good` (`goodId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,1,1,1,2,'2017-07-08'),(2,9,2,2,3,1,'2017-07-07'),(3,1,2,1,3,2,'2017-07-09'),(4,2,1,3,1,1,'2017-07-06'),(5,3,1,3,3.5,0,'0000-00-00'),(6,3,1,3,3.5,0,'2017-07-10'),(7,3,1,3,3.5,0,'2017-07-10'),(8,NULL,1,4,2.01,0,'2017-07-14'),(9,13,1,1,1,0,'2017-07-14'),(10,13,2,1,3,1,'2017-07-14'),(11,13,2,18,3,0,'2017-07-14'),(12,9,1,10,1,0,'2017-07-13'),(13,9,1,10,1,0,'2017-07-13'),(14,9,1,10,1,0,'2017-07-13'),(15,9,1,18,5.5,2,'2017-07-14'),(16,3,3,3,3.5,0,'2017-07-15');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seller` (
  `sellerId` int(11) NOT NULL AUTO_INCREMENT,
  `sellerName` varchar(50) NOT NULL,
  `sellerPassword` varchar(20) NOT NULL,
  `balance` int(11) DEFAULT '0' COMMENT '余额',
  `bankCard` varchar(20) DEFAULT NULL,
  `realName` varchar(50) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `sellerImgUrl` varchar(100) NOT NULL,
  `bankName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`sellerId`),
  UNIQUE KEY `seller_phoneNumber_uindex` (`phoneNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (1,'xiaohong','123456',1005,'123321','xiaohonga','123456','xxx',NULL),(2,'小明','123',NULL,NULL,'xiaoming','123','',NULL),(3,'ss','ss',0,NULL,'ss','ss','',NULL),(4,'ssss','ss',0,NULL,'ss','ssss','',NULL),(5,'s','sss',0,NULL,'zzz','001','',NULL),(7,'zzz','123456',0,NULL,'zzz','002','',NULL),(10,'zz','ss',0,NULL,'ss','ssz','',NULL),(11,'zzzz','s',0,NULL,'zz','003','',NULL),(12,'ss','ss',0,NULL,'ss','004','',NULL),(13,'323','ss',0,NULL,'223','005','',NULL);
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-15 10:57:29
