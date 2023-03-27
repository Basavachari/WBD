import React from "react"
import "./Home.css"
import SliderHome from "./Slider"
import Welcome from "./Welcome"
const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container2 d_flex'>
          <Welcome />
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
