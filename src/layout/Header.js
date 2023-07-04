import React from 'react'
import Logo from '../images/logo/Logo.png'

export default function header() {
  return (
    <>
     <div className="head container-fluid">
        <ul className="nav nav-tabs">
            <li className="nav-image1 ">
                <img src={Logo} />
            </li>
            <li className=" nav-item">
                <a  className="nav-link text-dark" href="#">Home</a>
            </li>
            <li className=" nav-item">
                <a  className="nav-link text-dark" href="#">Categories</a>
            </li>
            <li className=" nav-item">
                <a  className="nav-link text-dark" href="#">Latest</a>
            </li>
            <li className=" nav-item">
                <a  className="nav-link text-dark" href="#">Blogs</a>
            </li>
            <li className=" nav-item">
                <a  className="nav-link text-dark" href="#">Pages</a>
            </li>
            <li className=" nav-item">
                <a  className="nav-link text-dark" href="#">Content</a>
            </li>
            <li>
                <form className="d-flex" role="search">
                    <input className="form-control me-2"  type="search" placeholder="Search Products" aria-label="Search" />
                      <span id="span"><i className="fa-solid fa-magnifying-glass" ></i></span>
                      <i className="fa-solid fa-heart"></i>
                      <i className="fa-solid fa-cart-shopping" id="shop"></i>
                    <button type="button" className="btn btn-primary">Signin</button>
                </form>
            </li>
        </ul>
    </div>

    </>
  )
}
