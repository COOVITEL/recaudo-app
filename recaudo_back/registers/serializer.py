from rest_framework import serializers
from .models import HeaderFile, HeaderLote, RegisterDetail

class HeaderFileSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = HeaderFile
        fields = "__all__"

class HeaderLoteSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = HeaderLote
        fields = "__all__"
        
class RegisterDetailSerializer(serializers.ModelSerializer):
    """"""
    class Meta:
        model = RegisterDetail
        fields = "__all__"