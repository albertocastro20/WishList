from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from regalos import views

urlpatterns = [
    path("regalos/", views.RegaloList.as_view()),
    path("regalos/<int:pk>", views.RegaloDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)



