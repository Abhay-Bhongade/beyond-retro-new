import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';
import { NavLink, Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [amount, setAmount] = useState(0)
    console.log(amount);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const dispatch = useDispatch();
    const state = useSelector((state) => state.productsReducer)
    const mystate = useSelector((state) => state.wishListReducer)
    // console.log(getData);


    // const Total = () => {
    //     let price = 0;
    //     getData.map((ele) => {
    //         price = ele.price + price * ele.qnty
    //     })
    //     setAmount(price);
    // }

    // useEffect(() => {
    //     Total();
    // }, [Total])


    const navigate = useNavigate()

    const LoginPage = ()=>{
        navigate("/login")
    }

    const WishListPage = ()=>{
        navigate("/wishlist")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">


                    <div className='navbar-brand'>
                         <NavLink to="/"> <img src="/assests/Website_Logo2.webp" alt="Beyond Retro" width={237} height={59} />
                    </NavLink>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='d-flex flex-column  justify-content-start align-item-center '>
                            <div className='d-flex justify-content-end align-item-center navbar-nav'>

                                <div className="d-flex justify-content-between align-items-center my-2 dDis">
                                    <span className='border border-dark p-2 texts fw-bold text-center'>BEST OF WOMEN'S</span>
                                    <span className='border border-dark p-2 texts fw-bold text-center ms-5'>BEST OF MEN'S</span>
                                </div>

                                <div className="d-flex justify-content-center align-items-center bg-white ps-3 pr-5 mx-2 ms-3 border border-info pt-0 pb-0 inpBoxW"> <i className="fa-solid fa-magnifying-glass me-3"></i>
                                    <input className="form-control me-2  border-0 inpuField p-0" type="search" placeholder="Search" aria-label="Search" />
                                </div>

                                {/* <select className="form-select mx-2 py-0 dNot" aria-label="Default select example " style={{ height: "40px" }}>
                                    <option value="1">AUD $</option>
                                    <option value="2">CAD $</option>
                                    <option value="3">EUR €</option>
                                    <option value="4" defaultValue={"1"}>GBP £</option>
                                    <option value="5">SEK kr</option>
                                    <option value="5">USD $</option>
                                </select> */}

                                <div className='mx-2 d-flex flex-column justify-content-center align-items-center dNot'>
                                <i className="fa-solid fa-heart"></i>
                                    <p className='headerP' onClick={WishListPage}>My WishList ({mystate.length})</p>
                                </div>

                                <div className='mx-2 d-flex flex-column justify-content-center align-items-center dNot'>
                                    <i className="fa-solid fa-user"></i>
                                    <p className='headerP' onClick={LoginPage}>LOG IN</p>
                                </div>

                                <div className='mx-2 d-flex flex-column justify-content-center align-items-center p-0 borAdded dNot'>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    <p className='headerP' onClick={()=>navigate("/cart")}>CART ({state.length})</p>
                                    {/* <div>
                                        <Button
                                            id="basic-button" className="p-0"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >

                                            <p className='headerP'>Bag( {getData.length})</p>
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >

                                            {
                                                getData.length ?
                                                    <div style={{ minWidth: "25rem", padding: "20px", position: "relative" }} >
                                                        <Table>
                                                            <thead>

                                                            </thead>
                                                            <tbody>
                                                                {

                                                                    getData.map((ele) => {
                                                                        return (
                                                                            <>
                                                                                <tr className='my-5'>
                                                                                    <td className="mt-5">
                                                                                        <NavLink to={`/cart/${ele.id}`} onClick={handleClose}>    <img src={ele.img} alt="" style={{ widht: "4rem", height: "4rem" }} />
                                                                                        </NavLink>
                                                                                    </td>
                                                                                    <td className="fw-bold mx-3" style={{ fontSize: "13px" }}> <span>{ele.title}</span>
                                                                                        <p className='ms-4 mb-0'>${ele.price * ele.qnty} </p>
                                                                                        <p className='ms-4'>Quantity : {ele.qnty}</p>
                                                                                    </td>

                                                                                    <td className="ms-2"><i className="fa-solid fa-xmark"></i></td>
                                                                                </tr>
                                                                            </>
                                                                        )
                                                                    })

                                                                }

                                                                <tr id="tdAbs">
                                                                    <td><i className="fa-solid fa-xmark" onClick={handleClose}></i></td></tr>
                                                            </tbody>
                                                        </Table>

                                                        <p className='text-end fw-bold'>Total:${amount}</p>
                                                        <button className='btn btn-warning col-12 fw-bold' style={{ fontSize: "13px" }} onClick={()=>navigate("/shoppingPage")}>VIEW BAG / CHECK OUT NOW</button>
                                                    </div> : <div className="cardDetails">
                                                        <div style={{ width: "18rem", padding: "10px", position: "relative" }}>
                                                            <p className='text-center p-0'>Your Cart is Empty!</p>
                                                            <i className="fa-solid fa-xmark cp" onClick={handleClose} style={{ position: "absolute", top: "4px", right: "19px" }}></i>
                                                        </div>
                                                    </div>
                                            }




                                        </Menu>
                                    </div> */}

                                </div>
                            </div>





                            <ul className="d-flex justify-content-between align-item-center dNot">
                                <li className="nav-item">
                                    <a className="nav-link active text-danger" aria-current="page" href="#">SALE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">NEW IN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WOMEN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">MEN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">KIDS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BRANDS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SPORTS WEAR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">DENIM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BLOG</a>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>

            </nav>

        </ >
    )
}

export default Navbar








