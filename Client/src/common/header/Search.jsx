import React from "react"
import { useState } from "react"
import logo from "../../components/assets/images/logofinal.svg"
import {Link} from 'react-router-dom'
const Search = () => {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search")
  //   search.classList.toggle("active", window.scrollY > 100)
  // })
  // const [query, setQuery] = useState(0)

  // const searchHandler = (e) => {
  //     setQuery(1)
  // }
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to="/main">
            <img src={logo} alt='' />
            </Link>
          </div>

          <div className='search-box f_flex'>
          <Link to="/search">
            <i className='fa fa-search'></i>
            </Link>
            <input type='text' placeholder='What service are you looking for today?' />
          </div>
          <div className="noti f_flex">
          <i className="fa  fa-light fa-bell icon-circle " style={{fontSize:'20px'}} ></i>
          </div>
          <div className="noti f_flex">
          <i className="fa fa-light fa-envelope icon-circle" ></i>
          </div>
          <div className='noti f_flex'>
          <Link to="/profile">
            <i className='fa fa-user icon-circle'></i>
            </Link>
          
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
