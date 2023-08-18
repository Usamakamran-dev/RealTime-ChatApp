import styles from './../MainPage.module.css';
import profileImg from './../../../assets/UsamaProfile.png';


function OnlineUser(){
    return(
        <div className={styles.onlineUser}>
            <div className={styles.onlineUserImage}>
            <div className={styles.onlineStatusDot}></div>
            <img src={profileImg} alt="profileImg" />
            </div>
            <label>Usama</label>
        </div>
    )
}

export default OnlineUser;