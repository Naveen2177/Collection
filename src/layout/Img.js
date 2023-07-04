import React from 'react'
import Gallery from '../images/gallery/gallery1.jpg'
import Gallery1 from '../images/gallery/gallery2.jpg'
import Gallery2 from '../images/gallery/gallery3.jpg'
import Gallery3 from '../images/gallery/gallery4.jpg'
import Gallery4 from '../images/gallery/gallery5.jpg'




export default function img() {
  return (
    <>
     <div class="d-flex pt-5 mt-5 container">
        <img src= {Gallery}  alt="jpg" width="265px" />
        <img src= {Gallery1} alt="jpg" width="265px" />
        <img src= {Gallery2} alt="jpg" width="265px" />
        <img src= {Gallery3} alt="jpg" width="265px" />
        <img src= {Gallery4} alt="jpg" width="265px" />
    </div>
    </>
  )
}
