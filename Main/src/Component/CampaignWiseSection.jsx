// import React, { useState, useEffect } from 'react';
// import '../../src/CampaignWiseSection.css';
// import { BsDownload } from "react-icons/bs";
// import { BsCheckAll } from "react-icons/bs";
// const CampaignWiseSection = ({ handleSubsectionClick }) => {
//   const [status, setStatus] = useState(''); // State for dropdown selected value
//   const [entries, setEntries] = useState(10); // State for number of rows to display per page
//   const [currentPage, setCurrentPage] = useState(1); // State for current page
//   const [filteredData, setFilteredData] = useState([]); // State for filtered data
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term
//   const [downloadUrl, setDownloadUrl] = useState(''); // State for download URL

//   // Example data with at least 30 rows (updated as provided)
//   const data = [
//     { id: 1, col1: '1', col2: '10:00 AM', col3: 'Update', col4: 'AB123', col5: 'Message 1', col6: 'Rollback 1', col7: '9876543210', col8: '2024-06-01', col9: 'John Doe', col10: 'Admin', col11: 'Active', col12: 'Edit' },
//     { id: 2, col1: '2', col2: '11:30 AM', col3: 'Update', col4: 'CD456', col5: 'Message 2', col6: 'Rollback 2', col7: '9876543211', col8: '2024-06-02', col9: 'Jane Smith', col10: 'User', col11: 'Inactive', col12: 'Edit' },
//     { id: 3, col1: '3', col2: '12:45 PM', col3: 'Update', col4: 'EF789', col5: 'Message 3', col6: 'Rollback 3', col7: '9876543212', col8: '2024-06-03', col9: 'Adam Johnson', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
//     { id: 4, col1: '4', col2: '2:00 PM', col3: 'Update', col4: 'GH012', col5: 'Message 4', col6: 'Rollback 4', col7: '9876543213', col8: '2024-06-04', col9: 'Emily Davis', col10: 'User', col11: 'Active', col12: 'Edit' },
//     { id: 5, col1: '5', col2: '3:15 PM', col3: 'Update', col4: 'IJ345', col5: 'Message 5', col6: 'Rollback 5', col7: '9876543214', col8: '2024-06-05', col9: 'Michael Wilson', col10: 'Admin', col11: 'Inactive', col12: 'Edit' },
//     { id: 6, col1: '6', col2: '4:30 PM', col3: 'Update', col4: 'KL678', col5: 'Message 6', col6: 'Rollback 6', col7: '9876543215', col8: '2024-06-06', col9: 'Sophia Brown', col10: 'User', col11: 'Pending', col12: 'Edit' },
//     { id: 7, col1: '7', col2: '5:45 PM', col3: 'Update', col4: 'MN901', col5: 'Message 7', col6: 'Rollback 7', col7: '9876543216', col8: '2024-06-07', col9: 'Daniel Lee', col10: 'Admin', col11: 'Active', col12: 'Edit' },
//     { id: 8, col1: '8', col2: '6:00 PM', col3: 'Update', col4: 'OP234', col5: 'Message 8', col6: 'Rollback 8', col7: '9876543217', col8: '2024-06-08', col9: 'Olivia Miller', col10: 'User', col11: 'Inactive', col12: 'Edit' },
//     { id: 9, col1: '9', col2: '7:15 PM', col3: 'Update', col4: 'QR567', col5: 'Message 9', col6: 'Rollback 9', col7: '9876543218', col8: '2024-06-09', col9: 'James Wilson', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
//     { id: 10, col1: '10', col2: '8:30 PM', col3: 'Update', col4: 'ST890', col5: 'Message 10', col6: 'Rollback 10', col7: '9876543219', col8: '2024-06-10', col9: 'Emma Taylor', col10: 'User', col11: 'Active', col12: 'Edit' },
//     { id: 11, col1: '11', col2: '9:45 AM', col3: 'Update', col4: 'UV123', col5: 'Message 11', col6: 'Rollback 11', col7: '9876543220', col8: '2024-06-11', col9: 'Noah Anderson', col10: 'Admin', col11: 'Inactive', col12: 'Edit' },
//     { id: 12, col1: '12', col2: '10:00 AM', col3: 'Update', col4: 'WX456', col5: 'Message 12', col6: 'Rollback 12', col7: '9876543221', col8: '2024-06-12', col9: 'Ava Garcia', col10: 'User', col11: 'Pending', col12: 'Edit' },
//     { id: 13, col1: '13', col2: '11:15 AM', col3: 'Update', col4: 'YZ789', col5: 'Message 13', col6: 'Rollback 13', col7: '9876543222', col8: '2024-06-13', col9: 'Liam Martinez', col10: 'Admin', col11: 'Active', col12: 'Edit' },
//     { id: 14, col1: '14', col2: '12:30 PM', col3: 'Update', col4: 'AB012', col5: 'Message 14', col6: 'Rollback 14', col7: '9876543223', col8: '2024-06-14', col9: 'Isabella Hernandez', col10: 'User', col11: 'Inactive', col12: 'Edit' },
//     { id: 15, col1: '15', col2: '1:45 PM', col3: 'Update', col4: 'CD345', col5: 'Message 15', col6: 'Rollback 15', col7: '9876543224', col8: '2024-06-15', col9: 'Mason Lopez', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
//     { id: 16, col1: '16', col2: '3:00 PM', col3: 'Update', col4: 'EF678', col5: 'Message 16', col6: 'Rollback 16', col7: '9876543225', col8: '2024-06-16', col9: 'Sophia Thompson', col10: 'User', col11: 'Active', col12: 'Edit' },
//     { id: 17, col1: '17', col2: '4:15 PM', col3: 'Update', col4: 'GH901', col5: 'Message 17', col6: 'Rollback 17', col7: '9876543226', col8: '2024-06-17', col9: 'Alexander Perez', col10: 'Admin', col11: 'Inactive', col12: 'Edit' },
//     { id: 18, col1: '18', col2: '5:30 PM', col3: 'Update', col4: 'IJ234', col5: 'Message 18', col6: 'Rollback 18', col7: '9876543227', col8: '2024-06-18', col9: 'Aria Robinson', col10: 'User', col11: 'Pending', col12: 'Edit' },
//     { id: 19, col1: '19', col2: '6:45 PM', col3: 'Update', col4: 'KL567', col5: 'Message 19', col6: 'Rollback 19', col7: '9876543228', col8: '2024-06-19', col9: 'Ethan Scott', col10: 'Admin', col11: 'Active', col12: 'Edit' },
//     { id: 20, col1: '20', col2: '8:00 PM', col3: 'Update', col4: 'MN890', col5: 'Message 20', col6: 'Rollback 20', col7: '9876543229', col8: '2024-06-20', col9: 'Amelia Lewis', col10: 'User', col11: 'Inactive', col12: 'Edit' },
//     { id: 21, col1: '21', col2: '9:15 PM', col3: 'Update', col4: 'OP123', col5: 'Message 21', col6: 'Rollback 21', col7: '9876543230', col8: '2024-06-21', col9: 'William Young', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
//     { id: 22, col1: '22', col2: '10:30 PM', col3: 'Update', col4: 'QR456', col5: 'Message 22', col6: 'Rollback 22', col7: '9876543231', col8: '2024-06-22', col9: 'Ella Hall', col10: 'User', col11: 'Active', col12: 'Edit' }
//   ];

