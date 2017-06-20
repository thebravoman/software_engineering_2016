from django import forms


class AddGPU(forms.Form):
    name                    = forms.CharField(max_length=128, label="Name:")
    manufacturer            = forms.CharField(max_length=128, label="Manufacturer:")
    GPU_manufacturer        = forms.CharField(max_length=128, label="GPU Manufacturer:")
    video_memory            = forms.IntegerField(label="Video Memory:")
    memory_clock            = forms.IntegerField(label="Memory Clock speed:")
    core_speed              = forms.IntegerField(label="Core speed:")
    boost_speed             = forms.IntegerField(label="Boost speed")
    memory_type             = forms.CharField(max_length=128, label="Memory Type")
    motherboard_connection  = forms.CharField(max_length=128, label="Motherboard Connection type:")
    power_supply            = forms.IntegerField(label="Power supply: (W)")
    picture                 = forms.CharField(max_length=999999, label="URL to a picture:")
    price                   = forms.IntegerField(label="Price:")
