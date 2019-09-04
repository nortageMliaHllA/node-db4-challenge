
exports.up = function(knex) {
  return (knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('recipe_name', 128)
        .notNullable()
        .unique()
    })
    .createTable('instructions', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .notNullable()
      tbl.string('instruction', 225)
          .notNullable()

      tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE')
  })

    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name', 128)
      .notNullable()
      .unique()
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments()
      tbl.float('quantity')
      tbl.string('measurement')

      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

      tbl.integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
  )  
};

exports.down = function(knex) {
  return (knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  )
};