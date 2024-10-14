import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import photo_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white from '../../assets/white-arrow.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "04f7224d-d1be-4fb5-ac15-b1ddb83f93d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
            Feel free to reach out through contact form or find our contact information below.
            your feedback, questions, and suggestions are important to us as we strive to provide exceptionals services to our university community.
        </p>
        <ul>
            <li> <img src={mail_icon} alt="" />Contact@Prajjwal.dev</li>
            <li> <img src={photo_icon} alt="" />7905922684</li>
            <li> <img src={location_icon} alt="" />1234 Main Street, Suite 500 Springfield,India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label > Your Name</label>
            <input type="text" name='name' placeholder='Enter you name' required />
            <label >Phone Number</label>
            <input type="number" name='phone' placeholder='Enter Your mobile number' />
            <label >Write you message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message'
            required id=""></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
