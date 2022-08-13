import React, { useState } from 'react'
import Navbar from './Navbar'
import PayDay from './PayDay'
import NikeData from './NikeData'
import Footer from './Footer'

const Nike = () => {
    const [data, setData] = useState(NikeData);
    return (
        <>
            <Navbar />
            <PayDay />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-center fw-bold' style={{ fontSize: "36px", letterSpacing: "2px" }}>Vintage Nike</h2>
                        <p className='text-center'>Vintage sportswear always looks right, and everyone's favourite sportswear label never fails to deliver. Shop our pick of one-off t-shirts, vintage Nike sweatshirts and hoodies, trainers, jackets and more, for men and women.</p>

                        <h6 className='text-center fw-bold'>Popular Items:</h6>
                        <div className='text-center'> <a href="" className='text-dark mx-2'>Vintage Nike Sweatshirts</a>    |    <a href="" className='text-dark'>Vintage Jackets</a>     |     <a href="" className='text-dark mx-2'>All Brands</a> </div>

                        <div className='text-center mt-4'>  <a href="" className='text-dark border border-dark p-2 text-decoration-none'>Vintage Women's Nike</a> <a href="" className='text-dark border border-dark p-2 text-decoration-none mx-3'>Vintage Men's Nike</a><a href="" className='text-dark border border-dark p-2 text-decoration-none'>All Brands</a> </div>

                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3"></div>

                    {
                        data.map((ele) => {
                            return (
                                <>
                                    <div className="col-md-3 my-2">
                                        <div class="card textContent" style={{ width: "18rem"}} >
                                            <img class="card-img-top" src={ele.img} alt="Card image cap" />
                                            <div class="card-body">
                                                <h5 class="card-title text-center">{ele.title}</h5>
                                                <p class="card-text text-center textdata">${ele.price}</p>
                                                <button className='btn btn-dark col-12 d-none d-sm-block d-md-none'>Add to Cart</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </>
                            )
                        })
                    }
                                        <div className="border border-dark p-2 text-center posAbsolute" style={{width:"8rem",height:"7rem"}}>
                                            <p className='mb-0'><span>Size:</span><span>L</span></p>
                                            <p className='mb-0'><span>Era:</span><span></span></p>
                                            <p className='mb-0'><span>Chest/Bust:</span><span>45</span></p>
                                            <p className='mb-0'><span>$50.00</span></p>
                                        </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Nike