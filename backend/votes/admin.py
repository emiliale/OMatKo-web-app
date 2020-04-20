from django.contrib import admin

from votes.models import Vote, VoteWeight, Voter

admin.site.register(Vote)
admin.site.register(VoteWeight)
admin.site.register(Voter)
