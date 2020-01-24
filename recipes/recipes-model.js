const db = require('../data/dbconfig');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db.select('*').from('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients')
        .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
        .select('*')
        .where('recipe_ingredients.recipe_id', id)
        .then(scheme => {
            if (scheme) {
                return scheme[0]
            } else {
                return null
            }
        })
}

function getInstructions(id) {
    return db('recipes')
        .select('recipes.instructions')
        .where({ id })
        .then(scheme => {
            if (scheme) {
                return scheme[0]
            } else {
                return null
            }
        })
}