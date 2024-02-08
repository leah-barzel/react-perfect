import Stack from '@mui/material/Stack';
import './meeting.css'

function Meeting({name,phone,email,date,time,type}) {

    return (
      <>
       <div className='meeting'>
       <Stack spacing={2}>
       <h4>  נושא הפגישה </h4>
       <h4>{type}</h4>
        <h5>לקוח: {name}</h5>
        <h5>טלפון: {phone}</h5>
        <h5>{email} :מייל</h5>
        <h5> נקבע ל {time} : {date}</h5>
        </Stack></div>
      </>
    )
  }
  
  export default Meeting