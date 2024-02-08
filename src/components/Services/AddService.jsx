import { observer } from "mobx-react";
import { useState } from 'react';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { addService } from "../../Stores/Server";
import Stack from '@mui/material/Stack';
import './service.css'

const AddService = (observer(({ func }) => {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    discription: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    func();
    addService(formData);

  }

  return (
    <>
      <div className="addServiceForm">
        <form onSubmit={handleSubmit} className='form'>
        <Stack direction="column" spacing={2}>
          <TextField label="שם" name="name" value={formData.name} onChange={handleChange} />
        
          <TextField label="מחיר" name="price" value={formData.price} onChange={handleChange}/>
    
          <TextField label="תיאור" name="description" value={formData.description} onChange={handleChange}  />
         
          <Button type='submit' variant="contained">שמור</Button>
        </Stack>
        </form>
      </div>
    </>
  )
}))

export default AddService