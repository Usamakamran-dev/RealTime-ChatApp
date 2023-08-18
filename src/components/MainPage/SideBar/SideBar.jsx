import styles from './../MainPage.module.css';
import { useContext, useState, useEffect } from 'react';
import UserProfileNav from './UserProfileNav';
import SearchBar from './SearchBar';
import SingleMessageBlock from './SingleMessageBlock';
import OnlineUser from './OnlineUser';
import { CurrentUserContext } from '../../../context/CurrentUserProvider';
import { getDoc,doc,setDoc,updateDoc,serverTimestamp,onSnapshot} from "firebase/firestore";
import { db } from '../../../firebase';

function SideBar(){
    const [selectedUsersDb,setSelectedUsersDb]=useState([]);
    const [active,setActive]=useState(false);
    const { currentUserData }=useContext(CurrentUserContext);

      // Selected user handler when click on user
     async function selectedUserHandler(userObj){ 
        const combinedUserId=`${userObj.userId}+${currentUserData.userId}`;
        try {
          const response=await getDoc(doc(db,"chats",combinedUserId));
          if(!response.exists()){
            await setDoc(doc(db,"chats",combinedUserId),{messages:[]})
          // Updating selectedUsersChat database
          await updateDoc(doc(db,"selectedUsersChat", currentUserData.userId),{
            [combinedUserId+".userInfo"]:{
              uid:userObj.userId,
              displayName: userObj.displayName,
              photoURL:userObj.photoURL},
            [combinedUserId+".date"]: serverTimestamp()}) 

          await updateDoc(doc(db,"selectedUsersChat", userObj.userId),{
            [combinedUserId+".userInfo"]:{
              uid:currentUserData.userObjId,
              displayName: currentUserData.displayName,
              photoURL:currentUserData.photoURL},
            [combinedUserId+".date"]: serverTimestamp()}) 
         
        }}catch (error) { console.log(error) }
      } 

      useEffect(() => {
        const gettingChats=()=>{
          const unsub=onSnapshot(doc(db,"selectedUsersChat",currentUserData.userId),(doc) => {
              setSelectedUsersDb(doc.data());
        });}
        currentUserData.userId && gettingChats();
        ()=>{
          unsub();
        }
      }, [currentUserData.userId]);


      // When click on individual message block
      // function handleMessageBlock(){
      // }
    return(
        <div className={styles.leftChatBox}>
         <UserProfileNav></UserProfileNav>
         <SearchBar selectedUser={selectedUserHandler}></SearchBar>
         <div className={styles.onlineProfiles}>
              <OnlineUser></OnlineUser>
              <OnlineUser></OnlineUser>
         </div>
         <div className={styles.messages}>
              <h1>Messages<span>20</span></h1>
              <div className={styles.allMessages}>
               {Object.entries(selectedUsersDb)?.map((user,index)=>( <SingleMessageBlock 
             profileImg={user[1].userInfo.photoURL}
             displayName={user[1].userInfo.displayName}></SingleMessageBlock> ))}
             </div>
        </div>
       </div>
    )}

    export default SideBar;