import React, { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { BsFeather } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { BsFillArchiveFill } from "react-icons/bs";
import '../ManageResellerSection.css';

const NewsSection = ({ handleSubsectionClick }) => {
  const [data, setData] = useState([
    { id: 1, col1: '1', col3: 'John Doe', col4: 'john.doe@example.com', col5: '2023-07-01', col7: 'Edit' },
    { id: 2, col1: '2', col3: 'Jane Smith', col4: 'jane.smith@example.com', col5: '2023-07-02', col7: 'Edit' },
    { id: 3, col1: '3', col3: 'Adam Johnson', col4: 'adam.johnson@example.com', col5: '2023-07-03', col7: 'Edit' },
    // Additional data rows as needed
  ]);

  const [newReseller, setNewReseller] = useState({
    col1: '', // Sr No. (Auto-generated)
    col3: '', // Full Name
    col4: '', // Email
    col5: new Date().toISOString().split('T')[0], // Date (auto-generated)
    col7: 'Edit', // Action (default: Edit)
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [showDataPopup, setShowDataPopup] = useState(false);
  const [editDataPopup, setEditDataPopup] = useState(false);
  const [selectedReseller, setSelectedReseller] = useState(null);
  const [editedReseller, setEditedReseller] = useState(null); // State to hold edited data

  // Function to handle adding a new reseller
  const handleAddReseller = (e) => {
    e.preventDefault();
    const newId = data.length + 1;
    const updatedData = [...data, {
      id: newId,
      col1: newId.toString(), // Auto-generated Sr No.
      col3: newReseller.col3,
      col4: newReseller.col4,
      col5: new Date().toISOString().split('T')[0], // Auto-generated Date
      col7: newReseller.col7
    }];
    setData(updatedData);
    setNewReseller({
      col1: '', // Reset Sr No. for next addition
      col3: '', // Full Name
      col4: '', // Email
      col5: new Date().toISOString().split('T')[0], // Date (auto-generated)
      col7: 'Edit', // Action (default: Edit)
    });
  };

  // Function to handle input change for adding new reseller
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReseller(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle search term change
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle date filter change
  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  // Function to handle showing data popup
  const handleShowDataPopup = (reseller) => {
    setSelectedReseller(reseller);
    setShowDataPopup(true);
  };

  // Function to handle editing data popup
  const handleEditDataPopup = (reseller) => {
    setSelectedReseller(reseller);
    setEditedReseller({ ...reseller }); // Copy the selected reseller to editedReseller
    setEditDataPopup(true);
  };

  // Function to handle saving edited data
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Update the data array with the edited reseller
    const updatedData = data.map(item => (item.id === editedReseller.id ? editedReseller : item));
    setData(updatedData);
    handleClosePopup(); // Close the edit popup after saving
  };

  // Function to handle closing popup
  const handleClosePopup = () => {
    setEditDataPopup(false);
    setShowDataPopup(false);
    setSelectedReseller(null);
    setEditedReseller(null);
  };

  // Function to handle deleting a reseller
  const handleDeleteReseller = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  // Function to filter data based on search term and date filter
  const filteredData = data.filter(item => {
    const matchesSearchTerm = searchTerm === '' || item.col4.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDateFilter = dateFilter === '' || item.col5 === dateFilter;
    return matchesSearchTerm && matchesDateFilter;
  });

  // Render the table headers and data
  return (
    <div className="ManageResellerSection">
      {/* Overlay for popups */}
      {(showDataPopup || editDataPopup) && (
        <div className="overlay" onClick={handleClosePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            {showDataPopup && (
              <div className="popup-content">
                <h2 style={{ color: 'black' }}>User Data</h2>
                <p><strong>Full Name:</strong> {selectedReseller.col3}</p>
                <p><strong>Email:</strong> {selectedReseller.col4}</p>
                <p><strong>Date:</strong> {selectedReseller.col5}</p>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            )}

            {editDataPopup && (
              <div className="popup-content">
                <h2 style={{ color: 'black' }}>Edit Reseller</h2>
                <form onSubmit={handleSaveChanges}>
                  <label>
                    Full Name:
                    <input type="text" name="col3" value={editedReseller.col3} onChange={(e) => setEditedReseller({ ...editedReseller, col3: e.target.value })} required />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="col4" value={editedReseller.col4} onChange={(e) => setEditedReseller({ ...editedReseller, col4: e.target.value })} required />
                  </label>
                  <button type="submit">Save Changes</button>
                  <button type="button" onClick={handleClosePopup}>Cancel</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Other content of your component */}
      <div className="section">
        <form onSubmit={handleAddReseller}>
          <label>
            Full Name:
            <input type="text" name="col3" value={newReseller.col3} onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="col4" value={newReseller.col4} onChange={handleInputChange} required />
          </label>
          <button type="submit"><IoMdPersonAdd /> Add News</button>
        </form>
      </div>
      <div className="section">
        {/* Search bar and Date filter */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Email..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <input
            type="date"
            value={dateFilter}
            onChange={handleDateFilterChange}
          />
        </div>

        {/* Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>User Type</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(row => (
                <tr key={row.id}>
                  <td>{row.col1}</td>
                  <td>Reseller</td>
                  <td>{row.col3}</td>
                  <td>{row.col4}</td>
                  <td>{row.col5}</td>
                  <td className="action-buttons">
                    <button className="show-data" onClick={() => handleShowDataPopup(row)}><FaEye /></button>
                    <button className="edit-data" onClick={() => handleEditDataPopup(row)}><BsFeather /></button>
                    <button className="delete" onClick={() => handleDeleteReseller(row.id)}><BsFillArchiveFill /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
