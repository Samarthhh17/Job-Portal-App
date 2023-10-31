import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch job details from the backend API endpoint
    fetch(`/api/job/${jobId}`)
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [jobId]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      {/* Display other job details */}
    </div>
  );
};

export default JobDetails;
