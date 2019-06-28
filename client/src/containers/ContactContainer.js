import React, { Component } from 'react';

class ContactContainer extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-form">
          <h1>Contact Me</h1>
          <form>
              <input
                type="text"
                name="name"
                placeholder="Bill Gates"
                size="50"/>
              <br/>
              <input
                type="text"
                name="email"
                placeholder="realbillgates@microsoft.com"
                size="50"/>
              <br/>
              <textarea
                name="message"
                placeholder="Wow Danielle, I love your site. Please make one for me! Here’s 50k in Bitcoin! [bitcoin link redacted]"
                rows="20"
                cols="48"
                wrap="soft"/>
              <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
