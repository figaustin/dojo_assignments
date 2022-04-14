from flask import Flask, render_template, request, redirect

from user import User
app = Flask(__name__)

@app.route('/users')
def show_all_users():
    all_users = User.get_all()

    return render_template('users.html', all_users = all_users)

@app.route('/users/new')
def new_user():
    return render_template('newusers.html')

@app.route('/process', methods=['POST'])
def process():
    print(request.form)
    User.create_user(request.form)
    return redirect('/users')

@app.route('/users/<int:user_id>/delete')
def delete_user(user_id):
    
    User.delete_user({'user_id': user_id})
    return redirect('/users')
    
@app.route('/users/<int:user_id>')
def show_user(user_id):
    user = User.get_user({'user_id': user_id})
    return render_template('user_page.html', user = user)

@app.route('/users/<int:user_id>/edit')
def edit_user(user_id):
    user = User.get_user({'user_id': user_id})
    return render_template('edituser.html', user = user)

@app.route('/users/<int:user_id>/update', methods=['POST'])
def update_user(user_id):
    updated_info = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'user_id': user_id
    }
    User.update_user(updated_info)
    return show_user(user_id)

if __name__ == '__main__':
    app.run(debug=True)
