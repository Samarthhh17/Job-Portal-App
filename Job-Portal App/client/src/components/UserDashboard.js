import React from 'react';

const UserDashboard = () => {
  // Fetch user's job applications from the backend and store them in the 'applications' array

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <strong>{application.jobTitle}</strong>
            <p>Status: {application.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
