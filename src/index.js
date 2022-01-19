import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import ProjectCards from './components/Projects/ProjectCards';
import ProjectDetail from './components/Projects/ProjectDetail';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />}>
        <Route index element={<ProjectCards />} />
        <Route path=":projectId" element={<ProjectDetail />} />
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
