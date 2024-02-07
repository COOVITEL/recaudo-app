""" Module contein urls of the turn class """
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from registers import views


router = routers.DefaultRouter()
router.register(r'registers', views.RegisterView, 'registers')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Registers API"))
]