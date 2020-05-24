from rest_framework import serializers

from sponsor.models import Sponsor


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ('id', 'sponsor_name', 'description', 'logo', 'type')
