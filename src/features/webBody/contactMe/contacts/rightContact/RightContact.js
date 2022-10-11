import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function RightContact() {
  const [inputs, setInputs] = useState({
    nameValue: '',
    emailValue: '',
    subjectValue: '',
    messageValue: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [id]: value,
      };
    });
  };

  const handleReset = () => {
    setInputs({
      nameValue: '',
      emailValue: '',
      subjectValue: '',
      messageValue: '',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4ybpj9s',
      'template_le989zr',
      form.current,
      'RfEcYZx21qNfEcb_B'
    );
    handleReset();
  };

  return (
    <form
      className="right-contact"
      onSubmit={sendEmail}
      ref={form}
      aria-label="form"
    >
      <fieldset className="person-details">
        <label htmlFor="nameValue">Your Name:</label>
        <input
          type="text"
          id="nameValue"
          placeholder="Your Name"
          name="name"
          required
          value={inputs.nameValue}
          onChange={handleChange}
        />
        <label htmlFor="emailValue">Your Email:</label>
        <input
          type="email"
          id="emailValue"
          placeholder="Your Email"
          name="email"
          required
          value={inputs.emailValue}
          onChange={handleChange}
        />
      </fieldset>

      <label htmlFor="subjectValue">Subject:</label>
      <input
        type="text"
        id="subjectValue"
        placeholder="Subject"
        className="subject-input"
        name="subject"
        required
        value={inputs.subjectValue}
        onChange={handleChange}
      />

      <label htmlFor="messageValue">Your Message:</label>
      <textarea
        name="message"
        placeholder="Your Message"
        id="messageValue"
        required
        value={inputs.messageValue}
        onChange={handleChange}
      ></textarea>

      <button className="form-btn">Say Hello</button>
    </form>
  );
}

export default RightContact;
