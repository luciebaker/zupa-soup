import React, { Component } from 'react'
import logo from '../../images/alexcalawaylogonav.png'

export default class footer extends Component {
    render() {
        return (
            <section id="footer">
            <div className="container-fluid footer-container">
            <div className="container">
            <div className="row">
            
            <div className="col-md-6">
            <img className="footer-logo" src={logo} alt="Alex Calaway"/>
            <p>Alex Calaway is a thinker, traveler, photographer, writer, and contemporary romance author. She writes about love in various locations around the world. Her first book series takes place in the Caribbean islands, a place where she lived for a few months, although she never got up to the sexy steamy adventures, the characters in her novels enjoy. Her female characters are sweet and sexy. Her male characters, tall, dark and handsome, often alphas, not always sweet but always passionate. Her writing is steamy and erotic, with a touch of humor and always enough heat to keep things interesting.</p>
            </div>

            <div id="contact" className="col-md-6">
            <h2>Contact Alex</h2>
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

