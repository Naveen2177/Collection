import React from 'react'
import Offer1 from '../images/hero/h1_hero.jpg'

export default function Offer() {
  return (
    <>
    <nav className="pt-5 mt-5">
        <img src={Offer1} width="100%" height="350px"/>
      </nav>
      
      <div className="sid9">
        <h2 className="fw-bold px-5 mx-5 fs-1">Get Our  <br/>Latest Offer News</h2>
        <p className="fst-italic px-5 mx-5">Subscribe News Later</p>
        
        <input type="email" name="" placeholder="Your email here" className="p-4 mat2 pt-3 pb-3" />
        <button type="button" className="btn btn-primary pt-3 pb-3 mat3 px-4">Shopnow</button>
      </div>
    </>
  )
}
