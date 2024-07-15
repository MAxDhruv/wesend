import React from 'react';
import CampaignWiseSection from '../../src/Component/CampaignWiseSection';
import SearchMobileSection from '../../src/Component/SearchMobileSection';
const WhatsappReportSection = ({ handleSubsectionClick }) => {
  return (
    <div>
      <h3>Whatsapp Report</h3>
      <div className="sub-sections">
        <div className="sub-section" onClick={() => handleSubsectionClick('<CampaignWiseSection/>')}>
          {/* <h4><CampaignWiseSection/></h4> */}
          <p>Content for section 1</p>
        </div>
        <div className="sub-section" onClick={() => handleSubsectionClick('Section 2')}>
          <h4>Section 2</h4>
          <p>Content for section 2</p>
        </div>
        <div className="sub-section" onClick={() => handleSubsectionClick('Section 3')}>
          <h4>Section 3</h4>
          <p>Content for section 3</p>
        </div>
        <div className="sub-section" onClick={() => handleSubsectionClick('Section 4')}>
          <h4>Section 4</h4>
          <p>Content for section 4</p>
        </div>
      </div>
      <ul className="sub-menu">
        <li onClick={() => handleSubsectionClick('campaignWise')}>Campaign Wise</li>
        <li onClick={() => handleSubsectionClick('searchMobile')}>Search Mobile</li>
      </ul>
    </div>
  );
};

export default WhatsappReportSection;
