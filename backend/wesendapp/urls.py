from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SendWhatsappViewSet, ResellerViewSet, CampaignWiseViewSet, SendNewsViewSet, ContactUsViewSet, UserViewSet, ReportViewSet

router =DefaultRouter()
router.register(r'sendwhatsapp', SendWhatsappViewSet)
router.register(r'reseller', ResellerViewSet)
router.register(r'campaignwise', CampaignWiseViewSet)
router.register(r'news', SendNewsViewSet)
router.register(r'contactus', ContactUsViewSet)
router.register(r'user', UserViewSet)
router.register(r'report', ReportViewSet, basename='report')

urlpatterns = [
    path('', include(router.urls))
] 