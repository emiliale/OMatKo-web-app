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


@api_view(['POST'])
def add_vote(request, user_id, lecture_id, presentation_rate, content_rate):
    try:
        user = Voter.objects.get(code=user_id)
    except Voter.DoesNotExist:
        return Response(USER_ID_NOT_FOUND, status=status.HTTP_400_BAD_REQUEST)

    try:
        lecture = Event.objects.get(lecture_code=lecture_id)
    except Event.DoesNotExist:
        return Response(
            LECTURE_ID_NOT_FOUND,
            status=status.HTTP_400_BAD_REQUEST
        )

    presentation_weight = VoteWeight.objects.get(name=PRESENTATION)
    content_weight = VoteWeight.objects.get(name=CONTENT)

    try:
        Vote.objects.create(
            voter=user,
            lecture=lecture,
            content_vote=content_weight.value * content_rate,
            presentation_vote=presentation_weight.value * presentation_rate
        )
    except IntegrityError:
        return Response(VOTE_ALREADY_EXISTS, status=status.HTTP_409_CONFLICT)

    return Response(VOTE_ADDED, status.HTTP_201_CREATED)


def generate_voter_code():
    code = generate_code()
    event = Voter.objects.get(code=code)
    while not event:
        code = generate_code()
        event = Voter.objects.get(code=code)

    return code


@api_view(['POST'])
def add_voters(request, number_of_voters):
    try:
        Voter.objects.bulk_create(
            [Voter(code=generate_code()) for i in range(0, number_of_voters)]
        )
    except Exception:
        return Response(
            CAN_T_CREATE_ACCOUNTS,
            status.HTTP_500_INTERNAL_SERVER_ERROR
        )

    return Response(VOTERS_CREATED, status.HTTP_201_CREATED)


    def generate_code():
    numbers = [int(num) for num in np.linspace(48, 57, num=10)]

    lowercase = [int(num) for num in np.linspace(65, 72, num=8)] + \
                [int(num) for num in np.linspace(74, 90, num=17)]

    uppercase = [int(num) for num in np.linspace(97, 107, num=11)] +\
                [int(num) for num in np.linspace(109, 122, num=14)]

    chr_numbers = numbers + lowercase + uppercase

    return ''.join([chr(chr_numbers[randint(0, 59)]) for i in range(0, 20)])
