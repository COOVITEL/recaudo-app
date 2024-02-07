from django.db import models
    
class HeaderFile(models.Model):
    """"""
    encabezadoArchivo = models.CharField(max_length=162, unique=True)
    fecha = models.DateField()
    
class HeaderLote(models.Model):
    """"""
    encabezadoArchivo = models.ForeignKey(HeaderFile, on_delete=models.CASCADE)
    encabezadoLote = models.CharField(max_length=162, unique=True)

class RegisterDetail(models.Model):
    """"""
    encabezadoLote = models.ForeignKey(HeaderLote, on_delete=models.CASCADE)
    registroDetalle = models.CharField(max_length=162)
