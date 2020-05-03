from django.db import models
from schedule.models import Event
from django.contrib.auth.models import User

CONTENT = 'CONTENT'
PRESENTATION = 'PRESENTATION'
VOTES = [(i, i) for i in range(1, 6)]
VOTE_TYPE = (
    (CONTENT, CONTENT),
    (PRESENTATION, PRESENTATION)
)


class Voter(models.Model):
    code = models.CharField(
        max_length=20,
        blank=False,
        null=False,
        primary_key=True
    )


class Vote(models.Model):
    user = models.ForeignKey(
        User,
        models.CASCADE,
        blank=False,
        null=False
    )
    lecture = models.ForeignKey(
        Event,
        models.CASCADE,
        blank=False,
        null=False
    )
    content_vote = models.IntegerField(
        blank=False,
        null=False,
        choices=VOTES
    )
    presentation_vote = models.IntegerField(
        blank=False,
        null=False,
        choices=VOTES
    )

    class Meta:
        unique_together = (('user', 'lecture'),)


class VoteWeight(models.Model):
    name = models.CharField(
        max_length=20,
        blank=False,
        null=False,
        choices=VOTE_TYPE,
        primary_key=True
    )
    value = models.FloatField(
        blank=False,
        null=False
    )
