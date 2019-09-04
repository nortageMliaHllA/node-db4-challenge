
exports.seed = function(knex) {
      return knex('instructions').insert([
        { 
          step_number: 1, 
          recipe_id: 1,
          instructions: 'Preheat oven to 400 degrees.',
        },

        { 
          step_number: 2,
          recipe_id: 1, 
          ingredient_name: 3,
          instructions: 'Add ingredients to bowl, and mix until all ingredients are combined'
        },

        {
          step_number: 3,
          recipe_id: 1, 
          instructions: 'Bake in oven for one hour, do not open oven!'
        },

        { 
          step_number: 1, 
          recipe_id: 2,
          instructions: 'Preheat oven to 325 degrees.',
        },

        { 
          step_number: 2,
          recipe_id: 2, 
          instructions: 'Add ingredients to bowl, and mix until all ingredients are combined'
        },

        {
          step_number: 3,
          recipe_id: 2, 
          instructions: 'Use small tablespoon to measure size of each cookie, roll into a boll then place evenly on nonstick sheet pan.'
        },

        {
          step_number: 4,
          recipe_id: 2, 
          instructions: 'Bake in oven for thirty minutes, then let cool on cooling rack 10 mins before serving.'
        },

        { 
          step_number: 1, 
          recipe_id: 3,
          instructions: 'Preheat oven to 375 degrees.',
        },

        { 
          step_number: 1,
          recipe_id: 3, 
          instructions: 'Add ingredients to bowl, and mix until all ingredients are combined(*Hint: Make sure you peel skin off apples before slicing)'
        },

        {
          step_number: 2,
          recipe_id: 3, 
          instructions: 'Grease baking dish before adding mixture. Bake in oven for one hour, do not open oven!'
        },
    ]);
};
