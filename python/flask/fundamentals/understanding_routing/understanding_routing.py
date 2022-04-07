from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/say/<name>')
def say_hi(name):
    if isinstance(name, str):
        return f'Hi, {name}'
    else:
        return 'Please enter a string'

@app.route('/say/<number>/<word>')
def say_words_x_times(number, word):
    return word * int(number)

@app.errorhandler(404)
def error(error):
    return 'Sorry! No response. Try again.'


if __name__ == '__main__':

    app.run(debug=True)