from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView
)
from votes.models import Vote
from .serializers import VoteSerializer


class VoteListView(ListAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    permission_classes = (permissions.AllowAny, )
