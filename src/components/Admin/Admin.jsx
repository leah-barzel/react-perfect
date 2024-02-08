import { useState } from 'react'
import Login from './Login';
import AdminPage from './AdminPage';

function Admin() {
const [isLogin,setIsLogin]=useState(false);

const handleLogin=()=>{
  setIsLogin(true);
   }

  return (
    <>
    {!isLogin?<Login func={handleLogin}></Login>:<AdminPage></AdminPage>}
    </>
  )
}

export default Admin