from rest_framework import serializers

from organizer.models import Organizer


class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizer
        fields = ('id', 'first_name', 'surname', 'email', 'phone', 'description', 'image')
