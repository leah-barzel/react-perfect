import { observer } from "mobx-react";
import { useEffect } from 'react'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import BusinesStore from "../../Stores/BusinesStore";
import './busines.css'
import { getBusines, putBusines } from '../../Stores/Server';

const ShowBusines = (observer(({ func }) => {
    
    useEffect(() => {
        putBusines(BusinesStore.busines);
        getBusines();
    }, []);

    const handleEdit = () => {
        func();
    }

    return (
        <>
            <div className="h1">
                <div className="edit"><Fab aria-label="edit" onClick={handleEdit}> <EditIcon />  </Fab></div>
                <h1 className="text">{BusinesStore.busines.name}</h1>
                <h3 className="text"> {BusinesStore.busines.description}</h3>
                <h3 className="text">{BusinesStore.busines.owner}</h3>
                <h3 className="text"> {BusinesStore.busines.address}</h3>
                <h3 className="text"> {BusinesStore.busines.phone}</h3>
            </div>
        </>
    )
}))


export default ShowBusines