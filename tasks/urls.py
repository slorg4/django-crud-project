from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

# API versionizing
# Creates the followed methos automatically:
# GET, POST, PUT, DELETE
router = routers.DefaultRouter()
router.register(r"task-list", views.TaskView, "task-list")

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Tasks API")),
]