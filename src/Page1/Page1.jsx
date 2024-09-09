import React from 'react'
import logos from '../images/clients.png'
import img3 from '../images/We_infogrphics.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import sm from '../images/sm.jpg'
import { Link } from 'react-router-dom';
export default function Page1() {
  return <div id='smart' className='text-white'>
    <div className="container py-5">
        
        <section>
            <div className="row d-flex justify-content-center align-items-center">
               <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={sm} className='w-75' alt="" />
                </div>
                <div className="col-md-6">
                <h4>Building a Smarter, Sustainable Future</h4>
                <p>
                Transforming real estate assets into smart buildings that enhance tenant experiences, combat climate change, reduce operating costs, and boost asset value through digital innovation.
                </p>
                <h4>A Global Leader in Smart Building Solutions</h4>
                <p>
                    Our comprehensive, innovative smart building solutions empower clients to maximize their building systems' potential. From advanced fault detection and diagnostics to efficient telecom riser management, our smart building technology delivers tangible results. We help clients optimize operations, earn industry recognition, and—most importantly—significantly reduce energy consumption and greenhouse gas emissions. Together, we are creating greener communities and fostering stronger tenant engagement.
                </p>
                <Link className='btn btn-danger' to='/home'>Get started</Link>
                </div>
            </div>
        </section>
        <section>
            <div className="row py-4">
                <h6 className='text-center text-danger'>Helping our clients to save</h6>
                <div className="col-md-4 card text-center">
                    <h3 className='text-danger '>9.471 MWh</h3>
                    <p>of electricity
                    the total electricity
                    consumption of</p>  
                    <h3 className='text-danger'>826 homes</h3>
                    <p>in one year.</p>  
                </div>
                <div className="col-md-4 card text-center">
                    <p>GHG reduction of</p>
                    <h3 className='text-danger'>2,151,849 eKgCO2</h3>
                    <p>equivalent to removing</p>
                    <h3 className='text-danger'>659 passengers vehicles</h3>
                    <p>from the road for a year.</p>
                </div>
                <div className="col-md-4 card text-center">
                    <h3 className='text-danger'>25,804 GJ</h3>
                    <p>of Natural Gas,
                    the total energyconsumption of</p>
                    <h3 className='text-danger'>253 homes</h3>
                    <p>in one year.</p>
                </div>
            </div>
        </section>
        <section className='bg-body-secondary'>
            <h4 className='text-center text-dark'>North America's Top Real Estate Companies and Building Owners Partner With Us</h4>
            <img src={logos} className='w-100' alt="" />
        </section>
        <section className='py-4'>
            <h4 className='text-center'>
            The Transformative Solution for Smart Building Optimization
            </h4>
            <p className=''>
            Our comprehensive HIVE solution provides property owners and managers with everything needed to digitize and modernize their building systems and processes, meeting evolving tenant needs and addressing the challenges of climate change.
            </p>
            <p className=''>
            By leveraging the HIVE high-availability smart building platform, we support clients from initial planning and design through to implementation, 24/7 monitoring, and continuous management, enabling them to achieve:
            </p>
            <div className="row">
                <div className="col-md-6">
                    <p className='card p-2'>Decarbonization
                    Cost Reductions & Operational efficiency
                    New revenue opportunities</p>
                </div>
                <div className="col-md-6">
                    <p className='card p-2'>Liability and risk mitigation
                    Increase in asset value
                    Tenant wellness and safety</p>
                </div>
            </div>
        </section>
        <section className='py-4 text-center bg-body-secondary'>
            <h4 className='text-dark'>So how do we do it?</h4>
            <img src={img3} alt="" />
            
        </section>
        <section>
            <h4 className='my-5 text-center'>Why Organizations
            Partner With Us</h4>
            <p>Smart buildings are rapidly gaining popularity among property managers and owners, particularly as Canadian government mandates target net-zero emissions by 2050. These smart building solutions offer the fastest route to achieving decarbonization goals while simultaneously boosting asset value in the marketplace.</p>
            <p>With 25 years of proven expertise in delivering transformative innovations, North America’s leading real estate companies and building owners continue to trust us to help them transform and optimize their portfolios due to:</p>
            <div className="row text-center">
                <div className="col-md-6 card p-3">
                    <i class="fa-solid fa-users fa-2x "></i>
                    <h2>Our People</h2>
                    <p>
                    With a team of over 100 skilled professionals, we create transformative solutions that make technology more accessible. Our dedication, commitment, and pride are evident in everything we do as we build and manage every aspect of your smart property.
                    </p>
                </div>
                <div className="col-md-6  card p-3">
                <i class="fa-solid fa-users-line fa-2x "></i>
                    <h2>Our True Partnership</h2>
                    <p>
                    With thousands of satisfied clients, we have established long-lasting relationships by committing to an end-to-end partnership founded on customization, collaboration, and transparency.
                    </p>
                </div>
                <div className="col-md-6 card p-3">
                <i class="fa-solid fa-clock fa-2x "></i>
                    <h2>Our Forward-Thinking</h2>
                    <p>
                        We constantly seek out the next transformative, business-impacting technologies. With an innovative spirit, we remain at the forefront of technology solutions that meet the evolving needs of all stakeholders.
                    </p>
                </div> 
                <div className="col-md-6 card p-3">
                <i class="fa-solid fa-face-smile-wink fa-2x"></i>
                    <h2>Our Proven Methodology</h2>
                    <p>
                    We prioritize understanding our clients' business challenges and goals. Through open communication and collaboration, we harness collective expertise to deliver exceptional service that drives meaningful results.
                    </p>
                </div>
            </div>
        </section>
    </div>
  </div>
}
