import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import DiabetesForm from "./components/DiabetesForm";
import SymptomsPage from "./components/Symptoms/SymptomsPage";
import ChatbotPage from "./components/chatbot/ChatbotPage";
import ProfilePage from "./components/Profile/ProfilePage";
import Apps from "./components/apps/apps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
          <Route path="/apps" element={<Apps />}>
            <Route path="profile" element={<ProfilePage />} /> 
            <Route path="diabetes-form" element={<DiabetesForm />} /> 
            <Route path="symptoms" element={<SymptomsPage />} /> 
            <Route path="chatbotpage" element={<ChatbotPage />} /> 
          </Route>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;