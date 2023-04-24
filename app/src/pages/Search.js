
import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import JobCarts from "../components/search/JobCarts";
import "./search.css"
function Search(){
    return(
        <>
        <Header />
        <JobCarts />
        <Footer/>
        </>
    )
}
export default Search