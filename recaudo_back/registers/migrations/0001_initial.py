# Generated by Django 4.2.7 on 2024-02-07 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('encabezadoArchivo', models.CharField(max_length=162)),
                ('encabezadoLote', models.CharField(max_length=162)),
                ('registroDetalle', models.CharField(max_length=162)),
                ('fecha', models.DateField()),
            ],
        ),
    ]
