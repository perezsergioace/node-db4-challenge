const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch(error => {
            res.status(500).json({error: "Failed to get recipes (500)"})
        })
})

router.get("/:id/shoppinglist", (req, res) => {
    Recipes.getShoppingList(req.params.id).then(result => {
      if (result) {
          res.status(200).json(result);
      } else{
          res.status(404).json({ error: "could not find shopping list with specified id" });
      } 
    })
    .catch(error => {
        res.status(500).json({error: "Error retrieving data(500)"})
    })
});


router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(result => {
            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).json({error: "could not find instructions with specified id"})
            }
        })
        .catch(error => {
            res.status(500).json({error: "Error retrieving data(500)"})
        })
})

module.exports = router;