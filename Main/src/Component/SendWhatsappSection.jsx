import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../SendWhatsappSection.css';
import { CreditContext } from '../Component/CreditContext';

const SendWhatsappSection = () => {
  const [selectedSection, setSelectedSection] = useState('');
  const { credits, deductCredit } = useContext(CreditContext);

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

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/sendwhatsapp/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      alert(`Form submitted successfully for ${section.replace('section', 'Section ')}!`);
      deductCredit(section === 'section1' ? 'WN' : section === 'section2' ? 'WI' : 'WB');
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
            Headline<br />
            <input type="text" name="headline" className="send-whatsapp-input" />
          </label><br />
          <label>
            Message<br />
            <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
          </label><br />
          <label>
            Mobile Number<br />
            <input type="text" name="mobile_number" className="send-whatsapp-input" />
          </label><br />
          <label>
            Number Count<br />
            <input type="number" name="number_count" className="send-whatsapp-input" />
          </label><br />
          <label>
            Image 1<br />
            <input type="file" name="image1" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 2<br />
            <input type="file" name="image2" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 3<br />
            <input type="file" name="image3" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 4<br />
            <input type="file" name="image4" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            PDF File<br />
            <input type="file" name="pdf_file" accept=".pdf" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Video File<br />
            <input type="file" name="video_file" accept="video/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            DP Image<br />
            <input type="file" name="dp_image" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Reply Button 1<br />
            <input type="text" name="reply_button1" className="send-whatsapp-input" />
          </label><br />
          <label>
            Reply Button 2<br />
            <input type="text" name="reply_button2" className="send-whatsapp-input" />
          </label><br />
          <label>
            Call to Action 1<br />
            <input type="url" name="call_to_action1" className="send-whatsapp-input" />
          </label><br />
          <label>
            Call to Action 2<br />
            <input type="text" name="call_to_action2" className="send-whatsapp-input" />
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
            Headline<br />
            <input type="text" name="headline" className="send-whatsapp-input" />
          </label><br />
          <label>
            Message<br />
            <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
          </label><br />
          <label>
            Mobile Number<br />
            <input type="text" name="mobile_number" className="send-whatsapp-input" />
          </label><br />
          <label>
            Number Count<br />
            <input type="number" name="number_count" className="send-whatsapp-input" />
          </label><br />
          <label>
            Image 1<br />
            <input type="file" name="image1" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 2<br />
            <input type="file" name="image2" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 3<br />
            <input type="file" name="image3" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 4<br />
            <input type="file" name="image4" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            PDF File<br />
            <input type="file" name="pdf_file" accept=".pdf" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Video File<br />
            <input type="file" name="video_file" accept="video/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            DP Image<br />
            <input type="file" name="dp_image" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Reply Button 1<br />
            <input type="text" name="reply_button1" className="send-whatsapp-input" />
          </label><br />
          <label>
            Reply Button 2<br />
            <input type="text" name="reply_button2" className="send-whatsapp-input" />
          </label><br />
          <label>
            Call to Action 1<br />
            <input type="url" name="call_to_action1" className="send-whatsapp-input" />
          </label><br />
          <label>
            Call to Action 2<br />
            <input type="text" name="call_to_action2" className="send-whatsapp-input" />
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
            Headline<br />
            <input type="text" name="headline" className="send-whatsapp-input" />
          </label><br />
          <label>
            Message<br />
            <textarea className="send-whatsapp-textarea" name="message" maxLength="1024" placeholder="Max 1024 Characters" required></textarea>
          </label><br />
          <label>
            Mobile Number<br />
            <input type="text" name="mobile_number" className="send-whatsapp-input" />
          </label><br />
          <label>
            Number Count<br />
            <input type="number" name="number_count" className="send-whatsapp-input" />
          </label><br />
          <label>
            Image 1<br />
            <input type="file" name="image1" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 2<br />
            <input type="file" name="image2" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 3<br />
            <input type="file" name="image3" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Image 4<br />
            <input type="file" name="image4" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            PDF File<br />
            <input type="file" name="pdf_file" accept=".pdf" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Video File<br />
            <input type="file" name="video_file" accept="video/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            DP Image<br />
            <input type="file" name="dp_image" accept="image/*" className="send-whatsapp-file-input" />
          </label><br />
          <label>
            Reply Button 1<br />
            <input type="text" name="reply_button1" className="send-whatsapp-input" />
          </label><br />
          <label>
            Reply Button 2<br />
            <input type="text" name="reply_button2" className="send-whatsapp-input" />
          </label><br />
          <label>
            Call to Action 1<br />
            <input type="url" name="call_to_action1" className="send-whatsapp-input" placeholder="Enter a valid URL" />
          </label><br />
          <label>
            Call to Action 2<br />
            <input type="text" name="call_to_action2" className="send-whatsapp-input" />
          </label><br />
          <button className="send-whatsapp-submit-button" type="submit">Submit for Send Button</button>
        </form>
      </div>
    </div>
  );
};

export default SendWhatsappSection;