//   useEffect(() => {
//     setFilteredData(data); // Initialize filteredData with all data on component mount
//   }, []);

//   // Function to handle status change
//   const handleStatusChange = (e) => {
//     setStatus(e.target.value);
//   };

//   // Function to handle entries per page change
//   const handleEntriesChange = (e) => {
//     setEntries(Number(e.target.value));
//     setCurrentPage(1); // Reset to first page when entries per page changes
//   };

//   // Function to handle form submission (filtering data)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const filtered = data.filter(item => !status || item.col11 === status);
//     setFilteredData(filtered);
//     setCurrentPage(1); // Reset to first page after filtering
//   };

//   // Function to handle search term change
//   const handleSearchTermChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Apply filtering based on search term and status
//   const filteredAndSearchedData = filteredData.filter(item =>
//     item.col1.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.col4.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.col5.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.col7.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.col8.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.col9.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.col10.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.col11.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Calculate total pages based on filtered and searched data
//   const totalPages = Math.ceil(filteredAndSearchedData.length / entries);

//   // Calculate startIndex and endIndex for pagination
//   const startIndex = (currentPage - 1) * entries;
//   const endIndex = startIndex + entries;

//   // Function to handle pagination button click (next page)
//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(prevPage => prevPage + 1);
//     }
//   };

//   // Function to handle pagination button click (previous page)
//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   // Function to handle download button click
//   // Function to handle download button click
// const handleDownload = () => {
//   // Prepare CSV content
//   let csvContent = "Sr No.,Estimate Time,Update Status,Unique Id,Message,Rollback,Total Mob No.,Created At,Created By,Created User Type,Status,Action\n";
  
