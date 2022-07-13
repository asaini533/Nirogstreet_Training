import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ list, ...property }) => (
 
  <ul>  
    {list.map(item => (
      <li className={property.className}>{item}</li>
    ))}
  </ul>
);

export default ListItem;
ListItem.propTypes = {
  tags: PropTypes.array,
}