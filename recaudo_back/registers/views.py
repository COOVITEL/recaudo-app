from rest_framework import viewsets
from .serializer import RegisterSerializer
from .models import Register
from rest_framework.permissions import IsAuthenticated

class RegisterView(viewsets.ModelViewSet):
    """ This class created a view of the objects created for teh turn class"""
    #permission_classes = [IsAuthenticated]
    serializer_class = RegisterSerializer
    queryset = Register.objects.all()
