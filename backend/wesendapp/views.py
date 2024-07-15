from rest_framework import viewsets
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import login, get_user_model
from .models import SendWhatsapp, Reseller, CampaignWise, SendNews, ContactUs, Users, Report
from .serializers import SendWhatsappSerializer, ResellerSerializer, CampaignWiseSerializer, SendNewsSerializer, ContactUsSerializer, ReportSerializer, UserRegistrationSerializer, UserDetailsSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserRegistrationView(generics.CreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UserRegistrationSerializer

class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserDetailsSerializer

class SendWhatsappViewSet(viewsets.ModelViewSet):
    queryset = SendWhatsapp.objects.all()
    serializer_class = SendWhatsappSerializer

class ResellerViewSet(viewsets.ModelViewSet):
    queryset = Reseller.objects.all()
    serializer_class = ResellerSerializer

class CampaignWiseViewSet(viewsets.ModelViewSet):
    queryset = CampaignWise.objects.all()
    serializer_class = CampaignWiseSerializer

class SendNewsViewSet(viewsets.ModelViewSet):
    queryset = SendNews.objects.all()
    serializer_class = SendNewsSerializer

class ContactUsViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

class ReportViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = ReportSerializer
