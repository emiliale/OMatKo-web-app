from rest_framework import serializers

from django.contrib.auth.models import User
from votes.models import Vote


class VoteSerializer(serializers.ModelSerializer):
    userName = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Vote
        fields = ['userName', 'lecture', 'content_vote', 'presentation_vote']


class UserSerializer(serializers.ModelSerializer):
    votes = serializers.PrimaryKeyRelatedField(many=True, queryset=Vote.objects.all())
    class Meta:
        model = User
        fields = ['id', 'username', 'votes']
        depth = 1
