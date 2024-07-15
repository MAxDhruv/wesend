import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../NavBar.css';
import Lottie from 'lottie-react';
import Note from '../note.json';
import Modal from 'react-modal';

const NavBar = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ feedback })
    }).then(response => {
      if (response.ok) {
        console.log('Feedback submitted successfully');
        setFeedback('');
        closeModal();
      } else {
        console.error('Failed to submit feedback');
      }
    });
  };

  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='logo'><h2>My Dashboard</h2></div>
        <div className='login' onClick={handleLogout}>Log Out</div>
        <div className='feedback' onClick={openModal}>Feedback</div>
      </div>
      <div className='note-container'>
        <div className='note'>
          <Lottie animationData={Note} style={{ height: '20px' }} />
          <span> NOTE: WhatsApp SMS Timing 10:00 A.M. to 5:00 P.M.</span>
          <Lottie animationData={Note} style={{ height: '25px' }} />
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="feedback-modal">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <textarea value={feedback} onChange={handleFeedbackChange} required />
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </nav>
  );
}

export default NavBar;
