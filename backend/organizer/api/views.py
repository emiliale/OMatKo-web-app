from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from organizer.models import Organizer
from .serializers import OrganizerSerializer


class OrganizerListView(ListAPIView):
    queryset = Organizer.objects.all()
    serializer_class = OrganizerSerializer
    permission_classes = (permissions.AllowAny, )


class OrganizerDetailView(RetrieveAPIView):
    queryset = Organizer.objects.all()
    serializer_class = OrganizerSerializer
    permission_classes = (permissions.AllowAny, )
