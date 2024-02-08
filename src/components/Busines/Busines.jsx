import { useState } from "react"
import { observer } from "mobx-react";
import BusinesStore from "../../Stores/BusinesStore";
import EditBusines from './EditBusines'
import ShowBusines from "./ShowBusines";

const Busines = (observer(() => {
const [isEdit,setIsEdit]=useState(BusinesStore.isEdit);
    
  const  handleEdit=()=>{
    BusinesStore.markIsEdit()
    setIsEdit(BusinesStore.isEdit);
    }
  
    return (
        <>
        {isEdit?<EditBusines func={handleEdit}></EditBusines>
        :<ShowBusines func={handleEdit}></ShowBusines>}
        </>
    )
}))
export default Busines
