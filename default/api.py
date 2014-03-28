from django.shortcuts import RequestContext, render_to_response, redirect, HttpResponse, render
from django.core.urlresolvers import reverse
from django.contrib.auth.decorators import login_required


#@login_required
#def list_events(request, filter='current'):
#    if filter == 'all':
#        events = Event.objects.filter(Q(account=request.user)|Q(shared__id=request.user.id)).order_by("-date")
#    elif filter == 'archived':
#        events = Event.objects.filter(Q(account=request.user)|Q(shared__id=request.user.id)).filter(archived=True).order_by("-date")
#    else:
#        events = Event.objects.filter(Q(account=request.user)|Q(shared__id=request.user.id)).filter(archived=False).order_by("-date")
#    print events
#    return HttpResponse(status=200, content_type="application/json",content=render(request,'api/events.json',{'events':events}))