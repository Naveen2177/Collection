import React from 'react'
import Cat1 from '../images/categori/cat1.jpg'
import Cat2 from '../images/categori/cat2.jpg'
import Cat3 from '../images/categori/cat3.jpg'

export default function Catagory() {
  return (
    <>
    <div>
        <h1 className="text-center display-6 fw-bold mt-5">Shop By Category</h1>
    </div>

    <div className="row2 d-flex height: 350px; container-fluid">
        <nav className="col">
            <img src={Cat1} width="400px" />
            <h5>women</h5>
            <button>Best New Deals</button>
            <p>New collection</p>
        </nav>
        <nav className="col1">
            <img src={Cat2} width="400px" />
            <h5>Winter cloth</h5>
            <p className="fs-4 fst-italic">Discount!</p>
            <h6>New Collection</h6>
        </nav>
        <nav className="col2">
            <img src={Cat3} width="400px" />
            <p className="fs-4">Men's Cloth</p>
            <button type="button" className="btn btn-warning">Best Deals Now</button>
            <h5 className="fst-italic">New Collection</h5>
        </nav>
    </div>
    </>
  )
}
