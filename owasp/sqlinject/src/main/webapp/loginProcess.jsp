<%@page import="java.sql.Statement"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="door.JDBConnect"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>로그인 처리</title>
</head>
<body>
<%
String username = request.getParameter("username");
String password = request.getParameter("password");
%>
username: <%= username %>
<br>
password: <%= password %>
<hr>
<%
JDBConnect jdbc = new JDBConnect();
String sql = "SELECT * FROM MEMBER WHERE id = '" + username + "' AND pass='" + password + "'";
out.println(String.format("<b><code>%s </code></b>", sql));
Statement stmt = jdbc.con.createStatement();
ResultSet rs = stmt.executeQuery(sql);

boolean isLogin = false;
while(rs.next()) {
	String id = rs.getString("id");
	String pass = rs.getString(3);
	String name = rs.getString(4);
	java.sql.Date regidate = rs.getDate("regidate");

	out.println(String.format("%s %s %s %s", id, pass, name, regidate) + "<br>");
	isLogin = true;
	session.setAttribute("id", id);
}
if (!isLogin) {
	session.removeAttribute("id");
}
%>
<hr>
<%= isLogin %>
<a href="./login.jsp"> 로그인 </a>
</body>
</html>
