# core/urls.py

from django.urls import path, include
from .views import ArticleViewSet, UserViewSet, frontend  # frontend view'ını import edin
from rest_framework.routers import DefaultRouter
from django.http import HttpResponse

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)

def home(request):
    return HttpResponse("Welcome to Django Backend!")

urlpatterns = [
    path("home/", home),  # Added home view
    path("", frontend, name='frontend'),   # Serve React frontend (or another view if needed)
    path('api/', include(router.urls)),
]