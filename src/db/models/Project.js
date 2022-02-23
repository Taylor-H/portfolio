const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('./db');


const Project = db.define(
  'project', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      isUnique: true,
    },
    short_description: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },

  }
  );


  Project.byCategory = function (categoryId) {
    return Project.findAll({
      where: {
       categoryId: categoryId,
      },
    });
  };



  module.exports = Project;


// Student = Category
// Test = Project

//   CREATE TABLE tests (
//     id SERIAL PRIMARY KEY,
//     subject character varying(255) NOT NULL,
//     grade integer NOT NULL,
//     "createdAt" timestamp with time zone NOT NULL,
//     "updatedAt" timestamp with time zone NOT NULL,
//     "studentId" integer REFERENCES students(id) ON DELETE SET NULL ON UPDATE CASCADE
// );

// -- Indices -------------------------------------------------------

// CREATE UNIQUE INDEX tests_pkey ON tests(id int4_ops);
