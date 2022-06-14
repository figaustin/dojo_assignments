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
	<h1>Send an omikuji!</h1>
	
	<div>
		<form action="/submit" method="post">
			<div>
				<label for="numba">Pick any number from 5 to 25</label>
				<input type="number" name="numba">
			</div>
			<div>
			<label for="city">Enter the name of any city.</label>
				<input type="text" name="city" >
			</div>
			<div>
			<label for="name">Enter the name of any real person.</label>
				<input type="text" name="name">
			</div>
			<div>
			<label for="hobby">Enter professional endeavor or hobby:</label>
				<input type="text" name="hobby">
			</div>
			<div>
				<label for="living-thing">Enter any type of living thing.</label>
				<input type="text" name="living-thing">
			</div>
			<div>
				<label for="nice">Say something nice to someone:</label>
				<textarea name="nice"></textarea>
			</div>
			<p>Send and show a friend</p>
			<input type="submit" value="Send">
		</form>
	</div>
</body>
</html>