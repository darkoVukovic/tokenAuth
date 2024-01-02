import Register from './register';
import Login from './login';
function auth({auth}) {

    function form(method) {
    
        if(method == "register") {
            return < Register />
        }
        else if (method == "login") {
            return < Login />
        }
        
    }
    
    return (
        <div className={auth.method}>
            <p>{auth.method}</p>
            {form(auth.method)}
        </div>
      );

}

export default auth;