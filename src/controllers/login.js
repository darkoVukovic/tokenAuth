import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { checkToken } from './myFunctions';


function Login() {
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [isLoggedIn, setLoggedIn] = useState(false);


const handleInputs = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
}
// send post data to go api  and get token in response 
const handleLogin = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:10000/login";
    fetch(apiUrl, {
        method: 'POST',
        credentials: 'include',
        origin:'http://localhost:3000',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData),
    }).then(response => response.json())
    .then(data => {
        if(data.result == "true") {
            document.cookie = `username=${encodeURIComponent(formData.username)}; max-age=3600;`
            setFormData({
                username: '',
                password: ''
            });
            alert("user logged in");
            setLoggedIn(true);

        } else {    
            alert("wrong username or password");
        }
    })
    .catch( error => {
        console.log("error:", error);
    });
    
};  
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
        }
    })

    return (
        <div className="l">
          
            <form action="" method="POST" autoComplete="off">
                <input value={formData.username} type="text" name="username" placeholder="username" onChange={handleInputs} />
                <input value={formData.password} type="password" name="password" placeholder="password" onChange={handleInputs}/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      );

}





export default Login;