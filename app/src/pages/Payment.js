import React from "react"
import Header from "../common/header/Header"
import Footer from '../common/footer/Footer'
import { useState } from "react";
const Payment = ()=>{
    const [paymentData, setPaymentData] = useState({});
    function handleChange(event) {
      setPaymentData({
        ...paymentData,
        [event.target.name]: event.target.value
      });
    }
    return (
        <><Header /><div style={{ margin: '30px' }}>
            <div className="row">
                <div className="col-md-9">
                </div>
                <div style={{
                    textAlign: 'center',
                    paddingBottom: '10px'
                }} className="card col-md-3">
                    <h3>Submit your work</h3>
                    <input value={paymentData.submitWork} name="submitWork" onChange={handleChange} type="file" multiple required />
                    <br></br>
                    <button
                        className="btn btn-success"
                        style={{
                            display: 'block'
                        }} type="submit">Submit</button>
                </div>
                <div className="payment-form">
                    <h3 style={{ textAlign: "center" }}>Pay for the work</h3>
                    {/* create a payment form*/}
                    <form className="shadow" style={{ padding: '10px' }}>
                        <div className="form-group">
                            <section>
                                <h3>Customer Information</h3>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="firstName">First Name</label>
                                        <input value={paymentData.firstName} name="firstName" onChange={handleChange} type="text" className="form-control" placeholder="First Name" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input value={paymentData.lastName} name="lastName" onChange={handleChange} type="text" className="form-control" placeholder="Last Name" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input value={paymentData.email} name="email" onChange={handleChange} type="text" className="form-control" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-9">
                                        <label htmlFor="address">Address</label>
                                        <input value={paymentData.address} name="address" onChange={handleChange} type="text" className="form-control" placeholder="Address" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="country">Country</label>
                                        <input value={paymentData.country} name="country" onChange={handleChange} type="text" className="form-control" placeholder="Country" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="city">Town/city</label>
                                        <input value={paymentData.city} name="city" onChange={handleChange} type="text" className="form-control" placeholder="Sri city" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="state">State</label>
                                        <input value={paymentData.state} name="state" onChange={handleChange} type="text" className="form-control" placeholder="State" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="zip">Zip</label>
                                        <input value={paymentData.zip} name="zip" onChange={handleChange} type="text" className="form-control" placeholder="Zip" required />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h3 style={{ paddingTop: "10px" }}>Payment Information</h3>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="cardName">Name on card</label>
                                        <input value={paymentData.nameOnCard} name="nameOnCard" onChange={handleChange} type="text" className="form-control" placeholder="Name on card" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="cardNumber">Credit card number</label>
                                        <input value={paymentData.cardNumber} name="cardNumber" onChange={handleChange} type="text" className="form-control" placeholder="Credit card number" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="expDate">Expiration</label>
                                        <input value={paymentData.expDate} name="expDate" onChange={handleChange} type="text" className="form-control" placeholder="Expiration" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="cvv">CVV</label>
                                        <input value={paymentData.cvv} name="cvv" onChange={handleChange} type="text" className="form-control" placeholder="CVV" required />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h3 style={{ paddingTop: "10px" }}>Shipping Address</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="billingName">Billing Name</label>
                                        <input value={paymentData.billingDate} name="billingDate" onChange={handleChange} type="text" className="form-control" placeholder="Billing Name" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="country">Select country</label>
                                        <input value={paymentData.country1} name="country1" onChange={handleChange} type="text" className="form-control" placeholder="Select Country" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="address">Address</label>
                                        <input value={paymentData.address1} name="address1" onChange={handleChange} type="text" className="form-control" placeholder="Address" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="city">city</label>
                                        <input value={paymentData.city1} name="city1" onChange={handleChange} type="text" className="form-control" placeholder="city" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="state1">state</label>
                                        <input value={paymentData.state1} name="state1" onChange={handleChange} type="text" className="form-control" placeholder="state" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="zip">zip</label>
                                        <input value={paymentData.zip1} name="zip1" onChange={handleChange} type="text" className="form-control" placeholder="zip" required />
                                    </div>
                                </div>
                                <button type="submit"
                                    // onClick={(e)=>{ e.preventDefault();console.log(paymentData)}} 
                                    className="btn btn-success" style={{ display: "block" }}>Pay Now</button>


                            </section>
                        </div>
                    </form>


                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Payment;