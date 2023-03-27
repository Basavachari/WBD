import React, { useState } from 'react'
// import search from '../search'
import CardList from './CardList'


export default function JobCarts(value) {
    const [query, setQuery] = useState(0)

    const searchHandler = (e) => {
        setQuery(1)
    }
    const [experience, setExperience] = useState(0)
    const [category, setCategory] = useState(0)
    const [type, setType] = useState(0)



    return (
        <div className="container-fluid page-wrapper2">
            <div className="row">
                <div className="col-4">
                    <h3 className="filter">Search Filter</h3><hr />
                    <form >
                        <div class="wrap">
                            <div className="search">
                                <input name="search" type="text" className="searchTerm" placeholder="What are you looking for?" />
                                <button type="button" className="searchButton" onClick={searchHandler}><i className="fa fa-search" /></button> <hr />
                            </div>
                        </div><hr />
                        <div className="filter">
                            <div className="">
                                <strong>Category </strong>
                                <select value={category} name="category" className="selectBar" placeholder="Search by Category" id="category"
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                    }}>
                                    <option value="0" >Select</option>
                                    <option value="all" >All Web,Mobile development</option>
                                    <option value="Web Development">Web development</option>
                                    <option value="Frontend developer">Frontend development</option>
                                    <option value="Backend developer">Backend Development</option>
                                    <option value="Web Designer">Web Designer</option>
                                    <option value="Flutter development">Flutter developer</option>
                                    <option value="UI/UX designers">UI/UX designers</option>
                                </select>
                            </div><hr />
                            <div className="experence">
                                <strong>Experience Level</strong>
                                <br />
                                <label value={experience} onChange={(e) => {
                                    setExperience(e.target.value);
                                }}>
                                    <input name="experience" type="radio" id="entryLevel" value="entry" />
                                    <label htmlFor="entryLevel">Entry Level-$</label><br />
                                    <input name="experience" type="radio" id="intermediateLevel" value="intermediate" />
                                    <label htmlFor="intermediateLevel">Intermediate Level-$$</label><br />
                                    <input name="experience" type="radio" id="expert" value="expert" />
                                    <label htmlFor="expert">Expert Level - $$$</label><br />
                                </label>
                            </div><hr />
                            <div className="jobType">
                                <strong>Job type</strong>
                                <div>
                                    <label value={type} onChange={(e) => {
                                        setType(e.target.value);
                                    }}>
                                        <input type="radio" id="hourly" name="jobType" value="hourly" />
                                        <label htmlFor="hourly"> Paying Hourly</label>
                                        <br />
                                        <input type="radio" id="Fixed" name="jobType" value="fixedPrice" />
                                        <label htmlFor="Fixed">Fixed Prices</label>
                                        <br />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-8 ">
                    <div class="resultstext">
                        <h3 className="h3Tag">Search Results</h3><hr />
                        <CardList cat={category} query={query} exp={experience} type={type} />
                    </div>
                </div>
            </div>
        </div>

    )
}