from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .models import Vote


def index(request):
    choice_list = Vote.objects.order_by('-lectureCode')[:5]
    context = {'choice_list': choice_list}
    return render(request, 'poll/index.html', context)

def detail(request, vote_id):
    vote = get_object_or_404(Vote, pk=vote_id)
    return render(request, 'poll/detail.html', {'vote': vote})

def vote(request, vote_id):
    vote = get_object_or_404(Vote, pk=vote_id)
    try:
        selected_choice = vote.choice_set.get(pk=request.POST['vote'])
    except (KeyError, Vote.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))
