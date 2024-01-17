from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
# Create your views here.

def index(request):
    return HttpResponseRedirect(reverse("abctools:editor"))
def abctools(request):
    return render(request,"abctools/abctools.html")
def credits(request):
    return render(request,"abctools/credits.html")
def support(request):
    return render(request,"abctools/support.html")
def tipjars(request):
    return render(request,"abctools/tipjars.html")
def tunesources(request):
    return render(request,"abctools/tunesources.html")
def userguide(request):
    return render(request,"abctools/userguide.html")
