import React from 'react';

const SearchMobileSection = ({ handleSubsectionClick }) => {
  return (
    <div>
      <h3>Search Mobile</h3>
      <div className="sub-sections">
        <div className="sub-section" onClick={() => handleSubsectionClick('Section 1')}>
          <h4>Section 1</h4>
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
    </div>
  );
};

export default SearchMobileSection;
