# 🩺 Diabetes With AI Chatbot

An intelligent web application that predicts diabetes using Machine Learning and assists users with an AI-powered chatbot that provides personalized medical information in simple language.

---

## 🚀 Features

### 🔹 1. Diabetes Prediction
- Predicts the likelihood of diabetes using a trained **SVM (Support Vector Machine)** model.  
- Takes user inputs like:
  - Glucose  
  - Blood Pressure  
  - Insulin Level  
  - BMI  
  - Age, etc.  
- Provides **instant prediction results** with medical suggestions.

### 🔹 2. AI Medical Chatbot (MediBot)
- Built using **Google Gemini API (Generative AI)**.  
- Understands both **English** and **Hinglish (Hindi-English mix)**.  
- Answers health-related questions like:  
  > “Diabetes kya hota hai?”  
  > “Type 1 aur Type 2 diabetes mein kya difference hai?”  
- Gives medical explanations in a **friendly and conversational** tone.

### 🔹 3. Symptoms Page
- Displays **common diabetes symptoms** with prevention tips.  
- Helps users identify early warning signs.  
- Encourages regular checkups and healthy living habits.

### 🔹 4. Modern UI
- Clean and responsive frontend made with **React + Tailwind CSS**.  
- Gradient design for chatbot and dashboard.  
- Smooth transitions and interactive chat interface.

---

## ⚙️ Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Django (Python) |
| **Machine Learning** | Scikit-learn (SVM Classifier) |
| **AI Chatbot** | Google Gemini API |
| **Database** | PostgreSQL / SQLite |
| **Version Control** | Git & GitHub |
| **Deployment** | Localhost / Render (optional) |

---

## 🧠 Model Details

- Model trained on **Pima Indian Diabetes Dataset**.  
- Preprocessing steps:
  - Data cleaning and feature scaling using `StandardScaler`.
  - Model trained using **SVM Classifier**.
- Model files used:
- Gives accurate predictions based on user health parameters.

---

## 🖥️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/msamir-17/Diabetes-With-AI-Chatbot.git
cd Diabetes-With-AI-Chatbot
cd svm_Dia_pred
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
cd frontend
npm install
npm start
Now open http://localhost:3000
 in your browser 🚀
<img width="1600" height="861" alt="image" src="https://github.com/user-attachments/assets/81be3457-461c-4f38-a529-e6ac63c8bf10" />
<img width="1600" height="875" alt="image" src="https://github.com/user-attachments/assets/b3829f18-ec87-45b8-90cd-e5f4aa95bef1" />

