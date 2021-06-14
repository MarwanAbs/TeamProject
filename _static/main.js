'use strict';

var ScenarioIndex = 0;
var Scenariotimestart = Date.now();
'duration is only relvant for scenario and not for confidence'
var Scenarios = [
        {
        txt: 'יוסי חברך יצא לקניות בסופר הקרוב לביתו שבתל אביב, בכניסה לסופר השומר מדד את החום שלו ונתן לו להיכנס. כאשר יוסי הגיע לבחור את הירקות עמד לידו גבר שבדיוק הוריד את המסכה, כשחזר יוסי הביתה הוא שכח לרחוץ את ידיו. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'יוסי חברך השתתף במנגל עם חברים קרובים בראשון לציון ,חלקם אינם מחוסנים. אחד מחבריו הטובים שעבר את חיסונו הראשון בדיוק באותו יום וישב ליד יוסי השתעל . מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'יוסי חברך עובד בחברת הייטק גדולה במרכז תל אביב שחזרה לשגרה מלאה הודות לתוכנית "בחזרה לשגרה", והשתתף בפגישה מרובת משתתפים כשבחברה הקפידו על תו סגול אך לא על התו ירוק. כמה מהמשתתפים לא חשו בטוב יום למחרת. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'בעקבות פתיחת המסעדות יוסי חברך יצא לאכול במסעדה האהובה עליו בשדרות רוטשילד. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'הודות לפתיחת הקניונים יוסי חברך יצא לקנות בגדים. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'בעקבות פתיחת מגרשי הכדורסל  יוסי חברך חזר לשחק בכדורסל השכונתי. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'יוסי חברך יצא לקניות בסופר הקרוב לביתו בסינגפור, בכניסה לסופר השומר מדד את החום שלו ונתן לו להיכנס. כאשר יוסי הגיע לבחור את הירקות עמד לידו גבר שבדיוק הוריד את המסכה , כשחזר יוסי הביתה הוא שכח לרחוץ את ידיו. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'יוסי חברך השתתף במנגל עם חברים קרובים  שגרים באי סנטוזה הסמוך לסינגפור וחלקם אינם מחוסנים, אחד מחבריו הטובים שעבר את חיסונו הראשון בדיוק באותו יום וישב ליד יוסי והשתעל . מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'יוסי חברך עובד בחברת הייטק גדולה במרכז סינגפור שחזרה לשגרה מלאה הודות לתוכנית "בחזרה לשגרה", והשתתף בפגישה מרובת משתתפים כשבחברה הקפידו על תו סגול אך לא על התו ירוק. כמה מהמשתתפים לא חשו בטוב יום למחרת. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'בעקבות פתיחת המסעדות יוסי חברך יצא לאכול במסעדה האהובה עליו בשדרות רוטשילד. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'הודות לפתיחת הקניונים יוסי חברך יצא לקנות בגדים מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'בעקבות פתיחת מגרשי הכדורסל  יוסי חברך חזר לשחק בכדורסל השכונתי. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    }
];

function init()
{
renderQuestion(Scenarios[ScenarioIndex]);
var condition= document.querySelector('.run1').innerHTML;
document.getElementById('checktest').innerHTML=condition;

if (condition==='a')
{
var conditionaindex=[0,1,2,3,4,5];
conditionaindex = conditionaindex.sort(()=> Math.random() - 0.5);
document.getElementById('checktest1').innerHTML=conditionaindex;
}

if (condition==='b')
{
var conditionbindex=[6,7,8,9,10,11];
conditionbindex = conditionbindex.sort(()=> Math.random() - 0.5);
// document.getElementById('checktest1').innerHTML=conditionaindex;
document.getElementById('checktest1').innerHTML=conditionbindex;
}
}
'updating the likelihood rating on the user screen'
function updateAnswer(Input) {
    const Answer = document.querySelector('.answer');
    Answer.innerText = Input.value + '%';
}
'Save the liklihood raitng and RT'
function saveAnswer() {
    var currQuest = Scenarios[ScenarioIndex];
    var duration = Date.now() - Scenariotimestart;
    currQuest.duration = duration;
    const AnswerInput = document.querySelector('.answer-input');
    currQuest.answer = AnswerInput.value;
}

'moving to next question and saving confidence rating'
function nextQuest() {
    var currQuest = Scenarios[ScenarioIndex];
    //if there is no answer, show error message
    if (!currQuest.answer) {
        showErrorMsg();
        return;
    }
    if (ScenarioIndex === Scenarios.length - 1) {
        showNextPage();
        return;
    }
    var SelectedConfidence = document.querySelector('[name="answer"]:checked');
    currQuest.confidence = SelectedConfidence.value;
    ScenarioIndex++;
    renderQuestion(Scenarios[ScenarioIndex]);
    Scenariotimestart = Date.now();
}
//update new scenario and restarts all variables
function renderQuestion(quest) {
    var Scenario = document.querySelector('.scenario');
    Scenario.innerText = quest.txt;
    var Answer = document.querySelector('.answer');
    Answer.innerText = '50%';
    var AnswerInput = document.querySelector('.answer-input');
    AnswerInput.value = 50;
    var SelectedConfidence = document.querySelector('[name="answer"]:checked');
    if (SelectedConfidence) SelectedConfidence.checked = false;
    // check if error msg is shown, if it is - hide it!
    var Error = document.querySelector('.error-msg');
    if (!Error.classList.contains('hide')) Error.classList.add('hide');

}
// remove the hide class from error message class to make it visable
function showErrorMsg() {
    var Error = document.querySelector('.error-msg');
    Error.classList.remove('hide');
}

function showNextPage() {
    console.log('DONE');
}