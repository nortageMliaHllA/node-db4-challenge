const db = require('./data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients')
        .innerJoin('recipes', 'recipe_ingredients.recipe_id', 'recipes.id') 
        .innerJoin('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
        .select('recipes.recipe_name', 'ingredients.ingredient_name', 'recipe_ingredients.quantity', 'recipe_ingredients.measurement')
        .where({'recipes.id': id})
};

function getInstructions(id) {
    
    return db('steps')
        .where({'recipes_id': id})
};