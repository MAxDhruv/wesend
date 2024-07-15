import React, { useState } from 'react';
import Lottie from 'lottie-react'
import Eye from '../eye.json'
import '../ManageResellerSection.css'; 
 
import { FaEye } from "react-icons/fa6";
import { BsFeather } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { BsFillArchiveFill } from "react-icons/bs";

const ManageResellerSection = ({ handleSubsectionClick }) => {
  const [data, setData] = useState([
    { id: 1, col1: '1', col2: 'Reseller 1', col3: 'John Doe', col4: 'john.doe@example.com', col5: '100', col6: 'Active', col7: 'Edit' },
    { id: 2, col1: '2', col2: 'Reseller 2', col3: 'Jane Smith', col4: 'jane.smith@example.com', col5: '50', col6: 'Inactive', col7: 'Edit' },
    { id: 3, col1: '3', col2: 'Reseller 3', col3: 'Adam Johnson', col4: 'adam.johnson@example.com', col5: '75', col6: 'Active', col7: 'Edit' },
    // Additional data rows as needed
  ]);
  
  const [newReseller, setNewReseller] = useState({
    col1: '', // Sr No. (Auto-generated)
    col2: '', // Reseller Name
    col3: '', // Full Name
    col4: '', // Email
    col5: '', // Credits
    col6: 'Active', // Status (default: Active)
    col7: 'Edit', // Action (default: Edit)
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
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
      col2: newReseller.col2,
      col3: newReseller.col3,
      col4: newReseller.col4,
      col5: newReseller.col5,
      col6: newReseller.col6,
      col7: newReseller.col7
    }];
    setData(updatedData);
    setNewReseller({
      col1: '', // Reset Sr No. for next addition
      col2: '', // Reseller Name
      col3: '', // Full Name
      col4: '', // Email
      col5: '', // Credits
      col6: 'Active', // Status (default: Active)
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

  // Function to handle status filter change
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
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
  const handleSaveChanges = () => {
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

  // Function to filter data based on search term and status filter
  const filteredData = data.filter(item => {
    const matchesSearchTerm = searchTerm === '' || item.col4.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatusFilter = statusFilter === '' || item.col6 === statusFilter;
    return matchesSearchTerm && matchesStatusFilter;
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
                <h2>Reseller Data</h2>
                <p><strong>Reseller Name:</strong> {selectedReseller.col2}</p>
                <p><strong>Full Name:</strong> {selectedReseller.col3}</p>
                <p><strong>Email:</strong> {selectedReseller.col4}</p>
                <p><strong>Credits:</strong> {selectedReseller.col5}</p>
                <p><strong>Status:</strong> {selectedReseller.col6}</p>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            )}

            {editDataPopup && (
              <div className="popup-content">
                <h2>Edit Reseller</h2>
                <form onSubmit={handleSaveChanges}>
                  <label>
                    Reseller Name:
                    <input type="text" name="col2" value={editedReseller.col2} onChange={(e) => setEditedReseller({ ...editedReseller, col2: e.target.value })} required />
                  </label>
                  <label>
                    Full Name:
                    <input type="text" name="col3" value={editedReseller.col3} onChange={(e) => setEditedReseller({ ...editedReseller, col3: e.target.value })} required />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="col4" value={editedReseller.col4} onChange={(e) => setEditedReseller({ ...editedReseller, col4: e.target.value })} required />
                  </label>
                  <label>
                    Credits:
                    <input type="number" name="col5" value={editedReseller.col5} onChange={(e) => setEditedReseller({ ...editedReseller, col5: e.target.value })} required />
                  </label>
                  <label>
                    Status:
                    <select name="col6" value={editedReseller.col6} onChange={(e) => setEditedReseller({ ...editedReseller, col6: e.target.value })}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
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
            Reseller Name:
            <input type="text" name="col2" value={newReseller.col2} onChange={handleInputChange} required />
          </label>
          <label>
            Full Name:
            <input type="text" name="col3" value={newReseller.col3} onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="col4" value={newReseller.col4} onChange={handleInputChange} required />
          </label>
          <label>
            Credits:
            <input type="number" name="col5" value={newReseller.col5} onChange={handleInputChange} required />
          </label>
          <button type="submit"><IoMdPersonAdd /> Add New Reseller</button>
        </form>
      </div>
      <div className="section">
        {/* Search bar and Status filter */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Email or Status..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select value={statusFilter} onChange={handleStatusFilterChange}>
            <option value="">Filter by Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        
        {/* Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>User Type</th>
                <th>Reseller Name</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Credits</th>
                <th>Status</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(row => (
                <tr key={row.id}>
                  <td>{row.col1}</td>
                  <td>Reseller</td>
                  <td>{row.col2}</td>
                  <td>{row.col3}</td>
                  <td>{row.col4}</td>
                  <td>{row.col5}</td>
                  <td>{row.col6}</td>
                  <td className="action-buttons">
                    <button className="show-data" onClick={() => handleShowDataPopup(row)}><FaEye /></button>
                    {/* <button className="show-data" onClick={() => handleShowDataPopup(row)}><Lottie animationData={Eye} />    </button> */}
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

export default ManageResellerSection;
