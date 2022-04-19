from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL


class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.under_thirty_minutes = data['under_thirty_minutes']
        self.description = data['description']
        self.instructions = data['instructions']
        self.created_at = data['created_at']
        self.user_id = data['user_id']

    @classmethod
    def create_recipe(cls, data):
        query = 'INSERT INTO recipes (name, description, instructions, under_thirty_minutes, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(under_thirty_minutes)s, %(user_id)s);'

        result = connectToMySQL('recipes_schema').query_db(query, data)

        return result

    @classmethod
    def get_all_recipes(cls):
        query = 'SELECT * FROM recipes'

        results = connectToMySQL('recipes_schema').query_db(query)

        recipes = []

        for item in results:
            recipes.append(item)
        return recipes

    @staticmethod
    def validate_create(form_data):
        is_valid = True

        if len(form_data['name']) < 3:
            flash('Name must be at least 3 characters long!')
            is_valid = False
        if len(form_data['description']) < 3:
            flash('Description must be at leaset 3 characters long!')
            is_valid = False
        if len(form_data['instructions']) < 3:
            flash('Instructions must be at least 3 characters long!')
            is_valid = False
        
        return is_valid

    @classmethod
    def get_recipe_by_id(cls, data):
        query = 'SELECT * FROM recipes WHERE id = %(recipe_id)s'

        result = connectToMySQL('recipes_schema').query_db(query, data)

        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def delete_recipe(cls, data):
        query = 'DELETE FROM recipes WHERE id = %(recipe_id)s;'

        connectToMySQL('recipes_schema').query_db(query, data)

    @classmethod
    def update_recipe(cls, data):
        query = 'UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, under_thirty_minutes = %(under_thirty_minutes)s WHERE id = %(recipe_id)s;'

        result = connectToMySQL('recipes_schema').query_db(query, data)

        return result
