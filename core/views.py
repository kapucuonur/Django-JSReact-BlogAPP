from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer
from django.contrib.auth.models import User
from .serializers import UserSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer