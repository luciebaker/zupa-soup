import React from 'react'
import Image from '../../images/book1mockhero.png'

const AltHero = () => {
    return (
        <div className="container-fluid hero-bg">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-6 mt-2 image-col">
                    <img className="home-header-image" src={Image} alt="Risky Flirtation"/>
                    </div>
                    <div className="col-md-6 mt-2 hero-text-col">
                    <h3 className="home-header-title">Risky</h3> 
                    <h1 className="home-header-text_one">FLIRTATION</h1> 
                    <p className="home-header-text_two">Hiding her inexperience behind flirtatious games, Zoe settles in her new job at the adult-only Scarlet Bay Resort. But playing such games is risky, especially when it comes to flirting with Theo, a man nearly twice her age with little patience for games. Unless she can keep her distance, it’s only a matter of time before he discovers her secret, but staying away from such a handsome man proves to be a lot easier said than done.</p> 
                    <a className="btn btn-bordered-red btn-text mt-1 hero-btn" href="
                    https://www.amazon.com/dp/B08F7VQ6C5" target="_blank" type="button" aria-label="now available on Amazon" > Now Available on Amazon
                    </a>
                    </div>
                    <div>
                    

                    </div>
                </div>
        </div>
    )
}

export default AltHero