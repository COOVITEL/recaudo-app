""" Module contein urls of the turn class """
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import RegistersView


router = routers.DefaultRouter()
router.register(r'registers', RegistersView, 'registers')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Registers API"))
]
