import React from 'react';
import SingleCategory from './SingleCategory';
const CategoryList = (props) => {
  return (
    <ul className="category-list">
      {console.log('%%%', props.selectedCategory)}
      {//map through the categories and if this is the selected category, list the projects associated. When state in the parent component changes, so does the selected category
        props.categories.map(category => (
          <React.Fragment>
          <li key={category.catName} className={'category-item'} onClick= {() => props.selectCategory(category)}>{category.displayName}</li>

            {props.selectedCategory.id === category.id ? (
              <SingleCategory projects={category.projects} /> ) : null}
           </React.Fragment>
          )
      )
      }
    </ul>
  )
}

export default CategoryList
