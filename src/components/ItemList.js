import React from 'react';

// const skillList = (props) => {[ 'HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Responsive Layout', 'Graphic Design', 'UI/UX', 'Sequelize' ]}
const ItemList = (props) => {
  const {itemName, itemList} = props;
  console.log(itemName, itemList);
  return (
    <>
      <div id="section-title">
        <h4>&#8250; {itemName}</h4>
      </div>
      <div className="home-list">
        <ul>
          {itemList.map((item, key) => (
            <li key={key}>
              <img src="/images/check-circle-regular.svg" className="check"/>
               {item} </li>
          ))}
        </ul>
      </div>
      <div id="links">
        <h5>
          <a href="/about">more &#8250;</a>
        </h5>
      </div>
    </>
  );
};
export default ItemList;
