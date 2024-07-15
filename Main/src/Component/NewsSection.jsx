import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye } from "react-icons/fa6";
import { BsFeather } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { BsFillArchiveFill } from "react-icons/bs";
import '../ManageResellerSection.css';

const NewsSection = ({ handleSubsectionClick }) => {
  const [data, setData] = useState([]);
  const [newReseller, setNewReseller] = useState({
    col1: '',
    col3: '',
    col4: '',
    col5: new Date().toISOString().split('T')[0],
    col7: 'Edit',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [showDataPopup, setShowDataPopup] = useState(false);
  const [editDataPopup, setEditDataPopup] = useState(false);
  const [selectedReseller, setSelectedReseller] = useState(null);
  const [editedReseller, setEditedReseller] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/news/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };

  const handleAddReseller = async (e) => {
    e.preventDefault();
    const newNews = {
      heading: newReseller.col3,
      description: newReseller.col4,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/news/', newNews);
      fetchData(); // Refresh data after adding new entry
    } catch (error) {
      console.error('Error adding new data:', error);
    }

    setNewReseller({
      col1: '',
      col3: '',
      col4: '',
      col5: new Date().toISOString().split('T')[0],
      col7: 'Edit',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReseller((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  const handleShowDataPopup = (reseller) => {
    setSelectedReseller(reseller);
    setShowDataPopup(true);
  };

  const handleEditDataPopup = (reseller) => {
    setSelectedReseller(reseller);
    setEditedReseller({ ...reseller });
    setEditDataPopup(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedData = data.map((item) =>
      item.id === editedReseller.id ? editedReseller : item
    );
    setData(updatedData);
    handleClosePopup();
  };

  const handleClosePopup = () => {
    setEditDataPopup(false);
    setShowDataPopup(false);
    setSelectedReseller(null);
    setEditedReseller(null);
  };

  const handleDeleteReseller = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/news/${id}/`);
      fetchData(); // Refresh data after deleting entry
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const filteredData = data.filter((item) => {
    const matchesSearchTerm = searchTerm === '' || item.heading.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDateFilter = dateFilter === '' || item.date.split('T')[0] === dateFilter;
    return matchesSearchTerm && matchesDateFilter;
  });

  return (
    <div className="ManageResellerSection">
      {(showDataPopup || editDataPopup) && (
        <div className="overlay" onClick={handleClosePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            {showDataPopup && (
              <div className="popup-content">
                <h2 style={{ color: 'black' }}>User Data</h2>
                <p><strong>Heading:</strong> {selectedReseller.heading}</p>
                <p><strong>Description:</strong> {selectedReseller.description}</p>
                <p><strong>Date:</strong> {selectedReseller.date}</p>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            )}

            {editDataPopup && (
              <div className="popup-content">
                <h2 style={{ color: 'black' }}>Edit Reseller</h2>
                <form onSubmit={handleSaveChanges}>
                  <label>
                    Heading:
                    <input
                      type="text"
                      name="heading"
                      value={editedReseller.heading}
                      onChange={(e) => setEditedReseller({ ...editedReseller, heading: e.target.value })}
                      required
                    />
                  </label>
                  <label>
                    Description:
                    <input
                      type="text"
                      name="description"
                      value={editedReseller.description}
                      onChange={(e) => setEditedReseller({ ...editedReseller, description: e.target.value })}
                      required
                    />
                  </label>
                  <button type="submit">Save Changes</button>
                  <button type="button" onClick={handleClosePopup}>Cancel</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="section">
        <h4>Send News</h4>
        <form onSubmit={handleAddReseller}>
          <label>
            Heading
            <input
              type="text"
              name="col3"
              value={newReseller.col3}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="col4"
              value={newReseller.col4}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit"><IoMdPersonAdd /> Submit</button>
        </form>
      </div>
      <div className="section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Heading..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <input
            type="date"
            value={dateFilter}
            onChange={handleDateFilterChange}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Heading</th>
                <th>Description</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.heading}</td>
                  <td>{row.description}</td>
                  <td>{new Date(row.date).toISOString().split('T')[0]}</td>
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
