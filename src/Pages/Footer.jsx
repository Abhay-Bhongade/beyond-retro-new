import React, { useEffect, useState } from 'react'
import CustomorData from './CustomorData'
import Company from './Company'
import Information from './Inforamation'
import IconData from './IconData'
import {useForm} from  "react-hook-form"


const Footer = () => {
    const [data, setData] = useState(CustomorData);
    const [item, setItem] = useState(Company);
    const [info, setInfo] = useState(Information);
    const [icons, setIcons] = useState(IconData);

    const {register,handleSubmit, formState:{errors}} = useForm()   

    useEffect(()=>{
        if(Object.keys(errors).length === 0){
            console.log("You Subscribe Successfully");
        }
    },[errors])

    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <>
         <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container py-md-5 py-3">
                <div className="row">
                    <div className="col-md-2 text-center my-md-4">
                        <h6 className='Ftitle'>CUSTOMER CARE</h6>
                        {
                            data.map((ele) => {
                                return (
                                    <div key={ele.id}>

                                        <p className='ftext'>{ele.title}</p>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="col-md-2 my-4 text-center">
                        <h6 className='Ftitle'>INFORMATION</h6>
                        {
                            item.map((ele) => {
                                return (
                                    <div key={ele.id}>

                                        <p className='ftext'>{ele.title}</p>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="col-md-2 my-4 text-center">
                        <h6 className='Ftitle'>COMPANY</h6>
                        {
                            info.map((ele) => {
                                return (
                                    <div key={ele.id}>

                                        <p className='ftext'>{ele.title}</p>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="col-md-6 my-4">
                        <h6 className='Ftitle'>CONNECT WITH US AND GET 10% OFF YOUR FIRST ORDER</h6>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group d-flex justify-content-center align-items-center">
                                <input type="email" className="form-control mx-3 mt-3 mb-2 border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" 
                                {...register("email",{required:true})}
                                />
                                {errors.email?.type==="required" && <p className='text-danger'>Email is required</p>}
                            <button type="submit" className="btn btn-dark fw-bold">Subscribe</button>
                            </div>
                        </form>   
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                           {
                            icons.map((ele)=>{
                                return (
                                    <div className='mx-2' key={ele.id}>
                                     <span className='divBg d-flex justify-content-center align-items-center'>
                                     <i className={ele.iconName}></i>
                                     </span>
                                    </div>
                                )
                            })
                           } 
                    </div>
                    </div>
                    <div className="col-md-12">
                        <p className="text-c pt-4">© 2022 Beyond Retro. All Rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer