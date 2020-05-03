from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


def index(request):
    context = {
        'request_context': 'sample value for context'
    }
    return render(request, 'about/index.html', context)
