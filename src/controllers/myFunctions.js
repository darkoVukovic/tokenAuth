import React, { useEffect, useState } from 'react';


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
    if(data.result == "false") {
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