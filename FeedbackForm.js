import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  // Validate form inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !feedback) {
      alert("All fields are required.");
      return;
    }

    const formData = {
      name,
      email,
      feedback
    };

    setSubmittedData(formData);  // Store the form data after submission
    setName("");  // Reset name field
    setEmail("");  // Reset email field
    setFeedback("");  // Reset feedback field
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      
      {/* Feedback form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>
        <div>
          <label>Feedback: </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your Feedback"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data if exists */}
      {submittedData && (
        <div>
          <h2>Submitted Feedback:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Feedback: {submittedData.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
