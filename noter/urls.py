"""
URL configuration for noter project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views import index as index_views
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

#All the paths below, except for the last, are related to authentication. The last diects any other to the other URL file. 
urlpatterns = [
    path('hello/', index_views, name='index'),
    path('admin/', admin.site.urls),
    path('api/user/register/', CreateUserView.as_view(), name="Register" ),
    path('api/token/', TokenObtainPairView.as_view(), name="Get_token"),
    path('api/token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('api-auth/', include("rest_framework.urls")),
    path('api/', include("api.urls")) #This is created to any other links the user types with API forward this to the file specified.
]