//   filteredAndSearchedData.forEach((item) => {
//     const row = `${item.col1},${item.col2},${item.col3},${item.col4},${item.col5},${item.col6},${item.col7},${item.col8},${item.col9},${item.col10},${item.col11},${item.col12}\n`;
//     csvContent += row;
//   });

//   // Create a Blob object
//   const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

//   // Create a download URL
//   const url = URL.createObjectURL(blob);

//   // Create a link element, click it, and remove it after click
//   const link = document.createElement("a");
//   link.style.display = "none";
//   link.href = url;
//   link.setAttribute("download", "campaign_data.csv");

//   // Append the link to body
//   document.body.appendChild(link);

//   // Click the link
//   link.click();

//   // Clean up: Remove the link
//   document.body.removeChild(link);

//   // Clean up: Revoke the Object URL
//   URL.revokeObjectURL(url);
// };


//   return (
//     <div className="CampaignWiseSection">
//       {/* Section 1: Change Status */}
//       <div className="section">
//         <h4>Change Status</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="select-wrapper">
//             <select className='data-status' value={status} onChange={handleStatusChange}>
//               <option value="">All Statuses</option>
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//               <option value="Pending">Pending</option>
//               {/* Add more options as needed */}
//             </select>
//           </div>
//           <button type="submit" className='btn'><BsCheckAll />Submit</button>
//         </form>
//       </div>

//       {/* Section 2: Table with Filter */}
//       <div className="section">
//         {/* Search bar, download button, and entries per page */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search by Unique Id..."
//             value={searchTerm}
//             onChange={handleSearchTermChange}
//           />
//           <button className="dn-btn" onClick={handleDownload}> <BsDownload /></button>
//         </div>
//         <div className="select-wrapper">
//           <select value={entries} onChange={handleEntriesChange} className='entries'>
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//             <option value={25}>25</option>
//             <option value={50}>50</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>

//         {/* Table */}
//         <table>
//           <thead>
//             <tr>
//               <th>Sr No.</th>
//               <th>Estimate Time</th>
//               <th>Update Status</th>
//               <th>Unique Id</th>
//               <th>Message</th>
//               <th>Rollback</th>
//               <th>Total Mob No.</th>
//               <th>Created At</th>
//               <th>Created By</th>
//               <th>Created User Type</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredAndSearchedData.slice(startIndex, endIndex).map(row => (
//               <tr key={row.id}>
//                 <td>{row.col1}</td>
//                 <td>{row.col2}</td>
//                 <td>{row.col3}</td>
//                 <td>{row.col4}</td>
//                 <td>{row.col5}</td>
//                 <td>{row.col6}</td>
//                 <td>{row.col7}</td>
//                 <td>{row.col8}</td>
//                 <td>{row.col9}</td>
//                 <td>{row.col10}</td>
//                 <td>{row.col11}</td>
//                 <td>{row.col12}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
            
//         {/* Pagination controls */}
//         {filteredAndSearchedData.length > entries && (
//           <div className="pagination">
//             <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
//             <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
//             <span>Page {currentPage} of {totalPages}</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CampaignWiseSection;





import React, { useState, useEffect } from 'react';
import '../../src/CampaignWiseSection.css';
import { BsDownload, BsCheckAll } from "react-icons/bs";

