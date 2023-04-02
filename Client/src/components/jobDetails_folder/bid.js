import React,{useState} from 'react'

export default function Bid(props) {
    // const getdata = props.getdata;
    const [price, setPrice] = useState("")
    const [days, setDays] = useState("")
    const [discribe, setDiscribe] = useState("")


    const handlersubmit = (e) => {
        e.preventDefault()
        const data ={
            price:price,
            days:days,
            discribe:discribe
        }
        console.log(data)
        setDiscribe("")
        setPrice("")
        setDays("")
        props.getdata(data)
    }
    return (
        <div>
            <div class="card">
                <div class="card-body1">
                    <h5 class="card-title">Place a Bid on this Project</h5>
                    <hr />
                    <p class="card-text">You can edit your bid until the project is awarded to someone.</p>
                    <br/>
                    {/* <!-- <a href="#" class="btn btn-primary">Button</a> --> */}
                    <form class="row g-3" onSubmit={handlersubmit}>
                        <div class="col-lg-6">
                            <label for="validationDefault01" class="form-label"><h6>Bid price per hour</h6></label>
                            <input
                            value={price}
                            name="amount" 
                            type="number" 
                            class="form-control" 
                            id="validationDefault01" 
                            placeholder="Enter Amount in INR" 
                            required 
                            onChange={(e)=>{setPrice(e.target.value)}}
                            />
                        </div>
                        <div class="col-lg-6">
                            <label for="validationDefault02" class="form-label"><h6>No of days you work?</h6></label>
                            <input 
                            name="days" type="number" 
                            class="form-control" 
                            value={days}
                            id="validationDefault02" 
                            placeholder="Enter number of days" 
                            onChange={(e)=>{setDays(e.target.value)}}
                            required />
                        </div>
                        <div class="col-mb-12">
                            <label for="validationDefault03" class="form-label">Describe your proposal</label>
                            <textarea value={discribe} name="discribe" class="form-control" id="validationDefault03" 
                            onChange={(e)=>{setDiscribe(e.target.value)}}
                            placeholder="What makes you the best candidate for this project?" rows="3" required></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn-skills" type="submit">Place a bid</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
