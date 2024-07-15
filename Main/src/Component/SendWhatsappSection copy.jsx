// import React, { useState, useContext } from 'react';
// import '../SendWhatsappSection.css';
// import { CreditContext } from '../Component/CreditContext'; // Import CreditContext

// const SendWhatsappSection = () => {
//   const [selectedSection, setSelectedSection] = useState('');
//   const { credits, deductCredit } = useContext(CreditContext); // Use the context

//   // State variables for daily limits for each section
//   const [dailyCampaigningLimit1, setDailyCampaigningLimit1] = useState(0);
//   const [dailySmallCampaigningLimit1, setDailySmallCampaigningLimit1] = useState(0);
//   const [dailyCampaigningLimit2, setDailyCampaigningLimit2] = useState(0);
//   const [dailySmallCampaigningLimit2, setDailySmallCampaigningLimit2] = useState(0);
//   const [dailyCampaigningLimit3, setDailyCampaigningLimit3] = useState(0);
//   const [dailySmallCampaigningLimit3, setDailySmallCampaigningLimit3] = useState(0);

//   // Function to handle form submission for each section
//   const handleSubmit = async (event, section) => {
//     event.preventDefault();

//     // Determine which section is being submitted and adjust limits accordingly
//     let dailyCampaigningLimit, dailySmallCampaigningLimit;
//     switch (section) {
//       case 'section1':
//         dailyCampaigningLimit = dailyCampaigningLimit1;
//         dailySmallCampaigningLimit = dailySmallCampaigningLimit1;
//         break;
//       case 'section2':
//         dailyCampaigningLimit = dailyCampaigningLimit2;
//         dailySmallCampaigningLimit = dailySmallCampaigningLimit2;
//         break;
//       case 'section3':
//         dailyCampaigningLimit = dailyCampaigningLimit3;
//         dailySmallCampaigningLimit = dailySmallCampaigningLimit3;
//         break;
//       default:
//         return;
//     }

//     if (dailyCampaigningLimit >= 4) {
//       alert('Daily campaigning limit reached.');
//       return;
//     }
//     if (dailySmallCampaigningLimit >= 2) {
//       alert('Daily small campaigning limit reached.');
//       return;
//     }

//     const formData = new FormData(event.target);

