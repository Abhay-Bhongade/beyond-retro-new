import React,{useState} from 'react'
import CarousalData from "./CarousalData"
const Carousal = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;



  const nextSlide = ()=>{
    setCurrent(current === length-1 ? 0 : current + 1);
    // console.log(current);
  }

  const prevSlide = ()=>{
    setCurrent(current === 0 ? length-1 : current -1 );
    // console.log(current);
}
  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }
  return (
    <>
      <div className="container slide-content my-4">
        <div className="row">
        <>
          {
            CarousalData.map((ele,index)=>{
             
              return (
                <div className={index=== current ? 'slide active' : current } key={index}> 
                {
                  index=== current && (
                    <>
                    
                    <div className="col-md-12">
                      <div>
                    <img src={ele.image} className='img-fluid common-image' alt="Slider" />
                    </div>
                    </div>
                    </>

                  )
                }
                    
                </div>
              )

            })
          }
          <div className='d-flex justify-content-center align-items-center my-2'>
           <span className={ current === 0 ? 'active arr-s arr-left mx-2' : 'arr-s arr-left mx-2' } onClick={() => setCurrent(0)}></span>
          <span className={ current === 1 ? 'active arr-s arr-left mx-2' : 'arr-s arr-left mx-2' } onClick={() => setCurrent(1)}></span>
          </div>

        </>
        
        </div>
        </div>
    </>
  )
}

export default Carousal