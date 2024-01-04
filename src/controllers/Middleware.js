import React, { useEffect, useState } from 'react';
import { CheckToken } from './myFunctions';
import { useNavigate } from 'react-router-dom';

// TODO make middleware somehow 
/**
 * Middleware function will send api call to go that will try to validate user token and username cookies with database.
 * 
 * @param {page} set page to  signup(name of page that user uses to login ) if you dont use signup route change it in this file on line 24 and 29 to your route alos u can change line 26 to your desired route when user is logged in
 * @param children wrap children under <Middleware></Middleware> so it doesnt show 
 * @returns  redirection if user is not authenticated. it will render children components if user authenticated 
 */
const  Middleware = ( {page, children}) => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
  
    CheckToken().then(data => {
        if(data) {
            setLoggedIn(true)
        }  else if (data && page == "signup") {
            setLoggedIn(true)
            navigate("/")
        }  else {
            setLoggedIn(false);
            navigate('/signup');  
        }
    })
    .finally(() => {
        setLoading(false);
    });
  }, []); 
  
  
    if (loading) {
        return <div>Loading...</div>;
    }


    return(
        <div>
            {children}
        </div>
    )
 }


 export default Middleware;
