from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Regalos(models.Model):
    CATEGORIAS = {
        "G":  "Gifts",
        "D": "Dates",
        "T": "Travels",
    }
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField()
    imagen = models.URLField()
    descripcion = models.TextField()
    link = models.URLField()
    costo = models.DecimalField(max_digits=8, decimal_places=2)
    categoria = models.CharField(choices=CATEGORIAS)
    comprado = models.BooleanField(default=False)



