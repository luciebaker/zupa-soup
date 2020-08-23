import React from 'react'
import Image from '../../images/book2mockhero.png'

const AltHero = () => {
    return (
        <div className="container-fluid hero-bg">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-6 mt-2 image-col">
                    <img className="home-header-image" src={Image} alt="Sweet Surrender"/>
                    </div>
                    <div className="col-md-6 mt-2 hero-text-col">
                    <h3 className="home-header-title">Sweet</h3> 
                    <h1 className="home-header-text_one">SURRENDER</h1> 
                    <p className="home-header-text_two">Morgan, the bubbly young receptionist, has been attracted to Zach, the muscular personal trainer, since the day he arrived at the resort. When she makes a move, Zach warns her off. She’s a sweet girl looking for love. He’s anything but sweet and unable to offer love or commitment. His best friend, Amber, wants to see him happy and encourages him to let go of the past and move on with Morgan. Zach and Amber both need to start a new chapter in their lives, one that includes less pain and more love. Neither feel ready. Little do they know, Morgan is about to change their lives.</p> 
                    <a className="btn btn-bordered-red btn-text mt-1 hero-btn" href="
                    https://www.amazon.com/dp/B08GJR5WGC" target="_blank" type="button" aria-label="now available on Amazon" > Now Available on Amazon
                    </a>
                    </div>
                    <div>
                    

                    </div>
                </div>
        </div>
    )
}

export default AltHero