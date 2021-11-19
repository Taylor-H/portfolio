import React from 'react';
import AccordionItem from './AccordionItem'


const categories = [
  {
    categoryName: 'app',
    displayText: 'Full Stack Web Applications'
  },
  {
    categoryName: 'game',
    displayText: 'Games'
  },
  {
    categoryName: 'creative',
    displayText: 'Creative and Front End Development'
  },
  {
    categoryName: 'code',
    displayText: 'Code Examples'
  }
]
       {/* <div className="post">
              {projects.map((project) => {
                {
                  console.log('project', project.id);
                }
                return <ProjectList key={project.id} project={project} />;
              })}
            </div> */}
const Accordion = function(props) {
  console.log('props', props);
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {catagories.map((category, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                {projects.map((project) => {
                  console.log('project', project.id);
                  // if (project.category === category.categoryName) {
                  //   return <AccordionItem category={categoryName} key={project.id} project={project} />;
                  // }
                })}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }


export default Accordion
