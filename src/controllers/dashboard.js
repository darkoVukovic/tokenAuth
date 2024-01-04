import { ReadCookie } from './myFunctions';
import Navigation
from './Navigation';
function Dashboard() {


  const navigation = [
    {name: "home", path:'/'},
    {name: "dashboard", path:'/dashboard'},
    {name: "logout", path: "/logout"}
  ]
    return (
      <div className="dashboard">
        <aside>
        <Navigation links={navigation} />
        </aside>
        <div>
        <h1>dashboard</h1>
        <p>welcome: {ReadCookie('username')}</p>
        </div>
      </div>
      );

}





export default Dashboard;