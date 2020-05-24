from rest_framework import serializers

from schedule.models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'lecture_code', 'title', 'start_date', 'end_date', 'presenter', 'description', 'type')
