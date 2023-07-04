import React from 'react'
import Product1 from '../images/categori/product1.png'
import Product2 from '../images/categori/product2.png'
import Product3 from '../images/categori/product3.png'
import Product4 from '../images/categori/product4.png'
import Product5 from '../images/categori/product5.png'
import Product6 from '../images/categori/product6.png'

export default function Product() {
  return (
    <>
    <div className="d-flex row3 container">
        <div>
            <img src={Product1} alt="image not found" width="400px" />
        <div className="text-center">
            <i className="fa-sharp fa-regular fa-star text-warning"></i>
            <i className="fa-sharp fa-regular fa-star text-warning"></i>
            <i className="fa-sharp fa-regular fa-star text-warning"></i>
            <i className="fa-sharp fa-regular fa-star text-warning"></i>
            <i className="fa-sharp fa-regular fa-star"></i>
            <p className="card-text">Green Dress With Details</p>
            <i className="fa-solid fa-dollar-sign">40.00</i>
            <i className="fa-regular fa-dollar-sign text-decoration-line-through text-danger">60.00</i>
        </div>
        </div>

        <div>
            <img src={Product2} alt="image not found" width="400px" />
            <div className="text-center">
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star"></i>
                <p className="card-text">Green Dress With Details</p>
                <i className="fa-solid fa-dollar-sign">40.00</i>
                <i className="fa-regular fa-dollar-sign text-decoration-line-through text-danger">60.00</i>
            </div>
        </div>

        <div>
            <img src={Product3} alt="image not found" width="400px" />
            <div className="text-center">
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star"></i>
                <p className="card-text">Green Dress With Details</p>
                <i className="fa-solid fa-dollar-sign">40.00</i>
                <i className="fa-regular fa-dollar-sign text-decoration-line-through text-danger">60.00</i>
            </div>
        </div>
    </div>

    <div className="d-flex row3 container">
        <div>
            <img src={Product4} alt="image not found" width="400px" />
            <div className="text-center">
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star"></i>
                <p className="card-text">Green Dress With Details</p>
                <i className="fa-solid fa-dollar-sign">40.00</i>
                <i className="fa-regular fa-dollar-sign text-decoration-line-through text-danger">60.00</i>
            </div>
        </div>
        <div>
            <img src={Product5} alt="image not found" width="400px" />
            <div className="text-center">
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star"></i>
                <p className="card-text">Green Dress With Details</p>
                <i className="fa-solid fa-dollar-sign">40.00</i>
                <i className="fa-regular fa-dollar-sign text-decoration-line-through text-danger">60.00</i>
            </div>
        </div>
        <div>
            <img src={Product6} alt="image not found" width="400px" />
            <div className="text-center">
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star text-warning"></i>
                <i className="fa-sharp fa-regular fa-star"></i>
                <p className="card-text">Green Dress With Details</p>
                <i className="fa-solid fa-dollar-sign">40.00</i>
                <i className="fa-regular fa-dollar-sign text-decoration-line-through text-danger">60.00</i>
            </div>
        </div>
    </div>
    </>
  )
}
