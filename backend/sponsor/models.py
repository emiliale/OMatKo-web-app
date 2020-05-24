from django.db import models

SPON = 'SPON'
HON = 'HON'
MED = 'MED'
MEDIA = 'Media'
HONORARY = 'Honorary'
SPONSOR = 'Sponsor'

TYPE = (
    (HON, HONORARY),
    (MED, MEDIA),
    (SPON, SPONSOR)
)


class Sponsor(models.Model):
    sponsor_name = models.CharField(
        max_length=300,
    )
    description = models.TextField(
        blank=False,
        null=False
    )
    logo = models.CharField(
        max_length=300,
        blank=True,
    )
    type = models.CharField(
        blank=False,
        choices=TYPE,
        max_length=20
    )
