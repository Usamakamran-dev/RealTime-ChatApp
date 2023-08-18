import styles from './../MainPage.module.css';
import { MdOutlineMic } from 'react-icons/md';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { MdOutlineFileOpen } from 'react-icons/md';
import paperClip from './../../../assets/paperClip.png';

function ChatTypingBox(){
    return(
       <div className={styles.chatBoxFooter}>
        <div className={styles.fileOpenIcon}><img src={paperClip} alt="add file icon" /></div>
        <input type="text" placeholder='Message to Ammar......'/>
         <MdOutlineEmojiEmotions className={styles.emojiIcons}></MdOutlineEmojiEmotions>
         <MdOutlineMic className={styles.micIcon}></MdOutlineMic>
       </div>
    )}

export default ChatTypingBox;