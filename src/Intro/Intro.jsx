import React from 'react'
import img from '../images/modern-business-building-scenery-touching-sky.jpg'
export default function Intro() {
  return (
    <>
    <div className="py-5" id='intro'>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h5>Top Benefits and Use Cases of IoT Sensors in Real Estate and Facility Management</h5>
                <p>IoT sensors are transforming the real estate and facilities management landscape by leveraging data-driven insights and intelligent applications.</p>
                <p>These sensors enhance the user experience by providing valuable information. In this article, we’ll delve into the top use cases and benefits of IoT sensors within the built environment.</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src={img} className='w-50 h-100 ' alt="" />
            </div>
        </div>
        </div>
   </div>
    </>
  )
}
