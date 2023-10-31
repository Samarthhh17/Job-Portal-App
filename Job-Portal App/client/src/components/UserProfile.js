import React, { useState } from 'react';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    resume: null, // Store the resume file here
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: name === 'resume' ? files[0] : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement API call to update user profile on the backend
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <label>Upload Resume:</label>
        <input
          type="file"
          name="resume"
          onChange={handleInputChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
