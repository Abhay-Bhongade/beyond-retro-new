import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams,NavLink, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart,addCartWish, removeSelectedProduct, selectedProduct } from "../redux/Action/Action";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Skeleton from "react-loading-skeleton";

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addProduct = (product)=>{
      dispatch(addCart(product))
    }
    const addProductWishlist = (product)=>{
      dispatch(addCartWish(product))
    }



    useEffect(() => {
      const getProductDetail = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
          setProduct(await response.json())
          setLoading(false)
      };
      getProductDetail()
    }, []);

    const Loading = ()=>{
      return (
        <>
        <div className="col-md-6">
        <Skeleton height={400} />
        </div>

        <div className="col-md-6" style={{lineHeight:2}}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{marginLeft:6}} />
        </div>
        </>
      )
    }

    const ShowProduct = ()=>{
      return (
        <>
        <div className="col-md-6">
            <img src={product.image} alt={product.title} height={400} width={400} />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50" >{product.category}</h4>
          <h2 className="display-5">{product.title}</h2>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>
          <button className="btn btn-outline-dark px-4 py-2 mx-1" onClick={()=>addProductWishlist(product)}>Add to WishList</button>
          <NavLink to="/cart"  className="btn btn-dark ms-1 px-3 py-2">Go to Cart</NavLink>
          <button className="btn btn-outline-dark px-4 py-2 mt-3" onClick={()=>navigate("/")}>Continue Shopping</button>
        </div>
        </>
      )
    }

    return (
        <>
        <Navbar />
       <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct /> }
        </div>
       </div>
          
        </>
      );
    }
    <Footer />

export default Product