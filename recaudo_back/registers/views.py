from rest_framework import viewsets
from .serializer import HeaderFileSerializer, HeaderLoteSerializer, RegisterDetailSerializer
from .models import HeaderFile, HeaderLote, RegisterDetail
from rest_framework.permissions import IsAuthenticated

class HeaderFileView(viewsets.ModelViewSet):
    """ This class created a view of the objects created for teh turn class"""
    #permission_classes = [IsAuthenticated]
    serializer_class = HeaderFileSerializer
    queryset = HeaderFile.objects.all()

class HeaderLoteView(viewsets.ModelViewSet):
    """ This class created a view of the objects created for teh turn class"""
    #permission_classes = [IsAuthenticated]
    serializer_class = HeaderLoteSerializer
    queryset = HeaderLote.objects.all()

class RegisterDetailView(viewsets.ModelViewSet):
    """ This class created a view of the objects created for teh turn class"""
    #permission_classes = [IsAuthenticated]
    serializer_class = RegisterDetailSerializer
    queryset = RegisterDetail.objects.all()
