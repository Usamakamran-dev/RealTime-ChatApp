import { useContext } from 'react';
import styles from './../MainPage.module.css';
import gptLogo from './../../../assets/chatgpt.png';
import { MdMoreVert } from 'react-icons/md';
import { CurrentUserContext } from '../../../context/CurrentUserProvider';

function UserProfileNav(){
    const { currentUserData }=useContext(CurrentUserContext);
    return(
        <div className={styles.userProfile}>
        <div style={{display: 'flex',columnGap: '1rem', alignItems: 'center' }}>
        <img src={currentUserData.photoURL} alt="Profile-img" />
        <div className={styles.userProfileText}>
         <h1>{currentUserData.displayName}</h1>
         <p>{currentUserData.occupation}</p>
        </div>
        </div>
        <div className={styles.userProfileIcons}>
        <div className={styles.gptLogo}><img src={gptLogo} alt="" /></div>
        <MdMoreVert className={styles.moreIcon}></MdMoreVert>
        </div>
      </div>
    )
}

export default UserProfileNav;