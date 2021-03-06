# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from main.models import EjCities
from api.serializers import CitySerializer
from rest_framework import status

# Create your views here.
def listCities(request):
    try:
        cities = EjCities.objects.all()
        if len(cities) > 0:
            citySerializer = CitySerializer(cities, many=True, context= {'request': request})
            data = {'bodyObject': citySerializer.data, 'result': 'ok', 'status':status.HTTP_200_OK }
            return data
        else:
            data = {'bodyObject':[], 'result': 'error','statusText': 'No existen Ciudades registradas','status':status.HTTP_200_OK }
            return  data
    except EjCities.DoesNotExist:
        data = {'bodyObject':[], 'result': 'error','statusText': 'Lo sentimos!! Ocurrio un error intentando mostrar las ciudades.','status':status.HTTP_200_OK }
        return  data
