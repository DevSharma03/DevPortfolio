<<<<<<< HEAD
import React, { useState } from 'react';
import './ContactMe.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div id="contact">
            <div className="contact-me-wrapper">
            <div className="contact-me-content">
                <div className="contact-info">
                <div id="skills-title" className="h2---section mb-3">
                    <a href="#skills-title" className="h2-linkblock">
                        <h2 className="h2---text">Let's CON</h2>
                        <div className="h2---o work">
                        <div className="title---eye-pupils work">Ne</div>
                        </div>
                        <h2 className="h2---text">ct</h2>
                    </a>
                </div>
                <p>Looking for help? Fill the form and start a new adventure.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p><strong>Address:</strong> <br /> <FaMapMarkerAlt className="contact-icon" /> Pune</p>
                        </div>
                        <div className="contact-detail">
                            
                            <p><strong>Phone:</strong> <br /><FaPhone className="contact-icon" /> (+91) 8446543823</p>
                        </div>
                        <div className="contact-detail">
                            <p><strong>Support:</strong> <br /><FaEnvelope className="contact-icon" /> work.devashishsharma09@gmail.com</p>
                        </div>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-1">
                    <FaLinkedin className="icon linkedin" />
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-2">
                    <FaGithub className="icon github" />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-3">
                    <FaTwitter className="icon twitter" />
                    </a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-4">
                    <FaInstagram className="icon instagram" />
                    </a>
                    <a href="mailto:hellosupport@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-5">
                    <FaEnvelope className="icon email" />
                    </a>
                </div>
                </div>

                <div className="contact-form-container">
                <div className="contact-form">
                    <center><h2 className='mb-3'><b>Connect Me</b></h2></center>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject:</label>
                        <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 Devashish Sharma's Portfolio</p>
            </footer>
            </div>
        </div>
    );
};

export default Contact;


=======
import React, { useState } from 'react';
import './ContactMe.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div id="contact">
            <div className="contact-me-wrapper">
            <div className="contact-me-content">
                <div className="contact-info">
                <div id="skills-title" className="h2---section mb-3">
                    <a href="#skills-title" className="h2-linkblock">
                        <h2 className="h2---text">Let's CON</h2>
                        <div className="h2---o work">
                        <div className="title---eye-pupils work">Ne</div>
                        </div>
                        <h2 className="h2---text">ct</h2>
                    </a>
                </div>
                <p>Looking for help? Fill the form and start a new adventure.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <p><strong>Address:</strong> <br /> <FaMapMarkerAlt className="contact-icon" /> Pune</p>
                        </div>
                        <div className="contact-detail">
                            
                            <p><strong>Phone:</strong> <br /><FaPhone className="contact-icon" /> (+91) 8446543823</p>
                        </div>
                        <div className="contact-detail">
                            <p><strong>Support:</strong> <br /><FaEnvelope className="contact-icon" /> work.devashishsharma09@gmail.com</p>
                        </div>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-1">
                    <FaLinkedin className="icon linkedin" />
                    </a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-2">
                    <FaGithub className="icon github" />
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-3">
                    <FaTwitter className="icon twitter" />
                    </a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-4">
                    <FaInstagram className="icon instagram" />
                    </a>
                    <a href="mailto:hellosupport@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-5">
                    <FaEnvelope className="icon email" />
                    </a>
                </div>
                </div>

                <div className="contact-form-container">
                <div className="contact-form">
                    <center><h2 className='mb-3'><b>Connect Me</b></h2></center>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject:</label>
                        <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 Devashish Sharma's Portfolio</p>
            </footer>
            </div>
        </div>
    );
};

export default Contact;


>>>>>>> 19ff24ce4b5858cdb8d4e612d62c839c795eaced
