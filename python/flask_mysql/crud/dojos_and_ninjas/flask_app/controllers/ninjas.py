from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo



@app.route('/ninjas')
def new_ninja():
    dojos = Dojo.get_all_dojos()
    return render_template('newninja.html', dojos = dojos)

@app.route('/process_new_ninja', methods=['POST'])
def process_new_ninja():
    print(request.form)
    Ninja.create_ninja(request.form)
    id = request.form['dojo_id']
    return redirect(f'/dojos/{id}')