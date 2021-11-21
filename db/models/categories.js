'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');


const Category = db.define(
  'category',
  {
    catName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    displayName: {
      type: Sequelize.STRING,
    }
  }
)
module.exports = Category;

// Student = Category
// Test = Project
