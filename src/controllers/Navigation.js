import React, { useState, useEffect } from 'react';


function Navigation(props) {

    return (
        <li><a href={props.path}>{props.name}</a></li>
      );

}
    




export default Navigation;