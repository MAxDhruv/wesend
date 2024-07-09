import React from 'react';
import './ChangePasswordForm.css';

const ChangePasswordForm = () => {
  return (
    <div className="form-container">
      <h2>CHANGE PASSWORD</h2>
      <form>
        <div className="form-group">
          <label>Current Password <span>*</span></label>
          <input type="password" placeholder="Old Password" />
          <span className="show-password">👁️</span>
        </div>
        <div className="form-group">
          <label>New Password <span>*</span></label>
          <input type="password" placeholder="New Password" />
          <span className="show-password">👁️</span>
        </div>
        <div className="form-group">
          <label>Confirm Password <span>*</span></label>
          <input type="password" placeholder="Confirm Password" />
          <span className="show-password">👁️</span>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
