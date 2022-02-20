const data = {
  categories: [
    {
      catId: 1,
      catName: 'home',
      shortDisplay: 'Home',
      displayName: 'Home',
      subCategory: false,
    },
    {
      catId: 2,
      catName: 'contact',
      shortDisplay: 'Contact',
      displayName: 'Contact',
      subCategory: false,
    },
    {
      catId: 3,
      catName: 'about',
      shortDisplay: 'About',
      displayName: 'About',
      subCategory: false,
    },
    {
      catId: 4,
      catName: 'projects',
      shortDisplay: 'Projects',
      displayName: 'Projects',
      subCategory: false,
    },
    {
      catId: 5,
      catName: 'app',
      shortDisplay: 'Apps',
      displayName: 'Full Stack Applications',
      subCategory: true,
    },
    {
      catId: 6,
      catName: 'game',
      shortDisplay: 'Games',
      displayName: 'Games',
      subCategory: true,
    },
    {
      catId: 7,
      catName: 'creative',
      shortDisplay: 'Creative',
      displayName: 'Creative Development',
      subCategory: true,
    },
    {
      catId: 8,
      catName: 'code',
      shortDisplay: 'Code',
      displayName: 'Code Examples',
      subCategory: true,
    },
  ],
  projects: [

    {
      id: 14,
      projectName: 'collaborate',
      title: 'Collaborate',
      tagLine: 'A collaboration app that uses sockets. ',
      tech: [
        'React',
        'Node',
        'html5',
        'css3',
        'JavaScript',
        'Express',
        'Git',
        'Heroku',
      ],
      role: ['Developer', 'UI/UX Design', 'Graphic Design'],
      description: 'Whiteboard and chat over any website with invited friends.',
      links: {
        gitHub: 'https://github.com/Taylor-H/collaborate',
        live: '/projects/collaborate',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['app'],
    },
    {
      id: 25,
      projectName: 'data-art',
      title: 'Data Artist',
      tagLine:
        'In goes the data, out comes the art. Use a form to alter the data and see the results.',
      tech: [
        'React',
        'Node',
        'html5',
        'css3',
        'Javascript',
        'Express',
        'Git',
        'Heroku',
      ],
      role: ['Front End Developer', 'UI/UX Design', 'Graphic Design'],
      description:
        'Alter the data to make a masterpiece. Using forms to change the parameters and data points, the user can generate an infinite amount of art. This app demonstrates the power of data visualization and CSS.',
      links: {
        gitHub: 'https://github.com/Taylor-H/data-art',
        live: '/projects/data-art',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['app', 'code', 'creative'],
    },
    {
      id: 14,
      projectName: 'collaborate',
      title: 'Collaborate',
      tagLine: 'A collaboration app that uses sockets. ',
      tech: [
        'react',
        'node',
        'html5',
        'css3',
        'javascript',
        'express',
        'git',
        'heroku',
      ],
      role: ['Developer', 'UI/UX Design', 'Graphic Design'],
      description: 'Whiteboard and chat over any website with invited friends.',
      links: {
        gitHub: 'https://github.com/Taylor-H/collaborate',
        live: '/projects/collaborate',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['app'],
    },
    {
      id: 24,
      projectName: 'flower-picker',
      title: 'Flower Picker',
      tagLine: 'See how many flowers you can snip to create a bouquet.',
      tech: [
        'react',
        'node',
        'html5',
        'css3',
        'javascript',
        'express',
        'git',
        'heroku',
      ],
      role: ['Game Developer', 'UI/UX Design', 'Graphic Design'],
      description:
        'A new take on Whack a Mole type games. The user must click on the flowers to snip them. You can then drag and drop the flowers to create a bouquet. Originally built with plain old JavaScript this app was converted to React.',
      links: {
        gitHub: 'https://github.com/Taylor-H/flower-picker',
        live: '/projects/flower-picker',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['game'],
    },
    {
      id: 26,
      projectName: 'flower-picker',
      title: 'Flower Picker',
      tagLine: 'See how many flowers you can snip to create a bouquet.',
      tech: [
        'React',
        'Node',
        'html5',
        'css3',
        'Javascript',
        'Express',
        'Git',
        'Heroku',
      ],
      role: ['Game Developer', 'UI/UX Design', 'Graphic Design'],
      description:
        'A new take on Whack a Mole type games. The user must click on the flowers to snip them. you can then drag and drop the flowers to create a bouquet. Originally built with plain old JavaScript this app was converted to React.',
      links: {
        gitHub: 'https://github.com/Taylor-H/flower-picker',
        live: '/projects/flower-shop',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['game'],
    },
  ],
};
export const techList = {
  node: 'Node',
  html5: 'HTML5',
  css3: 'CSS3',
  javascript: 'Javascript',
  express: 'Express',
  git: 'Git',
  heroku: 'Heroku',
  react: 'React',
  'react-router': 'React Router',
  sequelize: 'Sequelize',
  postgresql: 'PostgreSQL',
  redux: 'Redux',
  axios: 'Axios',
  sass: 'Sass',
  bootstrap: 'Bootstrap',
  materialize: 'Materialize',
  mocha: 'Mocha',
  chai: 'Chai',
};
export const techIcons = {
  node: '<NodeIcon>',
  html5: '<Html5Icon>',
  css3: '<Css3Icon>',
  javascript: '<JavascriptIcon>',
  express: '<ExpressIcon>',
  git: '<GitIcon>',
  heroku: '<HerokuIcon>',
  sequelize: '<SequelizeIcon>',
  postgresql: '<PostgresqlIcon>',
  react: '<ReactIcon>',
  'react-router': '<ReactRouterIcon>',
  redux: '<ReduxIcon>',
  axios: '<AxiosIcon>',
  sass: '<SassIcon>',
  bootstrap: '<BootstrapIcon>',
  materialize: '<MaterializeIcon>',
  mocha: '<MochaIcon>',
  chai: '<ChaiIcon>',
};
export const getProjects = () => {
  return data.projects;
};
export const getCategories = () => {
  return data.categories;
};
export const getCategoryDisplayNames = () => {
  const catArray = [];
  data.categories.forEach((category) => catArray.push(category.displayName));
  return catArray;
};
export function getCategoriesFromProjects(projects) {
  return projects
    .reduce((acc, project) => {
      console.log(acc, project.category);
      return [...new Set([...acc, ...([project.category] || [])])];
    }, [])
    .sort();
}
export default data;
