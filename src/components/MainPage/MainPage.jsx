import styles from './MainPage.module.css';
import SideBar from './SideBar/SideBar';
import ChatBox from './ChatBox/ChatBox';
import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserProvider';
import Loading from '../../assets/loading';

function MainPage(){
    const { currentUserData }=useContext(CurrentUserContext);
    if(!currentUserData){
        return <Loading></Loading>
    }
    return(
        <>
         <div className={styles.container}>
         <SideBar></SideBar>
         <ChatBox></ChatBox>
        </div>
        </>
        )}

        export default MainPage;