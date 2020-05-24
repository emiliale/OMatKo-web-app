from django.urls import path

from .views import (
    SponsorListView,
    SponsorDetailView,
)

urlpatterns = [
    path('', SponsorListView.as_view()),
    path('<pk>', SponsorDetailView.as_view()),
]
