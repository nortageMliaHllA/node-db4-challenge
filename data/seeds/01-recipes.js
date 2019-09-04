
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Retirement Cakes'},
        {recipe_name: 'Famous Holiday cookies'},
        {recipe_name: 'Granny Famous Apple Pies'}
      ]);
    });
};
