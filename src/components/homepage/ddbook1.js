import React from 'react'
import Image from '../../images/ddbook1mock.png'

const DDbook1 = () => {
    return (
        <div className="container-fluid hero-bg">
        <div className="container dd-container">
        <div className="row">
        <div className="col-12 text-center">
        <h1>Desire & Destiny Serie</h1>
        <p>Destiny happens in mysterious ways. Guided by our desires, of course, but that’s what life is about.</p>
        </div>
        </div>
        </div>
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-4 mt-2">
                    <img className="feature-image" src={Image} alt="Sinful Awakening"/>
                    </div>
                    <div className="col-md-8 mt-2 text-col">
                    <h1 className="bookfeature-title">SINFUL AWAKENING</h1> 
                    <h4>Desire & Destiny Book 1</h4> 
                    <p>When Amber meets Preston at the Tipsy Cork in downtown Manhattan, a man she has no recollection of ever meeting before, she doesn’t know what to expect. Preston is possibly the most handsome man she’s ever met. Beyond that there’s nothing likable about him but she feels inexorably drawn to him. Not only does he talks about her life with disturbing insight and authority but he claims to have the key to her destiny. Could he be right? </p>
                    <h2 className="featureh2-alt">To be released January 8, 2021</h2> 
                    </div>
                    
                </div>
        </div>
    )
}

export default DDbook1