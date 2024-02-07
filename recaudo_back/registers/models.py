from django.db import models

class Register(models.Model):
    """"""
    encabezadoArchivo = models.CharField(max_length=162)
    encabezadoLote = models.CharField(max_length=162)
    registroDetalle = models.CharField(max_length=162)
    fecha = models.DateField()
    
    
def __str__(self):
    """"""
    return f"Registro {self.fecha}"
