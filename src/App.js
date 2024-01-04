import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './controllers/Signup'
import Dashboard from './controllers/dashboard'
import Logout from './controllers/logout'
import homepage from './controllers/homepage'
import Test from './controllers/test'
import Middleware from './controllers/Middleware';

// TODO API MESSAGE text  to numbers and middleware. middleware almost there dont want to retype it on every route but for thats how it is
function App() {
  return (
    <Router>
        <header className="App-header">
          <h1>Auth With react and go</h1>
        </header>
      <Routes>
      <Route path='/' Component={homepage} />
      <Route path='/signup' Component={Signup} />
      <Route path="/dashboard" element={
        <Middleware>
          <Dashboard />
        </Middleware>
      } />
      <Route path="/logout" Component={Logout} />
       <Route path="/test" element={
        <Middleware>
          <Test />
        </Middleware>
       } />
      </Routes>
    </Router>

  );
}

export default App;


/**

 */