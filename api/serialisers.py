from django.contrib.auth.models import User
from rest_framework import import serialisers

class UserSerialiser(serialisers.ModelSerialisers):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user