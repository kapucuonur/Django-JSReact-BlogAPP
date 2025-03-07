from django.urls import path, include
from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView
from django.http import HttpResponse
router = DefaultRouter()

router.register('articles', ArticleViewSet, basename='articles')  # 'artilces' -> 'articles'
router.register('users', UserViewSet)
def home(request):
    return HttpResponse("Welcome to Django Backend!")
urlpatterns = [
    path("", home),
    path('api/', include(router.urls)),
    path("", TemplateView.as_view(template_name="index.html")),

]