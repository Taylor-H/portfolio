const router = require('express').Router();
const Category = require('../db/models/categories');
const Project = require('../db/models/projects');

// GET /project
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

// GET /project/categoryId/:categoryId
//projects by Category
router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const projectsByCategoryId = await Project.findAll({
      where: {
        category: req.params.categoryId,
      },
    });
    res.json(projectsByCategory);
  } catch (error) {
    next(error);
  }
});

// GET /project/:id
router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    res.json(project);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
// Student = Category
// Test = Project
