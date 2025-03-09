from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Admin panel
    path('admin/', admin.site.urls),

    # API routes
    path('', include('core.urls')),
    path('auth/', obtain_auth_token, name='auth-token'),

    # Serve React's index.html for all other routes
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

# Serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)