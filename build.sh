#!/bin/bash

# Navigate to the frontend directory
cd frontend

# Install frontend dependencies
npm install

# Build the React application
npm run build

# Move the build files to the backend staticfiles directory
mv build/* ../backend/staticfiles/

# Navigate back to the backend directory
cd ../backend

# Install backend dependencies from the main requirements.txt
pip install -r ../requirements.txt

# Collect static files
python3 manage.py collectstatic --noinput

# Run migrations
python3 manage.py migrate