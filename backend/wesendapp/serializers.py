from rest_framework import serializers
from .models import SendWhatsapp, Reseller, CampaignWise, SendNews, ContactUs, Users, Report
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.password_validation import validate_password

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

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'

# user model with password resets and profile
# User = get_user_model()
class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Users
        fields = ['name', 'email', 'mobile', 'profile_pic', 'username', 'company', 'status', 'password']

    def create(self, validated_data):
        user = Users.objects.create_user(
            email=validated_data['email', ''],
            name=validated_data.get('name', None),
            mobile=validated_data.get('mobile', ''),
            profile_pic=validated_data.get('profile_pic', None),
            username=validated_data.get('username', ''),
            company=validated_data.get('company', ''),
            status=validated_data.get('status', 'Active'),
            password=validated_data['password'],
        )
        return user

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        # fields = '__all__'
        fields = ['id', 'name', 'email', 'mobile', 'profile_pic', 'username', 'company', 'status', 'password']

