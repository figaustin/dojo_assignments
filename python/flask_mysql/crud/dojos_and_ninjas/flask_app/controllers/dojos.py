from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo import Dojo


@app.route('/dojos')
def show_dojos():
    all_dojos = Dojo.get_all_dojos()

    return render_template('dojos.html', all_dojos = all_dojos)

@app.route('/dojos/create', methods = ["POST"])
def dojo_create():
    print(request.form)
    Dojo.create_dojo(request.form)
    return redirect('/dojos')

@app.route('/dojos/<int:dojo_id>')
def show_dojos_ninjas(dojo_id):
    query_data = {
        'dojo_id': dojo_id
    }
    dojo = Dojo.get_dojo_with_ninjas(query_data)
    print(dojo)
    return render_template('dojosninjas.html', dojo = dojo)

