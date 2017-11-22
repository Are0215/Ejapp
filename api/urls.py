from django.conf.urls import url
from .views import (InscriptionsList, InscriptionDetails, ParentsList, BrothersList, UserAuth)

urlpatterns = [
    url(r'^inscriptionslist/$', InscriptionsList.as_view()),
    url(r'^apiauth/$', UserAuth.as_view()),
    url(r'^inscriptiondetails/(?P<pk>[0-9]+)$', InscriptionDetails.as_view(),name='inscription_details'),

    url(r'^parentlist/$', ParentsList.as_view(),name='parents_list'),
    url(r'^brotherslist/$', BrothersList.as_view(),name='brothers_list'),
]