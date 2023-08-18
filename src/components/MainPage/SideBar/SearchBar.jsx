import { useState } from "react";
import styles from './../MainPage.module.css';
import { collection,getDocs } from "firebase/firestore";
import { MdSearch } from "react-icons/md";
import { db } from "../../../firebase";

function SearchBar(props){
    const [searchedUser,setSearchedUser]=useState();
    const [matchedUsers,setMatchedUsers]=useState([]);
    const [showList,setShowList]=useState(false);

    async function handleFilter(){
        if(searchedUser){  
          try {
            const userDatabase = await getDocs(collection(db, "users"));
            const newMatchedUsers = [];
            userDatabase.forEach((doc) => {
              const completeDbData=doc.data();
              const dbUserName = completeDbData.displayName;
              const matchedUserExists = newMatchedUsers.some(user => user.displayName === dbUserName);
              if (dbUserName.toLowerCase().startsWith(searchedUser.toLowerCase().substring(0, 4))
                  && !matchedUserExists)
              {
                newMatchedUsers.push(completeDbData);
              }
            });
            setMatchedUsers(newMatchedUsers);
         } catch (error) { console.log(`unable to find user ${error}`) }
        }}
      // getting the value of search input
      const userSearchHandler=(e)=>{
        const enteredUser=e.target.value;
        if(enteredUser.trim() === "")
        {
            setShowList(false);
        }else{ setShowList(true); }
        setSearchedUser(enteredUser);
        handleFilter(); 
      }

    return(
        <div className={styles.searchBarContainer} >
        <div className={styles.searchBar}>
          <MdSearch className={styles.searchIcon}></MdSearch>
          <input type="search" placeholder='Search or start new chat....' onClick={()=> setShowList(true)}
          onChange={userSearchHandler} />
        </div>
        {/* Getting matched user */}
        <div className={styles.matchedUsers}>
        {showList? matchedUsers.map((userObj,index)=>(
          <p onClick={() => props.selectedUser(userObj)} id={index}>{userObj.displayName}</p> )) 
          : ''}
        </div>
        </div>
    )}

    export default SearchBar;