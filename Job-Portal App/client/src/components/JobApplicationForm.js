import React, { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    resume: null,       // Store the resume file here
    coverLetter: '',
    name: '',
    email: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'resume' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form validation logic here
    if (!formData.resume || !formData.coverLetter || !formData.name || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    // Send form data to the backend for submission
    // You will need to implement the API call to submit the job application
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="resume" onChange={handleInputChange} accept=".pdf,.doc,.docx" />
      <textarea
        name="coverLetter"
        value={formData.coverLetter}
        onChange={handleInputChange}
        placeholder="Write your cover letter here"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your email"
      />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
