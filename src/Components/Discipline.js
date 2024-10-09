import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Menu, X, Home, BookOpen, FileText, UtensilsCrossed, Users,
  Activity, GraduationCap, MessageSquare, Building, Briefcase,
  MoreHorizontal, User, Settings, HelpCircle
} from 'lucide-react';
import MTechCSEView from './MTechCSEView';
import MTechMEView from './MTechMEView';
import PhDCSEView from './PhDCSEView';
import PhDMEView from './PhDMEView';
import BTechCSEView from './BTechCSEView';
import BTechMEView from './BTechMEView';
import BTechECEView from './BTechECEView';
import MTechECEView from './MTechECEView';
import PhDECEView from './PhDECEView';
import CourseProposalForm from './CourseProposalForm';

const DISCIPLINES = [
  { name: 'Computer Science and Engineering', programs: ['M.Tech CSE', 'PhD in CSE', 'B.Tech CSE'] },
  { name: 'Mechanical Engineering', programs: ['M.Tech ME', 'PhD in ME', 'B.Tech ME'] },
  { name: 'Electronics and Communication Engineering', programs: ['M.Tech ECE', 'PhD in ECE', 'B.Tech ECE'] },
  { name: 'Mechatronics', programs: ['M.Tech Mechatronics'] },
  { name: 'Design', programs: ['B.Design', 'PhD in Design', 'M.Des Design'] },
  { name: 'Natural Sciences-Mathematics', programs: ['PhD in Maths'] },
  { name: 'Natural Sciences-Physics', programs: ['PhD in Physics'] },
  { name: 'Humanities - English', programs: ['PhD in English'] },
  { name: 'Smart Manufacturing', programs: ['M.Tech SM', 'B.Tech SM'] },
];

