import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton, Card, AccordionContext  } from 'react-bootstrap';
import ProjectsByCategory from './ProjectsByCategory';



function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton( eventKey, () => callback && callback(eventKey));
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? '#fab86280' : '#fef7ee' }}
      onClick={decoratedOnClick}
      className="rounded-0 category-button"
    >
      {children}
    </button>
  );
}

function ProjectNav(props) {
  console.log('props', props);
  return (
    <Accordion defaultActiveKey="0">
      {props.categories.map((category, i) => (
        <Card key={category.catName} className={category.catName +" rounded-0"}>
          <Card.Header className="accordion__title">
            <ContextAwareToggle eventKey={i}>
              {category.displayName}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i}>
            <Card.Body>
              <ProjectsByCategory
                category={category}
                projects={props.projects}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
}

export default ProjectNav
