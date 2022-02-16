from django.contrib.auth.models import User
from django.db import models
from .enums import QuestionType


class Survey(models.Model):
    title = models.CharField(max_length=500)
    
    def __str__(self) -> str:
        return self.title


class Question(models.Model):
    survey = models.ForeignKey(Survey, related_name='questions', on_delete=models.DO_NOTHING, null=True, blank=True)
    title = models.CharField(max_length=500)
    question_type = models.CharField(max_length=50, choices=QuestionType.choices, default=QuestionType.TEXT)
    has_trigger = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        survey = self.survey if self.survey else 'N/A'
        return f"{survey} - {self.title} - {self.question_type}"


class Choice(models.Model):
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    
    def __str__(self) -> str:
        return f"{self.question} - {self.title}"


class Answer(models.Model):
    user = models.ForeignKey(User, related_name='answers', on_delete=models.CASCADE)
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    data = models.JSONField()


class Trigger(models.Model):
    question = models.ForeignKey(Question, related_name='sub_questions', on_delete=models.CASCADE)
    sub_question = models.ForeignKey(Question, related_name='questions', on_delete=models.CASCADE)
    trigger_value = models.JSONField()
