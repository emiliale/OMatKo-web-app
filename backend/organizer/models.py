from django.db import models


class Organizer(models.Model):
    first_name = models.CharField(
            max_length=30,
    )
    surname = models.CharField(
            max_length=20,
    )
    email = models.EmailField(
            max_length=254
    )
    phone = models.CharField(
            max_length=20,
    )
    description = models.TextField(
            blank=False,
            null=False
    )
    image = models.CharField(
            max_length=300,
    )
