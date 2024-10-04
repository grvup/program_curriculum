// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu, X, Home, BookOpen, FileText, UtensilsCrossed, Users, Activity, 
  GraduationCap, MessageSquare, Building, Briefcase, MoreHorizontal, 
  User, Settings, HelpCircle } from 'lucide-react';
import MTechCSEView from './MTechCSEView';
import PhDCSEView from './PhDCSEView';
import BTechCSEView from './BTechCSEView';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentView, setCurrentView] = useState('disciplines');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      }
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
    if (program === 'M.Tech CSE') {
      setCurrentView('mtech-cse');
    } else if (program === 'PhD in CSE') {
      setCurrentView('phd-cse');
    } else if (program === 'B.Tech CSE') {
      setCurrentView('btech-cse');
    }
  };

  const handleBackToPrograms = () => {
    setCurrentView('disciplines');
  };

  return (
    <div className="app">
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
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="navbar-placeholder"></div>
        {currentView === 'disciplines' ? (
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
                <li><a href="#">Course Proposal Form</a></li>
                <li><a href="#">Course Proposal Tracking</a></li>
              </ul>
            </div>

            <div className="tabs">
              <button className={filter === 'ALL' ? 'active' : ''} onClick={() => setFilter('ALL')}>ALL</button>
              <button className={filter === 'B.Tech' ? 'active' : ''} onClick={() => setFilter('B.Tech')}>B.Tech</button>
              <button className={filter === 'M.Tech' ? 'active' : ''} onClick={() => setFilter('M.Tech')}>M.Tech</button>
              <button className={filter === 'Design' ? 'active' : ''} onClick={() => setFilter('Design')}>Design</button>
              <button className={filter === 'PhD' ? 'active' : ''} onClick={() => setFilter('PhD')}>PhD</button>
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
        ) : currentView === 'mtech-cse' ? (
          <MTechCSEView onBack={handleBackToPrograms} />
        ) : currentView === 'phd-cse' ? (
          <PhDCSEView onBack={handleBackToPrograms} />
        ) : currentView === 'btech-cse' ? (
          <BTechCSEView onBack={handleBackToPrograms} />
        ) : null}
      </main>
    </div>
  );
};

export default App;