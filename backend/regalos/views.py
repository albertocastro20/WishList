
from regalos.models import Regalos
from regalos.serializers import RegaloSerializer, UserSerializer
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

class RegaloList(generics.ListCreateAPIView):
    #queryset = Regalos.objects.all()
    serializer_class = RegaloSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Regalos.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class RegaloDetail(generics.RetrieveUpdateDestroyAPIView):
    #queryset = Regalos.objects.all()
    serializer_class = RegaloSerializer
    
    def get_queryset(self):
        return Regalos.objects.filter(user=self.request.user)
    
class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
