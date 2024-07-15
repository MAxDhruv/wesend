import React from 'react';

const DashboardSection = ({ handleSubsectionClick }) => {
  
  



  
  const handleClick = (section) => {
    // Handle navigation programmatically
    switch (section) {
      case 'Section 1':
        // Navigate to Section 1 page or perform action
        console.log('Navigating to Section 1');
        break;
      case 'Section 2':
        // Navigate to Section 2 page or perform action
        console.log('Navigating to Section 2');
        break;
      case 'Section 3':
        // Navigate to Section 3 page or perform action
        console.log('Navigating to Section 3');
        break;
      case 'Section 4':
        // Navigate to Section 4 page or perform action
        console.log('Navigating to Section 4');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>Dashboard</h3>
      <div className="sub-sections">
        <div className="sub-section" onClick={() => handleClick('Section 1')}>
          <h4>Section 1</h4>
          <p>Content for section 1</p>
        </div>
        <div className="sub-section" onClick={() => handleClick('Section 2')}>
          <h4>Section 2</h4>
          <p>Content for section 2</p>
        </div>
        <div className="sub-section" onClick={() => handleClick('Section 3')}>
          <h4>Section 3</h4>
          <p>Content for section 3</p>
        </div>
        <div className="sub-section" onClick={() => handleClick('Section 4')}>
          <h4>Section 4</h4>
          <p>Content for section 4</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
