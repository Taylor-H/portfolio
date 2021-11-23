const db = require('./db/db');
const Project = require('./db/models/projects');
const Category = require('./db/models/categories');

const categories = [
  {
    catName: 'app',
    displayName: 'Full Stack Web Applications'
  },
  {
    catName: 'game',
    displayName: 'Games'
  },
  {
    catName: 'creative',
    displayName: 'Creative and Front End Development'
  },
  {
    catName: 'code',
    displayName: 'Code Examples'
  }
]
const projects = [
  {
    title: 'Portfolio',
    short_description: 'This is my professional portfolio',
    categoryId: 1,
  },
  {
    title: 'Robots and Projects',
    short_description: 'Robots need projects and projects need robots.',
    categoryId: 1,
  },
  {
    title: 'Coffee Clicker',
    short_description: 'Make all the coffee you\'ve always wanted',
    categoryId: 2,
  },
  {
    title: 'Pets',
    short_description: 'Adopt a pet.',
    categoryId: 3,
  },
  {
    title: 'Pixelate',
    short_description: 'Pixelate your world.',
    categoryId: 4,
  },
];


const seed = async () => {
  try {
    await db.sync({ force: true });

    // Categories
    await Category.bulkCreate(categories);
    console.log('Seeded Categories');

    // Projects
    await Project.bulkCreate(projects);
    console.log('Seeded projects');

    console.log('Database successfully seeded');
    db.close();
  } catch (error) {
    console.log('Error seeding database');
    console.log(error.stack);
    db.close();
  }
};

seed();


// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Runnin' and a runnin' on port: ${PORT}`);
// });



// const seed = async () => {
//   try {
//     await db.sync({ force: true });

//     // Categories
//     await Promise.all(
//       categories.map((category) => {
//         return Category.create(category);
//         }));
//     console.log('Seeded category');
// // console.log('Project', projects);
//     // Projects
//     await Promise.all(
//       projects.map((project) => {
//       return Project.create(project);
//     })
//     );



//     // Project.bulkCreate(projects);
//     console.log('Seeded projects');

//     console.log('Database successfully seeded');
//     db.close();
//   } catch (error) {
//     console.log('Error seeding database');
//     console.log(error.stack);
//     db.close();
//   }
// };
// module.exports = seed;
// if (require.app === module) {
//   seed()
//     .then(() => {
//       console.log(green('Seeding success!'));
//       db.close();
//     })
//     .catch((err) => {
//       console.error(red('Oh noes! Something went wrong!'));
//       console.error(err);
//       db.close();
//     });
// }
