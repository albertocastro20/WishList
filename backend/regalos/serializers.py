from rest_framework import serializers
from regalos.models import Regalos
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class RegaloSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Regalos
        fields = '__all__'
        read_only_fields = ['user']
    
class UserSerializer(serializers.ModelSerializer):

    token = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'token']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
    def get_token(self, obj):
        token, created = Token.objects.get_or_create(user = obj)
        return token.key