from django.conf.urls import url, include
from rest_framework import routers

from hut import views


# Routers provide a way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'show_huts', views.HutsViewSet)
router.register(r'show_hut', views.HutViewSet)
# urlpatterns = router.urls

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^$', views.home),
    url(r'^', include(router.urls)),
    url(r'^home$', views.home),
    url(r'^huts$', views.huts),
    url(r'^huts/page=(?P<page>[0-9]+)$', views.huts_page),
    url(r'^huts/add$', views.add),
    url(r'^add$', views.add_form),
    url(r'^huts/update/(?P<hutname>[A-Za-z0-9]+)$', views.update),
    url(r'^huts/delete$', views.delete),
    url(r'^update$', views.update_form),
    url(r'^huts/(?P<hutname>[A-Za-z0-9]+)$', views.hut),
    url(r'^api/', include('rest_framework.urls', namespace='rest_framework')),
]
