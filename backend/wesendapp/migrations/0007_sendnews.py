# Generated by Django 5.0.7 on 2024-07-09 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wesendapp', '0006_alter_campaignwise_created_by_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SendNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
