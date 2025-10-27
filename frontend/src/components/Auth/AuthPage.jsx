import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authentication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const AuthPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic yahan daal sakte ho (API call, etc.)
    navigate("/apps/diabetes-form");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Sign-up logic yahan daal sakte ho (API call, etc.)
    navigate("/apps/diabetes-form");
  };

  // Social login ke liye function (abhi placeholder hai, tum apna logic daal sakte ho)
  const handleSocialLogin = (platform) => {
    console.log(`Logging in with ${platform}`);
    // Yahan actual social login logic daal sakte ho (e.g., Google OAuth, etc.)
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn solid">Login</button>

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button
                onClick={() => handleSocialLogin("Twitter")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button
                onClick={() => handleSocialLogin("Google")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button
                onClick={() => handleSocialLogin("LinkedIn")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </div>
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form" onSubmit={handleSignUp}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn solid">Sign Up</button>

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <button
                onClick={() => handleSocialLogin("Facebook")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </button>
              <button
                onClick={() => handleSocialLogin("Twitter")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button
                onClick={() => handleSocialLogin("Google")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button
                onClick={() => handleSocialLogin("LinkedIn")}
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Join our community today and discover all the amazing features we offer!</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
          <img src="/images/log.svg" alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in to access your account and continue your journey with us!</p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <img src="/images/register.svg" alt="dashboard" className="image" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;