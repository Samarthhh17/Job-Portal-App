import React, { useState, useEffect } from 'react';

const JobListings = () => {
  const [jobListings, setJobListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch job listings from the backend API endpoint
    fetch('/api/job-listings')
      .then((response) => response.json())
      .then((data) => setJobListings(data));
  }, []);

  // Filter job listings based on the search term
  const filteredListings = jobListings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredListings.map((listing) => (
          <li key={listing.id}>
            <a href={`/job/${listing.id}`}>{listing.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
