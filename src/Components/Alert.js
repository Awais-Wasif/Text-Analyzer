import React, { useState, useEffect } from 'react';

export default function Alert(props) {
  const [showAlert, setShowAlert] = useState(props.show);

  useEffect(() => {
    // Update the showAlert state whenever props.show changes
    setShowAlert(props.show);
  }, [props.show]);

  useEffect(() => {
    // Set up a timer to hide the alert after 3 seconds
    const timer = setTimeout(() => {
      setShowAlert('');
    }, 3000);

    // Clean up the timer when the component unmounts or showAlert changes
    return () => clearTimeout(timer);
  }, [showAlert]);

  if (showAlert === '') {
    console.log('Empty alert');
    return null; // Return null to not render anything if showAlert is empty
  }

  return (
    <div className={props.mode === 'dark'?'alert alert-primary':'alert alert-success'} role="alert">
      {showAlert}
    </div>
  );
}