const App = () => {
  const [filter, setFilter] = useState('ALL');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('disciplines');

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredDisciplines = DISCIPLINES.filter(discipline =>
    filter === 'ALL' || discipline.programs.some(program =>
      program.startsWith(filter) || (filter === 'Design' && program.startsWith('B.Design'))
    )
  );

  const getFilteredPrograms = (programs) => {
    if (filter === 'ALL') return programs;
    return programs.filter(program =>
      program.startsWith(filter) || (filter === 'Design' && program.startsWith('B.Design'))
    );
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleProgramClick = (program) => {
    const programViewMapping = {
      'M.Tech CSE': 'mtech-cse',
      'M.Tech ME': 'mtech-me',
      'PhD in CSE': 'phd-cse',
      'PhD in ME': 'phd-me',
      'B.Tech CSE': 'btech-cse',
      'B.Tech ME': 'btech-me',
      'B.Tech ECE': 'btech-ece',
      'M.Tech ECE': 'mtech-ece',
      'PhD in ECE': 'phd-ece',
    };
    setCurrentView(programViewMapping[program] || 'disciplines');
  };

  const handleBackToPrograms = () => setCurrentView('disciplines');

  const handleCourseProposalClick = () => setCurrentView('course-proposal-form');

  const renderSidebar = () => (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="logo">
        <img src="/myLogo.png" alt="IIITDM Logo" />
        {isSidebarOpen && <span>IIITDM</span>}
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#"><Home size={20} /> {isSidebarOpen && 'Home'}</a></li>
          <li><a href="#"><BookOpen size={20} /> {isSidebarOpen && 'Academics'}</a></li>
          <li className="active"><a href="#"><FileText size={20} /> {isSidebarOpen && 'Program and Curriculum'}</a></li>
          <li><a href="#"><UtensilsCrossed size={20} /> {isSidebarOpen && 'Mess'}</a></li>
          <li><a href="#"><Users size={20} /> {isSidebarOpen && 'Guest'}</a></li>
          <li><a href="#"><Activity size={20} /> {isSidebarOpen && 'Health'}</a></li>
          <li><a href="#"><GraduationCap size={20} /> {isSidebarOpen && 'Scholarship'}</a></li>
          <li><a href="#"><MessageSquare size={20} /> {isSidebarOpen && 'Complain'}</a></li>
          <li><a href="#"><Building size={20} /> {isSidebarOpen && 'Placement'}</a></li>
          <li><a href="#"><Briefcase size={20} /> {isSidebarOpen && 'Department'}</a></li>
          <li><a href="#"><FileText size={20} /> {isSidebarOpen && 'Gymkhana'}</a></li>
          <li><a href="#"><MoreHorizontal size={20} /> {isSidebarOpen && 'Other'}</a></li>
          <li><a href="#"><User size={20} /> {isSidebarOpen && 'Profile'}</a></li>
          <li><a href="#"><Settings size={20} /> {isSidebarOpen && 'Settings'}</a></li>
          <li><a href="#"><HelpCircle size={20} /> {isSidebarOpen && 'Help'}</a></li>
          <li><a href="#" onClick={handleCourseProposalClick}><FileText size={20} /> {isSidebarOpen && 'Course Proposal'}</a></li>
        </ul>
      </nav>
    </aside>
  );

  const renderMainContent = () => {
    const viewComponents = {
      'disciplines': (
        <>
          <header>
            <div className="header-left">
              <button className="toggle-sidebar" onClick={toggleSidebar}>
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1>Program and Curriculum &gt; Discipline</h1>
            </div>
            <div className="header-right">
              <a href="#" className="header-icon"><User size={20} /></a>
              <a href="#" className="header-icon"><Settings size={20} /></a>
              <a href="#" className="header-icon"><HelpCircle size={20} /></a>
            </div>
          </header>

          <div className="top-nav">
            <ul>
              <li><a href="#">Programmes</a></li>
              <li><a href="#">Curriculums</a></li>
              <li><a href="#">Courses</a></li>
              <li className="active"><a href="#">Discipline</a></li>
              <li><a href="#">Batches</a></li>
              <li><a href="#" onClick={handleCourseProposalClick}>Course Proposal Form</a></li>
              <li><a href="#">Course Proposal Tracking</a></li>
            </ul>
          </div>

          <div className="tabs">
            {['ALL', 'B.Tech', 'M.Tech', 'Design', 'PhD'].map((tab) => (
              <button
                key={tab}
                className={filter === tab ? 'active' : ''}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="table-container">
            <table className="discipline-table">
              <thead>
                <tr>
                  <th>Discipline</th>
                  <th>Programmes</th>
                </tr>
              </thead>
              <tbody>
                {filteredDisciplines.map((discipline, index) => (
                  <tr key={index}>
                    <td>{discipline.name}</td>
                    <td>
                      {getFilteredPrograms(discipline.programs).map((program, programIndex) => (
                        <React.Fragment key={programIndex}>
                          <a
                            href="#"
                            className="program-link"
                            onClick={(e) => {
                              e.preventDefault();
                              handleProgramClick(program);
                            }}
                          >
                            {program}
                          </a>
                          {programIndex < getFilteredPrograms(discipline.programs).length - 1 && ' | '}
                        </React.Fragment>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
      'mtech-cse': <MTechCSEView onBack={handleBackToPrograms} />,
      'mtech-me': <MTechMEView onBack={handleBackToPrograms} />,
      'phd-cse': <PhDCSEView onBack={handleBackToPrograms} />,
      'phd-me': <PhDMEView onBack={handleBackToPrograms} />,
      'btech-cse': <BTechCSEView onBack={handleBackToPrograms} />,
      'btech-me': <BTechMEView onBack={handleBackToPrograms} />,
      'btech-ece': <BTechECEView onBack={handleBackToPrograms} />,
      'mtech-ece': <MTechECEView onBack={handleBackToPrograms} />,
      'phd-ece': <PhDECEView onBack={handleBackToPrograms} />,
      'course-proposal-form': <CourseProposalForm onBack={handleBackToPrograms} />,
    };

    return viewComponents[currentView];
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {renderSidebar()}
      <main className="main-content">
        {renderMainContent()}
      </main>
    </div>
  );
};

export default App;
