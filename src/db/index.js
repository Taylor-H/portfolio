const db = require('./db');
const Category = require('./Category');
const Project = require('./Project');

Project.belongsTo(Category);
Category.hasMany(Project);

module.exports = {
  db,
  Category,
  Project
};
