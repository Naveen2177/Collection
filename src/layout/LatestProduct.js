import React from 'react'

export default function LatestProduct() {
  return (
    <>
    <div className="nav2 container-fluid">
        <ul className="nav">
            <li className="nav-item display-5 fw-bold col-8">Latest products
            </li>
      
            <li className="nav-item sid2 col-1">
            <a className="nav-link text-danger"href="#">All</a>
            </li>
        
            <li className="nav-item col-1">
            <a className="nav-link text-dark" href="#">New</a>
            </li>
        
            <li className="nav-item col-1">
            <a className="nav-link text-dark" href="#">Featured</a>
            </li>
        
            <li className="nav-item col-1">
            <a className="nav-link text-dark" href="#">Offer</a>
            </li>
        </ul>
    </div>
    </>
  )
}
