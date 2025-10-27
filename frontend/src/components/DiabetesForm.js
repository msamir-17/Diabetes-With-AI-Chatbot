// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./DiabetesForm.css";
// // import ChatbotPage from "./chatbot/ChatbotPage";
// const DiabetesForm = () => {
//   const [formData, setFormData] = useState({
//     pregnancies: "",
//     glucose: "",
//     diastolic: "",
//     triceps: "",
//     insulin: "",
//     bmi: "",
//     dpf: "",
//     age: "",
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [suggestion, setSuggestion] = useState("");
//   const [loading, setLoading] = useState(false);
//   const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const fetchSuggestion = async (prediction) => {
//     const promptText =
//       prediction === "Diabetic"
//         ? `A person has been detected as diabetic. Suggest a concise plan for managing diabetes with diet, exercise, and lifestyle changes.`
//         : `A person is not diabetic. Suggest a concise plan to prevent diabetes with diet, exercise, and lifestyle tips.`;

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] }),
//         }
//       );
//       const data = await response.json();
//       const aiSuggestion =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "No suggestion available.";
//       setSuggestion(aiSuggestion);
//     } catch (error) {
//       setSuggestion("Unable to fetch advice at this time.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const features = Object.values(formData).map(Number);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/predict/",
//         { features },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       setPrediction(response.data.prediction);
//       fetchSuggestion(response.data.prediction);
//     } catch (error) {
//       setPrediction("Error in prediction!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isFormValid = Object.values(formData).every((value) => value !== "");

//   const fieldLabels = {
//     pregnancies: "Pregnancies",
//     glucose: "Glucose (mg/dL)",
//     diastolic: "Blood Pressure (mm Hg)",
//     triceps: "Skin Thickness (mm)",
//     insulin: "Insulin (mu U/ml)",
//     bmi: "BMI (kg/m²)",
//     dpf: "Diabetes Pedigree",
//     age: "Age (years)",
//   };

//   return (
//     <div className="diabetes-container">
//       <div className="diabetes-card">
//         <div className="slogan-side">
//           <div className="slogan-content">
//             <h1 className="main-slogan">Take Control of Your Health</h1>
//             <div>
//               <p className="slogan-line">Early Detection</p>
//               <p className="slogan-line">Better Management</p>
//               <p className="slogan-line">Healthier Living</p>
//             </div>
//             <div className="pulse-icon">
//               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M3 12H5L9 4L15 20L19 12H21"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="form-side">
//           <div className="form-container">
//             <h2 className="form-title">Diabetes Risk Checker</h2>
//             <form onSubmit={handleSubmit} className="prediction-form">
//               {Object.keys(formData).map((key) => (
//                 <div key={key} className="form-group">
//                   <label htmlFor={key}>{fieldLabels[key]}</label>
//                   <input
//                     type="number"
//                     id={key}
//                     name={key}
//                     value={formData[key]}
//                     onChange={handleChange}
//                     placeholder={fieldLabels[key]}
//                     required
//                   />
//                 </div>
//               ))}
//               <button
//                 type="submit"
//                 disabled={!isFormValid || loading}
//                 className={`predict-btn ${loading ? "loading" : ""}`}
//               >
//                 {loading ? "Analyzing" : "Check Risk"}
//               </button>
//             </form>
//             {prediction && (
//               <div
//                 className={`prediction-result ${
//                   prediction === "Diabetic" ? "diabetic" : "non-diabetic"
//                 }`}
//               >
//                 <h3>Result: {prediction}</h3>
//                 <div className="result-explanation">
//                   {suggestion || "Fetching advice..."}
//                 </div>
//                 <p className="chatbot-prompt">
//                   Need more info? <Link to="/ChatbotPage">Ask the Chatbot!</Link>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiabetesForm;




import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DiabetesForm.css";

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    diastolic: "",
    triceps: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchSuggestion = async (prediction) => {
    const promptText =
      prediction === "Diabetic"
        ? `A person has been detected as diabetic. Suggest a concise plan for managing diabetes with diet, exercise, and lifestyle changes.`
        : `A person is not diabetic. Suggest a concise plan to prevent diabetes with diet, exercise, and lifestyle tips.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] }),
        }
      );
      const data = await response.json();
      const aiSuggestion =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No suggestion available.";
      setSuggestion(aiSuggestion);
    } catch (error) {
      setSuggestion("Unable to fetch advice at this time.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const features = Object.values(formData).map(Number);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict/",
        { features },
        { headers: { "Content-Type": "application/json" } }
      );
      setPrediction(response.data.prediction);
      fetchSuggestion(response.data.prediction);
    } catch (error) {
      setPrediction("Error in prediction!");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = Object.values(formData).every((value) => value !== "");

  const fieldLabels = {
    pregnancies: "Pregnancies",
    glucose: "Glucose (mg/dL)",
    diastolic: "Blood Pressure (mm Hg)",
    triceps: "Skin Thickness (mm)",
    insulin: "Insulin (mu U/ml)",
    bmi: "BMI (kg/m²)",
    dpf: "Diabetes Pedigree",
    age: "Age (years)",
  };

  return (
    <div className="diabetes-container">
      <div className="diabetes-card">
        <div className="slogan-side">
          <div className="slogan-content">
            <h1 className="main-slogan">Take Control of Your Health</h1>
            <div>
              <p className="slogan-line">Early Detection</p>
              <p className="slogan-line">Better Management</p>
              <p className="slogan-line">Healthier Living</p>
            </div>
            <div className="pulse-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 12H5L9 4L15 20L19 12H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="form-side">
          <div className="form-container">
            <h2 className="form-title">Diabetes Risk Checker</h2>
            <form onSubmit={handleSubmit} className="prediction-form">
              {Object.keys(formData).map((key) => (
                <div key={key} className="form-group">
                  <label htmlFor={key}>{fieldLabels[key]}</label>
                  <input
                    type="number"
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={fieldLabels[key]}
                    required
                  />
                </div>
              ))}
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`predict-btn ${loading ? "loading" : ""}`}
              >
                {loading ? "Analyzing" : "Check Risk"}
              </button>
            </form>
            {prediction && (
              <div
                className={`prediction-result ${
                  prediction === "Diabetic" ? "diabetic" : "non-diabetic"
                }`}
              >
                <h3>Result: {prediction}</h3>
                <div className="result-explanation">
                  {suggestion || "Fetching advice..."}
                </div>
                <p className="chatbot-prompt">
                  Need more info? <Link to="/ChatbotPage">Ask the Chatbot!</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabetesForm;
