import React from 'react'
import Card from '../images/categori/card.png'
import Card1 from '../images/categori/card-man.png'
import Card2 from '../images/categori/card-shape.png'

export default function Shop() {
  return (
    <>
    <div className="middle3 mt-5 pt-5 container-fluid">
        <div className="image3 pt-5 mt-4">
        <img src={Card} width="100%" />
      </div>
      
        <div className="nav4">
          <img src={Card1} width="164px" />    
        </div>
      
        <div className="side2">
          <h1 className="fw-bold fst-italic ">Find The Best Product<br/> From Our Shop</h1>
          <p className="fst-italic pb-5">Designers who are interest in creating state of the.</p>
          <button type="button" className="btn btn-dark sid6 px-4 pt-2 pb-2">Show now</button>
        </div>
      
        <nav  className="sid7">
            <img src={Card2}/> 
        </nav>
    </div>
    </>
  )
}
