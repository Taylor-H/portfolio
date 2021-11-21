'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');
const Category = require('./categories');

const Project = db.define(
  'Project', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      isUnique: true,
    },
    short_description: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    github: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'https://github.com/Taylor-H',
      validate: {
        isUrl: true,
      }
    },
    deployed_url: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'https://www.htmlartist.net/projects/:id',
      validate: {
        isUrl: true,
      }
    }

  });

  Project.findByCategory = function (categoryId) {
    return Project.findAll({
      where: {
        category: categoryId,
      },
    });
  };

  Project.belongsTo(Category);
  Category.hasMany(Project);

  module.exports = Project;



// Student = Category
// Test = Project
