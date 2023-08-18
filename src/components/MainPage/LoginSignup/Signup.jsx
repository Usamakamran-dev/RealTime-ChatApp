import styles from './../MainPage.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { storage } from './../../../firebase';
import { db } from './../../../firebase';
import auth from './../../../firebase';
import addFileIcon from './../../../assets/addImg.png'

function Signup(){
    const navigation=useNavigate();
    const [error, setError]=useState();
    const formSubmitHandler =async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const occupation=e.target[3].value;
        const formFile = e.target[4].files[0];
        if (displayName && email && password && formFile && occupation){
            try{
                // Authentication of email and password
                const response= await createUserWithEmailAndPassword(auth, email, password);
                // Uploading file to storage
               const storageRef = ref(storage, displayName);
               const uploadTask = uploadBytesResumable(storageRef,formFile).then(() => 
               { getDownloadURL(storageRef).then(async(downloadURL) => {
                // Updating user profile
                await updateProfile(response.user,{
                    displayName,
                    photoURL: downloadURL
                });
                // Setting up the firestore Database
                await setDoc(doc(db,"users",response.user.uid),{
                    userId: response.user.uid,
                    displayName,
                    email,
                    photoURL:downloadURL,
                    occupation:occupation
                  });
                //  Setting up the firestore database for users selected from search input
                await setDoc(doc(db,"selectedUsersChat",response.user.uid),{}); 
               });
               })
               // Using use navigate to go to login page after all the process is done
               navigation('/login');
               }
               catch(error){ setError(true) }
        }}
       
    return(
        <div className={styles.signupContainer}>
        <form className={styles.signupform} onSubmit={formSubmitHandler}>
        <h1>Sign Up</h1>
        <div className={styles.signupInputFields}>
        <input type="text" placeholder='Enter Name' />
        <input type="email" placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password'/>
        <input type="text" placeholder='Enter your occupation' />
        <input style={{display: 'none'}} type="file"  accept="image/*" id='file'/>
        <div className={styles.signupImage}>
        <img src={addFileIcon} alt="Signup Image" />
        <label htmlFor="file">Select Image</label>
        </div>
        </div>
        <button type='submit'>Sign up</button>
        {error && <p style={{color: 'red',fontSize:'0.8rem'}}>Something Went Wrong</p>}
        <h2>Already have an account? <Link to='/login'>Log in</Link></h2>
        </form>
        </div>
        )}

    export default Signup;