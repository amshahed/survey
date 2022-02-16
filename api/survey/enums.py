from django.db import models

class QuestionType(models.TextChoices):
    TEXT = 'TEXT', 'Text'
    NUMBER = 'NUMBER', 'Number'
    BOOLEAN = 'BOOLEAN', 'Boolean'
    DROPDOWN = 'DROPDOWN', 'Dropdown'
    CHECKBOX = 'CHECKBOX', 'Checkbox'
