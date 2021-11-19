

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    short_description: 'This is my professional portfolio',
    image_url: './images/portfolio-big.png',
    category: 'app',
    stack: 'Full',
    technology: ['React', 'Node', 'Express', 'Postgres', 'Sequelize', 'JavaScript', 'HTML', 'CSS', 'Responsive Layout'],
    include: true,
    github: 'https://github.com/Taylor-H/portfolio.git',
    deployed: 'https://www.htmlartist.net/projects/:id'
  },
  {
    id: 2,
    title: 'Robots and Projects',
    short_description: 'Robots need projects and projects need robots.',
    image_url: './images/robot-big.png',
    category: 'app',
    stack: 'Full',
    technology: ['React', 'Node', 'Express', 'Postgres', 'Sequelize', 'JavaScript', 'HTML', 'CSS', 'Responsive Layout'],
    include: true,
    image_url: './images/robot-big.png',
    github: 'https://github.com/Taylor-H/robot-and-projects.git',
    deployed: 'https://www.htmlartist.net/projects/:id'
  },
  {
    id: 3,
    title: 'Coffee Clicker',
    short_description: 'Make all the coffee you\'ve always wanted',
    image_url: './images/robot-big.png',
    category: 'game',
    stack: 'Front',
    include: true,
    image_url: './images/mtv-big.png',
    github: 'https://github.com/Taylor-H/coffeee_',
    deployed: 'https://www.htmlartist.net/projects/:id'
  },
  {
    id: 4,
    title: 'Pets',
    short_description: 'Adopt a pet.',
    image_url: './images/robot-big.png',
    category: 'game',
    stack: 'Back',
    include: true,
    image_url: './images/mtv-big.png',
    github: 'https://github.com/Taylor-H/robot-and-projects.git',
    deployed: 'https://www.htmlartist.net/projects/:id'
  },
  {
    id: 5,
    title: 'Pixelate',
    short_description: 'Pixelate your world.',
    image_url: './images/pixel_pal.png',
    category: 'code',
    stack: 'Front',
    include: false,
    image_url: './images/mtv-big.png',
    github: 'https://github.com/Taylor-H/robot-and-projects.git',
    deployed: 'https://www.htmlartist.net/projects/:id'
  },
];
const role=[
 'UI/UX', 'Graphic Design', 'Game Design', 'Creative Development', 'Front End', 'Database', 'JavaScript Developer', 'Back End Developer', 'Data Developer', 'Creative Developer'
]

const tech=[
  'HTML', 'CSS', 'JavaScript', 'Express', 'React', 'Node', 'Postgres', 'Sequelize', 'Responsive Layout'
]
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
};
