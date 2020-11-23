import React, { Component } from 'react';
import emailjs from 'emailjs-com';

function sendEmail(e) {
   e.preventDefault();

   emailjs.sendForm('service_3mjs2hp', 'youtube_template', e.target, 'user_ImjM4d6wN2OFXfGV2lLqH')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     }); 
     e.target.reset()
 }


class Contact extends Component {

   render() {

    if(this.props.data){
      var name = this.props.data.name;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var subject = this.props.data.subject;

   }

    return (
      <form className="contact-form" onSubmit={sendEmail}>
        {/* <input type="hidden" name="contact_number" /> */}
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send " />
      </form>
    );
  }
    
  }


export default Contact;
