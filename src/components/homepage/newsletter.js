import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Newsletter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            message: 'Subscribe to my Newsletter'
        }
    }

    changeEmailHandler = (event) =>{
        this.setState({ email:event.target.value })
    }

handleSubmit = e => {
    e.preventDefault();
    this.setState({message: 'Thank you for subscribing to the newsletter'})
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
    this.setState({email: ''})
  }

    render(){
        return (
            <>
                <div className="news hero-bg-light ">
                <div className="letter">
                <h2>{this.state.message}</h2>
                <p>Get insider scoops and never miss out on a new release!</p>
                <div className="form">
                    <form className="subscribe" onSubmit={this.handleSubmit}>
                    <input type="email" value={this.state.email} onChange={this.changeEmailHandler} name="EMAIL" id="acn-email" className="subscribe-email" placeholder="Enter your email" required />
                    <button className="btn_send" type="submit">Yes, I want the Newsletter!</button>
                    </form>
                </div>
                </div>
                
                </div>
            </>
        )
    }
}

export default Newsletter