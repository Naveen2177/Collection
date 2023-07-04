import React from 'react'
import Collection1 from '../images/collection/collection1.png'
import Collection2 from '../images/collection/collection2.png'
import Collection3 from '../images/collection/collection3.png'
import Collection4 from '../images/collection/collection4.png'
import Collection5 from '../images/collection/collection5.png'

export default function Collection() {
  return (
    <>
      <div className="container">
        <div className="pt-5 mt-5">
            <h1 className="fw-bold">Best Of Collection<br/> Of The Month</h1>
            <p className="pt-4 fst-italic">Designers who are interested area.</p>
            <button type="button" className="btn btn-primary sid6 px-4 pt-2 pb-2 mt-5">Shop now</button><br/>
            <img src={Collection1} className="pt-5 mt-5"/> 
        </div>
          
        <div className="sid8">
          <img src={Collection2} width="250px"/>
        </div>
          
        <div className="mat">
            <h3>Menz Winter <br/>Jacket</h3>
            <button type="button" className="btn btn-primary px-4 pb-3 pt-2 mt-5">Menz Winter <br/>Jacket
            </button>
            <h3 className="pt-4 mt-5">Menz Winter <br/>Jacket</h3>
        </div>
          
        <div className="mat1">
            <nav className="pt-2 mt-3">
              <img src={Collection3} width="90px"/>
            </nav>
          
            <nav className="pt-3 mt-4">
              <img src={Collection4} width="90px"/>
            </nav>
          
            <nav className="pt-3 mt-4">
              <img src={Collection5} width="90px"/>
            </nav>
        </div>
    </div>
    </>
  )
}
