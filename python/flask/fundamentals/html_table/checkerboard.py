from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def boxes1():
    return render_template('index.html', x = 4, y = 4)

@app.route('/4')
def four_rows():
    return render_template('index.html', x = 4, y = 2)

@app.route('/<x>')
def just_x(x):
    return render_template('index.html', x = int(int(x) / 2), y = 4)

@app.route('/<x>/<y>')
def x_and_y(x, y):
    return render_template('index.html', x = int(int(x) / 2), y = int(int(y) / 2))

if __name__ == '__main__':
    app.run(debug=True)