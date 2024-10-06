import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const CURRICULUM_DATA = {
  info: {
    programName: 'M.Tech CSE',
    programCategory: 'PG',
    programBeginYear: '2021'
  },
  workingCurriculums: [
    {
      name: 'CSE PG Curriculum',
      version: '1.0',
      batch: ['M.Tech CSE 2020', 'M.Tech CSE 2021'],
      semesters: 4
    }
  ]
};

const MTechCSEView = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('info');

  const renderInfo = () => (
    <div className="curriculum-info">
      <h2 className="curriculum-title">M.Tech CSE</h2>
      <table className="info-table">
        <tbody>
          <tr>
            <td>Programme Category</td>
            <td>{CURRICULUM_DATA.info.programCategory}</td>
          </tr>
          <tr>
            <td>Programme Name</td>
            <td>{CURRICULUM_DATA.info.programName}</td>
          </tr>
          <tr>
            <td>Programme Begin Year</td>
            <td>{CURRICULUM_DATA.info.programBeginYear}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderWorkingCurriculums = () => (
    <div className="table-container">
      <table className="discipline-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Batch</th>
            <th>No. of Semester</th>
          </tr>
        </thead>
        <tbody>
          {CURRICULUM_DATA.workingCurriculums.length > 0 ? (
            CURRICULUM_DATA.workingCurriculums.map((curr, idx) => (
              <tr key={idx}>
                <td className="text-primary">{curr.name}</td>
                <td>{curr.version}</td>
                <td>
                  {curr.batch.map((b, i) => (
                    <React.Fragment key={i}>
                      <span className="text-primary">{b}</span>
                      {i < curr.batch.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </td>
                <td>{curr.semesters}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No Curriculum Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  const renderObsoleteCurriculums = () => (
    <div className="table-container">
      <table className="discipline-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
            <th>Batch</th>
            <th>No. of Semester</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="text-center">No Curriculum Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="curriculum-view">
      <header>
        <div className="header-left">
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="breadcrumb">
            <span>Program and Curriculum</span>
            <ChevronRight size={16} />
            <span>Discipline</span>
            <ChevronRight size={16} />
            <span>M.Tech CSE</span>
          </div>
        </div>
      </header>

      <div className="curriculum-tabs">
        <button 
          className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          M.Tech CSE Info
        </button>
        <button 
          className={`tab-button ${activeTab === 'working' ? 'active' : ''}`}
          onClick={() => setActiveTab('working')}
        >
          Working Curriculums
        </button>
        <button 
          className={`tab-button ${activeTab === 'obsolete' ? 'active' : ''}`}
          onClick={() => setActiveTab('obsolete')}
        >
          Obsolete Curriculums
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'info' && renderInfo()}
        {activeTab === 'working' && renderWorkingCurriculums()}
        {activeTab === 'obsolete' && renderObsoleteCurriculums()}
      </div>
    </div>
  );
};

export default MTechCSEView;