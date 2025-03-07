# BlogApp - Django & JavaScript Full-Stack Application

BlogApp is a simple full-stack blog application built using Django for the backend and JavaScript (React.js) for the frontend. It provides functionality to manage blog posts, display them, and allows users to interact with the content.

## Features

- **User Authentication**: Register, login, and logout functionality.
- **CRUD for Blog Posts**: Create, read, update, and delete blog posts.
- **API Integration**: The backend exposes an API that the frontend interacts with to display blog posts.
- **Responsive UI**: The frontend is built using JavaScript and is designed to be mobile-friendly.

## Tech Stack

- **Backend**: Django (Python)
- **Frontend**: React.js (JavaScript)
- **Database**: SQLite (used for development and testing)
- **API**: Django REST Framework for creating RESTful APIs
- **Authentication**: Token-based authentication using Django Rest Framework's `SimpleJWT`
- **Deployment**: Can be deployed using Docker or any cloud service like Heroku

## Setup and Installation

### Prerequisites

- Python 3.9 or higher
- Node.js and npm (for managing the frontend)
- Django and Django REST Framework
- React.js

### Backend Setup (Django)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blogapp.git
   cd blogapp/backend
   ```

2. Create a virtual environment and activate it:

   ```bash
    python3 -m venv venv
    source venv/bin/activate  # For macOS/Linux
    .\venv\Scripts\activate  # For Windows

   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up your environment variables in the .env file:
   ```bash
      SECRET_KEY=your_secret_key
      DEBUG=True
      ALLOWED_HOSTS=127.0.0.1, localhost
   ```
5. Run migrations:

```bash
   python3 manage.py migrate
```

6. Run the development server:

```bash
   python3 manage.py runserver
```

### Frontend Setup (React.js)

1. Navigate to the frontend directory:

bash

2. cd ../frontend
   Install the frontend dependencies:

bash

3. npm install
   Run the React development server:

npm start
By default, it will run on http://localhost:3000.

### API Endpoints

GET /api/posts/: Fetch all blog posts.
POST /api/posts/: Create a new blog post.
GET /api/posts/{id}/: Get details of a single blog post.
PUT /api/posts/{id}/: Update a specific blog post.
DELETE /api/posts/{id}/: Delete a specific blog post.

### Frontend - API Calls

The frontend uses the fetch API to interact with the Django API, such as fetching posts and sending data to create or update blog posts.

### User Authentication

POST /api/auth/register/: Register a new user.
POST /api/auth/login/: Login a user and receive a JWT token for authentication.
POST /api/auth/logout/: Logout the user.
For user authentication, the frontend will store the JWT token in localStorage or sessionStorage for persistence.

### Deployment

This application can be deployed to any platform that supports Django and React.js. For example:

Heroku: You can deploy both the backend and frontend using Heroku.
Docker: You can create Docker containers for both the backend and frontend, then deploy them.
Testing
To run tests for the Django app, use:

bash
python manage.py test

### Code Quality

Unit Tests
Ensure you have added unit tests for your API endpoints and views.

### Contributing

If you'd like to contribute to this project, feel free to fork it and create a pull request. You can also open issues if you encounter any bugs or have feature requests.

### License

This project is open-source and available under the MIT License.
