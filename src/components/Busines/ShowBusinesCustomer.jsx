import { observer } from "mobx-react";
import { useEffect } from 'react'
import BusinesStore from "../../Stores/BusinesStore";
import './busines.css'
import { getBusines } from '../../Stores/Server';

const ShowBusinesCustomer = (observer(() => {

  useEffect(() => {
    getBusines();
  }, []);

  return (
    <>
      <div>
        <h1 className="text">{BusinesStore.busines.name}</h1>
        <h4 className="text"> {BusinesStore.busines.description}</h4>
        <h4 className="text">{BusinesStore.busines.owner}</h4>
        <h4 className="text"> {BusinesStore.busines.address}</h4>
        <h4 className="text"> {BusinesStore.busines.phone}</h4>
      </div>
    </>
  )
}))

export default ShowBusinesCustomer

