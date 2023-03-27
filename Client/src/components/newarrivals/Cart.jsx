import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box2' key={index}>
              <div className='img2' style={{height:'170px'}}>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
