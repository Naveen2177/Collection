import React from 'react'
import Logo from '../images/logo/Logo.png'

export default function Footer() {
  return (
  <>
  <footer>
      <div className="d-flex pt-5 mt-5">
        <div className="col-md-4 px-5 mx-4">
          <img src= {Logo} alt='logo'/>
          <p className="pt-5 text-secondary">Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit sed<br/> do eiusmod tempar incididunt <br/> ut labore.</p>
        </div>

        <div className="col-md-2">
          <h3>Quicks</h3>
            <div className="list pt-4">
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">About</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Offers & Discounts</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Get coupon</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Contact us</a>
            </div>
        </div>

        <div className="col-md-3">
            <h3>New Products</h3>
            <div className="list pt-4">
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Women Cloth</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Fashion Accessories</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Man Accessories</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Rubber made Toys</a>
            </div>
        </div>

        <div className="col-md-2">
            <h3>Support</h3>
            <div className="list pt-4">
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Frequently Asked Question</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Terms & Conditions</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Privacy Policy</a>
                <a href="#" className="list-group-item list-group-item-action text-secondary pb-2">Report a payment issue</a>   
            </div>
        </div>
      </div >

    <div className="d-flex pt-5 mt-5">
      <p className=" foot text-center px-5">Copyright <span><i class="fa-sharp fa-solid fa-copyright"></i></span>2023 All rights reserved | This Template is made By <span class="text-primary fw-bold">G_NAVEEN</span></p>
      <div className="mat5">
        <i className="fa-brands fa-twitter px-1"></i>
        <i className="fa-brands fa-facebook-f px-1"></i>
        <i className="fa-solid fa-globe px-1"></i>
      </div>
    </div>
  </footer>
  </>
  )
}