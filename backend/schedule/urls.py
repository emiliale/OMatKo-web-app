from django.urls import path

from . import views

urlpatterns = [
    path(r'<str:category>/<int:weekday>/get', views.get_event, name='get'),
    path(r'<int:weekday>/get', views.get_event, name='get'),
    path(r'<str:category>/get', views.get_event, name='get'),
    path(r'get', views.get_event, name='get'),
]
