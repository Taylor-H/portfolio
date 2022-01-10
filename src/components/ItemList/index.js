import React from 'react';

// const skillList = (props) => {[ 'HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Responsive Layout', 'Graphic Design', 'UI/UX', 'Sequelize' ]}

const ItemList = (props) => {
  const {itemName, itemList} = props;
  console.log('itemList', itemList, itemName);
  return ((itemList.length > 0) ? (
    <div className='column'>
      <div id="section-title">
        <h4>&#8250; {itemName}</h4>
      </div>
      <div className={itemName.concat( ' home-list')}>
        <ul>
          {itemList.map((item, key) => (
            <li key={key}>{`${item}, `}</li>
          ))}
        </ul>
      </div>
    </div>
  ): null);
};
export default ItemList;
