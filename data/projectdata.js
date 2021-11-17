

const projects = [
  {
    id: 1,
    title: 'Portfolio',
    short_description: 'This portfolio',
    image_url: './images/portfolio-big.png',
    stack: 'Full Stack',
    technology: ['React', 'Node', 'Express', 'Postgres', 'Sequelize', 'JavaScript', 'HTML', 'CSS', 'Responsive Layout'],
    include: true,
    github: 'https://github.com/Taylor-H/portfolio.git',
    deployed: 'https://www.htmlartist.net/projects/1'
  },
  {
    id: 2,
    title: 'Robots and Projects',
    short_description: 'Robots need projects and projects need robots.',
    image_url: './images/robot-big.png',
    stack: 'Full Stack',
    include: true,
    image_url: './images/mtv-big.png',
    github: 'https://github.com/Taylor-H/robot-and-projects.git',
    deployed: 'https://www.htmlartist.net/projects/2'
  },
  {
    id: 3,
    title: 'Coffee Clicker',
    short_description: 'Make all the coffee you\'ve always wanted',
    image_url: './images/robot-big.png',
    stack: 'Full Stack',
    include: true,
    image_url: './images/mtv-big.png',
    github: 'https://github.com/Taylor-H/coffeee_',
    deployed: 'https://www.htmlartist.net/projects/3'
  },
  {
    id: 4,
    title: 'Pixelate',
    short_description: 'Pixelate your world.',
    image_url: './images/robot-big.png',
    stack: 'Front End',
    include: true,
    image_url: './images/mtv-big.png',
    github: 'https://github.com/Taylor-H/robot-and-projects.git',
    deployed: 'https://www.htmlartist.net/projects/2'
  },
  {
    id: 5,
    title: 'Pixelate',
    short_description: 'Pixelate your world.',
    image_url: './images/pixel_pal.png',
    stack: 'Front End',
    include: false,
    image_url: './images/mtv-big.png',
    github: 'https://github.com/Taylor-H/robot-and-projects.git',
    deployed: 'https://www.htmlartist.net/projects/5'
  },
];
const role=[
 'UI Design', 'Graphic Design', 'Game Design', 'Creative Development','Front End Rendering', 'JavaScript Developer', 'Back End Developer', 'Data Developer', 'Creative Developer'
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
