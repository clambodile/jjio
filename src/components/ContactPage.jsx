import React, { Component } from 'react'
import BackButton from './BackButton.jsx'

export default class ContactPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      success: false,
      failure: true,
    }

    this.handleChange = this.handleChange.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
    this.showSuccessMessage = this.showSuccessMessage.bind(this)
    this.clearMessage = this.clearMessage.bind(this)
  }

  handleChange(key) {
    const context = this;
    return function(e) {
      context.setState({email: {...context.state.email, [key]: e.target.value}})
    }
  }

  sendEmail(e) {
    const context = this;
    e.preventDefault()
    emailjs.send('gmail', 'basic', this.state.email)
    .then(function(response) {
      context.setState({success: true, failure: false})
      window.setTimeout(context.clearMessage.bind(context), 5000)
    }, function(err) {
      context.setState({success: false, failure: true})
      window.setTimeout(context.clearMessage.bind(context), 5000)
    })
    this.setState({email: {
        name: '',
        email: '',
        subject: '',
        message: '',
    }})
  }

  clearMessage() {
    this.setState({
      success: false,
      failure: false,
    })
  }

  render() {
    return (
      <div className="page">
        <form className="form">
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            id="name" 
            value={this.state.email.name}
            onChange={this.handleChange('name')}>
          </input>
        </div>
        <div>
          <label htmlFor="mail">E-mail:</label>
          <input 
            id="mail"
            value={this.state.email.email}
            onChange={this.handleChange('email')} >
          </input>
        </div>
        <div>
          <label>Subject:</label>
          <input 
            value={this.state.email.subject}
            onChange={this.handleChange('subject')}>
          </input>
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            value={this.state.email.message}
            onChange={this.handleChange('message')}>
          </textarea>
        </div>
        <div className="buttonContainer">
          <button onClick={this.sendEmail}>Send</button>
        </div>
        <div className="g-rechaptcha" data-sitekey="6LdMWiMUAAAAALnSZflIjrVy376JNmxTyil-HHrg"></div>
        </form>
        <BackButton />
        <br />
        {this.state.success ? <span>Message Sent!</span> : null}
        {this.state.failure ? <span>Message failed to send. Please try again.</span> : null}
      </div>
      
    );
  }
}
