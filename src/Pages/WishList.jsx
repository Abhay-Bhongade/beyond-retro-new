import { Table } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { wishListReducer } from '../redux/Reducer/WishListReducer'
import Navbar from './Navbar'
const WishList = () => {

    const mystate = useSelector((state) => state.wishListReducer)

   const navigate = useNavigate()
    return (
        <>
        <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            mystate.length ? <Table>
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
                                    mystate.map((product) => {
                                        return (

                                            <>
                                                <tr className='mb-3' key={product.id}>
                                                    <td className='my-2'>
                                                        <img src={product.image} alt={product.title} height={100} width={120} />
                                                        <span>{product.title.substring(0, 25)}</span>
                                                    </td>

                                                    <td className='my-2'>  <p className="lead">
                                                        ${product.qty * product.price}
                                                    </p></td>

                                                    <td className='my-2'>
                                                        <h3>{product.qty}</h3>
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
                            <div className='d-flex justify-content-start mt-5 pt-5'><button className='btn btn-outline-success' onClick={()=>navigate("/")}><i className="fa-solid fa-arrow-left me-3"></i>Continue Shopping</button></div>
                        </Table>
                       
                        
                        :  <div className='d-flex justify-content-center align-items-center mt-5 pt-5'> <h4 className='text-center'>Your Wishlist is Empty</h4> 
                        <button className='btn btn-outline-success mx-3' onClick={()=>navigate("/")}><i className="fa-solid fa-arrow-left me-3"></i>Continue Shopping</button>
                         </div>
                        }
                        
                    </div>

                </div>
               
            </div>
        </>
    )
}

export default WishList





