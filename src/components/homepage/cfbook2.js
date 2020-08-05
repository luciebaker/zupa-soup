import React from 'react'
import Image from '../../images/book2mock.png'

const CFbook2 = () => {
    return (
        <div className="container-fluid hero-bg">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-4 mt-2">
                    <img className="feature-image" src={Image} alt="Sweet Surrender"/>
                    </div>
                    <div className="col-md-8 mt-2 text-col">
                    <h1 className="home-header-title">SWEET SURRENDER</h1> 
                    <p className="home-header-text_two">Caribbean Fantasy Book 2</p>  
                    <h2>September 2020</h2>
                    <p> Morgan, the bubbly young receptionist with a head full of red curls has been attracted to Zach, the muscular personal trainer who runs the gym, since the day he arrived at the resort. With a little encouragement from Zoe, she works up the courage to make a move. Zach likes the idea of getting her into bed, but he warns her off. She’s a sweet girl looking for love. He’s anything but sweet and unable to offer love or commitment. As tempting as she is, she’s off limits. Morgan has been warned, now it’s up to her to decide if she really wants to pursue Zach, unless she can play her cards right and help him let go of his past. 
                    </p>
                    </div>
                    
                </div>
        </div>
    )
}

export default CFbook2