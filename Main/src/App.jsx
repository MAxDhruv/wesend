import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SendWhatsapp from './SendWhatsapp';
import './App.css';
import ProfileUpdateForm from './Components/ProfileUpdateForm';
// import ChangePasswordForm from './Components/ChangePasswordForm';

const App = () => {
  const [view, setView] = useState('');

  const renderView = () => {
    switch (view) {
      case 'Dashboard':
        return <div>Dashboard Content</div>;
      case 'Send Domestic':
        return <SendWhatsapp />;
      case 'Send International':
        return  <SendWhatsapp />;
      case 'Send Campaign':
        return  <SendWhatsapp />;
      case 'Whatsapp Report Option 1':
        return <div>Campaign Wise Report Content</div>;
      case 'Whatsapp Report Option 2':
        return <div>Search Mobile No Report Content</div>;
      case 'Credit Report Option 1':
        return <div>Reseller Report Content</div>;
      case 'Credit Report Option 2':
        return <div>User Report Content</div>;
      case 'Manage Reseller':
        return <div>Reseller Report Content</div>;
      case 'User Settings':
        return <div>User Settings Content</div>;
      case 'Settings Option 1':
        return   <ProfileUpdateForm />;
      case 'Settings Option 2':
        // return <ChangePasswordForm />;
      case 'Notifications':
        return <div>Notifications Content</div>;
      case 'Tree View':
        return <div>Tree View Content</div>;
      case 'Contact Us':
        return <div>Contact Us Content</div>;
      case 'Invite Friends': 
        return <div>Invite Friends Content</div>;
      default:
        return <div>Welcome</div>;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="home">
          <h2>Hello, Shankar Rathod</h2>
        </div>
      </header>
      <Sidebar setView={setView} />
      <div className="content">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
