from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import logging
logger = logging.getLogger(__name__)


@csrf_exempt
def index(request):

	if request.method == 'POST':
		subject = request.POST['subject']
		message = request.POST['message']
		from_email = request.POST['email']
		logger.debug(from_email)
		logger.debug('enything')

		send_mail(subject,
		 message,
		 from_email,
		 ['utils.development@gmail.com'])
	return render(request, 'app/index.html')
