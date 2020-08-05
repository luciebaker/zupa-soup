import React from 'react'
import Image from '../../images/ddbook1mock.png'

const DDbook1 = () => {
    return (
        <div className="container-fluid hero-bg">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-4 mt-2">
                    <img className="feature-image" src={Image} alt="Sinful Awakening"/>
                    </div>
                    <div className="col-md-8 mt-2 text-col">
                    <h1 className="home-header-title">SINFUL AWAKENING</h1> 
                    <p className="home-header-text_two">Desire & Destiny Book 1</p> 
                    <h2>January 2021</h2> 
                    <p>When Amber meets Preston at the Tipsy Cork in downtown Manhattan, a man she has no recollection of ever meeting before, she doesn’t know what to expect. Preston is possibly the most handsome man she’s ever met. Beyond that there’s nothing likable about him but she feels inexorably drawn to him. Not only does he talks about her life with disturbing insight and authority but he claims to have the key to her destiny. Could he be right? </p>
                    </div>
                    
                </div>
        </div>
    )
}

export default DDbook1