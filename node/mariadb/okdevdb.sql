-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.1.20-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- okdevdb 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `okdevdb`;
CREATE DATABASE IF NOT EXISTS `okdevdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `okdevdb`;

-- 테이블 okdevdb.article 구조 내보내기
DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `seq` int(11) NOT NULL AUTO_INCREMENT,
  `user_seq` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `content` text NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 테이블 데이터 okdevdb.article:~3 rows (대략적) 내보내기
DELETE FROM `article`;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` (`seq`, `user_seq`, `title`, `content`, `created`) VALUES
	(1, 2, '처음 글', '내용입니다.', '2017-01-26 00:14:24'),
	(2, 2, 'Node.js', 'JavaScript Platform', '2017-01-26 00:14:58'),
	(3, 3, '마리아DB', '마이SQL과 똑같은 API', '2017-01-27 16:48:42');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

-- 테이블 okdevdb.user 구조 내보내기
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `seq` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`seq`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 테이블 데이터 okdevdb.user:~2 rows (대략적) 내보내기
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`seq`, `name`, `email`, `passwd`, `image`) VALUES
	(2, 'kenu1', 'kenu1@gmail.com', 'okpassokpass', NULL),
	(3, 'kenu2', 'kenu2@gmail.com', 'okpassokpass', NULL),
	(4, 'kenu', 'kenu.heo@gmail.com', 'okpassokpass', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
