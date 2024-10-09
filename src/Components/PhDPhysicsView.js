import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const CURRICULUM_DATA = {
  info: {
    programName: 'PhD in Physics',
    programCategory: 'PHD',
    programBeginYear: '2017'
  },
  workingCurriculums: [
    {
      name: 'PhD in Natural Sciences (Physics)',
      version: '1.0',
      batch: [
        'Phd Physics 2016',
        'Phd Physics 2017',
        'Phd Physics 2019',
        'Phd Physics 2020',
        'Phd Physics 2021'
      ],
      semesters: 4
    }
  ]
};

const PhDPhysicsView = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('info');

  const renderInfo = () => (
    <div className="curriculum-info">
      <div className="info-header">
        <h2>PhD in Physics</h2>
      </div>
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
                <td>
                  <a href="#" className="curriculum-link">
                    {curr.name}
                  </a>
                </td>
                <td>{curr.version}</td>
                <td>
                  {curr.batch.map((b, i) => (
                    <React.Fragment key={i}>
                      {b}
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
            <span>PhD in Physics</span>
          </div>
        </div>
      </header>

      <div className="curriculum-tabs">
        <button 
          className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          PhD in Physics Info
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

export default PhDPhysicsView;