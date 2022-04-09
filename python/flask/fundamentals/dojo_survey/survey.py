from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = '321eyugbv4e32kjhba9fre08g76'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    
    session['user'] = request.form['user_name']
    session['location'] = request.form['location']
    session['fav_lang'] = request.form['fav_lang']
    session['comments'] = request.form['comments']
    session['ninja'] = request.form['ninja']
    return redirect('/result')

@app.route('/result')
def result():
    print(session['user'])
    print(session['location'])

    return render_template('result.html', user_name = session['user'], location = session['location'], fav_lang = session['fav_lang'], comments = session['comments'], ninja = session['ninja'])

if __name__ == '__main__':
    app.run(debug=True)