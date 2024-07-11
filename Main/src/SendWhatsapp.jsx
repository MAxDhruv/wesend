import React from "react";
import "./SendWhatsapp.css";

const SendWhatsapp = () => {
  return (
    <div className="send-whatsapp-container">
      {/* <form action="" className="new-form">
        <div className="main-buttons">
            <button className="send-buttons">Send Whatsapp SMS</button>
            <button className="send-buttons">Send International</button>
            <button className="send-buttons">Send Camplaign</button>
        </div>
      </form> */}
      <form className="form-container">
     
        {/* Headline Section */}
        <div className="headline-section">
          <label>HEADLINE</label>
          <input type="text" placeholder="Headline for reseller/user view" />
          <button type="button" className="submit-button">
            Submit
          </button>
        </div>

        {/* Message Section */}
        <div className="message-section">
          <h4>SEND NEW MASSAGE</h4>
          <label>MASSAGE *</label> <small>(*text*, _text_, ~text~)</small>
          <textarea placeholder="Description"></textarea>
        </div>

        {/* Mobile Number Section */}
        <div className="mobile-section">
          <label>Mobile No. *</label>
          <small>(Please Add country code before mobile no.)</small>
          <textarea placeholder="Enter Mobile Number Here Like 91XXXXXXXXXX"></textarea>
        </div>

        {/* Number Count Section */}
        <div className="number-count-section">
          <label>Number Count *</label>
          <input type="text" />
        </div>

        {/* Existing Image Upload Section */}
        <div className="image-upload-section">
          <div className="image-column">
            <div className="image-upload">
              <label>Image-1</label>
              <input type="file" />
              <small>
                Photo should be smaller than 2 MB. Only JPG and PNG are allowed.
              </small>
            </div>
            <div className="image-upload">
              <label>Image-3</label>
              <input type="file" />
              <small>
                Photo should be smaller than 2 MB. Only JPG and PNG are allowed.
              </small>
            </div>
          </div>
          <div className="image-column">
            <div className="image-upload">
              <label>Image-2</label>
              <input type="file" />
              <small>
                Photo should be smaller than 2 MB. Only JPG and PNG are allowed.
              </small>
            </div>
            <div className="image-upload">
              <label>Image-4</label>
              <input type="file" />
              <small>
                Photo should be smaller than 2 MB. Only JPG and PNG are allowed.
              </small>
            </div>
          </div>
        </div>

        {/* Existing PDF and DP Upload Section */}
        <div className="pdf-dp-upload-section">
          <div className="pdf-dp-column">
            <div className="pdf-upload-section">
              <label>Select PDF or Video</label>
              <select>
                <option value="pdf">PDF</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div className="dp-upload-section">
              <label>DP Image</label>
              <input type="file" />
              <small>Above 1000 Numbers</small>
            </div>
          </div>
          <div className="pdf-upload">
            <label className="text">Upload PDF</label>
            <input type="file" />
            <small>PDF should be smaller than 5 MB.</small>
          </div>
        </div>

        {/* Existing Button Section */}
        <div className="button-section">
          <div className="button-column">
            <div className="reply-button">
              <label>Reply Button 1</label>
              <input type="text" placeholder="Enter button text" />
            </div>
            <div className="reply-button">
              <label>Reply Button 2</label>
              <input type="text" placeholder="Enter button text" />
            </div>
          </div>
          <div className="button-column">
            <div className="cta-button">
              <label>Call-to-Action Button 1</label>
              <input
                type="text"
                defaultValue="url|Visit Here|https://google.com"
              />
            </div>
            <div className="cta-button">
              <label>Call-to-Action Button 2</label>
              <input type="text" defaultValue="call|Contact Us|91XXXXXXXXXX" />
            </div>
          </div>
        </div>
        
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendWhatsapp;
