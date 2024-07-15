
// // import React, { useState } from 'react';
// // import NavBar from './NavBar';
// // import MenuBar from './MenuBar';
// // import DashboardSection from '../../src/Component/DashboardSection';
// // import SendWhatsappSection from '../../src/Component/SendWhatsappSection';
// // import WhatsappReportSection from '../../src/Component/WhatsappReportSection';
// // import CreditReportSection from '../../src/Component/CreditReportSection';
// // import ManageResellerSection from '../../src/Component/ManageResellerSection';
// // import ManageUserSection from '../../src/Component/ManageUserSection';
// // import SettingSection from '../../src/Component/SettingSection';
// // import NewsSection from '../../src/Component/NewsSection';
// // import CampaignWiseSection from '../../src/Component/CampaignWiseSection';
// // import SearchMobileSection from '../../src/Component/SearchMobileSection';
// // import '../../src/dashboard.css';

// // const Dashboard = () => {
// //   const [activeSection, setActiveSection] = useState('dashboard');

// //   const handleMenuClick = (section) => {
// //     setActiveSection(section);
// //   };

// //   const handleSubsectionClick = (subsection) => {
// //     console.log(`Clicked on ${subsection}`);
// //   };

// //   return (
// //     <div className='main_div'>
// //       <NavBar />
// //       <div className='content'>
// //         <MenuBar handleMenuClick={handleMenuClick} />
// //         <div className='right_div'>
// //           {activeSection === 'dashboard' && <DashboardSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'sendWhatsapp' && <SendWhatsappSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'whatsappReport' && <WhatsappReportSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'creditReport' && <CreditReportSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'manageReseller' && <ManageResellerSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'manageUser' && <ManageUserSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'setting' && <SettingSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'news' && <NewsSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'campaignWise' && <CampaignWiseSection handleSubsectionClick={handleSubsectionClick} />}
// //           {activeSection === 'searchMobile' && <SearchMobileSection handleSubsectionClick={handleSubsectionClick} />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;


// // src/components/Dashboard.js
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import NavBar from './NavBar';
// import MenuBar from './MenuBar';
// import DashboardSection from '../../src/Component/DashboardSection';
// import SendWhatsappSection from '../../src/Component/SendWhatsappSection';
// import WhatsappReportSection from '../../src/Component/WhatsappReportSection';
// import CreditReportSection from '../../src/Component/CreditReportSection';
// import ManageResellerSection from '../../src/Component/ManageResellerSection';
// import ManageUserSection from '../../src/Component/ManageUserSection';
// import SettingSection from '../../src/Component/SettingSection';
// import NewsSection from '../../src/Component/NewsSection';
// import CampaignWiseSection from '../../src/Component/CampaignWiseSection';
// import SearchMobileSection from '../../src/Component/SearchMobileSection';
// import '../../src/dashboard.css';

// const Dashboard = () => {
//   const location = useLocation();
//   const { username } = location.state || { username: 'Guest' };
//   const [activeSection, setActiveSection] = useState('dashboard');

//   const handleMenuClick = (section) => {
//     setActiveSection(section);
//   };

//   const handleSubsectionClick = (subsection) => {
//     console.log(`Clicked on ${subsection}`);
//   };

//   return (
//     <div className='main_div'>
//       <NavBar />
//       <div className='content'>
//         <MenuBar handleMenuClick={handleMenuClick} />
//         <div className='right_div'>
//           <h2>Welcome, {username}</h2>
//           {activeSection === 'dashboard' && <DashboardSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'sendWhatsapp' && <SendWhatsappSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'whatsappReport' && <WhatsappReportSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'creditReport' && <CreditReportSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'manageReseller' && <ManageResellerSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'manageUser' && <ManageUserSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'setting' && <SettingSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'news' && <NewsSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'campaignWise' && <CampaignWiseSection handleSubsectionClick={handleSubsectionClick} />}
//           {activeSection === 'searchMobile' && <SearchMobileSection handleSubsectionClick={handleSubsectionClick} />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// src/components/Dashboard.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import MenuBar from './MenuBar';
import DashboardSection from '../../src/Component/DashboardSection';
import SendWhatsappSection from '../../src/Component/SendWhatsappSection';
import WhatsappReportSection from '../../src/Component/WhatsappReportSection';
import CreditReportSection from '../../src/Component/CreditReportSection';
import ManageResellerSection from '../../src/Component/ManageResellerSection';
import ManageUserSection from '../../src/Component/ManageUserSection';
import SettingSection from '../../src/Component/SettingSection';
import TreeSection from '../../src/Component/TreeSection';
import NewsSection from '../../src/Component/NewsSection';
import CampaignWiseSection from '../../src/Component/CampaignWiseSection';
import SearchMobileSection from '../../src/Component/SearchMobileSection';
import '../../src/dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' };
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  const handleSubsectionClick = (subsection) => {
    console.log(`Clicked on ${subsection}`);
  };

  return (
    <div className='main_div'>
      <NavBar />
      <div className='content'>
        <MenuBar handleMenuClick={handleMenuClick} />
        <div className='right_div'>
          <h2>Welcome, {username}</h2>
          {activeSection === 'dashboard' && <DashboardSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'sendWhatsapp' && <SendWhatsappSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'whatsappReport' && <WhatsappReportSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'creditReport' && <CreditReportSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'manageReseller' && <ManageResellerSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'manageUser' && <ManageUserSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'setting' && <SettingSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'tree' && <TreeSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'news' && <NewsSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'campaignWise' && <CampaignWiseSection handleSubsectionClick={handleSubsectionClick} />}
          {activeSection === 'searchMobile' && <SearchMobileSection handleSubsectionClick={handleSubsectionClick} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
