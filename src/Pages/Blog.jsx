import React, { useState } from 'react'
import BlogData from './BlogData'
import PostData from "./PostData"
const Blog = () => {
    const [data, setLData] = useState(BlogData)
    const [item, setItem] = useState(PostData)
    return (
        <>
            <div className="container">
                <div className="row m-0">
                <div className="col-md-12">
                    <h1 className='text-center main-heading text-uppercase fw-bold py-3 title-text'>
                        POPULAR BRANDS</h1>
                </div>                    

                    {
                        data.map((ele,i) => {
                            return (
                                <>
                                <div className="col-md-3 col-6" key={ele.id}>
                                    <div className="mx-1 border-0 my-3">
                                        <img className="img-fluid rounded-0 first" src={ele.img} alt="Card image cap"  />
                                        <div className="card-body">
                                            <h6 className="card-text text-center blogh text-uppercase fw-bold">{ele.title}</h6>
                                        </div>
                                    </div>
                                    </div>

                                </>
                            )
                        })
                    }

                    <div className="col-md-12">
                        <h1 className='text-center main-heading text-uppercase  title-text fw-bold'>
                            BLOG POSTS</h1>
                            </div>
                        
                            {
                                item.map((elem) => {
                                    return (
                                        < >
                                        <div className="col-md-4 col-12" key={elem.id}>
                                            <div className="card border-0 ">
                                                <p className="card-text text-center">{elem.title1}</p>
                                                <img src={elem.img} className="card-img-top" alt="..."  width={375} height={192} />
                                                <div className="card-body">
                                                    <p className="card-text">{elem.title2}</p>
                                                </div>
                                            </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                </div>
            </div>
           
        </>
    )
}

export default Blog