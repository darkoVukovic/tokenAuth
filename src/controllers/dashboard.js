import React, { useState, useEffect } from 'react';
import Modal from './modal';
import { useNavigate } from 'react-router-dom';
import { Middleware } from './Middleware';
import { CheckToken } from './myFunctions';
import Navigation

from './Navigation';
function Dashboard() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {

  CheckToken().then(data => {
      if(data) {
          setLoggedIn(true)
      } else {
          setLoggedIn(false);
          navigate('/');  // luv u
      }
  })
  .finally(() => {
      setLoading(false);
  });
}, []); 


  if (loading) {
      return <div>Loading...</div>;
  }

  const navigation = [
    {name: "home", path:'/dashboard'},
    {name: "logout", path: "/logout"}
  ]

    return (
      <div className="dashboard">
        <aside>
          <ul>
          {navigation.map((c, index) => (
        <Navigation key={index} name={c.name} path={c.path} />
      ))}
          </ul>
        </aside>
        <h1>dashboard</h1>
      </div>
      );

}





export default Dashboard;