// // import React, { useState } from "react";
// // import axios from "axios";

// // const DiabetesForm = () => {
// //   const [formData, setFormData] = useState({
// //     pregnancies: "",
// //     glucose: "",
// //     diastolic: "",
// //     triceps: "",
// //     insulin: "",
// //     bmi: "",
// //     dpf: "",
// //     age: "",
// //   });

// //   const [prediction, setPrediction] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const features = Object.values(formData).map(Number);

// //     try {
// //       const response = await axios.post(
// //         "http://127.0.0.1:8000/predict/",
// //         { features: features },
// //         { headers: { "Content-Type": "application/json" } } // ✅ Add this
// //       );
// //       setPrediction(response.data.prediction);
// //     } catch (error) {
// //       console.error("Error fetching prediction:", error);
// //       setPrediction("Error in prediction!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const isFormValid = Object.values(formData).every(value => value !== "");

// //   return (
// //     <div>
// //       <h2>Diabetes Prediction</h2>
// //       <form onSubmit={handleSubmit}>
// //         {Object.keys(formData).map((key) => (
// //           <div key={key}>
// //             <label>{key}: </label>
// //             <input type="number" name={key} value={formData[key]} onChange={handleChange} required />
// //           </div>
// //         ))}
// //         <button type="submit" disabled={!isFormValid || loading}>
// //           {loading ? "Predicting..." : "Predict"}
// //         </button>
// //       </form>
// //       {prediction && <h3>Result: {prediction}</h3>}
// //     </div>
// //   );
// // };

// // export default DiabetesForm;





// import React, { useState } from "react";
// import axios from "axios";
// import {  Routes, Route, Link } from "react-router-dom";
// import "./DiabetesForm.css";
// import logo from "./logo.svg"; // Assuming you'll have a logo file

// import {useNavigate } from 'react-router-dom'; // useNavigate add kiya
// import AuthPage from './Auth/AuthPage.jsx'; // AuthPage import kiya

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate(); // Navigate hook add kiya

//   // Toggle login state aur redirect functionality
//   const toggleLogin = () => {
//     if (isLoggedIn) {
//       setIsLoggedIn(false); // Logout pe state false
//       navigate('/authpage'); // AuthPage pe redirect
//     } else {
//       setIsLoggedIn(true); // Login pe state true (optional)
//       navigate('/authpage'); // Same page pe redirect (login flow ke liye)
//     }
//   };

//   return (
//     <div className="app-container">
//       <header className="app-header">
//         <div className="logo-container">
//           <div className="logo">
//             <img src={logo} alt="sam-creation" />
//           </div>
//           <h1>Diabetes Prediction</h1>
//         </div>
//         <nav className="navigation">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/symptoms" className="nav-link">Symptoms</Link>
//           <Link to="/ChatbotPage" className="nav-link">Chat Assistance</Link>
//         </nav>
//         <div className="auth-buttons">
//           <button onClick={toggleLogin} className="login-btn">
//             {isLoggedIn ? "Logout" : "Login"}
//           </button>
//         </div>
//       </header>

//       <Routes>
//         <Route path="/" element={<DiabetesForm />} />
//         <Route path="/symptoms" element={<SymptomsPage />} />
//         <Route path="/ChatbotPage" element={<ChatbotPage />} />
//         <Route path="/authpage" element={<AuthPage />} /> {/* AuthPage route add kiya */}
//       </Routes>

//       {/* Footer same rahega */}
//       <footer className="app-footer">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3>sam-creation</h3>
//             <p>Providing health insights through technology</p>
//           </div>
//           <div className="footer-section">
//             <p>© 2025 sam-creation. All rights reserved.</p>
//           </div>
//           <div className="footer-section">
//             <p>Contact: info@sam-creation.com</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// const DiabetesForm = () => {
//   const [formData, setFormData] = useState({
//     pregnancies: "", glucose: "", diastolic: "", triceps: "",
//     insulin: "", bmi: "", dpf: "", age: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [suggestion, setSuggestion] = useState("");
//   const [loading, setLoading] = useState(false);
//   const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const fetchSuggestion = async (prediction) => {
//     let promptText = prediction === "Diabetic"
//       ? `A person has been detected as diabetic. Give a detailed plan including:
//         - How to manage diabetes with diet, exercise, and lifestyle changes
//         - What foods to eat and what to avoid
//         - Treatment options available
//         - The importance of consulting a doctor for a personalized health plan`
//       : `A person is not diabetic but wants to prevent diabetes. Provide a detailed plan including:
//         - Healthy habits to adopt
//         - What foods are good for diabetes prevention
//         - What foods should be avoided
//         - Exercise and lifestyle tips to reduce diabetes risk`;

//     try {
//       const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
//       const requestBody = { contents: [{ parts: [{ text: promptText }] }] };

//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestBody),
//       });

//       const data = await response.json();
//       console.log("Gemini Response:", data);
//       const aiSuggestion = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No suggestion available.";
//       setSuggestion(aiSuggestion);

