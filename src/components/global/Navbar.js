import React, { Component } from 'react'
import { Link } from "gatsby";
import logo from '../../images/alexcalawaylogonav.png'


export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: "collapse navbar-collapse",
        links: [
            {
                id: 1,
                path: '/',
                text: 'Home'
                },
            {
                id: 2,
                path: '/#contact',
                text: 'About Alex'
                },
            {
                id: 3,
                path: '/#intro',
                text: 'Books'
                },
            {
                id: 4,
                path: '/#contact',
                text: 'Contact'
                },   
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen
        ? this.setState({
            navbarOpen: false,
            css: "collapse navbar-collapse"
            })
        : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
            });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light fixed-top shrink">
            <Link to='/' className="navbar-brand">
            <img className="navbar-logo" src={logo} alt="Alex Calaway"/>
            </Link>
            <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
            <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
                return (
                    <li key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link text-uppercase">
                    {link.text}
                    </Link>
                    </li>
                )     
            })}
            </ul>
            </div>
            </nav>
        )
    }
}