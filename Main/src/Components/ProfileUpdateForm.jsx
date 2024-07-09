import React, { useState } from "react";
import "./ProfileUpdateForm.css";

const ProfileUpdateForm = () => {
  const [formData, setFormData] = useState({
    username: "admin",
    email: "admin@gmail.com",
    fullname: "Admin",
    profilePic: null,
    mobile: "919384440735",
    company: "WESEND",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePic: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container">
      <h2>UPDATE PROFILE</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username *</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Id *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Fullname *</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profilePic">Profilepic (300 x 300px)</label>
          {formData.profilePic && (
            <div>
              <img
                src={URL.createObjectURL(formData.profilePic)}
                alt="Profile Preview"
                className="profile-pic-preview"
              />
            </div>
          )}
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/*"
            onChange={handleFileChange}
          />
          <p className="file-size-note">
            Photo should be smaller than 500 KB. Only JPG and PNG are allowed.
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No. *</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company *</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="update-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdateForm;
