import React, { useState } from 'react';
import './Sidebar.css';
import { FcShare } from "react-icons/fc";
import { FaSms, FaGlobe, FaBullhorn } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const Sidebar = ({ setView }) => {
  const [dropdownOpen, setDropdownOpen] = useState('');

  const handleDropdownToggle = (dropdownName) => {
    setDropdownOpen((prevDropdownOpen) =>
      prevDropdownOpen === dropdownName ? '' : dropdownName
    );
    setView(''); // Close any open views when toggling dropdown
  };

  const handleMainButtonClick = (view) => {
    setDropdownOpen(''); // Close all dropdowns
    setView(view); // Set the view for the clicked main button
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <button onClick={() => handleMainButtonClick('Dashboard')}>
              <span className="icon">📊</span> Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => handleDropdownToggle('Send Whatsapp')}>
              <span className="icon">💬</span> Send Whatsapp
            </button>
            {dropdownOpen === 'Send Whatsapp' && (
              <ul className="dropdown">
                <li>
                  <button onClick={() => setView('Send Domestic')}>
                    <span className="icon"><FaSms /></span> Send Domestic
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('Send International')}>
                    <span className="icon"><FaGlobe /></span> Send International
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('Send Campaign')}>
                    <span className="icon"><FaBullhorn /></span> Send Campaign
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => handleDropdownToggle('whatsappReport')}>
              <span className="icon">📈</span> Whatsapp Report
            </button>
            {dropdownOpen === 'whatsappReport' && (
              <ul className="dropdown">
                <li>
                  <button onClick={() => setView('Whatsapp Report Option 1')}>
                    <span className="icon">📊</span> Campaign Wise Report
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('Whatsapp Report Option 2')}>
                    <span className="icon">🔍</span> Search Mobile No Report
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => handleDropdownToggle('creditReport')}>
              <span className="icon">💳</span> Credit Report
            </button>
            {dropdownOpen === 'creditReport' && (
              <ul className="dropdown">
                <li>
                  <button onClick={() => setView('Credit Report Option 1')}>
                    <span className="icon">📋</span> Reseller Report
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('Credit Report Option 2')}>
                    <span className="icon">📄</span> User Report
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => handleMainButtonClick('Manage Reseller')}>
              <span className="icon">🔧</span> Manage Reseller
            </button>
          </li>
          <li>
            <button onClick={() => handleDropdownToggle('settings')}>
              <span className="icon">⚙️</span> Settings
            </button>
            {dropdownOpen === 'settings' && (
              <ul className="dropdown">
                <li>
                  <button onClick={() => setView('Settings Option 1')}>
                    <span className="icon">🔄</span> Update Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('Settings Option 2')}>
                    <span className="icon">🔑</span> Change Password
                  </button>
                </li>
                <li>
                  <button onClick={() => setView('Settings Option 3')}>
                 
                    <span className="icon"> <GrUpdate /></span> Update Credits
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => handleMainButtonClick('Notifications')}>
              <span className="icon">🔔</span> Notifications
            </button>
          </li>
          <li>
            <button onClick={() => handleMainButtonClick('Tree View')}>
              <span className="icon">🌳</span> Tree View
            </button>
          </li>
          <li>
            <button onClick={() => handleMainButtonClick('Contact Us')}>
              <span className="icon">📞</span> Contact Us
            </button>
          </li>
          <li>
            <button onClick={() => handleMainButtonClick('Invite Friends')}>
              <FcShare />
              <span className="icon"></span> Invite Friends
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
