const express = require('express');
const morgan = require('morgan');
const { join } = require('path');
const { getProjects, addProject, removeProject } = require('./data/projectdata');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();

// Body Parsing
app.use(express.json());

// Request/Response Logging
app.use(morgan('dev'));

// GET all the projects
app.get('/api/projects', (req, res) => {
  res.json(getProjects());
});
app.get('/api/projects/:id', (req, res) => {
  const project = getProjects().find(p => p.id === parseInt(req.params.id));
  if (project) {
    res.json(project);
  } else {
    res.status(404).send('Project not found');
  }
})
// POST a new project
// app.post('/api/projects', (req, res) => {
//   console.log('server received this request body:\n', req.body);
//   const { id, title, short_description, image_url, stack } = req.body;
//   const newProject = { title, short_description, imageUrl };
//   addProject(newProject);
//   res.json(newProject);
// });

// DELETE project with the given id
// app.delete('/api/projects/:id', (req, res) => {
//   const id = Number(req.params.id);
//   removeProject(id);
//   res.sendStatus(204);
// });

// Webpack Dev Middleware
const compiler = webpack(webpackConfig);
app.use(
  middleware(compiler, {
    // publicPath: join(__dirname, "public"),
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: true,
  })
);

// static file-serving middleware
app.use(express.static(join(__dirname, 'public')));
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error');
});
module.exports = app;
