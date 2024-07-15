import React, { useState } from 'react';
import '../UserTree.css';

const users = [
  {
    name: 'admin',
    children: [
      'amit@gmail.com',
      'whatsapp@vilvabusiness.com',
      'MOHAN',
      'wesenddelivery7soft@gmail.com',
      'info.digikee@gmail.com',
      'bscitgudalur2013@gmail.com',
      'smiley.priya69111@gmail.com',
      'tl.sales@nextleveltechs.in',
      'greenmarkeredutechstudio1@gmail.com',
      'greenmarkeredutechstudio2@gmail.com',
      'greenmarkeredutechstudio3@gmail.com',
      'greenmarkeredutechstudio4@gmail.com',
      'greenmarkeredutechstudio5@gmail.com',
      'greenmarkeredutechstudio6@gmail.com',
      'greenmarkeredutechstudio7@gmail.com',
      'greenmarkeredutechstudio8@gmail.com',
      'greenmarkeredutechstudio9@gmail.com',
      'greenmarkeredutechstudio10@gmail.com',
      'teeja',
      'abc',
      'SREENU S',
      'SnehaS',
      'rakesh',
      'rakeshgudasi',
      'ravi',
      'naveenreddy',
      '4neetaitech@gmail.com',
      '3neetaitech@gmail.com',
      'TALK GLOBAL',
      '6neetaitech@gmail.com',
      '7netaitech@gmail.com',
      '8neetaitech@gmail.com',
      '9netaitech@gmail.com'
    ]
  }
];

const UserTree = () => {
  const [expandedUsers, setExpandedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (user) => {
    setExpandedUsers((prev) =>
      prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]
    );
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="user-tree-container">
      <div className="user-tree">
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <div className="user-item">
                <button onClick={() => handleToggle(user.name)}>
                  {expandedUsers.includes(user.name) ? '-' : '+'}
                </button>
                <span onClick={() => handleUserClick(user.name)} className="user-name">
                  {user.name}
                </span>
              </div>
              {expandedUsers.includes(user.name) && (
                <ul className="user-subcontent">
                  {user.children.map((child, idx) => (
                    <li key={idx}>
                      <span onClick={() => handleUserClick(child)} className="user-name">
                        {child}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* <h2 className="mh2">User Data</h2> */}
            <p>{selectedUser}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTree;
