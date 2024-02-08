
import { useState } from 'react'
import { observer } from 'mobx-react';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { addMeeting} from '../../Stores/Server';
import Stack from '@mui/material/Stack';



const AddMeeting=(observer(({func})=> {

  const [formData, setFormData] = useState({ type: '', name: '', phone: '', email: '', date: '',  time: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    func();
    addMeeting(formData);
    
  }
  return (
    <>
   
       <div className='allservices'>
        <form onSubmit={handleSubmit} className='form'>
           <Stack direction="column" spacing={2}>  
          <TextField label="סוג הפגישה" name="type" value={formData.type} onChange={handleChange} />

          <TextField label="שם" name="name" value={formData.name} onChange={handleChange} />
      
          <TextField label="טלפון" name="phone" value={formData.phone} onChange={handleChange} />
        
          <TextField label="מייל" name="email" value={formData.email} onChange={handleChange} />
    
          <TextField label="תאריך" type="date" name="date" value={formData.date} onChange={handleChange} />
    
          <TextField label="שעה" type="time" name="time" value={formData.time} onChange={handleChange} />
        
          <Button type='submit' variant="contained" >שמור</Button>   
          </Stack>
        </form>
      </div> 
   
    </>
  )
}))

export default AddMeeting
