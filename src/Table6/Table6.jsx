import React from 'react'

export default function Table6() {
  return <>
  <div className="table6" id='table6'>
    <div className="container py-3">
    <table class="table text-center table-striped table-bordered ">
  <thead>
    <tr>
      <th scope="col">Application</th>
      <th scope="col">Common sensor types</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Energy monitoring</th>
      <td>Voltage, current, power, smart meters</td>
    </tr>

    <tr>
      <th scope="row">Energy efficiency</th>
      <td>Motion, occupancy, temperature, light</td>
    </tr>

    <tr>
      <th scope="row">Smart room and desk booking</th>
      <td >Occupancy (infrared/ultrasound)</td>
    </tr>
    <tr>
      <th scope="row">Smart parking</th>
      <td >	Vehicle detection (magnetic/inductive)</td>
    </tr>
    <tr>
      <th scope="row">Asset and equipment tracking</th>
      <td >RFID, Bluetooth, GPS</td>
    </tr>
    <tr>
      <th scope="row">Condition monitoring</th>
      <td >Temperature, humidity, vibration, pressure, current, voltage</td>
    </tr>
    <tr>
      <th scope="row">Water quality assurance</th>
      <td >	pH, conductivity, turbidity, temperature</td>
    </tr>
    <tr>
      <th scope="row">Space planning</th>
      <td >Occupancy (infrared/ultrasound), people count, people flow</td>
    </tr>
    <tr>
      <th scope="row">Smart cleaning</th>
      <td >	Occupancy, people count, people flow</td>
    </tr>
    <tr>
      <th scope="row">Indoor Air Quality (IAQ) monitoring</th>
      <td >	Temperature, humidity, C02, airborne particulates, volatile organic compounds</td>
    </tr>
  </tbody>
   </table>
<p>Many of these applications can be deployed on the Planon platform using apps from our extensive network of tech partners.</p>
    </div>
  </div>
  </>
}
