const router = require('express').Router();
const Project = require('../db/models/projects');
const Category = require('../db/models/categories');

// GET /categories/:categoryId
router.get('/:id', async (req, res, next) => {
  try {
    const category = await Category.findByPk(
      req.params.categoryId);
     if(!category) return res.sendStatus(404);
     res.json(category);
  } catch (error) {
    next(error);
  }
});

// GET /categories/
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: Category,
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});
// GET /category/subjects/:subject


module.exports = router;
// Student = Category
// Test = Project
