from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect
import json

@csrf_exempt
def send_email(request):
	if request.method == 'POST':
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		message = body['message']
		subject = body['subject']
		from_email = body['email']


		send_mail(subject,
		 message,
		 from_email,
		 ['utils.development@gmail.com'])
	return HttpResponse('Message sent')
