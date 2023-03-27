import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container2 d_flex'>
          <div className='img2' style={mystyle}>
            <img src='./images/banner-1.png'  />
          </div>
          <div className='img2' style={mystyle1}>
            <img src='./images/banner-2.png'  />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
