from django.conf.urls import url
from gpus.views import *


urlpatterns = [
    url(r"^rest/gpu_all$", show_all_gpus),
    url(r'^rest/gpu/$', take_gpu),
    url(r"^rest/add_gpu/$", add_gpu),
    url(r"^rest/del_gpu/$", del_gpu),
    url(r"^show_gpu/$", show_gpu)
    # url(r"^/gpu/manufacturer?query$"),
    # url(r"^/gpu$"),
    # url(r"^/gpu/:attribute$"),
]
