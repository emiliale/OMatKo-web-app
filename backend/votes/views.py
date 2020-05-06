from django.db import IntegrityError
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event
from .models import Vote, Voter, VoteWeight, PRESENTATION, CONTENT

VOTERS_CREATED = 'Voters created!'
CAN_T_CREATE_ACCOUNTS = "Can't create accounts!"
VOTE_ADDED = "Vote added!"
VOTE_ALREADY_EXISTS = "Vote for this lecture already exists!"
LECTURE_ID_NOT_FOUND = "Lecture id not found!"
USER_ID_NOT_FOUND = "User id not found!"
