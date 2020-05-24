from django.db import models

OTHER = 'OTHER'
APP = 'APP'
TEO = 'TEO'
APPLIED = 'Applied'
THEORETICAL = 'Theoretical'

TYPE = (
    (TEO, THEORETICAL),
    (APP, APPLIED),
    (OTHER, OTHER)
)


class Event(models.Model):
    lecture_code = models.CharField(
        max_length=20,
        blank=True,
        primary_key=True,
    )
    title = models.CharField(
        max_length=300,
        blank=False,
        null=False,
    )
    start_date = models.DateTimeField(
        blank=False,
        null=False
    )
    end_date = models.DateTimeField(
        blank=False,
        null=False
    )
    presenter = models.CharField(
        max_length=150,
        blank=False,
        null=False
    )
    description = models.TextField(
        blank=False,
        null=False
    )
    type = models.CharField(
        blank=False,
        choices=TYPE,
        max_length=20
    )
