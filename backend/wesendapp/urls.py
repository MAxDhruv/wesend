from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SendWhatsappViewSet, ResellerViewSet, CampaignWiseViewSet, SendNewsViewSet, ContactUsViewSet, UserViewSet

router =DefaultRouter()
router.register(r'sendwhatsapp', SendWhatsappViewSet)
router.register(r'reseller', ResellerViewSet)
router.register(r'campaignwise', CampaignWiseViewSet)
router.register(r'news', SendNewsViewSet)
router.register(r'contactus', ContactUsViewSet)
router.register(r'user', UserViewSet)

urlpatterns = [
    path('', include(router.urls))
] 