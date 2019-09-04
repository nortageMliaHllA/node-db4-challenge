
exports.seed = function(knex) {
      return knex('recipe_ingredients').insert([
        {recipe_id: 1,  ingredient_id: 1, quantity: 3, measurement: 'ounces'},
        {recipe_id: 2,  ingredient_id: 1, quantity: 6, measurement: 'cups'},
        {recipe_id: 3,  ingredient_id: 2, quantity: 1, measurement: 'cups'}
      ]);
};
