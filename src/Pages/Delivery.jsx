import React, { useState } from 'react'
import DeliveryData from "./DeliveryData"
const Delivery = () => {
  const [data, setData] = useState(DeliveryData);
  return (
    <>
      <div className="container d-none d-xl-block d-lg-block ">
        <div className="row">
       
          {
            data.map((ele)=>{
              return (
                <div className='d-flex justify-content-center align-items-center  mx-1' style={{width:"13.5rem",height:"55px",backgroundColor:"#EAEAE8"}} key={ele.id}>
                  
            <span className='py-2 text-center' ><i className={ele.iconName} style={{fontSize:"1.3rem"}}></i> <span style={{fontSize:"11px",}} className="fw-bold">{ele.title}</span> </span>
          
                </div>
              )
            })
          }

            </div>
          </div>
       
    </>
  )
}

export default Delivery