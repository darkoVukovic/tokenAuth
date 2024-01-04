import React from 'react';


//TODO fix return value for result to boolean instead string 
/**api call to go to validate user cookies  
 * 
 * 
 * @returns true on successfull validation, false on failed
 */
export function CheckToken() {

  const apiUrl = "http://localhost:10000/checkToken";
  
  return fetch(apiUrl, {
      method: 'POST',
      credentials: 'include',
      origin:'http://localhost:3000',
      headers: {
          'Content-Type': 'application/json',
        },
  }).then(response => response.json())
  .then(data => {
    if(data.result === false) {
      return false
    } else {
      return true;
    }
  })
  .catch( error => {
      console.log(error);
      return false;
  });
}

/** read cookie value by name
 * 
 * @param {name} name of the cookie name 
 * @returns cookie value on success, null if cookie doesnt exist
 */
export function ReadCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if(cookieName == name) {
        return cookieValue
      }
    }
    return null;
  
}