from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
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

class VoteDetailView(RetrieveAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    permission_classes = (permissions.AllowAny, )

class VoteUpdateView(UpdateAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    permission_classes = (permissions.IsAuthenticated, )

class VoteDeleteView(DestroyAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer
    permission_classes = (permissions.IsAuthenticated, )


class UserListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny, )


class UserDetailView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny, )
