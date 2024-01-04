import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { ReadCookie } from './myFunctions';
import { CheckToken } from './myFunctions';

// deletes httponly cookie+username and token in mysql  then redirect to login/register page

function Logout() {
    const [isLoggedIn, setLoggedIn] = useState(false);


    /// still no middleware  spam this everwhere 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
  
    CheckToken().then(data => {
        if(data) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false);
            alert("NOT AUTHORIZED")
            navigate('/');  
        }
    })
    .finally(() => {
        setLoading(false);
    });
  }, []); 
  
  
    if (loading) {
        return <div>Loading...</div>;
    }

    const apiUrl = "http://localhost:10000/logout";
    
    fetch(apiUrl, {
        method: 'POST',
        credentials: 'include',
        origin: 'http:localhost:3000',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
    .then(data => {
        if(data.result == "true") {
            setLoggedIn(true);
            navigate('/')

        } else {    
            setLoggedIn(false);

        }
    }).catch( error => {
        console.log(error);
    })




    return (
        <div>
             <h1>Loggin out....</h1>
        </div>
      );

}





export default Logout;

