from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render

from functools import reduce
import operator

from gpus.forms import AddGPU
from gpus.models import GPU


def show_gpu(req):
    return render(req, 'show_gpu.html', locals())


def add_gpu(req):
    if req.method == 'POST':
        form = AddGPU(req.POST)
        if form.is_valid():
            GPU.objects.create(name=form.cleaned_data['name'],
                               manufacturer=form.cleaned_data['manufacturer'],
                               GPU_manufacturer=form.cleaned_data['GPU_manufacturer'],
                               video_memory=form.cleaned_data['video_memory'],
                               memory_clock=form.cleaned_data['memory_clock'],
                               core_speed=form.cleaned_data['core_speed'],
                               boost_speed=form.cleaned_data['boost_speed'],
                               memory_type=form.cleaned_data['memory_type'],
                               motherboard_connection=form.cleaned_data['motherboard_connection'],
                               power_supply=form.cleaned_data['power_supply'],
                               picture=form.cleaned_data['picture'],
                               price=form.cleaned_data['price'])
            object_added = True
    form = AddGPU()
    return render(req, "add_gpu.html", locals())


def show_all_gpus(req):
    if req.method == 'GET':
        data = serializers.serialize('json', GPU.objects.all())
        return HttpResponse(data, content_type="application/json")
    if req.method == 'DELETE':
        del_gpu(req)
        return HttpResponse(data, content_type="application/json")
    return HttpResponse(404)


def filter_gpu(req):
    filter_names = ('name', 'manufacturer', 'GPU_manufacturer', 'video_memory',
                    'memory_clock', 'core_speed', 'boost_speed', 'memory_type',
                    'motherboard_connection', 'power_supply', 'picture', 'price')

    queryset = GPU.objects.all(); 
    filter_clauses = [Q((filter,req.GET[filter]))
                      for filter in filter_names
                      if req.GET.get(filter)]

    if filter_clauses:
        queryset = queryset.filter(reduce(operator.and_, filter_clauses))
    return queryset


def take_gpu(req):
    if req.method == 'GET':
        queryset = filter_gpu(req)
        return HttpResponse(serializers.serialize('json', queryset), content_type="application/json")
    return HttpResponse(404)


@csrf_exempt
def del_gpu(req):
    if req.method == 'DELETE':
        queryset = filter_gpu(req)
        queryset.delete()
        return HttpResponse(200)
    return HttpResponse(404)