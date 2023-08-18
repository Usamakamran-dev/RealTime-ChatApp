import styles from './../MainPage.module.css';
import profileImg from './../../../assets/UsamaProfile.png';
import { MdMoreVert , MdVideoCall , MdPhone } from 'react-icons/md';

function ChatBoxHeader(){
     return(
        <div className={styles.chatBoxHeader}>
        <div style={{display: 'flex',columnGap: '1rem', alignItems: 'center' }}>
         <img src={profileImg} alt="Profile-img" />
         <div className={styles.userProfileText}>
          <h1>Usama Kamran</h1>
          <p style={{color: 'var(--primary-color-blue)'}}>typing....</p>
         </div>
         </div>

         <div className={styles.headerIcons}>
         <MdVideoCall className={styles.videoCallIcon}></MdVideoCall>
         <MdPhone className={styles.phoneIcon}></MdPhone>
         <MdMoreVert className={styles.moreIcon}></MdMoreVert>
         </div>

        </div>
     )
}

export default ChatBoxHeader;