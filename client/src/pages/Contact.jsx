import React, { useState } from "react";
import {useAuth} from "../store/auth"

const defaultContactForm = {
  username:"",
  email:"",
  message:"",
}

const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  
  const [userData, setUserData] = useState(true)
  const {user} = useAuth()
  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:""
    })
    setUserData(false)
  }
  
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(contact)
      })
      if(response.ok){
        setContact(defaultContactForm)
        const data = await response.json()
        console.log(data)
        alert("Message sent Successfully!")
      }
    } catch (error) {
      alert("Message not sent")
      console.log(error)
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className=" grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/contact.jpg" alt="" />
          </div>
          <div className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            marginBottom:"10%",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1148139542847!2d77.26702887534898!3d28.385599975800556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cde918b8a4a13%3A0xd70de4e4afa12e31!2s4505%2C%20A%20block%2C%20Dabua%20Pali%20Rd%2C%20near%20panchmukhi%20hanuman%20mandir%2C%20Nehru%20Colony%2C%20Sector%2049%2C%20Faridabad%2C%20Haryana%20121005!5e0!3m2!1sen!2sin!4v1756191611014!5m2!1sen!2sin"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
