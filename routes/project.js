const router = require('express').Router();
const Project = require('../db/models/projects');
const Category = require('../db/models/categories');
// GET /project
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

// GET /project/categories/:category
//projects by Category
router.get('/categories/:category', async (req, res, next) => {
  try {
    const projectsByCategory = await Project.findAll({
      where: {
        category: req.params.category,
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
