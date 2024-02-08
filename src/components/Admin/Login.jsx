import { useState } from 'react'
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import axios from 'axios'
import './admin.css'
import Stack from '@mui/material/Stack';

 

function Login({func}) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

   const handleLogin = async () => {
    axios.post('http://localhost:8787/login', {
      "name":name,"password":password
    }).then((res) => {
      func()
    }).catch((error) => {
     alert("אחד מהפרטים שבקשת אינו נכון")
      setPassword('')
      setName('')
    })
  }
  return (
    <>
   
   <Stack spacing={2}>
      <TextField  label="שם משתמש" value={name} onChange={(e) => setName(e.target.value)} />
      
      <TextField  label="סיסמא" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

      <Button onClick={handleLogin} variant="contained" >הכנס</Button>
       </Stack>
    </>
  )
}

export default Login