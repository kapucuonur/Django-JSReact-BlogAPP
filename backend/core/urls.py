from django.urls import path, include
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
from django.http import HttpResponse

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)

def home(request):
    return HttpResponse("Welcome to Django Backend!")

urlpatterns = [
    path("home/", home),  # Example view
    path('', include(router.urls)),  # API routes
]