import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { productsReducer } from '../redux/Reducer/Reducer'
import Navbar from './Navbar'


const Checkout = () => {

  const [price, setPrice] = useState(0);
  const navigate = useNavigate()
  const state = useSelector((state) => state.productsReducer)

  const total = () => {
    let price = 0;
    state.map((ele, k) => {
      price = ele.price * ele.qty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])


  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, state }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">

            <StripeCheckout
              stripeKey="pk_test_51LVug8SIfPyqudmaXjoPFMeV9ni74Flx82GfH3QC2hzzSXNjdYWcRCUcKpg9vUCPkk53X1CUPOyMRp85MFd5cR8B00U7U7Vfc1"
              token={handleToken}
              amount={price}
              name={price}
              billingAddress
              shippingAddress
            />

          </div>
          <div className="col-md-6">
            <div className="card bg-light mb-3" style={{ "max-width": "18rem" }}>
              <div className="card-header">PRICE DETAILS</div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Price </p> <p className="card-text">$ {price} </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Delivery Charges </p> <p className="card-text text-danger">FREE </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">  <h5 className="card-title">Amount Payable</h5> <h5 className="card-title">${price}</h5> </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );

}

export default Checkout


