import React from 'react'
import Image from '../../images/book1mockhero.png'

const AltHero = () => {
    return (
        <div className="container-fluid hero-bg">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-7 mt-2">
                    <img className="home-header-image" src={Image} alt="Risky Flirtation"/>
                    </div>
                    <div className="col-md-5 mt-2 text-col">
                    <h1 className="home-header-title">RISKY</h1> 
                    <h1 className="home-header-text_one">FLIRTATION</h1> 
                    <p className="home-header-text_two">Caribbean Fantasy Book 1</p>  
                    </div>
                    
                </div>
        </div>
    )
}

export default AltHero