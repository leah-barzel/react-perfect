



function ServiceChoise({name,price,discription}) {

    return (
      <>
       <div>
        <h3 >{name}</h3>
        <h4>מחיר: {price}</h4>
        <h5>:תיאור</h5>
        <h5> {discription}</h5>
        </div>
      </>
    )
  }
  
  export default ServiceChoise