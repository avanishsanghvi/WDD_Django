from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
import psycopg2
from psycopg2 import Error

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework import viewsets
 


 

class HomePageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'index.html', context=None)
 
 
class LinksPageView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'links.html', context=None)

# Create your views here.

@api_view(["GET"])
def getImages():
    try:
        # Connect to an existing database
        connection = psycopg2.connect(user="postgres",
                                  password="avanish",
                                  host="localhost",
                                  port="9876",
                                  database="wdd database")

        # Create a cursor to perform database operations
        cursor = connection.cursor()
        all_images_query = '''SELECT * FROM public."WDD database" ORDER BY "ID" ASC '''
        cursor.execute(all_images_query)
        connection.commit()

        records = cursor.fetchall()

        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")
        return JsonResponse({'records': records})

    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def CalcTest(x1):
    try:
        x=json.loads(x1.body)
        y=str(x*100)
        return JsonResponse("Result:"+y,safe=False)
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)