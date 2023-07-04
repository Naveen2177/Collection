import React from 'react'
import Banner from '../images/hero/hero_man.png'

export default function Bnner() {
  return (
    <>
    <div className="hero container">
        <div>
            <img src={Banner} height="350px" />
        </div>
        <div className="position-absolute herop">
            <p className>60% Discount</p>
            <h3>Winter </h3>
            <h3>Collection</h3>
            <p>Best Cloth Collection By 2020!</p>
            <button className="bg-primary p-1 ">Shop now</button>
        </div>
    </div>
    </>
  )
}
