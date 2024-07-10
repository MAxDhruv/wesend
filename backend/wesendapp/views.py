from rest_framework import viewsets
from .models import SendWhatsapp, Reseller, CampaignWise, SendNews, ContactUs, User, Report
from .serializers import SendWhatsappSerializer, ResellerSerializer, CampaignWiseSerializer, SendNewsSerializer, ContactUsSerializer, UserSerializer, ReportSerializer


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

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ReportViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = ReportSerializer
