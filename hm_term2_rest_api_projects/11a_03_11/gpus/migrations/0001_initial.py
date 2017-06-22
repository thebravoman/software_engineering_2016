# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-27 07:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GPU',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
                ('manufacturer', models.CharField(max_length=128)),
                ('GPU_manufacturer', models.CharField(max_length=128)),
                ('video_memory', models.IntegerField()),
                ('memory_clock', models.IntegerField()),
                ('core_speed', models.IntegerField()),
                ('boost_speed', models.IntegerField()),
                ('memory_type', models.CharField(max_length=128)),
                ('motherboard_connection', models.CharField(max_length=128)),
                ('power_supply', models.IntegerField()),
                ('picture', models.CharField(max_length=999999)),
                ('price', models.IntegerField()),
            ],
        ),
    ]