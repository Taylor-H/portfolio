import React, { useState } from "react"
import { Link } from "react-router-dom"

const AccordionItem = function(props) {

const { id, title, short_description, category } = project;
 const [opened, setOpened] = useState(false);

    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h6 {...{ className: 'accordion-item__title' }}>
            {category.displayText}
          </h6>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
            <Link to='/projects/:projectId'>{project.title}</Link>
            </div>
          </div>
      </div>
    )
  }

export default AccordionItem
