from flask_app import app
from flask import render_template,redirect,request, session
from flask_app.models.recipe import Recipe
from flask_app.models.user import User


@app.route('/recipes/new')
def define_new_recipe():
    if 'user_id' not in session:
        flash('You need to login or register!')
        return redirect('/')

    return render_template('new_recipe.html')

@app.route('/create_recipe', methods=["POST"])
def create_recipe():

    if not Recipe.validate_create(request.form):
        return redirect('/recipes/new')
    
    query_data ={
        'name' : request.form['name'],
        'description' : request.form['description'],
        'instructions' : request.form['instructions'],
        'under_thirty_minutes' : request.form['under_thirty_minutes'],
        'user_id' : session['user_id']
    }
    Recipe.create_recipe(query_data)
    return redirect('/dashboard')

@app.route('/recipes/<int:recipe_id>')
def show_info(recipe_id):

    query_data={
        'recipe_id' : recipe_id
    }
    user_data = {
        'user_id' : session['user_id']
    }
    user = User.get_user_by_id(user_data)
    recipe = Recipe.get_recipe_by_id(query_data)

    return render_template('recipe.html', recipe = recipe, user = user)

@app.route('/recipes/edit/<int:recipe_id>')
def recipe_editor(recipe_id):

    if 'user_id' not in session:
        flash('You need to login or register!')
        return redirect('/')
        
    query_data={
        'recipe_id' : recipe_id
    }
    recipe = Recipe.get_recipe_by_id(query_data)
    return render_template('edit_recipe.html', recipe = recipe)

@app.route('/recipes/update/<int:recipe_id>', methods=['POST'])
def edit_recipe(recipe_id):
    updated_info = {
        'name' : request.form['name'],
        'description' : request.form['description'],
        'instructions' : request.form['instructions'],
        'under_thirty_minutes' : request.form['under_thirty_minutes'],
        'recipe_id' : recipe_id
    }

    Recipe.update_recipe(updated_info)
    return redirect('/dashboard')

@app.route('/recipes/delete/<int:recipe_id>')
def delete_recipe(recipe_id):

    query_data = {
        'recipe_id' : recipe_id
    }

    Recipe.delete_recipe(query_data)
    return redirect('/dashboard')