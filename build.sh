cd frontend
npm install
npm run build
mv build/* ../backend/staticfiles/
cd ../backend
pip install -r requirements.txt

python manage.py collectstatic --noinput

python manage.py migrate