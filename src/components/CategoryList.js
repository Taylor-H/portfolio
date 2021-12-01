import React from 'react';
import SingleCategory from './SingleCategory';

    //we received categories and selectCategory from our parent component - Home
const CategoryList = (props) => {
  const { categories }= props.categories
  return (
    <>
      <div id="section-title">
        <a href="/projects">&#8250; Projects</a>
      </div>
      <div className="post-wrapper">
          {//map through the categories and if this is the selected category, list the projects associated. When state in the parent component changes, so does the selected category
            props.categories.map((category) => (

                <ul key={category.id} className="accordion-item--opened category-list" onClick={() => props.selectCategory(category)}>
                  {category.displayName}
                <span className="category_icon"> &#8250;</span>


                {props.selectedCategory.id === category.id ? (

                  <SingleCategory projects={category.projects} />

                ) : null}
              </ul>

            ))
          }

      </div>
      <div id="links">
        <h5>
          <a href="/projects">more &#8250;</a>
        </h5>
      </div>
    </>
  );
};

export default CategoryList;
