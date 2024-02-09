from rest_framework import serializers
from .models import RegistersRecaudos

class RegisterSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = RegistersRecaudos
        fields = "__all__"
