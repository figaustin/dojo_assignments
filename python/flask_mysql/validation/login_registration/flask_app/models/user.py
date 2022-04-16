from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, redirect
import re
from flask_app import app
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)



EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class User:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.password = data['password']
        self.email = data['email']

    @staticmethod
    def validate_register(form_data):
        is_valid = True
        if len(form_data['first_name']) < 1:
            flash('First name must be present!')
            is_valid = False

        if len(form_data['last_name']) < 1:
            flash('Last name must be present!')
            is_valid = False

        if len(form_data['email']) < 1:
            flash('Email must be present!')
            is_valid = False
        elif not EMAIL_REGEX.match(form_data['email']):
            flash('Please enter a valid email')
            is_valid = False

        if len(form_data['password']) < 8:
            flash('Password must be at least 8 characters long!')
            is_valid = False

        if form_data['password'] != form_data['password_confirm']:
            flash('Password and password confirmation must match!')
            is_valid = False

        return is_valid

    @classmethod
    def register(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        
        results = connectToMySQL('login_schema').query_db(query, data)
    
        return results

    @staticmethod
    def validate_login(form_data):
        is_valid = True
        user_in_db = User.get_by_email(form_data)
        
        if not user_in_db:
            flash('Invalid Email/Password')
            is_valid = False

        elif not bcrypt.check_password_hash(user_in_db.password, form_data['password']):
            flash('Invalid Email/Password')
            is_valid = False
        return is_valid
    
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL('login_schema').query_db(query, data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def get_user_by_id(cls, data):
        
        query = 'SELECT * FROM users WHERE id = %(user_id)s;'

        result = connectToMySQL('login_schema').query_db(query, data)

        if len(result) < 1:
            return False
        return cls(result[0])