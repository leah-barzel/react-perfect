import { observer } from "mobx-react";
import { useState } from 'react'
import { TextField} from "@mui/material";
import Button from '@mui/material/Button';
import BusinesStore from "../../Stores/BusinesStore";
import {putBusines} from '../../Stores/Server';
import Stack from '@mui/material/Stack';
import './busines.css'

const EditBusines=(observer(({func})=> {

const [formData, setFormData] = useState(BusinesStore.busines);

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
}

const handleSubmit = (e) => {
  e.preventDefault();
  func();
  BusinesStore.editDeataild(formData);
  putBusines(formData);
  BusinesStore.markIsEdit();
}

    return (
      <>
      <div className="busines">
       <form onSubmit={handleSubmit} >
       <Stack spacing={2}>
       <TextField  label="שם" name="name" value={formData.name} onChange={handleChange} />

       <TextField  label="כתובת" name="address" value={formData.address} onChange={handleChange} />

       <TextField  label="טלפון"name="phone" value={formData.phone} onChange={handleChange} />

       <TextField  label="בעלים" name="owner" value={formData.owner} onChange={handleChange} />

       <TextField  label="תיאור" name="description" value={formData.description} onChange={handleChange} />

       <Button type='submit' variant="contained"> שמור</Button>
       </Stack>
       </form>
       </div>
       
      </>
    )
  }))
  
  export default EditBusines