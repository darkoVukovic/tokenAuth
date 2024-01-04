import React, { useState } from 'react';

// TODO maybe add email verification and make username unique with email
function Register() {

        const [formData, setFormData] = useState({
            username: '',
            email: '',
            password: ''
        });
    

    const handleInputs = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    //
    function validateEmail (email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
      }

      // TODO env  or ext file for urls 
    const handleRegistration = (e) => {
        e.preventDefault();
        if(!validateEmail(formData.email))  {
            alert('enter a valid  email');
            return;
        }
        const apiUrl = "http://localhost:10000/register";
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formData),
        }).then(response => response.json())
        .then(data => {
            if(data.result) {
                setFormData({
                    username: '',
                    email: '',
                    password: ''
                });
                alert("user registered");
            }
        })
        .catch( error => {
            console.error("error", error);
        });
        
    };
    return (
        <div className="r">
            <form action="" method="POST" autoComplete="off">
                <input value={formData.email}  type="email"  name="email" placeholder="email"  onChange={handleInputs}/>
                <input value={formData.username} type="text" name="username" placeholder="username" onChange={handleInputs}/>
                <input value={formData.password} type="password" name="password" placeholder="password"  onChange={handleInputs}/>
                <button onClick={handleRegistration}>Register</button>
            </form>
        </div>
      );

}

export default Register;