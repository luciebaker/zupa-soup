import React from 'react'
import logo from '../../images/zupa-logo.png'
import circle from '../../images/top-circle.png'

const intro = () => {
    return (
        <div id="intro" className="container-fluid intro-container">
        <div className="container">
        <img className="intro-logo" src={logo} alt="Zupa Logo"/>
        <div className="row">
        <div className="col-sm-6">
        <h1>The Art of Soup Making</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-sm-6">
        <h1>Only the Best Ingredients</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </div>
        <img className="intro-circle" src={circle} alt="half circle"/>
        </div>
        </div>
    )
}

export default intro
