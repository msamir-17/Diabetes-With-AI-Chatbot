use_samir
# Diabetes Prediction Web App

This project is a web application that helps users predict the likelihood of diabetes based on certain health metrics. The app uses machine learning to predict whether a user is diabetic or not and provides recommendations on managing or preventing diabetes. Additionally, it tracks the user's data over time to monitor progress.

## Features:
- Diabetes prediction based on input features such as age, glucose level, BMI, etc.
- Personalized suggestions based on prediction results.
- User data tracking for progress comparison.

## Tech Stack:
- **Frontend**: React
- **Backend**: Django
- **Machine Learning**: SVM (Support Vector Machine)
- **Database**: PostgreSQL (for storing user data and predictions)

## Project Setup

### 1. Clone the repository

```bash
git clone <repository_url>
cd <project_name>
```

### 2. Frontend Setup (React)

1. Navigate to the frontend directory.

```bash
cd frontend
```

2. Install the required dependencies.

```bash
npm install
```

3. Create a `.env` file in the `frontend` directory and add the following environment variable for API keys:

```bash
REACT_APP_GEMINI_API_KEY=<your_gemini_api_key>
```

4. Start the frontend development server.

```bash
npm start
```

The frontend will now be available at `http://localhost:3000`.

### 3. Backend Setup (Django)

1. Navigate to the backend directory.

```bash
cd backend
```

2. Set up a virtual environment (optional but recommended).

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```

3. Install the required Python dependencies.

```bash
pip install -r requirements.txt
```

4. Set up the PostgreSQL database.

- Make sure you have PostgreSQL installed and running.
- Create a database and configure the `DATABASES` settings in the `backend/settings.py` file with your database credentials.

5. Run migrations to set up the database schema.

```bash
python manage.py migrate
```

6. Create a superuser (optional for accessing the Django admin).

```bash
python manage.py createsuperuser
```

7. Start the backend server.

```bash
python manage.py runserver
```

The backend API will now be available at `http://127.0.0.1:8000`.

### 4. Testing the Application

Once both the frontend and backend servers are running:

- Open `http://localhost:3000` in your browser to access the Diabetes Prediction Web App.
- You can enter health metrics (age, glucose, BMI, etc.) and check the diabetes prediction and suggestions.

### 5. API Endpoints

- **POST /predict/**: Takes health data and returns the diabetes prediction.
  - **Request Body**: 
    ```json
    {
      "features": [34, 434, 80, 25, 100, 32.5, 0.5, 45]
    }
    ```
  - **Response**: 
    ```json
    {
      "prediction": "Diabetic"
    }
    ```

### 6. Future Improvements

- Add more prediction models (e.g., logistic regression, neural networks).
- Implement user authentication and account creation.
- Add more metrics to track (e.g., diet, exercise).
- Implement a mobile version of the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
