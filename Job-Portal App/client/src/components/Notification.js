import React, { useState, useEffect } from 'react';

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const notificationTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Set the duration for which the notification is visible (e.g., 5 seconds)

    return () => {
      clearTimeout(notificationTimeout);
    };
  }, []);

  return isVisible ? <div className="notification">{message}</div> : null;
};

export default Notification;
