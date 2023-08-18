import styles from './../MainPage.module.css'
// import profileImg from './../../../assets/UsamaProfile.png'

function SingleMessageBlock(props){
    return(
        <div className={styles.singleMessageBlock} onClick={props.onClick}>
         <div className={styles.profileInfoMsg}>
         <div className={styles.onlineUserImage}>
            {/* <div className={styles.onlineStatusDot}></div> */}
            <img src={props.profileImg} alt="profileImg" />
            </div>
         <div className={styles.singleMessageInfo}>
          <h2>{props.displayName}</h2>
          <p>Hello! brother how are you</p>
         </div>
         </div>

         <div className={styles.msgDateBox}>
            <div className={styles.activeMessageBoxes}>
             <div></div>
             <div></div>
            </div>
            <label>1:00 PM</label>
         </div>
        </div>
    )
}

export default SingleMessageBlock;