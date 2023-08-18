import { useState , useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc,doc } from "firebase/firestore";
import { db } from "../firebase";
import auth from "../firebase";

export const CurrentUserContext=createContext();

function CurrentUserProvider(props){
    const [currentUserData,setCurrentUserData]=useState();
    // using useeffect to fetch data from firebase
    useEffect(()=>{
      const gettingCurrentUser=onAuthStateChanged(auth, (user) => {
      if(user){
          try{
            getDoc(doc(db,"users",user.uid))
            .then((doc) => {
                if (doc.exists()) {
                    const userData = doc.data();
                    setCurrentUserData(userData);
                } else { console.log("User not found") }
            })
            }catch(error){console.log(`Retrieving error : ${error}`)}
  }
         });
      // Clean up function   
      return ()=>{
       gettingCurrentUser();
      }
    },[])

    return (
        <CurrentUserContext.Provider  value={ {currentUserData } }>
           { props.children }
        </CurrentUserContext.Provider>
    )}

    export default CurrentUserProvider;