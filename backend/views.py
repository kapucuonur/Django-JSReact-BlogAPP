from django.shortcuts import render

def home(request):
    return render(request, 'index.html')  # Ensure index.html is in your templates directory