const express = require('express');
const router = express.Router();

const Recipes = require('../model-recipe.js');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes' });
  }
});

router.get('/:id/shoppinglist', async (req, res) => {

  const { id } = req.params;

  try {
    const shoppinglist = await Recipes.getShoppingList(id);
    res.json(shoppinglist);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get shoppinglist' });
  }
})

router.get('/:id/instructions', async (req, res) => {

  const { id } = req.params;

  try {
    const instructions = await Recipes.getInstructions(id);
    res.json(instructions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get instructions' });
  }
})

module.exports = router;