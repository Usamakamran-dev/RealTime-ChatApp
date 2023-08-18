import styles from './../MainPage.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../../firebase';

function Login(){
        const navigation=useNavigate();
        const [error, setError]=useState();
        const formSubmitHandler =async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        // logging in using email and password
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation('/');
        } catch (error){ setError(true) }    
        }
         
    return(
        <div className={styles.signupContainer}>
        <form className={styles.signupform}  onSubmit={formSubmitHandler}>
        <h1>Log In</h1>
        <input type="email" placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password'/>
        <button type='submit'>Log in</button>
        {error && <p style={{color: 'red',fontSize:'0.8rem'}}>Something Went Wrong</p>}
        <h2>Don't have an account? <Link to='/signup'>Signup</Link></h2>
       </form>
        </div>
    )}
    export default Login;