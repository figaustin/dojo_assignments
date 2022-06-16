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
	<h1>Edit Expense</h1>
	<a href="/expense">go back</a>
	<form:form action="" method="post" modelAttribute="expense">
		<form:input placeholder="Expense Name" path="name"></form:input>
		<form:errors path="name" class="col_red"></form:errors>
		<form:input placeholder="Vendor" path="vendor"></form:input>
		<form:errors path="vendor" class="col_red"></form:errors>
		<form:input placeholder="Amount" type="number" step="0.01" path="amount"></form:input>
		<form:errors path="amount" class="col_red"></form:errors>
		<form:input placeholder="Description" path="description"></form:input>
		<form:errors path="description" class="col_red"></form:errors>
		<input type="submit" value="Submit" />
	</form:form>
</body>
</html>