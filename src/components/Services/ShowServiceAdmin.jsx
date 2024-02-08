import { observer } from "mobx-react";
import { useState, useEffect } from 'react'
import Service from "./Service";
import AddService from "./AddService";
import DataStore from "../../Stores/DataStore";
import { getServices } from "../../Stores/Server";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Service.css'

const ShowServiceAdmin = (observer(() => {
    const [isAdd, setIsAdd] = useState(false);
    const [servingList, setServingList] = useState(DataStore.services);

    useEffect(() => {
        getServices();
    }, []);
    useEffect(() => {
        setServingList(DataStore.services);
    }, [DataStore.services]);

    const handleAddService = () => {
        setIsAdd(!isAdd);
    }

    return (
        <>
           
                <div className="allServices">
                {isAdd ? <AddService func={handleAddService}></AddService>
                 :
                 <Button variant="contained" onClick={handleAddService} className="center">הוסף שירות</Button>}
                </div> 
                <div className="allServices">
                {servingList.map((service, i) =>(
                <Service key={i} name={service.name} price={service.price} discription={service.description}/>
                ))}
                </div>    
           
        </>
        )
    
  
}))

export default ShowServiceAdmin


