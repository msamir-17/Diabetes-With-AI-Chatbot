import React from "react";
import "./SymptomsPage.css";

const SymptomsPage = () => {
  const symptoms = [
    {
      id: 1,
      title: "Increased Thirst",
      description: "Excessive thirst (polydipsia) is an early sign of diabetes.",
      icon: "🥤",
      link: "https://www.fortishealthcare.com/blogs/what-polydipsia-diabetes-cause-symptoms-ways-manage",
    },
    {
      id: 2,
      title: "Frequent Urination",
      description: "Urinating more often, especially at night (polyuria).",
      icon: "🚽",
      link: "https://www.medicalnewstoday.com/articles/polyuria",
    },
    {
      id: 3,
      title: "Fatigue",
      description: "Feeling tired despite rest due to energy imbalance.",
      icon: "😴",
      link: "https://www.diabetes.co.uk/symptoms/fatigue.html",
    },
    {
      id: 4,
      title: "Blurred Vision",
      description: "High blood sugar can blur vision by swelling the eye lens.",
      icon: "👁️",
      link: "https://www.aao.org/eye-health/diseases/diabetes-blindness",
    },
    {
      id: 5,
      title: "Unexplained Weight Loss",
      description: "Sudden weight loss can indicate type 1 diabetes.",
      icon: "⚖️",
      link: "https://www.health.com/type-1-diabetes-weight-loss",
    },
    {
      id: 6,
      title: "Slow Healing",
      description: "Wounds heal slowly due to poor circulation.",
      icon: "🩹",
      link: "https://www.diabetes.co.uk/symptoms/slow-healing-wounds.html",
    },
  ];

  return (
    <div className="symptoms-page">
      <div className="symptoms-header">
        <h2>Common Diabetes Symptoms</h2>
        <p>Early recognition of symptoms can lead to timely diagnosis and care.</p>
      </div>

      <div className="symptoms-container">
        {symptoms.map((symptom) => (
          <div className="symptom-card" key={symptom.id}>
            <div className="symptom-icon">{symptom.icon}</div>
            <h3>{symptom.title}</h3>
            <p>{symptom.description}</p>
            <button
              className="learn-more-btn"
              onClick={() => window.open(symptom.link, "_blank")}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="full-guide">
        <h3>Explore Diabetes Symptoms in Detail</h3>
        <p>Learn about warning signs, risk factors, and when to seek medical advice.</p>
        <button className="guide-btn">Read Full Guide</button>
      </div>
    </div>
  );
};

export default SymptomsPage;