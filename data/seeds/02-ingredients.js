
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {ingredient_name: 'wheat flour'},
        {ingredient_name: 'grapeseed oil'},
        {ingredient_name: 'eggs'}
      ]);
};
