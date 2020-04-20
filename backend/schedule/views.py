from django.shortcuts import render
from django.http import JsonResponse
from .models import Event
from .serializers import EventSerializer


def get_event(request, category=None, weekday=None):
    objects = Event.objects.all()

    if category is not None:
        objects = objects.filter(type=category)

    if weekday is not None:
        weekday += 1
        objects = objects.filter(start_date__week_day=weekday)

    serializer = EventSerializer(objects, many=True)

    return JsonResponse(serializer.data, safe=False)
