from rest_framework import serializers
from .models import SendWhatsapp, Reseller, CampaignWise, SendNews, ContactUs, User, Report

class SendWhatsappSerializer(serializers.ModelSerializer):
    class Meta:
        model = SendWhatsapp
        fields = '__all__'

class ResellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reseller
        fields = '__all__'

class CampaignWiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CampaignWise
        fields = '__all__'

class SendNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SendNews
        fields = '__all__'

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'