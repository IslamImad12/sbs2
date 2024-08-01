import React from 'react'
import logo from '../images/logoo.png'

export default function Navbar() {
  return <>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">

    <a class="navbar-brand" href="#"><img src={logo} width={'35px'} className='mx-1' alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#table">Table Content</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">contact us</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  </>
}
