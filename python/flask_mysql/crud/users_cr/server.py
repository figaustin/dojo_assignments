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
    
if __name__ == '__main__':
    app.run(debug=True)
