import React from 'react'
import Icon from '../images/icon/download.png'

export default function Navbar() {
  return (
    <>
    <div className="container-fluid ">
       
       <div className="row bg-dark ">

    <ul className="nav nav-tabs row">

       <li className=" col-1 ">
       <img src={Icon} />
       </li>

       <li className="col-1">
       <a className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">INDIA</a>
       <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">Action</a></li>
           <li><a className="dropdown-item" href="#">Another action</a></li>
           <li><a className="dropdown-item" href="#">Something else here</a></li>
         </ul>
       </li>

       <li className="col-5 ">
       <a className="nav-link text-white" href="#">+91 7997418409</a>
       </li>

       <li className="col-1 align-items-center">
       <a className="nav-link text-white" href="#">MyAccount</a>
       </li>

       <li className="col-1 align-items-center">
       <a className="nav-link text-white" href="#">Wishlist</a>
       </li>

       <li className="col-1 align-items-center">
           <a className="nav-link text-white" href="#">Shopping</a>
       </li>

       <li className="col-1 align-items-center">
           <a className="nav-link text-white" href="#">Cart</a>
       </li>

       <li className="col-1 align-items-center">
           <a className="nav-link text-white" href="#">Checkout</a>
       </li>
    </ul>
</div>
</div>
    </>
  )
}