//     let url;
//     let creditType;
//     switch (section) {
//       case 'section1':
//         url = 'http://localhost:3001/whatsappApi';
//         creditType = 'WN';
//         break;
//       case 'section2':
//         url = 'http://localhost:3001/internationalApi';
//         creditType = 'WI';
//         break;
//       case 'section3':
//         url = 'http://localhost:3001/sendButtonApi';
//         creditType = 'WB';
//         break;
//       default:
//         return;
//     }

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.error}`);
//         return;
//       }

//       const data = await response.json();
//       console.log(data); // Debugging log
//       alert(`Form submitted successfully for ${section.replace('section', 'Section ')}!`);
//       // Deduct credits for the respective section
//       deductCredit(creditType);
//       // Update daily limits
//       handleUpdateDailyLimits(section);
//       // Reset form
//       event.target.reset();
//     } catch (error) {
//       console.error('Network Error:', error);
//     }
//   };

//   // Function to update daily limits based on section
//   const handleUpdateDailyLimits = (section) => {
//     switch (section) {
//       case 'section1':
//         setDailyCampaigningLimit1(prev => prev + 1);
//         setDailySmallCampaigningLimit1(prev => prev + 1);
//         break;
//       case 'section2':
//         setDailyCampaigningLimit2(prev => prev + 1);
//         setDailySmallCampaigningLimit2(prev => prev + 1);
//         break;
//       case 'section3':
//         setDailyCampaigningLimit3(prev => prev + 1);
//         setDailySmallCampaigningLimit3(prev => prev + 1);
//         break;
//       default:
//         break;
//     }
//   };

//   // Function to show respective form based on button click
//   const showForm = (section) => {
//     setSelectedSection(section);
//   };

//   return (
//     <div className="send-whatsapp-container">
//       <p className="credits-heading">Credits available:</p>
//       <ul className="credits-list">
//         <li className="credit-item">WN: {credits.WN}</li>
//         <li className="credit-item">WI: {credits.WI}</li>
//         <li className="credit-item">WB: {credits.WB}</li>
//       </ul>

//       <div className="send-whatsapp-buttons">
//         <button className="send-whatsapp-button" onClick={() => showForm('section1')}>Send WhatsApp</button>
//         <button className="send-whatsapp-button" onClick={() => showForm('section2')}>Send International</button>
//         <button className="send-whatsapp-button" onClick={() => showForm('section3')}>Send Button</button>
//       </div>

//       <div className={`send-whatsapp-section ${selectedSection === 'section1' ? 'show' : ''}`}>
//         <h4 className="send-whatsapp-subheading">Send WhatsApp</h4>
//         <form className="send-whatsapp-form" onSubmit={(e) => handleSubmit(e, 'section1')}>
//           <p>Daily Campaigning Limit: {dailyCampaigningLimit1} / 4</p>
//           <p>Daily Small Campaigning Limit: {dailySmallCampaigningLimit1} / 2</p>
//           <label>
//             Mobile Numbers<br />
//             <textarea className="send-whatsapp-textarea" name="mobileNumbers" placeholder="Enter mobile numbers here with country code" required></textarea>
//           </label><br />
//           <label>
//             Group Import<br />
//             <select className="send-whatsapp-select" name="groupImport">
//               <option>Select Group</option>
//               <option>HI</option>
//               <option>Hello</option>
//               <option>HOW are you</option>
//             </select>
//           </label><br />
//           <label>
//             CSV Import<br />
//             <input className="send-whatsapp-file-input" type="file" name="csvImport" accept=".csv" />
//           </label><br />
//           <label>
//             TXT Import<br />
//             <input className="send-whatsapp-file-input" type="file" name="txtImport" accept=".txt" />
//           </label><br />
//           <label>
//             Count<br />
//             <input className="send-whatsapp-input" type="text" name="count" />
//           </label><br />
//           <label>
//             Message<br />
//             <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
//           </label><br />
//           <button className="send-whatsapp-submit-button" type="submit">Submit for Send WhatsApp</button>
//         </form>
//       </div>

//       <div className={`send-whatsapp-section ${selectedSection === 'section2' ? 'show' : ''}`}>
//         <h4 className="send-whatsapp-subheading">Send International</h4>
//         <form className="send-whatsapp-form" onSubmit={(e) => handleSubmit(e, 'section2')}>
//           <p>Daily Campaigning Limit: {dailyCampaigningLimit2} / 4</p>
//           <p>Daily Small Campaigning Limit: {dailySmallCampaigningLimit2} / 2</p>
//           <label>
//             Mobile Numbers<br />
//             <textarea className="send-whatsapp-textarea" name="mobileNumbers" placeholder="Enter mobile numbers here with country code" required></textarea>
//           </label><br />
//           <label>
//             Group Import<br />
//             <select className="send-whatsapp-select" name="groupImport">
//               <option>Select Group</option>
//               <option>HI</option>
//               <option>Hello</option>
//               <option>HOW are you</option>
//             </select>
//           </label><br />
//           <label>
//             CSV Import<br />
//             <input className="send-whatsapp-file-input" type="file" name="csvImport" accept=".csv" />
//           </label><br />
//           <label>
//             TXT Import<br />
//             <input className="send-whatsapp-file-input" type="file" name="txtImport" accept=".txt" />
//           </label><br />
//           <label>
//             Count<br />
//             <input className="send-whatsapp-input" type="text" name="count" />
//           </label><br />
//           <label>
//             Message<br />
//             <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
//           </label><br />
//           <button className="send-whatsapp-submit-button" type="submit">Submit for Send International</button>
//         </form>
//       </div>

//       <div className={`send-whatsapp-section ${selectedSection === 'section3' ? 'show' : ''}`}>
//         <h4 className="send-whatsapp-subheading">Send Button</h4>
//         <form className="send-whatsapp-form" onSubmit={(e) => handleSubmit(e, 'section3')}>
//           <p>Daily Campaigning Limit: {dailyCampaigningLimit3} / 4</p>
//           <p>Daily Small Campaigning Limit: {dailySmallCampaigningLimit3} / 2</p>
//           <label>
//             Mobile Numbers<br />
//             <textarea className="send-whatsapp-textarea" name="mobileNumbers" placeholder="Enter mobile numbers here with country code" required></textarea>
//           </label><br />
//           <label>
//             Group Import<br />
//             <select className="send-whatsapp-select" name="groupImport">
//               <option>Select Group</option>
//               <option>HI</option>
//               <option>Hello</option>
//               <option>HOW are you</option>
//             </select>
//           </label><br />
//           <label>
//             CSV Import<br />
//             <input className="send-whatsapp-file-input" type="file" name="csvImport" accept=".csv" />
//           </label><br />
//           <label>
//             TXT Import<br />
//             <input className="send-whatsapp-file-input" type="file" name="txtImport" accept=".txt" />
//           </label><br />
//           <label>
//             Count<br />
//             <input className="send-whatsapp-input" type="text" name="count" />
//           </label><br />
//           <label>
//             Message<br />
//             <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
//           </label><br />
//           <label>
//             Image<br />
//             <input className="send-whatsapp-file-input" type="file" name="image" accept="image/*" />
//           </label><br />
//           <label>
//             Upload DP (Size 350x350px)<br />
//             <input className="send-whatsapp-file-input" type="file" name="dp" accept="image/*" />
//           </label><br />
//           <label>
//             Call Now<br />
//             <input className="send-whatsapp-input" type="text" name="callNow" />
//           </label><br />
//           <label>
//             Visit Now<br />
//             <input className="send-whatsapp-input" type="url" name="visitNow" />
//           </label><br />
//           <button className="send-whatsapp-submit-button" type="submit">Submit for Send Button</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SendWhatsappSection;


import React, { useState, useContext } from 'react';
import '../SendWhatsappSection.css';
import { CreditContext } from '../Component/CreditContext';

const SendWhatsappSection = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const { credits, deductCredit } = useContext(CreditContext);

  // State variables for daily limits for each section
  const [dailyCampaigningLimit1, setDailyCampaigningLimit1] = useState(0);
  const [dailySmallCampaigningLimit1, setDailySmallCampaigningLimit1] = useState(0);
  const [dailyCampaigningLimit2, setDailyCampaigningLimit2] = useState(0);
  const [dailySmallCampaigningLimit2, setDailySmallCampaigningLimit2] = useState(0);
  const [dailyCampaigningLimit3, setDailyCampaigningLimit3] = useState(0);
  const [dailySmallCampaigningLimit3, setDailySmallCampaigningLimit3] = useState(0);

  const handleSubmit = async (event, section) => {
    event.preventDefault();

    let dailyCampaigningLimit, dailySmallCampaigningLimit;
    switch (section) {
      case 'section1':
        dailyCampaigningLimit = dailyCampaigningLimit1;
        dailySmallCampaigningLimit = dailySmallCampaigningLimit1;
        break;
      case 'section2':
        dailyCampaigningLimit = dailyCampaigningLimit2;
        dailySmallCampaigningLimit = dailySmallCampaigningLimit2;
        break;
      case 'section3':
        dailyCampaigningLimit = dailyCampaigningLimit3;
        dailySmallCampaigningLimit = dailySmallCampaigningLimit3;
        break;
      default:
        return;
    }

    if (dailyCampaigningLimit >= 4) {
      alert('Daily campaigning limit reached.');
      return;
    }
    if (dailySmallCampaigningLimit >= 2) {
      alert('Daily small campaigning limit reached.');
      return;
    }

    const formData = new FormData(event.target);

    let url;
    let creditType;
    switch (section) {
      case 'section1':
        url = 'http://localhost:3001/whatsappApi';
        creditType = 'WN';
        break;
      case 'section2':
        url = 'http://localhost:3001/internationalApi';
        creditType = 'WI';
        break;
      case 'section3':
        url = 'http://localhost:3001/sendButtonApi';
        creditType = 'WB';
        break;
      default:
        return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
        return;
      }

      const data = await response.json();
      console.log(data); // Debugging log
      alert(`Form submitted successfully for ${section.replace('section', 'Section ')}!`);
      deductCredit(creditType);
      handleUpdateDailyLimits(section);
      event.target.reset();
    } catch (error) {
      console.error('Network Error:', error);
    }
  };

  const handleUpdateDailyLimits = (section) => {
    switch (section) {
      case 'section1':
        setDailyCampaigningLimit1(prev => prev + 1);
        setDailySmallCampaigningLimit1(prev => prev + 1);
        break;
      case 'section2':
        setDailyCampaigningLimit2(prev => prev + 1);
        setDailySmallCampaigningLimit2(prev => prev + 1);
        break;
      case 'section3':
        setDailyCampaigningLimit3(prev => prev + 1);
        setDailySmallCampaigningLimit3(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const showForm = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="send-whatsapp-container">
      <p className="credits-heading">Credits available:</p>
      <ul className="credits-list">
        <li className="credit-item">WN: {credits.WN}</li>
        <li className="credit-item">WI: {credits.WI}</li>
        <li className="credit-item">WB: {credits.WB}</li>
      </ul>

      <div className="send-whatsapp-buttons">
        <button className="send-whatsapp-button" onClick={() => showForm('section1')}>Send WhatsApp</button>
        <button className="send-whatsapp-button" onClick={() => showForm('section2')}>Send International</button>
        <button className="send-whatsapp-button" onClick={() => showForm('section3')}>Send Button</button>
      </div>

      <div className={`send-whatsapp-section ${selectedSection === 'section1' ? 'show' : ''}`}>
        <h4 className="send-whatsapp-subheading">Send WhatsApp</h4>
        <form className="send-whatsapp-form" onSubmit={(e) => handleSubmit(e, 'section1')}>
          <p>Daily Campaigning Limit: {dailyCampaigningLimit1} / 4</p>
          <p>Daily Small Campaigning Limit: {dailySmallCampaigningLimit1} / 2</p>
          <label>
            Mobile Numbers<br />
            <textarea className="send-whatsapp-textarea" name="mobileNumbers" placeholder="Enter mobile numbers here with country code" required></textarea>
          </label><br />
          <label>
            Group Import<br />
            <select className="send-whatsapp-select" name="groupImport">
              <option>Select Group</option>
              <option>HI</option>
              <option>Hello</option>
              <option>HOW are you</option>
            </select>
          </label><br />
          <label>
            CSV Import<br />
            <input className="send-whatsapp-file-input" type="file" name="csvImport" accept=".csv" />
          </label><br />
          <label>
            TXT Import<br />
            <input className="send-whatsapp-file-input" type="file" name="txtImport" accept=".txt" />
          </label><br />
          <label>
            Count<br />
            <input className="send-whatsapp-input" type="text" name="count" />
          </label><br />
          <label>
            Message<br />
            <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
          </label><br />
          <button className="send-whatsapp-submit-button" type="submit">Submit for Send WhatsApp</button>
        </form>
      </div>

      <div className={`send-whatsapp-section ${selectedSection === 'section2' ? 'show' : ''}`}>
        <h4 className="send-whatsapp-subheading">Send International</h4>
        <form className="send-whatsapp-form" onSubmit={(e) => handleSubmit(e, 'section2')}>
          <p>Daily Campaigning Limit: {dailyCampaigningLimit2} / 4</p>
          <p>Daily Small Campaigning Limit: {dailySmallCampaigningLimit2} / 2</p>
          <label>
            Mobile Numbers<br />
            <textarea className="send-whatsapp-textarea" name="mobileNumbers" placeholder="Enter mobile numbers here with country code" required></textarea>
          </label><br />
          <label>
            Group Import<br />
            <select className="send-whatsapp-select" name="groupImport">
              <option>Select Group</option>
              <option>HI</option>
              <option>Hello</option>
              <option>HOW are you</option>
            </select>
          </label><br />
          <label>
            CSV Import<br />
            <input className="send-whatsapp-file-input" type="file" name="csvImport" accept=".csv" />
          </label><br />
          <label>
            TXT Import<br />
            <input className="send-whatsapp-file-input" type="file" name="txtImport" accept=".txt" />
          </label><br />
          <label>
            Count<br />
            <input className="send-whatsapp-input" type="text" name="count" />
          </label><br />
          <label>
            Message<br />
            <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
          </label><br />
          <button className="send-whatsapp-submit-button" type="submit">Submit for Send International</button>
        </form>
      </div>

      <div className={`send-whatsapp-section ${selectedSection === 'section3' ? 'show' : ''}`}>
        <h4 className="send-whatsapp-subheading">Send Button</h4>
        <form className="send-whatsapp-form" onSubmit={(e) => handleSubmit(e, 'section3')}>
          <p>Daily Campaigning Limit: {dailyCampaigningLimit3} / 4</p>
          <p>Daily Small Campaigning Limit: {dailySmallCampaigningLimit3} / 2</p>
          <label>
            Mobile Numbers<br />
            <textarea className="send-whatsapp-textarea" name="mobileNumbers" placeholder="Enter mobile numbers here with country code" required></textarea>
          </label><br />
          <label>
            Group Import<br />
            <select className="send-whatsapp-select" name="groupImport">
              <option>Select Group</option>
              <option>HI</option>
              <option>Hello</option>
              <option>HOW are you</option>
            </select>
          </label><br />
          <label>
            CSV Import<br />
            <input className="send-whatsapp-file-input" type="file" name="csvImport" accept=".csv" />
          </label><br />
          <label>
            TXT Import<br />
            <input className="send-whatsapp-file-input" type="file" name="txtImport" accept=".txt" />
          </label><br />
          <label>
            Count<br />
            <input className="send-whatsapp-input" type="text" name="count" />
          </label><br />
          <label>
            Message<br />
            <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
          </label><br />
          <label>
            Image<br />
            <input className="send-whatsapp-file-input" type="file" name="image" accept="image/*" />
          </label><br />
          <label>
            Upload DP (Size 350x350px)<br />
            <input className="send-whatsapp-file-input" type="file" name="dp" accept="image/*" />
          </label><br />
          <label>
            Call Now<br />
            <input className="send-whatsapp-input" type="text" name="callNow" />
          </label><br />
          <label>
            Visit Now<br />
            <input className="send-whatsapp-input" type="url" name="visitNow" />
          </label><br />
          <button className="send-whatsapp-submit-button" type="submit">Submit for Send Button</button>
        </form>
      </div>
    </div>
  );
};

export default SendWhatsappSection;
