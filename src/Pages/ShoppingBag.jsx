import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';
import { NavLink, Link, useNavigate } from "react-router-dom"
import PayDay from './PayDay';
import Navbar from './Navbar';
import Footer from './Footer';



const ShoppingBag = () => {

    const [amount, setAmount] = useState(0)
    console.log(amount);
    const dispatch = useDispatch();
    const getData = useSelector((state) => state.Reducer.carts)
    console.log(getData);


  
    const Total = () => {
        let price = 0;
        getData.map((ele) => {
            price = ele.price + price * ele.qnty
        })
        setAmount(price);
    }

    useEffect(() => {
        Total();
    }, [Total])

    const navigate = useNavigate();



    return (
        <>
            <Navbar />

            <PayDay />

            <div className="container">
                <div className="row">
                    <div className="mt-3 mb-4"> <span className="text-muted cp" onClick={() => navigate("/")}> Home  | </span>
                        <span>Your Shopping Cart</span></div>
                    <div className="col-md-12">
                        <h2 className="text-center text-uppercase">My Shopping Bag</h2>
                            <Table>
                                <thead>
                                    <tr  style={{borderBottom:"1px solid #ced4da"}}>
                                        <th>PRODUCT</th>
                                        <th>PRICE</th>
                                        <th>QNTY</th>
                                        <th></th>
                                        <th>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        getData.map((ele) => {
                                            return (
                                                <>
                                                    <tr className='my-5' style={{borderBottom:"1px solid #ced4da"}}>

                                                        <td className="mt-5">
                                                            <img src={ele.img} alt="" style={{ widht: "73px", height: "100px" }} />
                                                            <span style={{ fontSize: "18px" }} className="bold">{ele.title}</span>
                                                        </td>

                                                        <td className="fw-bold">
                                                            <p>${ele.price} </p>
                                                        </td>


                                                        <td> <p>{ele.qnty}</p></td>
                                                        <td className="mx-4"><i className="fa-solid fa-xmark mb-3"></i></td>

                                                        <td><p className='ms-4'>${ele.price * ele.qnty} </p></td>

                                                    </tr>
                                                </>
                                            )
                                        })

                                    }
                                    <tr>
                                        <td>Empty Card</td>
                                        <td></td>
                                        <td className='me-5'>SUBTOTAL</td>
                                        <td></td>
                                        <td className='fw-bold ms-2'>${amount}</td>
                                    </tr>
                                </tbody>
                            </Table>

                       


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ShoppingBag