//     } catch (error) {
//       console.error("Error fetching suggestion from Gemini:", error);
//       setSuggestion("Sorry, I couldn't fetch health advice at this time.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const features = Object.values(formData).map(Number);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/predict/",
//         { features: features },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       setPrediction(response.data.prediction);
//       fetchSuggestion(response.data.prediction);
//     } catch (error) {
//       console.error("Error fetching prediction:", error);
//       setPrediction("Error in prediction!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isFormValid = Object.values(formData).every(value => value !== "");

//   const fieldLabels = {
//     pregnancies: "Pregnancies",
//     glucose: "Glucose Level (mg/dL)",
//     diastolic: "Blood Pressure (mm Hg)",
//     triceps: "Skin Thickness (mm)",
//     insulin: "Insulin Level (mu U/ml)",
//     bmi: "BMI (kg/m²)",
//     dpf: "Diabetes Pedigree Function",
//     age: "Age (years)"
//   };

//   return (
//     <div className="diabetes-container">
//       <div className="diabetes-card">
//         <div className="slogan-side">
//           <div className="slogan-content">
//             <h1 className="main-slogan">Take Control of Your Health</h1>
//             <div className="animated-text">
//               <p className="slogan-line">Early Detection</p>
//               <p className="slogan-line">Better Management</p>
//               <p className="slogan-line">Healthier Living</p>
//             </div>
//             <div className="pulse-icon">
//               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M3 12H5L9 4L15 20L19 12H21" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"/>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="form-side">
//           <div className="form-container">
//             <h2 className="form-title">Check Your Diabetes Risk</h2>
//             <form onSubmit={handleSubmit} className="prediction-form">
//               {Object.keys(formData).map((key) => (
//                 <div key={key} className="form-group">
//                   <label htmlFor={key}>{fieldLabels[key]}: </label>
//                   <input 
//                     type="number" 
//                     id={key} 
//                     name={key} 
//                     value={formData[key]} 
//                     onChange={handleChange} 
//                     placeholder={`Enter ${fieldLabels[key].toLowerCase()}`}
//                     required 
//                   />
//                 </div>
//               ))}
//               <button 
//                 type="submit" 
//                 disabled={!isFormValid || loading} 
//                 className={`predict-btn ${loading ? 'loading' : ''}`}
//               >
//                 {loading ? "Analyzing..." : "Check Risk"}
//               </button>
//             </form>

//             {prediction && (
//               <div className={`prediction-result ${prediction === "Diabetic" ? "diabetic" : "non-diabetic"}`}>
//                 <h3>Result: {prediction}</h3>
//                 <div className="result-explanation">
//                   {suggestion || <div className="loading-text">Fetching health advice...</div>}
//                 </div>
//                 <p className="chatbot-prompt">
//                   ℹ️ Zyada info chahiye? <Link to="/chatbot">Chatbot se puchiye! 🤖</Link>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default App;



// // App.js
// import React, { useState } from 'react';
// import './authentication.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faUser, faLock, faEnvelope, 
//   faFacebookF, faTwitter, faGoogle, faLinkedinIn 
// } from '@fortawesome/free-solid-svg-icons';

// const Authpage = () => {
//   const [isSignUpMode, setIsSignUpMode] = useState(false);

//   const handleSignUpClick = () => {
//     setIsSignUpMode(true);
//   };

//   const handleSignInClick = () => {
//     setIsSignUpMode(false);
//   };

//   return (
//     <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
//       <div className="forms-container">
//         <div className="signin-signup">
//           {/* Sign In Form */}
//           <form className="sign-in-form">
//             <h2 className="title">Sign In</h2>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faUser} className="input-icon" />
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faLock} className="input-icon" />
//               <input type="password" placeholder="Password" />
//             </div>
//             <button type="submit" className="btn solid">Login</button>
            
//             <p className="social-text">Or Sign in with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faGoogle} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//               </a>
//             </div>
//           </form>

//           {/* Sign Up Form */}
//           <form className="sign-up-form">
//             <h2 className="title">Sign Up</h2>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faUser} className="input-icon" />
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//               <input type="email" placeholder="Email" />
//             </div>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faLock} className="input-icon" />
//               <input type="password" placeholder="Password" />
//             </div>
//             <button type="submit" className="btn solid">Sign Up</button>
            
//             <p className="social-text">Or Sign up with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faGoogle} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New here?</h3>
//             <p>Join our community today and discover all the amazing features we offer!</p>
//             <button className="btn transparent" onClick={handleSignUpClick}>Sign Up</button>
//           </div>
//           <img src="/images/log.svg" alt="rocket" className="image" />
//         </div>

//         <div className="panel right-panel">
//           <div className="content">
//             <h3>One of us?</h3>
//             <p>Sign in to access your account and continue your journey with us!</p>
//             <button className="btn transparent" onClick={handleSignInClick}>Sign In</button>
//           </div>
//           <img src="/images/register.svg" alt="dashboard" className="image" />
//         </div>
//       </div>
//     </div>
//   );
// };