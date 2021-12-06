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
//projects by category
// GET /project/category/:categoryId
router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const projectsByCategory = await Project.byCategory(req.params.categoryId);
    console.log('projectsByCategory', req.params);
    res.json(projectsByCategory);
  } catch (error) {
    next(error);
  }
});
//project by id
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
