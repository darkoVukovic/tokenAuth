import Navigation from './Navigation';

// TODO make middleware somehow 
 function homepage() {
    const navigationItems = [
        {name: "Home", path:'/'},
        {name: "dashboard", path:'/dashboard'},
        {name: "logout", path: "/logout"}

      ];

    return (
        <div>
            <aside>
             <Navigation links={navigationItems} />
            </aside>
        </div>
    )
}


export default homepage;