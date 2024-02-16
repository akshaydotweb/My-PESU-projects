import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/formdata', formData); // Adjust URL as needed
      alert('Form submitted successfully');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className="bckbox">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
       <div className="logo">
         <img alt="logo" src="https://pesu.io/static/images/pes_logo.png"></img>
       </div>
        <div className="form-group">
          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Name"/>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email"/>
          <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
        </div>
        <div className="social">
          <button type="submit">Submit</button>  
        </div>
      </form  >
    </div>
        );
};

export default FormComponent;