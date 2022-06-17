<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page isErrorPage="true" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
	<h1>Welcome</h1>
	
	<h4>Join our growing community.</h4>
	<div>
	<form:form action="/register" method="post" modelAttribute="userRegister">
		<form:input placeholder="User name" path="userName"></form:input>
		<form:errors path="userName"></form:errors>
		<form:input placeholder="Email" path="email"></form:input>
		<form:errors path="email"></form:errors>
		<form:input placeholder="Password" path="password"></form:input>
		<form:errors path="password"></form:errors>
		<form:input placeholder="Password Confirmation" path="confirm"></form:input>
		<form:errors path="confirm"></form:errors>
		
		<input type="submit" value="Register" />
	</form:form>
	</div>
	<div>
	<form:form action="/login" method="post" modelAttribute="userLogin">
		<form:input placeholder="Email" path="email"></form:input>
		<form:errors path="email"></form:errors>
		<form:input type="password" placeholder="Password" path="password"></form:input>
		<form:errors path="password"></form:errors>
		
		<input type="submit" value="Login" />
	</form:form>
	</div>
</body>
</html>