import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import Eye from '../eye.json';
import '../ManageResellerSection.css';
import { FaEye } from "react-icons/fa6";
import { BsFeather } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { BsFillArchiveFill } from "react-icons/bs";

const ManageResellerSection = ({ handleSubsectionClick }) => {
  const [data, setData] = useState([]);
  const [newReseller, setNewReseller] = useState({
    full_name: '',
    username: '',
    email_id: '',
    mobile: '',
    profile_pic: null,
    company: '',
    credit: '',
    status: 'Active',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showDataPopup, setShowDataPopup] = useState(false);
  const [editDataPopup, setEditDataPopup] = useState(false);
  const [selectedReseller, setSelectedReseller] = useState(null);
  const [editedReseller, setEditedReseller] = useState(null); // State to hold edited data

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/reseller/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle adding a new reseller
  const handleAddReseller = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('full_name', newReseller.full_name);
    formData.append('username', newReseller.username);
    formData.append('email_id', newReseller.email_id);
    formData.append('mobile', newReseller.mobile);
    formData.append('profile_pic', newReseller.profile_pic);      
    formData.append('company', newReseller.company);
    formData.append('credit', newReseller.credit);
    formData.append('status', newReseller.status);

    try {
      await axios.post('http://127.0.0.1:8000/api/reseller/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchData(); // Refresh data after adding new entry
      setNewReseller({
        full_name: '',
        username: '',
        email_id: '',
        mobile: '',
        profile_pic: null, 
        company: '',
        credit: '',
        status: 'Active',
      });
    } catch (error) {
      console.error('Error adding new data:', error);
    }
  };

  // Function to handle input change for adding new reseller
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile_pic') {
      setNewReseller((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setNewReseller((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
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
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const updatedResellerData = {
      full_name: editedReseller.full_name,
      email_id: editedReseller.email_id,
      mobile: editedReseller.mobile,
      profile_pic: editedReseller.profile_pic,
      username: editedReseller.username,
      company: editedReseller.company,
      credit: editedReseller.credit,
      status: editedReseller.status,
    };

    try {
      await axios.put(`http://127.0.0.1:8000/api/reseller/${editedReseller.id}/`, updatedResellerData);
      fetchData(); // Refresh data after editing entry
      handleClosePopup(); // Close the edit popup after saving
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Function to handle closing popup
  const handleClosePopup = () => {
    setEditDataPopup(false);
    setShowDataPopup(false);
    setSelectedReseller(null);
    setEditedReseller(null);
  };

  // Function to handle deleting a reseller
  const handleDeleteReseller = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/reseller/${id}/`);
      fetchData(); // Refresh data after deleting entry
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  // Function to filter data based on search term and status filter
  const filteredData = data.filter(item => {
    const matchesSearchTerm = searchTerm === '' || item.email_id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatusFilter = statusFilter === '' || item.status === statusFilter;
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
                <p><strong>Full Name:</strong> {selectedReseller.full_name}</p>
                <p><strong>Username:</strong> {selectedReseller.username}</p>
                <p><strong>Email:</strong> {selectedReseller.email_id}</p>
                <p><strong>Mobile:</strong> {selectedReseller.mobile}</p>
                <p><strong>Company:</strong> {selectedReseller.company}</p>                
                <p><strong>Credits:</strong> {selectedReseller.credit}</p>
                <p><strong>Status:</strong> {selectedReseller.status}</p>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            )}

            {editDataPopup && (
              <div className="popup-content">
                <h2>Edit Reseller</h2>
                <form onSubmit={handleSaveChanges}>
                  <label>
                    Full Name:
                    <input type="text" name="full_name" value={editedReseller.full_name} onChange={(e) => setEditedReseller({ ...editedReseller, full_name: e.target.value })} required />
                  </label>
                  <label>
                    Email:
                    <input type="email" name="email_id" value={editedReseller.email_id} onChange={(e) => setEditedReseller({ ...editedReseller, email_id: e.target.value })} required />
                  </label>
                  <label>
                    Mobile:
                    <input type="text" name="mobile" value={editedReseller.mobile} onChange={(e) => setEditedReseller({ ...editedReseller, mobile: e.target.value })} required />
                  </label>
                  <label>
                    Profile Pic:
                    <input type="text" name="profile_pic" value={editedReseller.profile_pic} onChange={(e) => setEditedReseller({ ...editedReseller, profile_pic: e.target.value })} required />
                  </label>
                  <label>
                    Company:
                    <input type="text" name="company" value={editedReseller.company} onChange={(e) => setEditedReseller({ ...editedReseller, company: e.target.value })} required />
                  </label>
                  <label>
                    Username:
                    <input type="text" name="username" value={editedReseller.username} onChange={(e) => setEditedReseller({ ...editedReseller, username: e.target.value })} required />
                  </label>
                  <label>
                    Credits:
                    <input type="number" name="credit" value={editedReseller.credit} onChange={(e) => setEditedReseller({ ...editedReseller, credit: e.target.value })} />
                  </label>
                  <label>
                    Status:
                    <select name="status" value={editedReseller.status} onChange={(e) => setEditedReseller({ ...editedReseller, status: e.target.value })}>
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

      <h4>Manage Resellers</h4>
      <div className="add-new-reseller">
        <form onSubmit={handleAddReseller}>
          <label>
            Full Name:
            <input type="text" name="full_name" value={newReseller.full_name} onChange={handleInputChange} required />
          </label>
          <label>
            Username:
            <input type="text" name="username" value={newReseller.username} onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email_id" value={newReseller.email_id} onChange={handleInputChange} required />
          </label>
          <label>
            Mobile:
            <input type="text" name="mobile" value={newReseller.mobile} onChange={handleInputChange} required />
          </label>
          <label>
            Company:
            <input type="text" name="company" value={newReseller.company} onChange={handleInputChange} required />
          </label>
          <label>
            Profile Pic
            <input type="file" accept="image/jpeg, image/png" name="profile_pic" onChange={handleInputChange} />
            <span className="small-text">Photo should be smaller than 500 KB. Only JPG and PNG are allowed.</span>
          </label>
          <label>
            Credits:
            <input type="number" name="credit" value={newReseller.credit} onChange={handleInputChange} />
          </label>
          <label>
            Status:
            <select name="status" value={newReseller.status} onChange={handleInputChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
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
                {/* <th>User Type</th> */}                
                <th>Full Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Mobile</th>
                {/* <th>Profile Pic</th> */}
                <th>Company</th>
                <th>Credits</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  {/* <td>Reseller</td> */}      
                  <td>{row.full_name}</td>
                  <td>{row.username}</td>
                  <td>{row.email_id}</td>
                  <td>{row.mobile}</td>
                  <td>{row.company}</td>
                  {/* <td><a href={row.profile_pic} target="_blank" rel="noopener noreferrer">View</a></td> */}                  
                  <td>{row.credit}</td>
                  <td>{row.status}</td>
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
