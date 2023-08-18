import styles from './../MainPage.module.css';
import chatImg from './../../../assets/UsamaProfile.png';

function ChatMessages(){
    return(
        <div className={styles.chatMessageBox}>
         {/* receiving message */}
         <div className={styles.receivingMessage}>
             <div className={styles.senderImgMessage}>
            <img src={chatImg} alt="receiverImage"/>
            <h1>I am your friend bro....</h1>
            </div>
         <span>11:00 PM</span>      
         </div>
         {/* sending message */}
         <div className={styles.sendingMessage}>
         <div className={styles.receiverImgMessage}>
            <h1>But i dont know you.Who r u?</h1>
            <img src={chatImg} alt="senderImage"/>
            </div>
         <span>11:00 PM</span> 
         </div>         
        </div>
    )}

export default ChatMessages;