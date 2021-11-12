const projects = [
  {
    id: 1,
    title: 'Portfolio',
    short_description: 'This portfolio',
    image_url: './images/portfolio-big.png',
    stack: 'Front End',
    technology: ['React', 'Node', 'Express', 'Postgres', 'Sequelize', 'JavaScript', 'HTML', 'CSS', 'Responsive Layout'],
    include: true,
    github: 'https://github.com/Taylor-H/portfolio.git',
    deployed: 'https://www.htmlartist.net/projects/'
  },
  {
    id: 2,
    title: 'Robots and Projects',
    short_description: 'Robots need projects and projects need robots.',
    include: true,
    image_url: './images/mtv-big.png',
  },
  {
    id: 3,
    title: 'Coffee Clicker',
    short_description: 'Build the coffee empire you\'ve always wanted',
    image_url: './images/mtv-big.png',

  },
  {
    id: 4,
    title: 'Pixelate',
    short_description: 'Pixelate your world.',
    image_url: './images/mtv-big.png',
  },
];
technology=[
 'UI/Graphic Design', 'Responsive Layout', 'HTML, CSS', 'JavaScript', 'Express'
]
skillExamples = ['Front End', 'Back End', 'Full Stack', 'Data Science', 'UI/Graphic Design', 'Responsive Layout', 'HTML, CSS', 'Code Example'];
let nextId = projects.length + 1;

const getProjects = () => [...projects];
const addProject = (project) => {
  projects.push({ ...project, id: nextId++ });
};
const removeProject = (projectId) => {
  const id = projects.findIndex((project) => project.id === projectId);
  if (id < 0) throw new Error('Project Not Found');
  projects.splice(id, 1);
};

module.exports = {
  getProjects,
  addProject,
  removeProject,
};
