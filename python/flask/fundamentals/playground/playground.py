from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play')
def play1():
    return render_template('playground.html')

@app.route('/play/<number>')
def play2(number):
    return render_template('playground2.html', times = int(number))

@app.route('/play/<number>/<color>')
def play3(number, color):
    return render_template('playground3.html', number = int(number), color = color)
if __name__ == '__main__':
    app.run(debug=True)