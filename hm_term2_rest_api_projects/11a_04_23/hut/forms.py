from django import forms

from hut.models import Huts


class AddHutForm(forms.ModelForm):
    class Meta:
        model = Huts
        fields = '__all__'
        labels = {
            'hutname': '',
            'image': '',
            'altitude': '',
            'mountain': '',
            'people_capacity': '',
            'email': '',
            'phone': ''
        }
        widgets = {
            'hutname': forms.TextInput(attrs={'class': 'form-control',
                                              'placeholder': 'Hutname'}),
            'image': forms.FileInput(attrs={'class': 'form-control',
                                                     'placeholder': 'Image'}),
            'altitude': forms.NumberInput(attrs={'class': 'form-control',
                                                 'placeholder': 'Altitude'}),
            'mountain': forms.TextInput(attrs={'class': 'form-control',
                                               'placeholder': 'Mountain'}),
            'people_capacity': forms.NumberInput(attrs={'class':
                                                        'form-control',
                                                        'placeholder':
                                                        'People capacity'}),
            'email': forms.TextInput(attrs={'class': 'form-control',
                                            'placeholder': 'Email'}),
            'phone': forms.TextInput(attrs={'class': 'form-control',
                                            'placeholder': 'Phone'})
        }
