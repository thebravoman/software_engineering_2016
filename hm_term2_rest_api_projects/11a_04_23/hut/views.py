from rest_framework import serializers, viewsets
from django.template.response import TemplateResponse
from django.shortcuts import redirect

from hut.models import Huts
from hut.forms import AddHutForm


def huts(request):
    return TemplateResponse(request, 'huts.html', {})


def home(request):
    return TemplateResponse(request, 'home.html', {})


def hut(request, hutname):
    return TemplateResponse(request, 'hut.html', {"hutname": hutname})


def add(request):
    return TemplateResponse(request, 'add.html', {"form": AddHutForm()})


def add_form(request):
    form = AddHutForm(request.POST, request.FILES)
    if form.is_valid():
        form.save()
        return redirect('http://localhost:8000/huts')


def huts_page(request, page):
    return TemplateResponse(request, 'hut_page.html', {"page": page})


def update(request, hutname):
    hut = Huts.objects.filter(hutname__icontains=hutname).first()
    form = AddHutForm(initial={'hutname': hut.hutname,
                               'image': hut.image,
                               'altitude': hut.altitude,
                               'mountain': hut.mountain,
                               'people_capacity': hut.people_capacity,
                               'email': hut.email,
                               'phone': hut.phone})
    return TemplateResponse(request, 'update.html', {"form": form})


def update_form(request):
    form = AddHutForm(request.POST, request.FILES)
    if form.is_valid():
        hut = Huts.objects\
                  .filter(hutname__icontains=form.cleaned_data['hutname'])\
                  .first()
        print(hut.hutname)
        hut.image = form.cleaned_data['image']
        hut.altitude = form.cleaned_data['altitude']
        hut.mountain = form.cleaned_data['mountain']
        hut.people_capacity = form.cleaned_data['people_capacity']
        hut.email = form.cleaned_data['email']
        hut.image = form.cleaned_data['image']
        hut.phone = form.cleaned_data['phone']
        hut.save()
        return redirect('http://localhost:8000/huts')


def delete(request):
    return TemplateResponse(request, 'delete.html', {})


# Serializers define the API representation.
class HutsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Huts
        fields = '__all__'


# ViewSets define the view behavior.
class HutsViewSet(viewsets.ModelViewSet):
    queryset = Huts.objects.all()
    serializer_class = HutsSerializer
    lookup_field = 'hutname__icontains'
    pagination_class = None
    # paginate_by = 3


class HutViewSet(viewsets.ModelViewSet):
    queryset = Huts.objects.all()
    serializer_class = HutsSerializer
