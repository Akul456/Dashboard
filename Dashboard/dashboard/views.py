from django.shortcuts import render
from django.http import JsonResponse
from .models import Post, Analytics

def get_posts(request):
    posts = Post.objects.all()
    data = [{'title': post.title, 'description': post.description, 'scheduled_at': post.scheduled_at} for post in posts]
    return JsonResponse(data, safe=False)
