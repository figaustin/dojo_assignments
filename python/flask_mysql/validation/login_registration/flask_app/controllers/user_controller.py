from flask_app import app
from flask import flash, render_template, redirect, request, session
from flask_app.models.user import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_registration', methods=['POST'])
def register():

    if not User.validate_register(request.form):
        return redirect('/')

    password_hash = bcrypt.generate_password_hash(request.form['password'])

    query_data = {
        'first_name' : request.form['first_name'],
        'last_name' : request.form['last_name'],
        'email' : request.form['email'],
        'password' : password_hash
    }

    new_user = User.register(query_data)

    session['user_id'] = new_user

    return redirect('/dashboard')

@app.route('/login', methods=['POST'])
def login():
    
    if not User.validate_login(request.form):
        return redirect('/')

    logged_in_user = User.get_by_email(request.form)
    session['user_id'] = logged_in_user['id']

    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():

    if 'user_id' not in session:
        flash('You need to login or register!')
        return redirect('/')

    query_data = {
        'user_id': session['user_id']
    }

    user = User.get_user_by_id(query_data)

    return render_template('dashboard.html', user = user)

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')
    
