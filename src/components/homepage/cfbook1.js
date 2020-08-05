import React from 'react'
import Image from '../../images/book1mock.png'

const CFbook1 = () => {
    return (
        <div className="container-fluid hero-bg">
        <div className="row home-header-row justify-content-center">
                    <div className="col-md-4 book-col text-center">
                    <img className="feature-image" src={Image} alt="Risky Flirtation"/>
                    <a className="btn btn-bordered-red btn-text mt-1 bookfeature-btn" href="
                    https://www.amazon.com/dp/B08F7VQ6C5" target="_blank" type="button" aria-label="buy now on Amazon" > Get it Now
                    </a>
                    </div>
                    <div className="col-md-8 text-col">
                    <h1 className="bookfeature-title">RISKY FLIRTATION</h1> 
                    <h4>Caribbean Fantasy Book 1</h4>  
                    <p> When Zoe decides to take a gap year from her studies and lands herself a job at the secluded adult-only Scarlet Bay Resort, she isn’t sure what to expect. If it hadn’t been for its location in the beautiful Caribbean islands, it wouldn’t have been her first choice. She soon realizes that her conservative background hasn’t prepared her for this. The only way to make this work is to fake it. Hiding her inexperience behind flirtatious games, Zoe manages to adapt to her new environment, do her job without anyone noticing, and have fun in the process.</p> 
                    <p>The only problem is Theo, the tall, dark, and handsome groundkeeper, nearly twice her age, she noticed on the first day she arrived. Flirting with him is risky and she knows it. A man like him will soon want more from her than playful cuddles. Unless she can keep her distance, it’s only a matter of time before he discovers her secret, but staying away from such a handsome man proves to be a lot easier said than done.  </p>
                    </div>
                </div>
        </div>
    )
}

export default CFbook1