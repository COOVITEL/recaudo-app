from rest_framework import viewsets
from .serializer import RegisterSerializer
from .models import RegistersRecaudos
from rest_framework.permissions import IsAuthenticated

class RegistersView(viewsets.ModelViewSet):
    """ This class created a view of the objects created for teh turn class"""
    #permission_classes = [IsAuthenticated]
    serializer_class = RegisterSerializer
    queryset = RegistersRecaudos.objects.all()


