
import React from "react"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Fdata from "./Fdata";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  const NoCard = ( ) => {
    
    
    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
    // }
  
   
    return (
      <>
       <Carousel responsive={responsive} >
          
          {Fdata.map((pdi) => {
            return (
              
                <div className="ui card" style={{width:'225px', zIndex:'100'}} >
                <div className="image" >
                  <img alt="avatar" src={pdi.img} style={{height:'140px', width:'225px'}}/>
                </div>
                <div className="content">
                  <img className="ui avatar image" src={pdi.avatar} />
                  &nbsp; {pdi.name}
                  {/* <div class="meta">
                    <span class="date" style={{fontWeight:"900", color:"#9d2c3f"}}>{pdi.job}</span>
                  </div> */}
                  <div class="description" style={{fontSize:"15px", paddingBottom:"8px"}}>{pdi.desc}</div>
                  <div className="content" style={{marginTop:'-3px', display:'flex'}}>
                    <div>
                    <i className="fa-solid fa-star" style={{color:'#02c2a9'}}></i>

                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                  <p style={{color:"#02c2a9"}}>{pdi.rating}</p> &nbsp;({pdi.peopleRated})
                      </div>                    
                    
                  </div>
                </div>
                {/* <div className="extra content">
                  <i className="fa-solid fa-heart" style={{marginRight:'3px'}}></i>
                  <i className="fa-solid fa-bars"></i>
                  
                  <div className="right floated">
                    <div className="meta">STARTING AT</div>
                    <p style={{fontSize:"20px",fontWeight:"900",color:"black"}} className="modify">{pdi.amount}</p>
                  </div>
                </div> */}
              </div>
              
            )
          })}
       </Carousel>
      </>
    )
  }
  
  export default NoCard