import React, { useEffect, useState } from 'react';
import { CheckToken } from './myFunctions';
import { useNavigate } from 'react-router-dom';

// TODO make middleware somehow 
export function Middleware() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {

  CheckToken().then(data => {
      if(data) {
          setLoggedIn(true)
      } else {
          setLoggedIn(false);
      }
  })
  .finally(() => {
      setLoading(false);
  });
}, []); 


const navigate = useNavigate();


    

}
