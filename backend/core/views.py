# core/views.py

from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer
from django.contrib.auth.models import User
from .serializers import UserSerializer
from django.shortcuts import render  # render fonksiyonunu import edin

# API View'ları
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Frontend View'ı
def frontend(request):
    return render(request, "index.html")  # React'in index.html dosyasını render et