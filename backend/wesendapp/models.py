from django.db import models
from django.contrib.auth.models import User

class SendWhatsapp(models.Model):
    headline = models.CharField(max_length=255, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    mobile_number = models.CharField(max_length=15, null=True, blank=True)
    number_count = models.IntegerField(null=True, blank=True)
    image1 = models.ImageField(upload_to='Files/images/', null=True, blank=True)
    image2 = models.ImageField(upload_to='Files/images/', null=True, blank=True)
    image3 = models.ImageField(upload_to='Files/images/', null=True, blank=True)
    image4 = models.ImageField(upload_to='Files/images/', null=True, blank=True)
    pdf_file = models.FileField(upload_to='Files/pdfs/', null=True, blank=True)
    video_file = models.FileField(upload_to='Files/videos/', null=True, blank=True)
    dp_image = models.ImageField(upload_to='Files/dp_images/', null=True, blank=True)
    reply_button1 = models.CharField(max_length=255, null=True, blank=True)
    reply_button2 = models.CharField(max_length=255, null=True, blank=True)
    call_to_action1 = models.URLField(null=True, blank=True)
    call_to_action2 = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.headline

class Reseller(models.Model):
    full_name = models.CharField(max_length=255, null=True, blank=True)
    email_id = models.EmailField(unique=True, null=True, blank=True)
    mobile = models.CharField(max_length=15, null=True, blank=True)
    profile_pic = models.ImageField(upload_to='Files/profile_pics/', null=True, blank=True)
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.full_name
    
class CampaignWise(models.Model):
    estimate_time = models.DurationField(null=True, blank=True)
    update_status = models.CharField(max_length=255, null=True, blank=True)
    unique_id = models.CharField(max_length=255, unique=True, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    rollback = models.CharField(max_length=255, null=True, blank=True)
    total_mobile_no = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    created_by = models.CharField(max_length=255, null=True, blank=True)
    created_user_type = models.ForeignKey(User, on_delete=models.CASCADE, related_name='campaigns', null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.unique_id


class SendNews(models.Model):
    heading = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.heading or ''
    
class ContactUs(models.Model):
    mobile_no = models.CharField(max_length=15, null=True, blank=True)
    email_id = models.EmailField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)


class User(models.Model):
    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
    ]

    fullname = models.CharField(max_length=255, null=True, blank=True)
    email_id = models.EmailField(null=True, blank=True)
    mobile = models.CharField(max_length=15, null=True, blank=True)
    profile_pic = models.ImageField(upload_to='profiles/', null=True, blank=True)
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, default='Active', null=True, blank=True)