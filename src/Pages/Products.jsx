import React, { useState, useEffect } from 'react'
import Skeleton from "react-loading-skeleton"
import { NavLink } from "react-router-dom"


const Products = () => {


    const [data, setData] = useState([])
    const [filters, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState("")
    console.log(filters);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products")

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json())
                setLoading(false)
                console.log(filters);
            }
            return () => {
                componentMounted = false;
            }

        }
        getProducts()
    }, [])

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

    const lToHigh = () => {
        const lowtoHigh = data?.sort((a, b) => (a.price > b.price ? 1 : -1))
        setFilter(lowtoHigh)
    }

    const hToLow = () => {
        const hightoLow = data?.sort((a, b) => (a.price > b.price ? -1 : 1))
        setFilter(hightoLow)
    }

    console.log(filters);






    return (
    <>

            <div className="container my-5 py-5">

                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className='display-6 fw-bolder text-center'>Latest Products</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 my-4">
                        <div className="d-flex justify-content-center align-items-center bg-white ps-3 pr-5 mx-2 ms-3 border border-info pt-0 pb-0 inpBoxW"> <i className="fa-solid fa-magnifying-glass me-3"></i>
                            <input className="form-control me-2  border-0 inpuField p-0" type="text" placeholder="Search" onChange={(e) => setSearchTitle(e.target.value)} />
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <div className='buttons d-flex justify-content-center mb-3'>
                            <button className='btn btn-outline-dark me-2 px-4' onClick={() => setFilter(data)}>All </button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <div className='buttons d-flex justify-content-center mb-5'>
                            <button className='btn btn-outline-dark me-2 px-4' onClick={()=>lToHigh()}>Low to High</button>
                            <button className='btn btn-outline-dark me-2' onClick={()=>hToLow()}>High to Low</button>
                        </div>
                    </div>
                </div>



                <div className="row">
                    {

                        loading ? (
                            <h4> Loading...</h4>
                        ) : (
                            filters.filter((value) => {
                                if (searchTitle === "") {
                                    return value
                                } else if (value.title.toLowerCase().includes(searchTitle.toLowerCase()) || value.category.toLowerCase().includes(searchTitle.toLowerCase()))
                                 {
                                    return value
                                }
                            }).map((product) => {
                                return (
                                    <>

                                        <div className="col-md-3 col-6 my-3">

                                            <div className="card h-100 p-4 text-center" key={product.id} style={{ "width": "250px" }}>
                                                <img src={product.image} className="card-img-top" alt={product.title} height={250} />
                                                <div className="card-body">
                                                    <h5 className="card-title mb-0">{product.title.substring(0, 25)}...</h5>
                                                    <p className="card-text lead fw-bold">${product.price}</p>
                                                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )

                            }


                            )

                            )}
                        </div >
                        
                        
                        
                        
                            
                            
                            
                            
                            
                            
            </div>

            </>
            )
            





}

            export default Products

