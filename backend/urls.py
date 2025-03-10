from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static
from .views import home  # Import the home view

urlpatterns = [
    # Admin panel
    path('admin/', admin.site.urls),

    # API routes
    path('api/', include('core.urls')),  # API routes under /api/
    path('auth/', obtain_auth_token, name='auth-token'),

    # Home route
    path('', home, name='home'),  # Add this line for the home view
]

# Serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)