const CampaignWiseSection = ({ handleSubsectionClick }) => {
  const [status, setStatus] = useState(''); // State for dropdown selected value
  const [entries, setEntries] = useState(10); // State for number of rows to display per page
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [filteredData, setFilteredData] = useState([]); // State for filtered data
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Example data with at least 30 rows (updated as provided)
  const data = [
    { id: 1, col1: '1', col2: '10:00 AM', col3: 'Update', col4: 'AB123', col5: 'Message 1', col6: 'Rollback 1', col7: '9876543210', col8: '2024-06-01', col9: 'John Doe', col10: 'Admin', col11: 'Active', col12: 'Edit' },
    { id: 2, col1: '2', col2: '11:30 AM', col3: 'Update', col4: 'CD456', col5: 'Message 2', col6: 'Rollback 2', col7: '9876543211', col8: '2024-06-02', col9: 'Jane Smith', col10: 'User', col11: 'Inactive', col12: 'Edit' },
    { id: 3, col1: '3', col2: '12:45 PM', col3: 'Update', col4: 'EF789', col5: 'Message 3', col6: 'Rollback 3', col7: '9876543212', col8: '2024-06-03', col9: 'Adam Johnson', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
    { id: 4, col1: '4', col2: '2:00 PM', col3: 'Update', col4: 'GH012', col5: 'Message 4', col6: 'Rollback 4', col7: '9876543213', col8: '2024-06-04', col9: 'Emily Davis', col10: 'User', col11: 'Active', col12: 'Edit' },
    { id: 5, col1: '5', col2: '3:15 PM', col3: 'Update', col4: 'IJ345', col5: 'Message 5', col6: 'Rollback 5', col7: '9876543214', col8: '2024-06-05', col9: 'Michael Wilson', col10: 'Admin', col11: 'Inactive', col12: 'Edit' },
    { id: 6, col1: '6', col2: '4:30 PM', col3: 'Update', col4: 'KL678', col5: 'Message 6', col6: 'Rollback 6', col7: '9876543215', col8: '2024-06-06', col9: 'Sophia Brown', col10: 'User', col11: 'Pending', col12: 'Edit' },
    { id: 7, col1: '7', col2: '5:45 PM', col3: 'Update', col4: 'MN901', col5: 'Message 7', col6: 'Rollback 7', col7: '9876543216', col8: '2024-06-07', col9: 'Daniel Lee', col10: 'Admin', col11: 'Active', col12: 'Edit' },
    { id: 8, col1: '8', col2: '6:00 PM', col3: 'Update', col4: 'OP234', col5: 'Message 8', col6: 'Rollback 8', col7: '9876543217', col8: '2024-06-08', col9: 'Olivia Miller', col10: 'User', col11: 'Inactive', col12: 'Edit' },
    { id: 9, col1: '9', col2: '7:15 PM', col3: 'Update', col4: 'QR567', col5: 'Message 9', col6: 'Rollback 9', col7: '9876543218', col8: '2024-06-09', col9: 'James Wilson', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
    { id: 10, col1: '10', col2: '8:30 PM', col3: 'Update', col4: 'ST890', col5: 'Message 10', col6: 'Rollback 10', col7: '9876543219', col8: '2024-06-10', col9: 'Emma Taylor', col10: 'User', col11: 'Active', col12: 'Edit' },
    { id: 11, col1: '11', col2: '9:45 AM', col3: 'Update', col4: 'UV123', col5: 'Message 11', col6: 'Rollback 11', col7: '9876543220', col8: '2024-06-11', col9: 'Noah Anderson', col10: 'Admin', col11: 'Inactive', col12: 'Edit' },
    { id: 12, col1: '12', col2: '10:00 AM', col3: 'Update', col4: 'WX456', col5: 'Message 12', col6: 'Rollback 12', col7: '9876543221', col8: '2024-06-12', col9: 'Ava Garcia', col10: 'User', col11: 'Pending', col12: 'Edit' },
    { id: 13, col1: '13', col2: '11:15 AM', col3: 'Update', col4: 'YZ789', col5: 'Message 13', col6: 'Rollback 13', col7: '9876543222', col8: '2024-06-13', col9: 'Liam Martinez', col10: 'Admin', col11: 'Active', col12: 'Edit' },
    { id: 14, col1: '14', col2: '12:30 PM', col3: 'Update', col4: 'AB012', col5: 'Message 14', col6: 'Rollback 14', col7: '9876543223', col8: '2024-06-14', col9: 'Isabella Hernandez', col10: 'User', col11: 'Inactive', col12: 'Edit' },
    { id: 15, col1: '15', col2: '1:45 PM', col3: 'Update', col4: 'CD345', col5: 'Message 15', col6: 'Rollback 15', col7: '9876543224', col8: '2024-06-15', col9: 'Mason Lopez', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
    { id: 16, col1: '16', col2: '3:00 PM', col3: 'Update', col4: 'EF678', col5: 'Message 16', col6: 'Rollback 16', col7: '9876543225', col8: '2024-06-16', col9: 'Sophia Thompson', col10: 'User', col11: 'Active', col12: 'Edit' },
    { id: 17, col1: '17', col2: '4:15 PM', col3: 'Update', col4: 'GH901', col5: 'Message 17', col6: 'Rollback 17', col7: '9876543226', col8: '2024-06-17', col9: 'Alexander Perez', col10: 'Admin', col11: 'Inactive', col12: 'Edit' },
    { id: 18, col1: '18', col2: '5:30 PM', col3: 'Update', col4: 'IJ234', col5: 'Message 18', col6: 'Rollback 18', col7: '9876543227', col8: '2024-06-18', col9: 'Aria Robinson', col10: 'User', col11: 'Pending', col12: 'Edit' },
    { id: 19, col1: '19', col2: '6:45 PM', col3: 'Update', col4: 'KL567', col5: 'Message 19', col6: 'Rollback 19', col7: '9876543228', col8: '2024-06-19', col9: 'Ethan Scott', col10: 'Admin', col11: 'Active', col12: 'Edit' },
    { id: 20, col1: '20', col2: '8:00 PM', col3: 'Update', col4: 'MN890', col5: 'Message 20', col6: 'Rollback 20', col7: '9876543229', col8: '2024-06-20', col9: 'Amelia Lewis', col10: 'User', col11: 'Inactive', col12: 'Edit' },
    { id: 21, col1: '21', col2: '9:15 PM', col3: 'Update', col4: 'OP123', col5: 'Message 21', col6: 'Rollback 21', col7: '9876543230', col8: '2024-06-21', col9: 'William Young', col10: 'Admin', col11: 'Pending', col12: 'Edit' },
    { id: 22, col1: '22', col2: '10:30 PM', col3: 'Update', col4: 'QR456', col5: 'Message 22', col6: 'Rollback 22', col7: '9876543231', col8: '2024-06-22', col9: 'Ella Hall', col10: 'User', col11: 'Active', col12: 'Edit' }
  ];

  useEffect(() => {
    setFilteredData(data); // Initialize filteredData with all data on component mount
  }, []);

  // Function to handle status change
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  // Function to handle entries per page change
  const handleEntriesChange = (e) => {
    setEntries(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when entries per page changes
  };

  // Function to handle form submission (filtering data)
  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = data.filter(item => !status || item.col11 === status);
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Function to handle search term change
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Apply filtering based on search term and status
  const filteredAndSearchedData = filteredData.filter(item =>
    item.col4.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.col9.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.col11.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages based on filtered and searched data
  const totalPages = Math.ceil(filteredAndSearchedData.length / entries);

  // Calculate startIndex and endIndex for pagination
  const startIndex = (currentPage - 1) * entries;
  const endIndex = startIndex + entries;

  // Function to handle pagination button click (next page)
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  // Function to handle pagination button click (previous page)
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // Function to handle download button click
  const handleDownload = () => {
    // Prepare CSV content
    let csvContent = "Sr No.,Estimate Time,Update Status,Unique Id,Message,Rollback,Total Mob No.,Created At,Created By,Created User Type,Status,Action\n";
    
    filteredAndSearchedData.forEach((item) => {
      const row = `${item.col1},${item.col2},${item.col3},${item.col4},${item.col5},${item.col6},${item.col7},${item.col8},${item.col9},${item.col10},${item.col11},${item.col12}\n`;
      csvContent += row;
    });

    // Create a Blob object
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a download URL
    const url = URL.createObjectURL(blob);

    // Create a link element, click it, and remove it after click
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.setAttribute("download", "campaign_data.csv");

    // Append the link to body
    document.body.appendChild(link);

    // Click the link
    link.click();

    // Clean up: Remove the link
    document.body.removeChild(link);

    // Clean up: Revoke the Object URL
    URL.revokeObjectURL(url);
  };

  return (
    <div className="CampaignWiseSection">
      {/* Section 1: Change Status */}
      <div className="section">
        {/* <h4>Change Status</h4> */}
        <form onSubmit={handleSubmit}>
          <div className="select-wrapper">
            <select className='data-status' value={status} onChange={handleStatusChange}>
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit" className='sbmit'><BsCheckAll />Submit</button>
        </form>
      </div>

      {/* Section 2: Table with Filter */}
      <div className="section">
        {/* Search bar, download button, and entries per page */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Unique Id or Created By..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <button className="dwn" onClick={handleDownload}> <BsDownload /></button>
        </div>
        <div className="select-wrapper">
          <select value={entries} onChange={handleEntriesChange} className='entries'>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Estimate Time</th>
              <th>Update Status</th>
              <th>Unique Id</th>
              <th>Message</th>
              <th>Rollback</th>
              <th>Total Mob No.</th>
              <th>Created At</th>
              <th>Created By</th>
              <th>Created User Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSearchedData.slice(startIndex, endIndex).map(row => (
              <tr key={row.id}>
                <td>{row.col1}</td>
                <td>{row.col2}</td>
                <td>{row.col3}</td>
                <td>{row.col4}</td>
                <td>{row.col5}</td>
                <td>{row.col6}</td>
                <td>{row.col7}</td>
                <td>{row.col8}</td>
                <td>{row.col9}</td>
                <td>{row.col10}</td>
                <td>{row.col11}</td>
                <td>{row.col12}</td>
              </tr>
            ))}
          </tbody>
        </table>
            
        {/* Pagination controls */}
        {filteredAndSearchedData.length > entries && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            <span>Page {currentPage} of {totalPages}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignWiseSection;
