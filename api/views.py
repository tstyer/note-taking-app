from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework import generics 
from .serialisers import UserSerialiser
from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.
def index(request):
    return HttpResponse("Working test.")

class CreateUserView(generics.createAPIView):
    queryset = User.objects.all()
    Serialiser_class = User
    permission_classes = [AllowAny]
