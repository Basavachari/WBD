import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          let string = value.style
          return (
            <>
              <div className='box2 d_flex' key={index}>
                <div className='left' style={{backgroundColor:string}}>
                  <h1 style={{color:'white'}}>{value.title}</h1>
                  <p style={{color:'white'}}>{value.desc}</p>
                  {/* <button className='btn-primary'>Visit Collections</button> */}
                </div>
                <div className='right' style={{backgroundColor:string}}>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
