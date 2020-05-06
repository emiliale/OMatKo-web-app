from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveAPIView
)
from votes.models import Vote
from django.contrib.auth.models import User
from .serializers import VoteSerializer, UserSerializer



class VoteListView(ListAPIView):
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    permission_classes = (permissions.AllowAny, )


class VoteCreateView(CreateAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    permission_classes = (permissions.AllowAny, )


class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
