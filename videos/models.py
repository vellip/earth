import vimeo
from django.db import models
from random import randint

from earth_django.settings import VIMEO_CLIENT_ID
from earth_django.settings import VIMEO_SECRET


class VideosManager(models.Manager):
    def random(self):
        count = self.aggregate(count=models.Count('id'))['count']
        random_index = randint(0, count - 1)
        return self.all()[random_index]


class Video(models.Model):
    objects = VideosManager()
    video_id = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=250, blank=True)
    description = models.CharField(max_length=2000, blank=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        v = vimeo.VimeoClient(
            key=VIMEO_CLIENT_ID,
            secret=VIMEO_SECRET)

        token = v.load_client_credentials()
        video = v.get('/videos/{}'.format(self.video_id)).json()
        self.name = video['name']
        self.description = video['description']
