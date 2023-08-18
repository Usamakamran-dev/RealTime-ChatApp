import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/MainPage/LoginSignup/Login';
import Signup from '../components/MainPage/LoginSignup/Signup';
import MainPage from '../components/MainPage/MainPage';


const router=createBrowserRouter([
    {path: '/' , element: <MainPage></MainPage>},
    {path: '/login' , element: <Login></Login>},
    {path: '/signup' , element: <Signup></Signup>}
])

export default router;