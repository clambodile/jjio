import React, { Component } from 'react';
import BackButton from './BackButton.jsx';

export default class ContactPage extends Component {

  render() {
    return (
      <div className="contact-page">
        <form>
          {/*
            From field ()
            Subject line
            Message body
          */}
        </form>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name"></input>
        </div>
        <div>
          <label for="mail">E-mail:</label>
          <input type="email" id="mail" name="user_mail"></input>
        </div>
        <div>
          <label for="msg">Message:</label>
          <textarea id="msg" name="user_message"></textarea>
        </div>
        <div class="button">
          <button type="submit">Send your message</button>
        </div>
        <BackButton />
      </div>
      
    );
  }
}
