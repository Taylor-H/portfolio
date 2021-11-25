const router = require('express').Router();
const Project = require('../db/models/projects');
const Category = require('../db/models/categories');

// GET /category/:projectId
router.get('/:projectId', async (req, res, next) => {
  try {
    const category = await Project.findByPk(
      req.params.projectId);
     if(!category) return res.sendStatus(404);
     res.json(category);
  } catch (error) {
    next(error);
  }
});
// GET /category/
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: Project,
    });
    res.json(categories);
  } catch (error) {
    next(error);
  }
});
// POST /category/
router.post('/', async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

// PUT /category/:id
router.put('/:id', async (req, res, next) => {
  try {
    const { catName, displayName } = req.body;
    const category = await Category.findByPk(req.params.id);
    const updatedCategory = await Category.update({
      catName,
      displayName,
    });
    res.json(updatedCategory);
  } catch (error) {
    next(error);
  }
});

// DELETE /category/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      await category.destroy();
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// GET /category/subjects/:subject


module.exports = router;
// Student = Category
// Test = Project
