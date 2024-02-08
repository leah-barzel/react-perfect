import { observer } from "mobx-react";
import { useState, useEffect } from 'react'
import Service from "./Service";
import AddMeeting from '../Meeting/AddMeeting';
import DataStore from "../../Stores/DataStore";
import { getServices } from "../../Stores/Server";
import Button from '@mui/material/Button';
import '../Services/Service.css';

const ShowServiceCustomer = (observer(() => {

    const [isAdd, setIsAdd] = useState(false);
    const [servingList, setServingList] = useState(DataStore.services);

    useEffect(() => {
        getServices();
    }, []);
    useEffect(() => {
        setServingList(DataStore.services);
    }, [DataStore.services]);

    const handleAddMeeting = () => {
        setIsAdd(!isAdd);
    }

    return (
        <>
            {isAdd ? <AddMeeting func={handleAddMeeting} ></AddMeeting> : <Button variant="contained" onClick={handleAddMeeting}>לקביעת פגישה</Button>}
            <div className="allServices">
                {servingList.map((service, i) =>
                <Service key={i} name={service.name} price={service.price} discription={service.description}/>
                )}
            </div>
            
        </>
    )
}))

export default ShowServiceCustomer