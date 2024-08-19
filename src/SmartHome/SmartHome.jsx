import React from 'react';
import home1 from '../images/home1.png';
import home2 from '../images/smart-home-automation-with-connected-devices_1168612-187909 (1).jpg';
import energy from '../images/Energy (2).jpg';
import security from '../images/security.jpg';
import convinece from '../images/convinece.jpg';
import disabled from '../images/disabled.jpg';
import comfort from '../images/comfort.jpg';
import managment from '../images/managment.jpg';
import wifi from '../images/wifi2.jpg';
import locks from '../images/locks.jpg';
import Ai from '../images/Ai.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function SmartHome() {
  return (
    <>
      <div id="smart">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2 className="text-white">Smart Home</h2>
                <p className="text-white">
                  A smart home is a residence equipped with devices that can be controlled remotely or automatically via the internet. These devices, often referred to as IoT (Internet of Things) devices, include everything from smart thermostats and lights to security cameras and appliances. The goal of a smart home is to improve convenience, security, and energy efficiency by automating tasks and providing remote access through smartphones, tablets, or voice-controlled assistants like Amazon Alexa, Google Assistant, or Apple Siri.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img src={home1} className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="homes2 py-5">
          <div className="container">
            <h2 className="text-center text-white my-4">Benefits Of smart homes</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {/* Benefit 1 */}
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h6>Convenience and Automation</h6>
                  </div>
                  <img src={convinece} className="card-img-top img-fluid" alt="Convenience and Automation" />
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal1">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              {/* Modal 1 */}
              <div className="modal fade" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Convenience and Automation</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Remote Control:</strong> Control your home from anywhere using a smartphone or tablet. Turn off lights, adjust the thermostat, or check security cameras remotely.</p>
                      <p><strong>Automation:</strong> Set routines and schedules for devices, like turning on lights at sunset or adjusting the thermostat when you're away.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="col">
                <div className="card">
                  <div className="card-header"><h6>Energy Efficiency</h6></div>
                  <img src={energy} className="card-img-top img-fluid" alt="Energy Efficiency" />
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
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h6>Enhanced Security</h6>
                  </div>
                  <img src={security} className="card-img-top img-fluid" alt="Enhanced Security" />
                  <div className="card-body">
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
                      <h5 className="modal-title" id="modalEnergyLabel">Enhanced Security</h5>
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
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h6>Comfort and Personalization</h6>
                  </div>
                  <img src={comfort} className="card-img-top img-fluid" alt="Comfort and Personalization" />
                  <div className="card-body">
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
                      <h5 className="modal-title" id="modalEnergyLabel">Comfort and Personalization</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Customized Environments:</strong> Adjust lighting, temperature, and other settings to create a personalized ambiance tailored to your preferences.</p>
                      <p><strong>Voice Control:</strong> Use voice commands to control various aspects of your home, from adjusting lights to playing music.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h6>Health and Well-being</h6>
                  </div>
                  <img src={disabled} className="card-img-top img-fluid" alt="Health and Well-being" />
                  <div className="card-body">
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
                      <h5 className="modal-title" id="modalEnergyLabel">Health and Well-being</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Air Quality Monitoring:</strong> Smart sensors track indoor air quality, helping to maintain a healthier living environment.</p>
                      <p><strong>Assisted Living:</strong> For elderly or disabled individuals, smart homes can include fall detection, emergency alerts, and voice-activated controls for greater independence.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h6>Property Management and Maintenance</h6>
                  </div>
                  <img src={managment} className="card-img-top img-fluid" alt="Property Management and Maintenance" />
                  <div className="card-body">
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
                      <h5 className="modal-title" id="modalEnergyLabel">Property Management and Maintenance</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Smart Sensors:</strong> Detect issues like water leaks, frozen pipes, or electrical problems before they cause significant damage.</p>
                      <p><strong>Remote Management:</strong> For rental properties, smart locks and security systems allow for easier management and monitoring from a distance.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 7 */}
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h6>Improved Accessibility</h6>
                  </div>
                  <img src={wifi} className="card-img-top img-fluid" alt="Improved Accessibility" />
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal7">
                      Read more
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal 7 */}
              <div className="modal fade" id="modal7" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalEnergyLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalEnergyLabel">Improved Accessibility</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Seamless Connectivity:</strong> A strong, reliable Wi-Fi network is the backbone of a smart home, ensuring all devices work together seamlessly.</p>
                      <p><strong>Expanded Range:</strong> With the right equipment, even large homes can enjoy full coverage without dead zones.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefit 8 */}
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h6>Advanced AI and Machine Learning</h6>
                  </div>
                  <img src={Ai} className="card-img-top img-fluid" alt="Advanced AI and Machine Learning" />
                  <div className="card-body">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal8">
                      Read more
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal 8 */}
              <div className="modal fade" id="modal8" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalEnergyLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalEnergyLabel">Advanced AI and Machine Learning</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <p><strong>Predictive Analytics:</strong> AI can learn your preferences and habits over time, automatically adjusting settings for optimal comfort and efficiency.</p>
                      <p><strong>Personalized Experiences:</strong> From adjusting music based on your mood to managing your daily schedule, AI integration adds a new level of intelligence to your smart home.</p>
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
      </div>
    </>
  );
}
