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
	<h1>Add a book to your shelf!</h1>
	
	<a href="/books">back to the shelves</a>
	
	<form:form action="/books/new" method="post" modelAttribute="book">
		<form:input path="title" placeholder="Title"></form:input>
		<form:errors path="title"></form:errors>
		<form:input path="author" placeholder="Author"></form:input>
		<form:errors path="Author"></form:errors>
		<form:input path="thoughts" placeholder="My Thoughts"></form:input>
		<form:errors path="thoughts"></form:errors>
		<form:hidden path="user" value="${user.id}"></form:hidden>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>