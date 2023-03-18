 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends React.Component {

    render(){
      return(
        <div>
        <title>Geek's Hub Login Page</title>
        <link rel="stylesheet" type="text/css" href="login%20style.css" />
        <div className="container">
          {/* Picture at mid-left */}
          <div style={{position: 'absolute', top: '100px', left: '200px'}}>
            <img src="Group_3.png" alt="Geek's Hub Logo" style={{width: '350px', height: 'auto'}} />
            {/* Register link */}
            <p>If you don't have an account registered <br /> you can <a href="#">Register here!</a></p>
          </div>
          {/* Sign in form on the right */}
          <form style={{position: 'absolute', top: '100px', left: '900px', border: 'none'}}>
            <h1 style={{marginRight: '241px', fontWeight: 'lighter'}}>Sign in</h1>
            <input type="text" id="username" name="username" placeholder="Enter email or Username" required style={{borderRadius: '10px', padding: '10px', width: '350px', marginBottom: '25px',backgroundColor:'rgba(169, 164, 255, 0.3)'}} />
            <div style={{position: 'relative'}}>
              <input type="password" id="password" name="password" placeholder="Password" required style={{borderRadius: '10px', paddingRight: '40px', width: '350px'}} />
              <button type="button" className="toggle-password" onclick="togglePasswordVisibility()" style={{borderRadius: '10px', position: 'absolute', top: 0, right: 0, margin: '5px', height: 'calc(100% - 10px)'}}>Show</button>
            </div>
            <p style={{fontSize: '12px'}} className="forgot-password"><a style={{color: 'rgba(71,72,92,0.63)', textDecoration: 'none'}} href="#">Forgot password?</a></p>
            <input type="submit" defaultValue="Login" style={{borderRadius: '10px', padding: '20px', width: '350px', height: '50px', marginTop: '40px', backgroundColor: '#735671'}} />
            {/* Forgot password link */}
          </form>
          {/* Picture in the middle */}
          <div style={{position: 'absolute', top: '250px', left: '650px'}}>
            <img src="Saly-14.png" alt="Geek's Hub Banner" style={{width: '250px', height: 'auto'}} />
          </div>
        </div>
      </div>  
        )
    }
}