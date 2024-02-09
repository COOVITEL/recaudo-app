from django.db import models
    
class RegistersRecaudos(models.Model):
    """"""
    encabezadoArchivo = models.CharField(max_length=162)
    encabezadoLote = models.CharField(max_length=162)
    registroDetalle = models.CharField(max_length=162)
    fecha = models.DateField()