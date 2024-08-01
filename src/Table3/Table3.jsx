import React from 'react'
import img from '../images/2a2974cb-db78-4e30-91d3-228a183c1097-removebg-preview.png'

export default function Table3() {
  return <>
  <div className="table3" id='table3'>
    <div className="container py-4">
        <h2>IoT sensors for monitoring energy consumption and improving efficiency.</h2>
        <div className="row d-flex">
            <div className="col-md-6 justify-content-center align-content-center">
                <img src={img} className='w-100 h-100' alt="" />
            </div>
            <div className="col-md-6 justify-content-center align-content-center">
                <p>The commercial real estate (CRE) and facilities management (FM) industry increasingly recognizes the importance of addressing climate change and adopting sustainable practices, such as energy conservation. In this context, the Internet of Things (IoT) has become a transformative technology for enhancing energy monitoring and efficiency.</p>
                <p>IoT sensors can be integrated into various devices and systems, offering valuable insights into energy usage, performance, and areas needing improvement. Organizations can utilize IoT-enabled energy monitoring to make informed decisions and implement targeted actions that optimize energy consumption. This approach not only reduces their environmental impact but also lowers energy costs.</p>
                <p>By implementing IoT-enabled energy monitoring, companies can comply with regulatory requirements and demonstrate their commitment to combating climate change.</p>
            </div>
            <p>
            IoT sensors for energy monitoring are often integrated into HVAC and lighting systems, electrical panels, meters, and submeters. Current sensors track the electricity usage of specific equipment or building areas, offering insights into energy consumption patterns. Voltage sensors monitor fluctuations and identify irregularities to optimize energy efficiency. They also provide data on power quality, helping detect issues like voltage sags or surges.</p>

            <p className='card bg-warning py-3'>A recent study found that annual energy consumption from smart buildings was reduced by over 38% with smart HVAC and smart lights.</p>

            <p>Other types of sensors also contribute to energy efficiency. For instance, data from occupancy sensors can activate energy-saving measures, such as adjusting lighting or HVAC settings when a space is unoccupied. Pressure sensors can be used to monitor air pressure within different zones of a building. By continuously monitoring and analyzing this data, facility managers can optimize the HVAC system's performance, ensuring consistent air circulation, temperature control, and improved energy efficiency.</p>
        </div>
    </div>
  </div>
  </>
}
