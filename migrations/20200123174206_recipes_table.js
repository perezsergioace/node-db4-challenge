
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();

        tbl.string("name", 128)
            .notNullable()
            .index();

        tbl.string("instructions", 255)
            .notNullable()
            .index();
    })

    .createTable("ingredients", tbl => {
        tbl.increments();

        tbl.string("name", 128)
            .notNullable()
            .index();
    })

    .createTable("recipe_ingredients", tbl => {
        tbl.increments();

        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE"); 

        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE"); 

        tbl.integer("quantity")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
};
