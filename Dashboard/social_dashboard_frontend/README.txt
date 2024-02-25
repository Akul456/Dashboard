# Social Dashboard

A simple social media dashboard application built with Django and React.

## Setup Instructions:

1. Clone the repository:

git clone https://github.com/example/social-dashboard.git


2. Backend Setup:

- Install dependencies:

  ```
  pip install -r requirements.txt
  ```

- Apply migrations:

  ```
  python manage.py migrate
  ```

- Load mock data:

  ```
  python manage.py loaddata dashboard/fixtures/mock_data.json
  ```

- Run the server:

  ```
  python manage.py runserver
  ```

3. Frontend Setup:

- Navigate to the `social_dashboard_frontend` directory:

  ```
  cd social_dashboard_frontend
  ```

- Install dependencies:

  ```
  npm install
  ```

- Start the development server:

  ```
  npm start
  ```

4. Open your browser and visit `http://localhost:3000` to view the dashboard.

## Key Features:

- Displays social media posts with titles, descriptions, and scheduled times.
- Mock data is used for demonstration purposes.

## Usage:

- The dashboard automatically fetches and displays posts from the backend API.

