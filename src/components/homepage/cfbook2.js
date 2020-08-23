import React from 'react'
import Image from '../../images/book2mock.png'

const CFbook2 = () => {
    return (
        <div className="container-fluid hero-bg-light">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-4 mt-2 text-center">
                    <img className="feature-image" src={Image} alt="Sweet Surrender"/>
                    <a className="btn btn-bordered-purple btn-text mt-1 bookfeature-btn" href="
                    https://www.amazon.com/dp/B08GJR5WGC" target="_blank" type="button" aria-label="buy now on Amazon" > Get it Now
                    </a>
                    </div>
                    <div className="col-md-8 mt-2 text-col">
                    <h1 className="bookfeature-title2 text-purple">SWEET SURRENDER</h1> 
                    <h4>Caribbean Fantasy Book 2</h4>  
                    <p className="featurep-alt"> Morgan, the bubbly young receptionist with a head full of red curls has been attracted to Zach, the muscular personal trainer who runs the gym, since the day he arrived at the resort. With a little encouragement from Zoe, she works up the courage to make a move. Zach likes the idea of getting her into bed, but he warns her off. She’s a sweet girl looking for love. He’s anything but sweet and unable to offer love or commitment. As tempting as she is, she’s off limits. Used to getting her way, and despite his warning, Morgan continues to pursue Zach.</p>
                    <p>His best friend, Amber, who’s been by his side for a decade, wants to see him happy. Although she doesn’t think Morgan is right for him, she encourages him to let go of the past and move on with his life. Zach and Amber have been through a lot together and she means well. Both need to start a new chapter in their lives, one that includes less pain and more love. Neither feel ready, but little do they know, Morgan may be the one to give them the push they both need.</p>
                    </div>
                </div>
        </div>
    )
}

export default CFbook2