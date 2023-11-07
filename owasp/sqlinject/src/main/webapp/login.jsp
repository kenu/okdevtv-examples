<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>로그인</title>
    <link rel="stylesheet" href="login.css">
</head>
<%
String id = (String)session.getAttribute("id");
if (id == null) {
	id = "";
}
%>
<body>
    <div class="login-container">
        <h2>환영합니다 <%= id %></h2>
        <form action="loginProcess.jsp" method="post">
            <div class="form-group">
                <label for="username">사용자 이름:</label>
                <input type="text" id="username" name="username" placeholder="사용자 이름" required>
            </div>
            <div class="form-group">
                <label for="password">비밀번호:</label>
                <input type="password" id="password" name="password" placeholder="비밀번호" required>
            </div>
            <div class="form-group">
                <button type="submit">로그인</button>
            </div>
        </form>
    </div>
</body>
</html>
