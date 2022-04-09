from flask import Flask, render_template, redirect, session

app = Flask(__name__)
app.secret_key = 'lr432jhb3254ljhb432dsfkjn'

@app.route('/')
def index():
    if 'counter' in session:
        print('counter exists')
        session['counter'] += 1
    else:
        print('key "counter" does NOT exist')
        session['counter'] = 0
    return render_template('index.html', counter = session['counter'])

@app.route('/two_times', methods=['POST'])
def two():
    session['counter'] += 1
    return redirect('/')

@app.route('/destroy_session', methods=['POST'])
def clear():
    session.clear()
    return redirect('/')


if __name__=='__main__':
    app.run(debug=True)