import React, { useEffect, useState } from 'react';

const UpdateMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('membersExcel')) || [];
    setMembers(savedData);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 All Society Members</h2>

      {members.length === 0 ? (
        <p>No members found. Please add some.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Flat</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.Name}</td>
                <td>{member.Flat}</td>
                <td>{member.Contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UpdateMembers;
