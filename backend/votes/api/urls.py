from django.urls import path

from .views import (
    VoteListView,
    VoteCreateView,
    UserListView,
    UserDetailView
)

urlpatterns = [
    path('', VoteListView.as_view()),
    path('create/', VoteCreateView.as_view()),
    path('users/', UserListView.as_view()),
    path('users/<int:pk>/', UserDetailView.as_view()),
]
