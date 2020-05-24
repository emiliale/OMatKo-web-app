from django.urls import path

from .views import (
    OrganizerListView,
    OrganizerDetailView,
)

urlpatterns = [
    path('', OrganizerListView.as_view()),
    path('<pk>', OrganizerDetailView.as_view()),
]
