from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

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
    credit = models.IntegerField(max_length=30, null=True, blank=True)
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
    created_user_type = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
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

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email_id, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email_id, password, **extra_fields)


class Users(AbstractBaseUser, PermissionsMixin):
    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
    ]

    name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(unique=True, null=True, blank=True)
    mobile = models.CharField(max_length=15, null=True, blank=True)
    profile_pic = models.ImageField(upload_to='Files/profiles/', null=True, blank=True)
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    company = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, default='Active')
    password = models.CharField(max_length=255, null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'  # Corrected to 'email' instead of 'email_id'
    REQUIRED_FIELDS = []

     # Custom related names to avoid clashes with auth.User model
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='wesendapp_user_groups',
        blank=True,
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='wesendapp_user_permissions',
        blank=True,
        verbose_name='user permissions',
    )



class Report(models.Model):
    id = models.AutoField(primary_key=True)
    user_unique_id = models.CharField(max_length=255, null=True, blank=True) 
    user_type = models.CharField(max_length=255, null=True, blank=True)
    username = models.CharField(max_length=255, null=True, blank=True)
    no_of_sms = models.IntegerField(null=True, blank=True)
    per_sms_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    old_credit = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    total_credit = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    tax_status = models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], null=True, blank=True)
    tax_percentage = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    tax_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    txn_type = models.CharField(max_length=6, choices=[('credit', 'Credit'), ('debit', 'Debit')], null=True, blank=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_by = models.CharField(max_length=255, null=True, blank=True)
    created_user_type = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)