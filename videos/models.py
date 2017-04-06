from django.db import models
from random import randint


class VideosManager(models.Manager):
    def random(self):
        count = self.aggregate(count=models.Count('id'))['count']
        random_index = randint(0, count - 1)
        return self.all()[random_index]


class Video(models.Model):
    objects = VideosManager()
    video_id = models.CharField(max_length=20)


