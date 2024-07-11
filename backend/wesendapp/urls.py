from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SendWhatsappViewSet, ResellerViewSet, CampaignWiseViewSet, SendNewsViewSet, ContactUsViewSet, ReportViewSet, UserRegistrationView, UserDetailsViewSet

router =DefaultRouter()
router.register(r'sendwhatsapp', SendWhatsappViewSet)
router.register(r'reseller', ResellerViewSet)
router.register(r'campaignwise', CampaignWiseViewSet)
router.register(r'news', SendNewsViewSet)
router.register(r'contactus', ContactUsViewSet)
# router.register(r'user', UserViewSet)
router.register(r'report', ReportViewSet, basename='report')
router.register(r'userdetails', UserDetailsViewSet)
# router.register(r'login', UserLoginView)
# router.register(r'profile', UserProfileView)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegistrationView.as_view(), name='user-register'),
] 