import React, { useState } from 'react';

const CourseProposalForm = () => {
  const [activeTab, setActiveTab] = useState('new-courses');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    margin: '0 auto',
  };

  const tabsStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '10px',
    width: '100%',
  };

  const tabStyle = (isActive) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: isActive ? 'bold' : 'normal',
    backgroundColor: isActive ? '#f0f8ff' : '#fff',
    color: '#000',
    borderBottom: isActive ? '3px solid #007bff' : 'none',
    transition: 'all 0.3s ease',
    marginRight: '10px',
  });

  const contentRowStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    gap: '20px',
  };

  const tableContainerStyle = {
    width: '85%',
    overflowX: 'auto',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  };

  const thStyle = {
    padding: '10px',
    backgroundColor: '#b0e0ff',
    color: 'black',
    textAlign: 'center',
    border: '1px solid #007bff',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #007bff',
  };

  const buttonStyle = {
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
  };

  const viewButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white',
  };

  const archiveButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    color: 'white',
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };

  const addButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  };

  const formContainerStyle = {
    position: 'relative',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={tabsStyle}>
        <div
          style={tabStyle(activeTab === 'new-courses')}
          onClick={() => setActiveTab('new-courses')}
        >
          New Course Proposal Forms
        </div>
        <div
          style={tabStyle(activeTab === 'archived-courses')}
          onClick={() => setActiveTab('archived-courses')}
        >
          Archived Files
        </div>
      </div>

      <div style={formContainerStyle}>
        <div style={contentRowStyle}>
          {activeTab === 'new-courses' && (
            <>
              <div style={tableContainerStyle}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Created By</th>
                      <th style={thStyle}>Course Name</th>
                      <th style={thStyle}>Course Code</th>
                      <th style={thStyle}>View</th>
                      <th style={thStyle}>Submit</th>
                      <th style={thStyle}>Archive</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>atul - Professor</td>
                      <td style={tdStyle}>Electric Vehicle and Mobility</td>
                      <td style={tdStyle}>ME8017</td>
                      <td style={tdStyle}>
                        <button style={viewButtonStyle}>View</button>
                      </td>
                      <td style={tdStyle}>
                        <button style={submitButtonStyle}>Submit</button>
                      </td>
                      <td style={tdStyle}>
                        <button style={archiveButtonStyle}>Archive</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>atul - Professor</td>
                      <td style={tdStyle}>Lab based Project 1</td>
                      <td style={tdStyle}>CS206L</td>
                      <td style={tdStyle}>
                        <button style={viewButtonStyle}>View</button>
                      </td>
                      <td style={tdStyle}>
                        <button style={submitButtonStyle}>Submit</button>
                      </td>
                      <td style={tdStyle}>
                        <button style={archiveButtonStyle}>Archive</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button style={addButtonStyle}>ADD COURSE PROPOSAL FORM</button>
            </>
          )}

          {activeTab === 'archived-courses' && (
            <>
              <div style={tableContainerStyle}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Created By</th>
                      <th style={thStyle}>Course Name</th>
                      <th style={thStyle}>Course Code</th>
                      <th style={thStyle}>View</th>
                      <th style={thStyle}>Restore</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>atul - Professor</td>
                      <td style={tdStyle}>Data Structures</td>
                      <td style={tdStyle}>CS101</td>
                      <td style={tdStyle}>
                        <button style={viewButtonStyle}>View</button>
                      </td>
                      <td style={tdStyle}>
                        <button style={submitButtonStyle}>Restore</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>atul - Professor</td>
                      <td style={tdStyle}>Operating Systems</td>
                      <td style={tdStyle}>CS102</td>
                      <td style={tdStyle}>
                        <button style={viewButtonStyle}>View</button>
                      </td>
                      <td style={tdStyle}>
                        <button style={submitButtonStyle}>Restore</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button style={addButtonStyle}>ADD COURSE PROPOSAL FORM</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseProposalForm;
