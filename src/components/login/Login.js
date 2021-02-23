import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth =>{
            if(auth){
                history.push('/')
            }
        }).catch(error =>{
            alert(error.message)
        })
    }
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(auth =>{
            if(auth){
                history.push('/');
            }
        }).catch(error =>{
            alert(error.message)
        })
    }
    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204"
            alt="amazon logo"
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="login__signinButton" onClick={signIn} type="submit">Sign In</button>
          </form>
          <p>by signin you agree to our policy</p>
          <button className="login__RegisterButton" onClick={register} type="submit" >
            Create your amazon account
          </button>
        </div>
      </div>
    );
}

export default Login
