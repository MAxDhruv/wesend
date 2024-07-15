// import React, { useState, useEffect } from 'react';
// import { MdOutlineDashboard } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import Lottie from 'lottie-react';
// import Dash from '../dash.json';
// import Wp from '../wp.json';
// import Rprt from '../rprt.json';
// import cmg from '../Campaign.json';
// import srch from '../serch_phn.json';

// const MenuBar = ({ handleMenuClick }) => {
//   const [credits, setCredits] = useState({
//     WN: 0, // Dashboard
//     WI: 0, // Send Whatsapp
//     WB: 0, // Whatsapp Report
//     // Add more sections as needed
//   });

//   // Fetch user credits from backend
//   useEffect(() => {
//     // Simulated API call
//     // Replace with actual API call to fetch user credits
//     setTimeout(() => {
//       setCredits({
//         WN: 100, // Example credits for dashboard (WN)
//         WI: 50, // Example credits for sendWhatsapp (WI)
//         WB: 75, // Example credits for whatsappReport (WB)
       
//       });
//     }, 1000); // Simulated delay for API call
//   }, []); 

//   return (
//     <div className='left_div'>
      
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
       
//         <div style={{ backgroundColor: '#D8BFD8', padding: '5px 10px', borderRadius: '5px' }}>
//           <span style={{ fontSize: '14px', fontWeight: 'bold' }}>WN</span>
//           <br />
//           <span style={{ fontSize: '20px' }}>{credits.WN}</span>
//         </div>
     
//         <div style={{ backgroundColor: '#D8BFD8', padding: '5px 10px', borderRadius: '5px' }}>
//           <span style={{ fontSize: '14px', fontWeight: 'bold' }}>WI</span>
//           <br />
//           <span style={{ fontSize: '20px' }}>{credits.WI}</span>
//         </div>
       
//         <div style={{ backgroundColor: '#D8BFD8', padding: '5px 10px', borderRadius: '5px' }}>
//           <span style={{ fontSize: '14px', fontWeight: 'bold' }}>WB</span>
//           <br />
//           <span style={{ fontSize: '20px' }}>{credits.WB}</span>
//         </div>
//         {/* Add more credit blocks for other sections */}
//       </div>

//       <ul>
//         <li onClick={() => handleMenuClick('dashboard')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//           <div style={{ marginRight: '15px' }}>
//             <Lottie animationData={Dash} style={{ height: '50px' }} />
//           </div>
//           Dashboard
//         </li>
//         <li onClick={() => handleMenuClick('sendWhatsapp')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//           <div style={{ marginRight: '15px' }}>
//             <Lottie animationData={Wp} style={{ height: '50px', marginLeft: '10px' }} />
//           </div>
//           Send Whatsapp
//         </li>
//         <li>
//           <span onClick={() => handleMenuClick('whatsappReport')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//             <div style={{ marginRight: '15px' }}>
//               <Lottie animationData={Rprt} style={{ height: '50px', marginLeft: '10px' }} />
//             </div>
//             Whatsapp Report
//           </span>
//           <ul className='sub-menu'>
//             <li onClick={() => handleMenuClick('campaignWise')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//               <div style={{ marginRight: '15px' }}>
//                 <Lottie animationData={cmg} style={{ height: '50px', marginLeft: '10px' }} />
//               </div>
//               Campaign Wise
//             </li>
//             <li onClick={() => handleMenuClick('searchMobile')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//               <div style={{ marginRight: '15px' }}>
//                 <Lottie animationData={srch} style={{ height: '50px', marginLeft: '10px' }} />
//               </div>
//               Search Mobile
//             </li>
//           </ul>
//         </li>
//         <li onClick={() => handleMenuClick('creditReport')}>Credit Report</li>
//         {/* Add more menu items as needed */}
//         <li onClick={() => handleMenuClick('manageReseller')}>Manage Reseller</li>
//         <li onClick={() => handleMenuClick('manageUser')}>Manage User</li>
//         <li onClick={() => handleMenuClick('setting')}>Setting</li>
//         <li onClick={() => handleMenuClick('tree')}>Tree View</li>
//         <li onClick={() => handleMenuClick('news')}>News</li>
//       </ul>
//     </div>
//   );
// }

// export default MenuBar;



import React, { useContext } from 'react';
import { CreditContext } from '../Component/CreditContext';
import { MdOutlineDashboard } from "react-icons/md";
import Lottie from 'lottie-react';
import Dash from '../dash.json';
import Wp from '../wp.json';
import Rprt from '../rprt.json';
import cmg from '../Campaign.json';
import srch from '../serch_phn.json';

const MenuBar = ({ handleMenuClick }) => {
  const { credits } = useContext(CreditContext);

  return (
    <div className='left_div'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ backgroundColor: '#D8BFD8', padding: '5px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>WN</span>
          <br />
          <span style={{ fontSize: '20px' }}>{credits.WN}</span>
        </div>
        <div style={{ backgroundColor: '#D8BFD8', padding: '5px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>WI</span>
          <br />
          <span style={{ fontSize: '20px' }}>{credits.WI}</span>
        </div>
        <div style={{ backgroundColor: '#D8BFD8', padding: '5px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>WB</span>
          <br />
          <span style={{ fontSize: '20px' }}>{credits.WB}</span>
        </div>
      </div>

      <ul>
        <li onClick={() => handleMenuClick('dashboard')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <div style={{ marginRight: '15px' }}>
            <Lottie animationData={Dash} style={{ height: '50px' }} />
          </div>
          Dashboard
        </li>
        <li onClick={() => handleMenuClick('sendWhatsapp')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <div style={{ marginRight: '15px' }}>
            <Lottie animationData={Wp} style={{ height: '50px', marginLeft: '10px' }} />
          </div>
          Send Whatsapp
        </li>
        <li>
          <span onClick={() => handleMenuClick('whatsappReport')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ marginRight: '15px' }}>
              <Lottie animationData={Rprt} style={{ height: '50px', marginLeft: '10px' }} />
            </div>
            Whatsapp Report
          </span>
          <ul className='sub-menu'>
            <li onClick={() => handleMenuClick('campaignWise')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ marginRight: '15px' }}>
                <Lottie animationData={cmg} style={{ height: '50px', marginLeft: '10px' }} />
              </div>
              Campaign Wise
            </li>
            <li onClick={() => handleMenuClick('searchMobile')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ marginRight: '15px' }}>
                <Lottie animationData={srch} style={{ height: '50px', marginLeft: '10px' }} />
              </div>
              Search Mobile
            </li>
          </ul>
        </li>
        <li onClick={() => handleMenuClick('creditReport')}>Credit Report</li>
        <li onClick={() => handleMenuClick('manageReseller')}>Manage Reseller</li>
        <li onClick={() => handleMenuClick('manageUser')}>Manage User</li>
        <li onClick={() => handleMenuClick('setting')}>Setting</li>
        <li onClick={() => handleMenuClick('tree')}>Tree View</li>
        <li onClick={() => handleMenuClick('news')}>News</li>
      </ul>
    </div>
  );
}

export default MenuBar;
