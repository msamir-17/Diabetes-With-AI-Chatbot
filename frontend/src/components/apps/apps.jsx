// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom"; // Outlet import kiya
// import "./apps.css";
// import logo from "./images.jpg";

// const Apps = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const toggleLogin = () => {
//     if (isLoggedIn) {
//       setIsLoggedIn(false);
//       navigate("/"); // Logout karne pe AuthPage pe redirect
//     } else {
//       setIsLoggedIn(true);
//       navigate("/apps/diabetes-form"); // Login karne pe /apps/diabetes-form pe redirect
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
//           <Link to="diabetes-form" className="nav-link">Home</Link>
//           <Link to="symptoms" className="nav-link">Symptoms</Link>
//           <Link to="chatbotpage" className="nav-link">Chat Assistance</Link>
//           <Link to="profile" className="nav-link">Chat </Link>
//         </nav>
//         <div className="auth-buttons">
//           <button onClick={toggleLogin} className="login-btn">
//             {isLoggedIn ? "Logout" : "Login"}
//           </button>
//         </div>
//       </header>

//       <main>
//         <Outlet /> {/* Children ki jagah Outlet use kiya */}
//       </main>

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

// export default Apps;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./apps.css";
import logo from "./images.jpg";

const Apps = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Added for dropdown
  const navigate = useNavigate();

  const toggleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate("/");
    } else {
      setIsLoggedIn(true);
      navigate("/apps/diabetes-form");
    }
  };

  const handleNavigate = (path) => { // Dropdown navigation
    navigate(path);
    setShowDropdown(false);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="sam-creation" />
          </div>
          <h1>Diabetes Prediction</h1>
        </div>
        <nav className="navigation">
          <Link to="diabetes-form" className="nav-link">Home</Link>
          <Link to="symptoms" className="nav-link">Symptoms</Link>
          <Link to="chatbotpage" className="nav-link">MediBot</Link>
          {/* <Link to="profile" className="nav-link">Profile</Link> */}
        </nav>
        <div className="auth-buttons relative">
          <button onClick={() => setShowDropdown(!showDropdown)} className="login-btn">
            Options
          </button>
          {showDropdown && (
           <div className="dropdown-menu">
           {/* <button onClick={() => handleNavigate('/')} className="dropdown-item">Login</button> */}
           <button onClick={() => handleNavigate('/apps/profile')} className="dropdown-item">Profile</button>
           <button onClick={() => { setIsLoggedIn(false); handleNavigate('/'); }} className="dropdown-item">Logout</button>
         </div>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>sam-creation</h3>
            <p>Providing health insights through technology</p>
          </div>
          <div className="footer-section">
            <p>© 2025 sam-creation. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <p>Contact: info@sam-creation.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Apps;
