from django.views import generic

from .models import Video


class RandomVideoView(generic.DetailView):
    template_name = 'random_video.html'

    def get_object(self, queryset=None):
        Video.objects.create(video_id='136938394')
        return Video.objects.random()
