const projects = [
  {
    id: 1,
    name: 'Portfolio',
    short_description: 'This portfolio',
    imageUrl: './images/portfolio-big.png',
  },
  {
    id: 2,
    name: 'Robots and Projects',
    short_description: 'Robots need projects and projects need robots',
    imageUrl: './images/mtv-big.png',
  },
  {
    id: 3,
    name: 'Coffee Clicker',
    short_description: 'Build the coffee empire you\'ve always wanted',
    imageUrl: './images/mtv-big.png',
  },
  {
    id: 4,
    name: 'Pixelate',
    short_description: 'Pixelate your world.',
    imageUrl: './images/mtv-big.png',
  },
];

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
