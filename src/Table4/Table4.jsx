import React from 'react'
import img from '../images/7403_fullimage_7403_fullimage_20210407-image-workspace-iadea-high-4500x3000_3840x2560_2227x1515_1024x682_1900x1292_progr.jpg'
import img2 from '../images/5596266_55817.jpg'
import img3 from '../images/park.jpg'
import img4 from '../images/virtual.jpg'
import img5 from '../images/9798378_4249716.jpg'
import img6 from '../images/8759318_3995247.jpg'


export default function Table4() {
  return <>
  <div className="table4" id='table4'>
    <div className="container py-4">
        <h2>IoT sensor applications for enhancing the workplace experience.</h2>
        <p>An IoT-enabled smart workplace enhances the overall workplace experience by making employees more mobile, safer, and better informed. It assists corporate real estate (CRE) and facility management (FM) teams in automating business processes, facilitating efficient interactions with stakeholders, and improving business insights. Several IoT sensor applications directly 
            contribute to an improved workplace experience for building users:</p>
        <div className="row ">
                <div className="col-md-6 justify-content-center align-items-center">
                    <h3>Smart room and desk booking systems to optimize space utilization and enhance occupant experience.</h3>
                    <p>
                    IoT sensors, such as motion or occupancy sensors, can be installed in meeting rooms and office spaces to monitor occupancy in real time. These sensors can determine whether a room or desk is currently in use or vacant. When integrated with a booking system, this data allows employees to easily identify and reserve available rooms and desks, reducing conflicts and optimizing utilization. A smart meeting room using IoT technology directly benefits office users.</p>
                    <p>Occupancy sensors can detect when a reserved room is unoccupied during a scheduled booking time. If no activity or occupancy is detected within a specified timeframe, the system can automatically release the room. This process helps prevent unused rooms, improving utilization efficiency and enhancing the employee experience.</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={img} className='w-75 h-75' alt="" />
                </div>
                {/*  */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={img2} className='w-75 h-75' alt="" />
                </div>

                <div className="col-md-6 justify-content-center align-items-center">
                    <h3>IoT sensors to enhance comfort and safety.</h3>
                    <p>IoT sensors offer numerous benefits for enhancing comfort and safety in the workplace. When integrated into lighting systems, proximity sensors play a crucial role in creating a convenient and energy-efficient environment. By detecting the presence or absence of people in a room, these sensors can automate lighting control. For example, in areas such as restrooms, proximity sensors can automatically switch on the lights when someone enters, eliminating the need for manual operation and ensuring immediate access to proper lighting. This enhances both comfort and convenience for individuals.</p>
                    <p>Additionally, gas sensors in the workplace can help prevent dangerous situations. Kitchens, for instance, can be equipped with gas sensors to detect hazardous gases like carbon monoxide. These sensors continuously monitor air quality and raise an alarm or trigger safety measures if dangerous gas levels are detected. By providing early detection and warning, gas sensors help protect employees' well-being and prevent potential accidents or health hazards.</p>
                </div>
                {/*  */}
            
                <div className="col-md-6 justify-content-center align-items-center">
                    <h3>IoT Sensors for Intelligent Parking Solutions</h3>
                    <p>
                    A vehicle detection sensor can instantly detect the presence or absence of vehicles, providing real-time updates on parking space occupancy. Drivers can access this information through mobile apps or digital signage, allowing them to quickly locate available parking spaces. This efficient system reduces the time spent searching for parking and helps alleviate traffic congestion within the parking lot.
                    </p>
                    <p>
                    By integrating this data with a booking system, the sensors can verify the availability of a reserved space and guide drivers to their designated spots upon arrival.
                    </p>
                    <p>
                    These sensors also aid in parking enforcement by monitoring parking session durations. They can detect instances of overstaying or unauthorized parking and generate notifications or alerts for parking attendants or enforcement personnel. Additionally, IoT sensors enhance car park security by utilizing number plate recognition systems to identify suspicious or unauthorized vehicles.
                    </p>
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={img3} className='w-75 h-75' alt="" />
                </div>


        </div>
        <section>
            <h3>Discover more about IoT in real estate and facility management.</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <div class="card-header">
                        Virtual Events
                    </div>
                    <img src={img4} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <p>Unlock the Potential of IoT in 2023: Explore How Your Organization Can Benefit</p>
                       <p>Read more</p> 
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-header">
                        Videos
                    </div>
                    <img src={img5} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <p>Planon Workplace Insights</p>
                       <p>Read more</p> 
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-header">
                        Brochures
                    </div>
                    <img src={img6} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <p>Discover the Advantages of Planon IoT</p>
                       <p>Read more</p> 
                    </div>
                    </div>
                </div>

</div>
        </section>
    </div>
  </div>
  </>
}
