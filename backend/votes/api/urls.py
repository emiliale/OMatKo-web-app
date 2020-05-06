from django.urls import path

from .views import (
    VoteListView,
    VoteCreateView,
    VoteDetailView,
    VoteUpdateView,
    VoteDeleteView,
    UserListView,
    UserDetailView
)

urlpatterns = [
    path('', VoteListView.as_view()),
    path('create/', VoteCreateView.as_view()),
    path('<pk>', VoteDetailView.as_view()),
    path('<pk>/update/', VoteUpdateView.as_view()),
    path('<pk>/delete/', VoteDeleteView.as_view()),
    path('users/', UserListView.as_view()),
    path('users/<int:pk>/', UserDetailView.as_view())
]
