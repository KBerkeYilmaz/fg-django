# Generated by Django 3.2.18 on 2023-04-01 05:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SliderImgs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sliderImg', models.ImageField(upload_to='slider_imgs/')),
            ],
        ),
    ]