import './App.css'
import AppointmentPage from './Pages/AppointmentsPage';
import DashboardPage from './Pages/DashboardPage'
import LoginPage from './Pages/LoginPage'
import DoctorPage from './Pages/DoctorsPage';
import MessagePage from './Pages/MessagePage';
import EducationContentPage from './Pages/EducationContentPage';
import MedicineInventoryPage from './Pages/MedicineinventoryPage';
import SettingPage from './Pages/SettingPage';
import PatientsPage from './Pages/PatientsPage';

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/messages" element={<MessagePage/>} />
      <Route path="/appointments" element={<AppointmentPage />} />
      <Route path="/doctors" element={<DoctorPage/>} />
      <Route path="/education" element={<EducationContentPage/>} />
      <Route path="/inventory" element={<MedicineInventoryPage/>} />
      <Route path="/setting" element={<SettingPage/>} />
      <Route path="/patients" element={<PatientsPage/>} />
    </Routes>
  );
}

export default App;
