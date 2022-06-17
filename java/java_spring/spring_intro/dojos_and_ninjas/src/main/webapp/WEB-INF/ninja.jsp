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
	<h1>New Ninja</h1>
	
	<form:form action="/ninja/new" method="post" modelAttribute="ninja">
		
		<form:select path="dojo">
			<c:forEach var="dojo" items="${dojos }">
				<form:option value="${dojo.id }">${dojo.name }</form:option> 
			</c:forEach>
		</form:select>
		<form:input path="firstName" placeholder="First Name"></form:input>
		<form:errors path="firstName"></form:errors> 
		<form:input path="lastName" placeholder="Last Name"></form:input>
		<form:errors path="lastName"></form:errors> 
		<form:input path="age" placeholder="Age"></form:input>
		<form:errors path="age"></form:errors> 
		<input value="Create" type="submit" />
	</form:form>
</body>
</html>