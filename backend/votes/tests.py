from django.test import TestCase
from rest_framework.authtoken.models import Token
from schedule.models import Event, TEO
from votes.models import Vote
from django.contrib.auth.models import User
from rest_framework import status
from django.test import Client
from datetime import datetime



ASCII = 'ascii'
TITLE_VALUE = 'Title 1'
DESCRIPTION_VALUE = 'Description 1'
PRESENTER_VALUE = 'Presenter 1'
LECTURE_CODE_VALUE = 'lecture1'
VOTER_CODE_VALUE = 'VOTER_CODE'
NOT_EXISTING_USER = 'XYZ'
NOT_EXISTING_LECTURE = 'XYZ'


class CreateVoteTest(TestCase):
    def test_create_vote(self):
        self.credentials = {
            'username': 'testuser',
            'password': 'secret'}
        User.objects.create_user(**self.credentials)
        token = Token.objects.create(user=User.objects.get(username='testuser'))
        Event.objects.create(
            lecture_code=LECTURE_CODE_VALUE,
            title=TITLE_VALUE,
            start_date=datetime(2019, 1, 1, 12, 0, 0),
            end_date=datetime(2019, 1, 1, 13, 0, 0),
            presenter=PRESENTER_VALUE,
            description=DESCRIPTION_VALUE,
            type=TEO
        )
        response = self.client.post('http://127.0.0.1:8000/apiVote/create/', json= {
                'lecture': Event.objects.get(lecture_code=LECTURE_CODE_VALUE),
                'content_vote': 1,
                'presentation_vote': 1
                },
                headers= { 'Token ': token })

        self.assertTrue(response.status_code, status.HTTP_200_OK)


class LectureNotFoundTest(TestCase):
    def test_create_vote(self):
        self.credentials = {
            'username': 'testuser',
            'password': 'secret'}
        User.objects.create_user(**self.credentials)
        token = Token.objects.create(user=User.objects.get(username='testuser'))
        Event.objects.create(
            lecture_code=LECTURE_CODE_VALUE,
            title=TITLE_VALUE,
            start_date=datetime(2019, 1, 1, 12, 0, 0),
            end_date=datetime(2019, 1, 1, 13, 0, 0),
            presenter=PRESENTER_VALUE,
            description=DESCRIPTION_VALUE,
            type=TEO
        )
        response = self.client.post('http://127.0.0.1:8000/apiVote/create/', json= {
                'lecture': 'lecture2',
                'content_vote': 1,
                'presentation_vote': 1
                },
                headers= { 'Token ': token })

        self.assertTrue(response.status_code, status.HTTP_400_BAD_REQUEST)



class VoteAlreadyExistsTest(TestCase):
    def test_create_vote(self):
        self.credentials = {
            'username': 'testuser',
            'password': 'secret'}
        User.objects.create_user(**self.credentials)
        token = Token.objects.create(user=User.objects.get(username='testuser'))
        Event.objects.create(
            lecture_code=LECTURE_CODE_VALUE,
            title=TITLE_VALUE,
            start_date=datetime(2019, 1, 1, 12, 0, 0),
            end_date=datetime(2019, 1, 1, 13, 0, 0),
            presenter=PRESENTER_VALUE,
            description=DESCRIPTION_VALUE,
            type=TEO
        )

        Vote.objects.create(
            user=User.objects.get(username='testuser'),
            lecture=Event.objects.get(lecture_code=LECTURE_CODE_VALUE),
            content_vote=1,
            presentation_vote=1
        )

        response = self.client.post('http://127.0.0.1:8000/apiVote/create/', json= {
                'lecture': Event.objects.get(lecture_code=LECTURE_CODE_VALUE),
                'content_vote': 1,
                'presentation_vote': 1
                },
                headers= { 'Token ': token })

        self.assertTrue(response.status_code, status.HTTP_409_CONFLICT )
