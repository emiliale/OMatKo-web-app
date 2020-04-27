from django.urls import path

from .views import (
    VoteListView,
)

urlpatterns = [
    path('', VoteListView.as_view())
]
