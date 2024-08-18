import React from 'react'
import home1 from '../images/home1.png'
import home2 from '../images/smart-home-automation-with-connected-devices_1168612-187909 (1).jpg'
import energy from '../images/Energy (2).jpg'
import security from '../images//security.jpg'
import convinece from '../images//convinece.jpg'
import disabled from '../images//disabled.jpg'
import comfort from '../images//comfort.jpg'
import managment from '../images//managment.jpg'
import wifi from '../images//wifi2.jpg'
import locks from '../images//locks.jpg'
import Ai from '../images//Ai.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function SmartHome() {
  return <>
  <div id='smart'>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className=''>
              <div>
              <h2 className='text-white'>Smart Home</h2>
              <p className='text-white'>A smart home is a residence equipped with devices that can be controlled remotely or automatically via the internet.
                These devices, often referred to as IoT (Internet of Things) devices, include everything from smart thermostats and lights to security cameras and appliances.
                The goal of a smart home is to improve convenience, security, and energy efficiency by automating tasks and providing remote access through smartphones,
                tablets, or voice-controlled assistants like Amazon Alexa, Google Assistant, or Apple Siri.</p>
              </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <img src={home1} className='w-100' alt="" />
        </div>
      </div>
    </div>
  </div>
  <div>
    <section className='homes2 py-5'>
      <div className="container">
        <h2 className='text-center text-white my-4'>Benefits Of smart homes</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* Benefit 1 */}
                <div class="col-4">
                    <div class="card">
                    <div class="card-header">
                    <h6>Convenience and Automation</h6>
                    </div>
                    <img src={convinece} class="card-img-top" alt="..." />
                    <div class="card-body">

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">
                    Read more
                    </button>
                       
                    </div>
                    </div>
                </div>
                {/* Modal */}
                <div class="modal fade" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"><h6>Convenience and Automation:</h6></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                    <p><h6> Remote Control:</h6> Control your home from anywhere using a smartphone or tablet.Turn off lights, adjust the thermostat, or check security cameras remotely.</p>
                      
                      <p><h6>Automation:</h6> Set routines and schedules for devices, like turning on lights at sunset or adjusting the thermostat when you're away.</p>
                      
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              {/* Benefit 2 */}
              <div className="col">
                <div className="card">
                  <div className="card-header"><h6>Energy Efficiency</h6></div>
                  <img src={energy} className="card-img-top" alt="Energy Efficiency" />
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal2">
                      Read more
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal 2 */}
              <div className="modal fade" id="modal2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalEnergyLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalEnergyLabel">Energy Efficiency</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Optimized Energy Use:</strong> Smart thermostats and lighting systems can reduce energy consumption by automatically adjusting settings based on your habits, saving money on utility bills.</p>
                      <p><strong>Real-time Monitoring:</strong> Track energy use in real-time and make adjustments to reduce waste.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

               {/* Benefit 3 */}
                <div class="col-4">
                    <div class="card">
                    <div class="card-header">
                    <h6>Enhanced Security</h6>
                    </div>
                    <img src={security} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal3">
                      Read more
                    </button>
                    </div>
                    </div>
                </div>
               {/* Modal 3 */}
              <div className="modal fade" id="modal3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalEnergyLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalEnergyLabel">Enhanced Security:</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Smart Security Systems:</strong> Features like smart locks, cameras, and doorbells allow you to monitor and secure your home remotely. Receive alerts if suspicious activity is detected.</p>
                      <p><strong>Automated Responses:</strong> Integrate alarms, cameras, and lighting to deter intruders automatically.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
               {/* Benefit 4 */}
                <div class="col-4">
                    <div class="card">
                    <div class="card-header">
                    <h6>Comfort and Personalization</h6>
                    </div>
                    <img src={comfort} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal4">
                      Read more
                    </button>
                    </div>
                    </div>
                </div>
               {/* Modal 4 */}
              <div className="modal fade" id="modal4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalEnergyLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalEnergyLabel">Comfort and Personalization:</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Customizable Environments:</strong>  Smart devices can adjust lighting, temperature, and sound to suit your preferences, creating a personalized living space.</p>
                      <p><strong>Voice Control:</strong> Use voice commands to control multiple devices, making interactions with your home seamless and intuitive.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
               {/* Benefit 5 */}
                <div class="col-4">
                    <div class="card">
                    <div class="card-header">
                    <h6>Accessibility</h6>
                    </div>
                    <img src={disabled} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal5">
                      Read more
                    </button>
                    </div>
                    </div>
                </div>
               {/* Modal 5 */}
              <div className="modal fade" id="modal5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalEnergyLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalEnergyLabel">Accessibility:</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Assistance for the Elderly and Disabled:</strong> Smart homes can provide assistance to those with mobility issues, enabling them to control various aspects of their home without physical effort.</p>
                      <p><strong>Health Monitoring:</strong> Integrate with health monitoring devices to keep track of vital signs and alert caregivers in case of an emergency.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
               {/* Benefit 6 */}
                <div class="col-4">
                    <div class="card">
                    <div class="card-header">
                    <h6>Improved Home Management</h6>
                    </div>
                    <img src={managment} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal6">
                      Read more
                    </button>
                    </div>
                    </div>
                </div>
               {/* Modal 6 */}
              <div className="modal fade" id="modal6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalEnergyLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalEnergyLabel">Improved Home Management:</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Centralized Control:</strong> Use a single app or voice assistant to manage multiple devices, simplifying home management.</p>
                      <p><strong>Insights and Analytics:</strong> Some systems provide reports on usage patterns, helping you make informed decisions to improve efficiency and comfort.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

      </div>
      </div>
    </section>
    <section id='smart'>
      <div className="container py-4 text-white">
        <div className="row">

            <div className="row">
              {/* one */}
              <div className="d-flex mx-auto justify-content-center align-items-center my-4">
                <div className="col-md-6">
                  <h4>Home Networking</h4>
                  <h6>Smart Hubs and Controllers:</h6>
                  <p>Centralized devices that manage and control various smart home devices, ensuring compatibility and streamlined operation.</p>
                  <h6>Mesh Wi-Fi Systems:</h6>
                  <p>Provides consistent and robust Wi-Fi coverage throughout the home, essential for running multiple smart devices.</p>

                </div>
                <div className="col-md-6 justify-content-center align-items-center d-flex">
                  <img src={wifi} className='w-75' alt="" />
                </div>
              </div>
              {/* two */}
              <div className="d-flex mx-auto justify-content-center align-items-center my-4">
              <div className="col-md-6  d-flex">
                  <img src={locks} className='w-75' alt="" />
                </div>

                <div className="col-md-6">
                  <h4>Security Systems</h4>
                  <h6>Smart Locks:</h6>
                  <p>Keyless entry systems that can be controlled remotely or via voice commands. They also offer temporary access codes for guests.</p>
                  <h6>Security Cameras:</h6>
                  <p>Wireless cameras that can be monitored from anywhere, with features like motion detection, night vision, and cloud storage.</p>
                  <h6>Alarm Systems:</h6>
                  <p>Integrates with smart devices to detect unauthorized entry, smoke, or other hazards, and alert homeowners via their smartphones.</p>
                </div>
                
              </div>
              {/* three */}
              <div className="d-flex mx-auto justify-content-center align-items-center my-4">
                <div className="col-md-6">
                  <h4>Voice Control and AI Integration</h4>
                  <p>Voice assistants like Alexa, Google Assistant, and Siri act as the central interface for controlling smart devices, managing schedules, and even making purchases.</p>
                  <p>AI is increasingly used to learn the habits of homeowners, optimizing device behavior based on preferences and routines.</p>
                </div>
                <div className="col-md-6 justify-content-center align-items-center d-flex">
                  <img src={Ai} className='w-75' alt="" />
                </div>
              </div>


           
            
            </div>

          {/* <div className="col-md-6"></div> */}
        </div>
      </div>
    </section>
  </div>
  </>
}
