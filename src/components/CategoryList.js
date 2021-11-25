import React from 'react';
import SingleCategory from './SingleCategory';
const CategoryList = (props) => {
  console.log(props);
  return (
    <>
      <div id="section-title">
        <a href="/projects">&#8250; Projects</a>
      </div>
      <div className="post-wrapper">
        <ul className="category-list">

          {
            //map through the categories and if this is the selected category, list the projects associated. When state in the parent component changes, so does the selected category
            props.categories.map((category) => (
              <React.Fragment>
                <li
                  key={category.id}
                  className={'category-item'}
                  onClick={() => props.selectCategory(category)}
                >
                  {category.displayName}
                </li>

                {props.selectedCategory.id === category.id ? (
                  <SingleCategory projects={category.projects} />
                ) : null}
              </React.Fragment>
            ))
          }
        </ul>
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
