import React from 'react'

export default function Footer() {
  return <>
  <div className="footer bg-dark text-white py-4" id='footer'>
    <div className="container">
    <div className="row">
    <div className="col-md-3">
            <h4>Our Solutions</h4>
            <p>
            IWMS <br />
             Real Estate Management <br />
             Space and Workplace Services Management <br />
             Asset and Maintenance Management <br />
             Energy and Sustainability Management <br />
            Campus Management Solution <br />
            Facility Services Business Solution <br />
            Real Estate Management for SAP S/4HANA <br />
            Workplace Edition <br />
            Lease Accounting Solution <br />
            </p>

        </div>
        <div className="col-md-3">
            <h4>Topics</h4>
            <p>BIM <br />
            CAFM <br />
            Campus Management <br />
            CMMS <br />
            IWMS <br />
            Enterprise Asset Management <br />
            Facilities Management Software <br />
            Field Service Management <br />
            Hyperautomation <br />
            IoT Sensors for Real Estate and FM <br />
            Lease Accounting <br />
            Planned Preventative Maintenance <br />
            Property Management Software <br />
            Service Management <br />
            Space Management <br />
            Workplace Management</p>
        </div>
        <div className="col-md-3">
            <h4>Company</h4>
            <span>Who we are</span> <br />
            <span>What we do</span> <br />
            <span>Work at Planon</span> <br />
            <h4>Portals</h4>
            <span>Customer Portal</span> <br />
            <span>Partner Portal</span> <br />
            <span>Marketplace</span> <br />
        </div>
        <div className="col-md-3">
            <h4>Contact Us</h4>
            <textarea type="text" className='form-control' name="" placeholder='send us a message' id="" /> <br />
            <button className='btn btn-danger'>submit</button>
        </div>
    </div>
    </div>
  </div>
  </>
}
