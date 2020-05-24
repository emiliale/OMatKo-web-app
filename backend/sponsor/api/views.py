from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView
)
from sponsor.models import Sponsor
from .serializers import SponsorSerializer


class SponsorListView(ListAPIView):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
    permission_classes = (permissions.AllowAny, )


class SponsorDetailView(RetrieveAPIView):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
    permission_classes = (permissions.AllowAny, )
