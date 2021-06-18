from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants
import random



class Informedconsent(Page):
    form_model = 'player'
    form_fields = ['consent']
    def is_displayed(self):
        return self.round_number==1

    def error_message(self,values):
        print('answer is', values)
        if values['consent'] =='לא מסכים':
            return 'לצערנו אי אפשר להמשיך בניסוי אם אתה לא מסכים לתנאי המחקר, אם זה היה בטעות הינך מוזמן לשנות את התשובה או לעזוב את הניסוי, תודה.'

    def before_next_page(self):
        self.player.condition = random.choice(Constants.levels)

class Demographics(Page):
    form_model = 'player'
    form_fields = ['age', 'gender', 'residence', 'years_of_education']

    def is_displayed(self):
        return self.round_number == 1 and self.player.consent == 'מסכים'

class ConditionA_SmallDistance(Page):
    def is_displayed(self):
        return self.player.condition=='a'

class ConditionB_largeDistance(Page):
    def is_displayed(self):
        return self.player.condition=='b'

class Surveyloader(Page):
    timeout_seconds = 180
    def vars_for_template(self):
        self.player.condition
    def is_displayed(self):
        return True

    form_model = 'player'
    form_fields = ['Scenario_text1','Scenario_text2','Scenario_text3','Scenario_text4','Scenario_text5',
                   'Scenario_text6', 'like_rating1','like_rating2','like_rating3','like_rating4','like_rating5',
                   'like_rating6','RT1','RT2','RT3','RT4','RT5','RT6','conf_rating1','conf_rating2','conf_rating3',
                   'conf_rating4','conf_rating5','conf_rating6','Scenario_num1','Scenario_num2','Scenario_num3',
                   'Scenario_num4','Scenario_num5','Scenario_num6']


    def before_next_page(self):
        player = self.player
        timeout_happened = self.timeout_happened
        if timeout_happened:
            player.TimeOuted = True

class imc(Page):
    timeout_seconds = 180
    def is_displayed(self):
        return True
    form_model = 'player'
    form_fields = ['imc_scenario']
    

class CaptchaPage(Page):
    def is_displayed(self):
        return True
    
class Endpage(Page):
    def is_displayed(self):
        return True

page_sequence = [Informedconsent,Demographics,ConditionA_SmallDistance,ConditionB_largeDistance,
                 Surveyloader,imc,Endpage]
