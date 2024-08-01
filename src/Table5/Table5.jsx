import React from 'react'
import img6 from '../images/156.jpg'
import img7 from '../images/2151589536.jpg'
import img8 from '../images/glass.jpg'
import img9 from '../images/image-buildings-modern-high.jpg'
import img10 from '../images/5955_fullimage_5955_fullimage_image-pbm-airconditionerselectricfan_3840x3072_3605x4060_1024x819_1977x2227_progr.jpg'

export default function Table5() {
  return <>
      <div className="table5" id='table5'>
    <div className="container py-4">
        <h2>IoT Sensor Applications to Assist CRE and FM Teams</h2>
        <p>There is a multitude of applications for IoT sensors that support CRE and FM teams:</p>
        <div className="row">
            <div className="col-md-6 my-4">
                <h4>
                Tracking Assets and Equipment for Precise Inventory Management</h4>
                <p>
                Strategically placed IoT sensors—such as RFID readers, Bluetooth beacons, or GPS trackers—facilitate real-time asset tracking within a building. As tagged assets move past these sensors, their locations are automatically recorded and sent to a central management system
                </p>
                <p>
                This technology allows for accurate and efficient inventory management by providing real-time inventory status and reducing the risk of loss or misplacement.
                </p>
            </div>
            <div className="col-md-6 my-4">
              <img src={img6} className='w-100 h-100' alt="" />
            </div>

            <div className="col-md-6 my-4">
              <img src={img7} className='w-100 h-100' alt="" />
            </div>

            
            <div className="col-md-6 my-4">
                <h4>
                Monitoring Conditions for Preventive Maintenance</h4>
                <p>Sensors that measure temperature, humidity, vibration, pressure, current, and voltage can be attached to equipment and infrastructure throughout a building. These data points serve as specific indicators of asset health and are transmitted to a central system or cloud-based platform for storage, processing, and analysis.</p>
                <p>Facility managers or maintenance personnel can access real-time data and insights from a centralized dashboard or mobile application, allowing them to monitor asset health and performance from any location. This enables timely preventive maintenance, reducing downtime and extending equipment lifespan.</p>
                
            </div>
            
            <div className="col-md-12">
            <p>By analyzing collected sensor data, anomaly detection algorithms can identify deviations from typical operating conditions. Unusual trends, patterns, or breaches of thresholds can trigger alerts or notifications, informing relevant personnel of potential issues or equipment failures. This proactive approach allows for scheduled maintenance to address potential problems before they result in costly downtime or breakdowns.</p>
            <p>IoT sensors can integrate with existing asset management systems, enabling seamless data exchange and incorporating condition monitoring data into asset maintenance records. This integration allows facility managers to make data-driven decisions, prioritize maintenance tasks, and allocate resources more effectively, ultimately increasing operational efficiency and cost savings.</p>
            </div>

            <div className="col-md-6 my-4">
                <h4>Ensuring Water Quality for Health and Safety Compliance</h4>
                <p>pH, conductivity, turbidity, and temperature sensors, strategically placed throughout a building’s water supply system, can continuously monitor water quality.</p>
                <p>The collected data is analyzed using algorithms and machine learning techniques to detect deviations from normal levels or predefined thresholds. When anomalies are identified, alerts or notifications are triggered, allowing for a swift response to potential water quality issues or Legionella contamination.</p>
                <p>By employing IoT sensors for water quality monitoring, CRE and FM professionals can proactively address potential water treatment issues, including Legionella detection. Real-time data collection, analysis, and remote monitoring capabilities facilitate prompt responses, preventive maintenance, and efficient water management, ensuring both occupant health and compliance with regulatory standards.</p>
            </div>
            <div className="col-md-6 my-4">
              <img src={img8} className='w-100 h-100' alt="" />
            </div>

            <div className="col-md-6 my-4">
              <img src={img9} className='w-100 h-100' alt="" />
            </div>
            <div className="col-md-6 my-4">
                <h4>Space Planning for Improved Real Estate Portfolio Management</h4>
                <p>
                Occupancy sensors, people counters, and flow sensors gather data over time to offer valuable insights into space utilization patterns. Analyzing this occupancy data allows organizations to identify underused or overbooked rooms, optimize space allocation, and make informed decisions regarding room sizes, amenities, and resource distribution.
                </p>
                <p>For instance, tracking people flow enables CRE owners to analyze occupant behavior and space usage patterns, while respecting privacy constraints.</p>
                <p>
                This data helps identify excess capacity and develop strategies for peak hours, ultimately leading to more efficient management of the real estate portfolio.
                </p>
            </div>

            <div className="col-md-6 my-4">
                <h4>Indoor Air Quality (IAQ) Monitoring for Enhanced Wellbeing and Productivity</h4>
                <p>
                The quality of indoor air significantly impacts health, comfort, and productivity. Poor IAQ can lead to respiratory problems, allergies, fatigue, and reduced cognitive function.
                </p>
                <p>
                By using sensors to measure CO2 levels, humidity, particulate matter, and volatile organic compounds, facility managers can actively monitor IAQ. This approach allows for early identification of potential issues, enabling timely adjustments and improvements to maintain optimal air quality. Ensuring a healthier and more comfortable indoor environment enhances the well-being and productivity of building occupants.
                </p>
            </div>
            <div className="col-md-6 my-4">
              <img src={img10} className='w-100 h-100' alt="" />
            </div>

        </div>
    </div>
  </div>
  </>
}
