import React from 'react'
import "./carousel.scss"



const Carousel = (props: React.PropsWithChildren) => {
  return (
    <div className='Carousel_Main_Container'>
       <div className="Carouser_Window">
        <div className="Carousel_Items_Container">
          {props.children}
        </div>
       </div>
    </div>
  )
}

export default Carousel