import { Table } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { productsReducer } from '../redux/Reducer/Reducer'
import Navbar from './Navbar'

const Cart = () => {

    const [price,setPrice] = useState(0);
    const navigate = useNavigate()
    const state = useSelector((state) => state.productsReducer)

    const total = ()=>{
        let price = 0;
        state.map((ele,k)=>{
            console.log(typeof ele.qty)
            price = ele.price * ele.qty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    console.log(typeof (price));
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                        {
                            state.length ? 
                            <>
                            
                    <div className="col-md-12">
                             <Table>
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.map((product) => {
                                        return (

                                            <>
                                                <tr className='mb-3' key={product.id}>
                                                    <td className='mb-2'>
                                                        <img src={product.image} alt={product.title} height={100} width={120} />
                                                        <span>{product.title.substring(0, 25)}</span>
                                                    </td>

                                                    <td className='my-2'>  <p className="lead">
                                                        ${product.qty * product.price}
                                                    </p></td>

                                                    <td className='my-2 ms-3'>
                                                        <h4>{product.qty}</h4>
                                                    </td>

                                                    <td className='my-2'> <p className="lead">
                                                         ${product.qty * product.price}
                                                    </p></td>


                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>   </div>
                        <div className="col-md-12">
                        <div className='d-flex justify-content-end me-5'>
                        <h5 className='text-end'>Total Amount <br/> $ {Math.round(price)} </h5>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button className='btn btn-outline-success mx-3' onClick={()=>navigate("/")}><i className="fa-solid fa-arrow-left me-3"></i>Continue Shopping</button>
                        <button className='btn btn-primary ps-5 pe-5' onClick={() => navigate("/checkout")}>Check out</button>
                        
                       
                        </div>
                       
                    </div>
                    </>
                        : 
                          <div className="col-md-12">
                            <div className='d-flex justify-content-center align-items-center mt-5 pt-5'> <h4 className='text-center'>Your Cart is Empty</h4> 
                        <button className='btn btn-outline-success mx-3' onClick={()=>navigate("/")}><i className="fa-solid fa-arrow-left me-3"></i>Continue Shopping</button>
                         </div>
                         </div>
                        }
                        </div>
                        
                   

                   

                
            </div>
        </>
    )
}

export default Cart





