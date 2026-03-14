import './App.css'
import ProtectedRoute from './Components/auth/ProtectedRoute';
import AppointmentPage from './Pages/AppointmentsPage';
import DashboardPage from './Pages/DashboardPage'
import LoginPage from './Pages/LoginPage'
import DoctorPage from './Pages/DoctorsPage';
import AiAssistant from './Pages/AiAssistant';
import EducationContentPage from './Pages/EducationContentPage';
import MedicineInventoryPage from './Pages/MedicineinventoryPage';
import SettingPage from './Pages/SettingPage';
import PatientsPage from './Pages/PatientsPage';
import Signup from './Components/auth/SignUp';

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<LoginPage />} />
      
      <Route path="/dashboard" element={<ProtectedRoute role="dashboard"> <DashboardPage /> </ProtectedRoute>} />
      <Route path="/assistant" element={<ProtectedRoute role="assistant"> <AiAssistant/> </ProtectedRoute>} />
      <Route path="/appointments" element={<ProtectedRoute role="appointments"> <AppointmentPage /> </ProtectedRoute>} />
      <Route path="/doctors" element={ <ProtectedRoute role="doctors"> <DoctorPage/> </ProtectedRoute>} />
      <Route path="/education" element={<EducationContentPage/>} />
      <Route path="/inventory" element={<ProtectedRoute role="inventory"> <MedicineInventoryPage/> </ProtectedRoute>} />
      <Route path="/setting" element={<ProtectedRoute  role="setting"> <SettingPage/> </ProtectedRoute>} />
      <Route path="/patients" element={<ProtectedRoute role="patients"> <PatientsPage/> </ProtectedRoute>} />
    </Routes>
  );
}

export default App;
