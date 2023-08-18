import styles from './../MainPage.module.css';
import ChatBoxHeader from './ChatBoxHeader';
import ChatTypingBox from './ChatTypingBox';
import ChatMessages from './ChatMessages';

function ChatBox(){
    return(
        <div className={styles.chatBox}>
        <ChatBoxHeader></ChatBoxHeader>
        <ChatMessages></ChatMessages>
        <ChatTypingBox></ChatTypingBox>
      </div>
    )
}

export default ChatBox;