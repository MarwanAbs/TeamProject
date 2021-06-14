from otree.api import (
    models,
    widgets,
    BaseConstants,
    BaseSubsession,
    BaseGroup,
    BasePlayer,
    Currency as c,
    currency_range,
)


author = 'Mar_Ab, Bthn_Lnk, Stv_Ston, Rut '

doc = """
This app is built as an academic course requirement
"""


class Constants(BaseConstants):
    name_in_url = 'selected_issues_project'
    players_per_group = None
    num_rounds = 1
    levels = ['a','b']


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    consent = models.StringField(choices=['מסכים', 'לא מסכים'])
    condition = models.StringField()
    gender = models.StringField(choices=['זכר', 'נקבה'])  # optional is entring choices[]
    age = models.IntegerField(min=18, max=30)  # optinal min/max values
    residence = models.StringField(blank=True, max_length=12)  # optional - blank means requrired, max_length=
    years_of_education = models.IntegerField(initial=3)
    Scenario_text1 = models.StringField()
    Scenario_text2 = models.StringField()
    Scenario_text3 = models.StringField()
    Scenario_text4 = models.StringField()
    Scenario_text5 = models.StringField()
    Scenario_text6 = models.StringField()
    like_rating1 = models.IntegerField()
    like_rating2 = models.IntegerField()
    like_rating3 = models.IntegerField()
    like_rating4 = models.IntegerField()
    like_rating5 = models.IntegerField()
    like_rating6 = models.IntegerField()
    RT1=models.IntegerField()
    RT1 = models.IntegerField()
    RT2 = models.IntegerField()
    RT3 = models.IntegerField()
    RT4 = models.IntegerField()
    RT5 = models.IntegerField()
    RT6 = models.IntegerField()
    conf_rating1 = models.IntegerField()
    conf_rating2 = models.IntegerField()
    conf_rating3 = models.IntegerField()
    conf_rating4 = models.IntegerField()
    conf_rating5 = models.IntegerField()
    conf_rating6 = models.IntegerField()
    TimeOuted = models.BooleanField(initial=False)
    imc_scenario = models.StringField()


