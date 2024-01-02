import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './controllers/homepage'
import Dashboard from './controllers/dashboard'
import Logout from './controllers/logout'


function App() {
  return (
    <Router>
        <header className="App-header">
          <h1>Auth With react and go</h1>
        </header>
      <Routes>
      <Route path='/' Component={Homepage} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/logout" Component={Logout} />
      </Routes>
    </Router>

  );
}

export default App;


/**

 */