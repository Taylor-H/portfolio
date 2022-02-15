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
      tech: ['reactJS', 'Node', 'html5', 'css3', 'heroku'],
      role: ['Developer', 'UI/UX Design', 'Graphic Design'],
      description: `My portfolio app allows you to view my projects and see a brief description of each. It has a messaging feature that I set up using emailJS. I've separated the information from the app itself. When I get more projects up I will add a database. It has categories that allow you to filter through the projects. I set up front end routing with React Router.`,
      design: `I designed the Navigation to be representative of the site structure. I decided minimal and succinct was the way to go. I used a combination of Styled Components and CSS to style the site. I wanted a clean simple aesthetic that didn't distract from the sites purpose. I believe this design accomplishes my goals.`,
      features:['Accordion Navigation', 'Messaging', 'Routing', 'Clean Design', 'Responsive',],
      links: { gitHub: 'https://github.com/Taylor-H/portfolio', live: '/' },
      images: { prevImg: 'portfolio-big.png' },
      categories: ['app'],
      featured: true,
    },
    {
      id: 16,
      projectName: 'robot-boss',
      title: 'Robot Boss',
      tagLine: 'Assigning tasks with React and Express.',
      tech: ['reactJS', 'Node', 'html5', 'css3', 'heroku'],
      role: ['Full Stack Developer', 'UI/UX Design', 'Creative Design'],
      description:
        "Robots are great but if you don't tell them what to do they they just sit around doing nothing. This app is a robot boss. It allows you to assign your team of robots to your todo list. It is a single page React application with an Express server to handle CRUD operations.",
      links: {
        gitHub: 'https://github.com/Taylor-H/robot-boss',
        live: '/projects/robot-boss',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['app'],
      featured: true,
    },
    {
      id: 17,
      projectName: 'coffee-clicker',
      title: 'Coffee Clicker',
      tagLine: 'Dominate the coffee market.',
      tech: ['reactJS', 'Node', 'html5', 'css3', 'heroku'],
      role: ['Game Developer', 'UI/UX Design', 'Graphic Design'],
      description:
        'A javascript classic. See how much coffee you can make in a day.',
      links: {
        gitHub: 'https://github.com/Taylor-H/portfolio',
        live: '/projects/coffee-clicker',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['game'],
      featured: true,
    },
    {
      id: 18,
      projectName: 'art-gallery',
      title: 'Art Gallery',
      tagLine: 'A gallery app made with data from Harvard Art Museum.',
      tech: ['reactJS', 'Node', 'html5', 'css3', 'heroku'],
      role: ['Game Developer', 'UI/UX Design', 'Graphic Design'],
      description:
        'Harvard Art Museum has provided an abbreviated version of their collection of art for developers to use. This app allows you to browse the collection and search for specific art pieces or collections. It uses React and React Router.',
      links: {
        gitHub: 'https://github.com/Taylor-H/art-gallery',
        live: '/projects/art-gallery',
      },
      images: { prevImg: 'js-big.png' },
      categories: ['app', 'creative'],
    },
    {
      id: 19,
      projectName: 'pixel-click',
      title: 'Pixel Click',
      tagLine:
        'A pixel art tool that allows the user to color blocks to make art.',
      tech: ['reactJS', 'Node', 'html5', 'css3', 'javascript', 'heroku'],
      role: ['Game Developer', 'UI/UX Design', 'Graphic Design'],
      description: `I originally made Pixel when learning Javascript. When learning to use React I thought it would be interesting to refactor it into a React app. I plan to add a feature that allows the user tp upload a background image to trace over and export as .png as a fun way to make a custom pixelated profile picture. I put the original plain javascript code in a separate branch on github.`,
      links: {
        gitHub: 'https://github.com/Taylor-H/pixeclick',
        live: '/projects/pixel-click',
      },
      images: { prevImg: 'pixel-desktop.png' },
      categories: ['app', 'code'],
    },
    {
      id: 20,
      projectName: 'relaxr',
      title: 'relaxr',
      tagLine: 'CSS and HTML for a blog.',
      tech: ['html5', 'css3'],
      role: ['Front End Developer'],
      description: `As a Frontend Web Developer, part of my regular workflow would include making templates from detailed image file like you see here. My role was to integrate the styles and HTML with data to dynamically display the page as intended by the Web Designer. This is an example of classic CSS and HTML. It's an exercise in being precise in an environment.
      These days there are many great tools to streamline and simplify this process but I am glad that I have a deep understanding of CSS. Having extensive experience with CSS and HTML has made learning to use libraries like Sass and Styled Components in React very exciting.`,
      links: {
        gitHub: 'https://github.com/Taylor-H/relaxr',
        live: '/projects/relaxr',
      },
      images: {
        prevImg: 'relaxr-big.png',
        phone: 'relaxr_phone.jpg',
        tablet: 'relaxr_tablet.jpg',
        desktop: 'relaxr_desktop.jpg}',
        file: 'relaxr_desktop_2.jpg',
      },
      categories: ['creative'],
    },
    {
      id: 21,
      projectName: 'MedFlowClinic',
      title: 'MedFlow Clinic',
      tagLine: 'Get answers to your most pressing issues.',
      tech: ['reactJS', 'Node', 'html5', 'css3', 'javascript', 'heroku'],
      role: ['Web Developer', 'Creative Development'],
      description: `I worked with fellow students to plan, develop, and deploy a Full Stack Web Application from start to finish. We planned our site utilizing GitHub Projects. We defined our User Stories. Set up our database schema. We implemented authentication. We set up a demo user so perspective users can check it out.
      Please see our github Wiki for detailed documentation of User Stories, Database Schema, API/Frontend Routes, and a Feature List.
`,
      design: `We all played a part in all stages of the project but I think my biggest contribution was when we were planning the database schema and setting up API routes.`,
      links: {
        gitHub: 'https://github.com/southwestmogrown/MedFlowClinic',
        live: 'https://medflow-clinic.herokuapp.com/',
        wiki: 'https://github.com/southwestmogrown/MedFlowClinic/wiki',
      },
      images: { prevImg: 'med-flow-clinic.png' },
      categories: ['app'],
    },
    {
      id: 22,
      projectName: 'pop!',
      title: 'pop!',
      tagLine: 'A front end design challenge.',
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
      description: `This was a final project in a Front End Course I took at General assembly. I wanted to set up media queries and make a site that dynamically adjusted to look great at any screen size width.`,
      design: ` This site is an example of what I call Creative Development. I used a CSS grid and Flex-box to create a responsive design. I used media queries to adjust the site to fit any screen size. `,
      features: ['Dropdown Navigation', 'Responsive Design', 'Media Queries'],
      links: {
        gitHub: 'https://github.com/Taylor-H/pop',
        live: '/projects/pop',
      },
      images: { prevImg: 'pop_desktop.jpg' },
      categories: ['creative'],
    },
    {
      id: 23,
      projectName: 'candy-tracker',
      title: 'Candy Tracker',
      tagLine: 'A data driven React App to track your candy supply.',
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
      role: ['Full Stack Developer', 'Graphic Design'],
      description: `This was a final project in a Front End Course I took at General assembly. I wanted to set up media queries and make a site that dynamically adjusted to look great at any screen size width.`,
      links: {
        gitHub: 'https://github.com/Taylor-H/candy-tracker',
        live: '/projects/candy-tracker',
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
  ],
};
export const techList = {
  node: { name: 'Node', icon: `<NodeJS />` },
  html5: { name: 'HTML5', icon: `<HTML5 />` },
  css3: { name: 'CSS3', icon: `<CSS />` },
  javascript: { name: 'Javascript', icon: `<Javascript />` },
  express: { name: 'Express', icon: `<ExpressIcon />` },
  git: { name: 'gitHub', icon: `<FaGithubIcon />` },
  chai: { name: 'Chai', icon: `<ChaiIcon />` },
  mocha: { name: 'Mocha', icon: `<MochaIcon />` },
  react: { name: 'ReactJS', icon: `<ReactIcon />` },
  redux: { name: 'Redux', icon: `<ReduxIcon />` },
  sass: { name: 'Sass', icon: `<SassIcon />` },
  materialize: { name: 'Materialize', icon: `<MaterializeIcon />` },
  bootstrap: { name: 'Bootstrap', icon: `<BootstrapIcon />` },
  heroku: { name: 'Heroku', icon: `<HerokuIcon />` },
  gitlab: { name: 'GitLab', icon: `<GitlabIcon />` },
  gatsby: { name: 'Gatsby', icon: `<GatsbyIcon />` },
  firebase: { name: 'Firebase', icon: `<FirebaseIcon />` },
  gcp: { name: 'Google Cloud Platform', icon: `<GcpIcon />` },
  slack: { name: 'Slack', icon: `<SlackIcon />` },
  npm: { name: 'NPM', icon: `<NpmIcon />` },
  sequelize: { name: 'Sequelize', icon: `<SequelizeIcon />` },
  postgresql: { name: 'PostgreSQL', icon: `<SchemaIcon />` },
  axios: { name: 'Axios', icon: `<AxiosIcon>` },
};
export const techIconsInQoutes = {
  node: '<NodeJS />',
  html5: '<HTML5 />',
  css3: '<CSS />',
  javascript: '<JavascriptIcon />',
  express: '<ExpressIcon />',
  git: '<FaGithubIcon />',
  heroku: '<HerokuIcon />',
  sequelize: '<SequelizeIcon />',
  postgresql: '<PostgresqlIcon />',
  reactJS: '<ReactJS />',
  reactrouter: '<ReactRouterIcon />',
  redux: '<ReduxIcon />',
  axios: '<AxiosIcon />',
  sass: '<SassIcon />',
  bootstrap: '<BootstrapIcon />',
  materialize: '<MaterializeIcon />',
  mocha: '<MochaIcon />',
};
export const techIcons = {
  node: '<NodeJS />',
  html5: '<HTML5 />',
  css3: '<CSS />',
  javascript: '<Javascript />',
  express: '<ExpressIcon />',
  git: '<FaGithubIcon />',
  heroku: '<HerokuIcon />',
  sequelize: '<SequelizeIcon />',
  postgresql: '<PostgresqlIcon />',
  reactJS: '<ReactJS />',
  reactrouter: '<ReactRouterIcon />',
  redux: '<ReduxIcon />',
  axios: '<AxiosIcon />',
  sass: '<SassIcon />',
  bootstrap: '<BootstrapIcon />',
  materialize: '<MaterializeIcon />',
  mocha: '<MochaIcon />',
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
