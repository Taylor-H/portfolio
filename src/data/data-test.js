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
      id: 15,
      projectName: 'portfolio',
      title: 'Portfolio',
      tagLine: 'A React app to showcase my skills through projects',
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
      description:
        'This app displays a collection of projects. It is a single page React application that sorts projects by category. It has a message feature that uses Node.',
      links: { gitHub: 'https://github.com/Taylor-H/portfolio', live: '/'},
      images: {prevImg: 'portfolio-big.png'},
      categories: ['app'],
      featured: true,
    },
    {
      id: 16,
      projectName: 'robot-boss',
      title: 'Robot Boss',
      tagLine: 'Assigning tasks with React and Express.',
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
      role: ['Full Stack Developer', 'UI/UX Design', 'Creative Design'],
      description:
        "Robots are great but if you don't tell them what to do they they just sit around doing nothing. This app is a robot boss. It allows you to assign your team of robots to your todo list. It is a single page React application with an Express server to handle CRUD operations.",
      links: { gitHub: 'https://github.com/Taylor-H/robot-boss' , live: '/projects/robots' },
      images: {prevImg: 'js-big.png'},
      categories: ['app'],
      featured: true,
    },
    {
      id: 17,
      projectName: 'coffee',
      title: 'Coffee Clicker',
      tagLine: 'Dominate the coffee market.',
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
      description: 'A javascript game for ',
      links: { gitHub: 'https://github.com/Taylor-H/portfolio', live: '/projects/coffee-clicker'},
      images: {prevImg: 'js-big.png'},
      categories: ['game'],
      featured: true,
    },
    {
      id: 18,
      projectName: 'art-gallery',
      title: 'Art Gallery',
      tagLine: 'A gallery app made with data from Harvard Art Museum.',
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
        'Harvard Art Museum has provided an abbreviated version of their collection of art for developers to use. This app allows you to browse the collection and search for specific art pieces or collections. It uses React and React Router.',
      links: { gitHub: 'https://github.com/Taylor-H/art-gallery' , live: '/projects/art-gallery' },
      images: { prevImg: 'js-big.png'},
      categories: ['app', 'creative'],
    },
    {
      id: 19,
      projectName: 'pixelate',
      title: 'Pixelate',
      tagLine:
        'A pixel art tool originally built with JavaScript and then remade into a React app.',
      tech: ['React', 'JavaScript', 'html5', 'css3', 'Git', 'Heroku'],
      role: ['Game Developer', 'UI/UX Design', 'Graphic Design'],
      description: `I originally made Pixel as a exercise in Javascript. When learning to use React I thought it would be interesting to refactor it into a React app. I plan to add a feature that allows the user upload a background image to trace over and export as .png as a fun way to make a custom pixelated profile picture. Please see the JavaScript branch.`,
      links:
        { gitHub: 'https://github.com/Taylor-H/pixelate', live: '/projects/pixelate' },
      images: { prevImg: 'pixel-desktop.png'},
      categories: ['app', 'code'],
    },
    {
      id: 20,
      projectName: 'relaxr',
      title: 'relaxr',
      tagLine: 'CSS and HTML for a blog.',
      tech: ['html5', 'css3'],
      role: ['Front End Developer'],
      description: `As a Frontend Web Developer, part of my regular workflow would include making templates from a detailed image file like you see here. My role was to integrate the styles and HTML with data to dynamically display the page as intended. This is an example of old school CSS and HTML. It's an exercise in being precise in an imprecise environment(the internet).<br>
      These days there are many great tools to streamline and simplify this process but I am glad that I have an expert understanding of the underlying technologies. Having extensive experience with CSS and HTML has made learning to use libraries like Sass and Styled Components in React very exciting.`,
      links: { gitHub: 'https://github.com/Taylor-H/relaxr', live: '/projects/relaxr' },
      images:
        { prevImg: 'relaxr-big.png', phone: 'relaxr_phone.jpg', tablet: 'relaxr_tablet.jpg', desktop: 'relaxr_desktop.jpg}', file: 'relaxr_desktop_2.jpg' },
      categories: ['creative'],
    },
    {
      id: 21,
      projectName: 'MedFlowClinic',
      title: 'MedFlow Clinic',
      tagLine: 'Ask, answer, comment, and vote on medical based questions.',
      tech: [
        'Pug',
        'Node',
        'html5',
        'Javascript',
        'Express',
        'Git',
        'Heroku',
        'Sequelize',
        'PostgreSQL',
        'css3',
        'html5',
        'Javascript',
      ],
      role: ['Web Developer', 'Creative Development'],
      description: `A group project in a course I took. Myself and fellow students worked together to plan, develop, and deploy a Full Stack Web Application from start to finish in less than a week. We used GitHub Projects. With a focus on the user experience, we defined our User Stories. There are users that answer questions and users that can only ask and comment on answers. All users are allowed to up vote and down vote. We set up a demo user so perspective users can see how it works.
      Check out our github Wiki to see very detailed documentation of User Stories, Database Schema, API/Frontend Routes, and a Feature List.
      A fun exploration of GitHub workflow and project planning. I played an active roll in each stage of planning and development.`,
      links:
        { gitHub: 'https://github.com/southwestmogrown/MedFlowClinic', live: 'https://medflow-clinic.herokuapp.com/', wiki: 'https://github.com/southwestmogrown/MedFlowClinic/wiki' },
      images: { prevImg: 'med-flow-clinic.png'},
      categories: ['app'],
    },
    {
      id: 22,
      projectName: 'pop!',
      title: 'pop!',
      tagLine: "An expoloration of the 'pop' sound.",
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
      description: `VSC Copilot suggested the tagline and I thought it was too funny to change.<br>
      I wanted to explore media queries and make a site that dynamically adjusted to look great at any screen size width. This site is an example of what I call Creative Development. I designed the site with a focus on the user experience. I used React and React Router to create a single page application.`,
      links: { gitHub: 'https://github.com/Taylor-H/pop' , live: '/projects/pop' },
      images: { prevImg: 'pop-big.png'},
      categories: ['creative'],
    },
    {
      id: 23,
      projectName: 'candy-tracker',
      title: 'Candy Tracker',
      tagLine: 'A data driven React App to track your candy supply.',
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
      role: ['Full Stack Developer', 'Graphic Design'],
      links: { gitHub: 'https://github.com/Taylor-H/candy-tracker', live: '/projects/candy-tracker' },
      images: { prevImg: 'js-big.png'},
      categories: ['app'],
    },
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
      links: { gitHub: 'https://github.com/Taylor-H/collaborate' , live: '/projects/collaborate' },
      images: { prevImg: 'js-big.png'},
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
      links: { 'gitHub': 'https://github.com/Taylor-H/data-art' , live: '/projects/data-art' },
      images:  {prevImg: 'js-big.png'},
      categories: ['app', 'code', 'creative'],
    },
    {
      id: 26,
      projectName: 'flower-shop',
      title: 'Flower Shop',
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
      links: {gitHub: 'https://github.com/Taylor-H/flower-shop', live: '/projects/flower-shop' },
      images: { prevImg: 'js-big.png'},
      categories: ['game'],
    },
  ],
};
export const techList = {
'node': 'Node', 'html5': 'HTML5', css3: 'CSS3', javascript: 'Javascript', express: 'Express', git: 'Git', heroku: 'Heroku', react: 'React', reactrouter: 'React Router', sequelize: 'Sequelize', postgresql: 'PostgreSQL', redux: 'Redux', axios: 'Axios', sass: 'Sass', bootstrap: 'Bootstrap', materialize: 'Materialize', mocha: 'Mocha', chai: 'Chai'
}
export const techIcons = {
  'node': '<NodeIcon>', 'html5': '<Html5Icon>', css3: '<Css3Icon>', javascript: '<JavascriptIcon>', express: '<ExpressIcon>', git: '<GitIcon>', heroku: '<HerokuIcon>', sequelize: '<SequelizeIcon>', postgresql: '<PostgresqlIcon>', react: '<ReactIcon>', reactRouter: '<ReactRouterIcon>', redux: '<ReduxIcon>', axios: '<AxiosIcon>', sass: '<SassIcon>', bootstrap: '<BootstrapIcon>', materialize: '<MaterializeIcon>', mocha: '<MochaIcon>', chai: '<ChaiIcon>',
}
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
