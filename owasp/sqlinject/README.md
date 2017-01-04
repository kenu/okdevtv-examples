# SQL Injection example
* input id with `' or 1=1 -- `

## fix
- change `loginProcess.jsp` with this code

```java
JDBConnect jdbc = new JDBConnect();
String sql = "SELECT * FROM MEMBER WHERE id = ? AND pass = ?";
PreparedStatement pstmt = jdbc.con.prepareStatement(sql);
pstmt.setString(1, username);
pstmt.setString(2, password);
ResultSet rs = pstmt.executeQuery();

```

## DB
* MariaDB
```sql
drop table member;

CREATE TABLE `member` (
  `seq` int(11) NOT NULL auto_increment primary key,
  `id` varchar(10) NOT NULL COMMENT 'id',
  `pass` varchar(10) NOT NULL COMMENT 'password',
  `name` varchar(30) NOT NULL COMMENT 'name',
  `regidate` datetime NOT NULL COMMENT 'registration date'
);

INSERT INTO `member` (seq, id, pass, name, regidate)
VALUES(1, 'okky', '1234', '오키', current_timestamp), 
(2, 'okdevtv', '1234', '티비', current_timestamp), 
(3, 'kenu', '1234', '케누', current_timestamp),
(4, 'hello', '1111', '헬로우', current_timestamp);

select * from member;
```
