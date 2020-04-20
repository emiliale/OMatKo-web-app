from django.db import models

# Create your models here.
class Vote(models.Model):
    lectureCode = models.CharField(max_length=200)
    contentRate = models.IntegerField(default=0)
    presentationRate = models.IntegerField(default=0)

    def __str__(self):
        return self.lectureCode
