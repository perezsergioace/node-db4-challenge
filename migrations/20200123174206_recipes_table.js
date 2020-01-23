
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

    .createTable("ingridients", tbl => {
        tbl.increments();

        tbl.string("name", 128)
            .notNullable()
            .index();
    })

    .createTable("recipe_ingridients", tbl => {
        tbl.increments();

        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE"); 

        tbl.integer("ingridient_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("ingridients")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE"); 

        tbl.integer("quantity")
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingridients")
        .dropTableIfExists("ingridients")
        .dropTableIfExists("recipes")
};
