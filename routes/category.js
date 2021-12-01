const router = require('express').Router();
const Project = require('../db/models/projects');
const Category = require('../db/models/categories');

router.get('/:categoryId', async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.categoryId);
    if(!category) return res.sendStatus(404);
    res.json(category);
  }catch (error){
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
    const updatedCategory = await category.update({
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


// router.get('/', async (req, res, next) => {
//   try {
//     const projects = await Category.findAll({
//       include: Project
//     });
//     res.json(projects);
//   } catch (error) {
//     next(error);
//   }
// });
// GET /category/:projectId
// router.get('/', async (req, res, next) => {
//   try {
//     const project = await Project.findByPk(
//       req.params.projectId);
//      if(!project) return res.sendStatus(404);
//      res.json(project);
//   } catch (error) {
//     next(error);
//   }
// });
