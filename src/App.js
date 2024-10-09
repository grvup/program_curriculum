import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Extra from './Components/Extra';
import NewComponent from './Components/NewComponent';
import MTechCSEView from './Components/MTechCSEView';
import MTechECEView from './Components/MTechECEView';
import MTechMEView from './Components/MTechMEView';
import PhDCSEView from './Components/PhDCSEView';
import PhDECEView from './Components/PhDECEView';
import PhDMEView from './Components/PhDMEView';
import BTechCSEView from './Components/BTechCSEView';
import BTechMEView from './Components/BTechMEView';
import BTechECEView from './Components/BTechECEView';
import CourseProposalForm from './Components/CourseProposalForm';
import MTechMECHView from './Components/MTechMECHView';
import BDesView from './Components/BDesView';
import BTechSMView from './Components/BTechSMView';
import MDesView from './Components/MDesView';
import MTechSMView from './Components/MTechSMView';
import PhDDesView from './Components/PhDDesView';
import PhDEnglishView from './Components/PhDEnglishView';
import PhDMathsView from './Components/PhDMathsView';
import PhDPhysicsView from './Components/PhDPhysicsView';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Extra />} />
      <Route path="/new" element={<NewComponent />} />
      <Route path="/mtcse" element={<MTechCSEView />} />
      <Route path="/mtece" element={<MTechECEView />} />
      <Route path="/mtme" element={<MTechMEView />} />
      <Route path="/mtmech" element={<MTechMECHView />} />
      <Route path="/phdcse" element={<PhDCSEView />} />
      <Route path="/phdece" element={<PhDECEView />} />
      <Route path="/phdme" element={<PhDMEView />} />
      <Route path="/btchcse" element={<BTechCSEView />} />
      <Route path="/btchme" element={<BTechMEView />} />
      <Route path="/btchece" element={<BTechECEView />} />
      <Route path="/course-proposal" element={<CourseProposalForm />} />
      <Route path="/bdes" element={<BDesView />} />
      <Route path="/btchsm" element={<BTechSMView />} />
      <Route path="/mdes" element={<MDesView />} />
      <Route path="/mtsm" element={<MTechSMView />} />
      <Route path="/phddes" element={<PhDDesView />} />
      <Route path="/phdeng" element={<PhDEnglishView />} />
      <Route path="/phdmath" element={<PhDMathsView />} />
      <Route path="/phdphy" element={<PhDPhysicsView />} />
    </Routes>
  );
};

export default App;