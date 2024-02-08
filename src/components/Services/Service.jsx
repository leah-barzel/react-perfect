
import './service.css'



function Service({name,price,discription}) {

    return (
      <>
       <div className='service'>
        <h3 >{name}</h3>
        <h4>מחיר: {price}</h4>
        <h5>:תיאור</h5>
        <h5> {discription}</h5>
        </div>
      </>
    )
  }
  
  export default Service