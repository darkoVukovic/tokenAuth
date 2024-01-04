import React, { useState, useEffect } from 'react';
import Modal from './modal';
import Middleware from './Middleware';

function Signup() {


    return (
        <Middleware page="signup">
      <div className="App">
        <main>
        < Modal />
        </main>
      </div>
      </Middleware>
      );

}
    




export default Signup;