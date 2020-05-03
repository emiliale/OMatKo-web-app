from django.urls import path

from .views import (
    VoteListView,
    VoteCreateView,

)

urlpatterns = [
    path('', VoteListView.as_view()),
    path('create/', VoteCreateView.as_view())

]
