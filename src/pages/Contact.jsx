import React, { useState, useEffect } from "react";
import instagramIcon from "../assets/icons/instagram.svg";
import xIcon from "../assets/icons/twitter.svg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target);} });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const emailValid = /.+@.+\..+/.test(form.email);
    if (!emailValid) {
      setErrors({ email: "Please enter a valid email" });
      return;
    }
    setErrors({});
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact">
      <h1 className="fade-scroll">Get in Touch</h1>
      <div className="social-icons fade-scroll">
        <a href="https://instagram.com/m.stroeykens" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://twitter.com/MarioStroeykens" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X" />
        </a>
      </div>
      <p className="fade-scroll">Whether you’re a fan, a brand partner, or a member of the media, we’d love to hear from you. Drop Mario a message using the form below or connect via social media.</p>
      <form onSubmit={handleSubmit} className="fade-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} required style={errors.email ? { borderColor: 'red' } : {}} />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>
        <div>
          <label>Subject</label>
          <input name="subject" value={form.subject} onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required rows="4" />
        </div>
        <button type="submit" className="btn">Send Message</button>
        {success && <p>Thanks for your message! We’ll get back to you soon.</p>}
      </form>
      <div className="fade-scroll" style={{ marginTop: '1rem' }}>
        <p>For sponsorships, brand collaborations, or media requests, please reach out to Mario’s management:</p>
        <p><strong>CAA Stellar</strong></p>
        <p>For club-related inquiries, you may also contact RSC Anderlecht’s press office via their official website.</p>
      </div>
    </div>
  );
};

export default Contact;
