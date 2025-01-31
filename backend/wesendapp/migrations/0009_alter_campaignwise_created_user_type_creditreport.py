# Generated by Django 5.0.7 on 2024-07-10 10:15

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wesendapp', '0008_contactus_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaignwise',
            name='created_user_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='CreditReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('no_of_sms', models.IntegerField(blank=True, null=True)),
                ('per_sms_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('old_credit', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('total_credit', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('tax_status', models.BooleanField(blank=True, choices=[(True, 'Yes'), (False, 'No')], null=True)),
                ('tax_percentage', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('tax_amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('txn_type', models.CharField(blank=True, choices=[('credit', 'Credit'), ('debit', 'Debit')], max_length=6, null=True)),
                ('total_amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('created_by', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('created_user_type', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='wesendapp.user')),
            ],
        ),
    ]
