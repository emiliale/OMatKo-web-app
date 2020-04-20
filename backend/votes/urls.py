from django.urls import path
from . import views

urlpatterns = [
    path(
        r'<str:user_id>/'
        r'<str:lecture_id>/'
        r'<int:presentation_rate>/'
        r'<int:content_rate>',
        views.add_vote,
        name='post'
    ),
    path(
        r'<int:number_of_voters>',
        views.add_voters,
        name='post'
    )
]
