import React, { Component } from 'react'
import logo from '../../images/zupa-logo-footer.png'

export default class footer extends Component {
    render() {
        return (
            <section id="footer">
            <div className="container-fluid footer-container">
            <div className="container">
            <div className="row">
            
            <div className="col-md-6">
            <img className="footer-logo" src={logo} alt="Zupa Logo"/>
            <h1>The Art of Soup</h1>
            <h2>Delivered to your door!</h2>
            <p>Free delivery in Manhattan for orders $18 and above. Delivered within 30 minutes in downtown Manhattan only. Delivery to other areas will take longer.</p>
            <p>Open everyday 11am-4pm</p>
            </div>

            <div id="contact" className="col-md-6">
            <h2>Contact Us</h2>
            <form>
            <div className="form-group">
            <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Name Here"></input>
            </div>
            <div className="form-group">
            <input type="text" className="form-control" name="email" id="email" placeholder="Enter Your Email Here"></input>
            </div>
            <div className="form-group">
            <textarea name="description" id="description" className="form-control" rows="3" placeholder="Enter your Message here"></textarea>
            </div>
            <button type="submit" aria-label="submit your message" className="btn btn-bordered-red btn-text mt-1">Submit</button>
            </form>
            </div>
            </div>
            </div>
            </div>

            <div className="container-fluid copyright-container">
            <p class="text-center">&copy; {new Date().getFullYear().toString()} Alex Calaway | Web Design by <a href="https://lbmedia.netlify.com/">LB Media</a></p>
            </div>
            </section>
        )
    }
}

