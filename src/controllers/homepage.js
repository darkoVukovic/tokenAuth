import React, { useState, useEffect } from 'react';
import Modal from './modal';
import { CheckToken } from './myFunctions';
import { useNavigate } from 'react-router-dom';


function Homepage() {

    // TODO no middleware yet 
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
  
    CheckToken().then(data => {
        if(data) {
            setLoggedIn(true)
            navigate('/dashboard');  

        } else {
            setLoggedIn(false);
        }
    })
    .finally(() => {
        setLoading(false);
    });
  }, []); 

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <main>
        < Modal />
        </main>
      </div>
      );

}
    




export default Homepage;