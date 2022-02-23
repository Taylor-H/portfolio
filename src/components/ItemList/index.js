import React from 'react';

// const skillList = (props) => {[ 'HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Responsive Layout', 'Graphic Design', 'UI/UX', 'Sequelize' ]}

const ItemList = (props) => {
  const {itemName, itemList} = props;
  return itemList ? (
    <>
      {itemName? <h4>&#8250; {itemName}</h4> : null}
        <ul className="bulleted-list">
          {itemList.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
    </>
  ) : null;
};
export default ItemList;
