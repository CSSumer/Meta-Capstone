import React from 'react';
import BookingForm from './BookingPage.js';

function ParentComponent() {
  const handleSubmitForm = (formData) => {
    // Handle form submission here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <BookingForm submitForm={handleSubmitForm} />
    </div>
  );
}

export default ParentComponent;