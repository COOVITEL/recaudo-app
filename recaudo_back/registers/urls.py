""" Module contein urls of the turn class """
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import HeaderFileView, HeaderLoteView, RegisterDetailView


router = routers.DefaultRouter()
router.register(r'headerFile', HeaderFileView, 'headerFile')
router.register(r'headerLote', HeaderLoteView, 'headerLote')
router.register(r'registerDetail', RegisterDetailView, 'registerDetail')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Registers API"))
]
