
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Banana Smoothie', instructions: 'take your bananas and milk and blend them in a blender.'},
        {name: 'Cereal', instructions: 'take your milk and cheerios and pour them in a bowl.'},
        {name: 'Egg Sandwhich', instructions: 'take your eggs and put them inbetween your slices of bread.'},
      ]);
    });
};
