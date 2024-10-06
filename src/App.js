import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu, X, Home, BookOpen, FileText, UtensilsCrossed, Users, Activity, 
  GraduationCap, MessageSquare, Building, Briefcase, MoreHorizontal, 
  User, Settings, HelpCircle } from 'lucide-react';
import MTechCSEView from './Components/MTechCSEView.js';
import PhDCSEView from './Components/PhDCSEView.js';
import BTechCSEView from './Components/BTechCSEView.js';
import CourseProposalForm from './Components/CourseProposalForm.js';
import NewComponent from './Components/NewComponent.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Extra from './Components/Extra.jsx';

const App = () => {


  return (
  <Router>
    <Routes>
      <Route path="/" element={<Extra />} /> 
      <Route path="/new" element={<NewComponent />} />
    </Routes>
  </Router>
   
  );
};

export default App;
