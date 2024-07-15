# Generated by Django 5.0.7 on 2024-07-10 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wesendapp', '0010_rename_creditreport_report'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='user_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='report',
            name='user_unique_id',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='report',
            name='username',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='report',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
