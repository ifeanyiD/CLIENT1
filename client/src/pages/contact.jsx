import React, { useState } from 'react';
import "../styles/contact.scss";
import { MdEmail, MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //await API.post("/contact", form)
    alert("Message sent!")
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  return (
    <section className="contact-page">
      <h2>Contact us</h2>
      <div className='container'>
         <div className='form_layout'>
            <form onSubmit={handleSubmit}>
                <div className='inp'>
                    <input
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <input
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                />

                <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                />

                <button type="submit">Send Message</button>
            </form>
            <div className='contact_info'>
                <div><MdEmail /> <span>Email</span></div>
                <div><MdAddCall /> <span>0813094030e30</span></div>
                <div><FaLocationDot /> <span>location</span></div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Contact;