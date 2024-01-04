import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {

  return (
    <ul>
      {props.links.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );


}
    




export default Navigation;