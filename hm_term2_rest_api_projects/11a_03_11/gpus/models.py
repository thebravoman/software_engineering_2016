from django.db import models

# Create your models here.


class GPU(models.Model):
    name                    = models.CharField(max_length=128)
    manufacturer            = models.CharField(max_length=128)
    GPU_manufacturer        = models.CharField(max_length=128)
    video_memory            = models.IntegerField()
    memory_clock            = models.IntegerField()
    core_speed              = models.IntegerField()
    boost_speed             = models.IntegerField()
    memory_type             = models.CharField(max_length=128)
    motherboard_connection  = models.CharField(max_length=128)
    power_supply            = models.IntegerField()
    picture                 = models.CharField(max_length=999999)
    price                   = models.IntegerField()