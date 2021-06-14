'use strict';

var ScenarioIndex = 0;
 var answers=null;
var Scenariotimestart = Date.now();
var answers_list=[];
var text_list=[];
var RT_list=[];
var conf_rating=[];
// 'duration is only relevant for scenario and not for confidence';
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
        txt: 'בעקבות פתיחת המסעדות יוסי חברך יצא לאכול במסעדה האהובה עליו בצפון. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'הודות לפתיחת הקניונים יוסי חברך יצא לקנות בגדים בכיכר המדינה. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'בעקבות פתיחת מגרשי הכדורסל יוסי חברך חזר לשחק בכדורסל השכונתי. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
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
        txt: 'בעקבות פתיחת המסעדות יוסי חברך יצא לאכול במסעדה האהובה עליו במרכז סינגפור. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
        answer: null,
        duration: null,
        confidence: null
    },
    {
        txt: 'הודות לפתיחת הקניונים יוסי חברך יצא לקנות בגדים בקניון בלב העיר. מה הסיכוי שלאחר שבוע חברך יוסי אובחן כחולה קורונה?',
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

function init() {
    var condition = document.querySelector('.run1').innerHTML;
    // based on condition, randomize series of questions
    if (condition === 'a') Scenarios = shuffle(Scenarios.slice(0, 6));
    else Scenarios = shuffle(Scenarios.slice(6, 12));
    renderQuestion(Scenarios[ScenarioIndex]);
}

// 'updating the likelihood rating on the user screen';
function updateAnswer(Input) {
    const Answer = document.querySelector('.answer');
    Answer.innerText = Input.value + '%';
}

// 'Save the liklihood raitng and RT';
function saveAnswer() {
    var currQuest = Scenarios[ScenarioIndex];
    var duration = Date.now() - Scenariotimestart;
    currQuest.duration = duration;
    const AnswerInput = document.querySelector('.answer-input');
    currQuest.answer = AnswerInput.value;

    text_list.push(currQuest.txt);
    document.getElementById("list1").innerHTML=text_list;
    document.getElementById('Scenario_text1').value=text_list[0];
    document.getElementById('Scenario_text2').value=text_list[1];
    document.getElementById('Scenario_text3').value=text_list[2];
    document.getElementById('Scenario_text4').value=text_list[3];
    document.getElementById('Scenario_text5').value=text_list[4];
    document.getElementById('Scenario_text6').value=text_list[5];

    answers_list.push(currQuest.answer);
    document.getElementById("list").innerHTML=answers_list;
    document.getElementById('like_rating1').value=answers_list[0];
    document.getElementById('like_rating2').value=answers_list[1];
    document.getElementById('like_rating3').value=answers_list[2];
    document.getElementById('like_rating4').value=answers_list[3];
    document.getElementById('like_rating5').value=answers_list[4];
    document.getElementById('like_rating6').value=answers_list[5];

    RT_list.push(currQuest.duration);
    document.getElementById("list2").innerHTML=RT_list;
    document.getElementById('RT1').value=RT_list[0];
    document.getElementById('RT2').value=RT_list[1];
    document.getElementById('RT3').value=RT_list[2];
    document.getElementById('RT4').value=RT_list[3];
    document.getElementById('RT5').value=RT_list[4];
    document.getElementById('RT6').value=RT_list[5];
}

// 'moving to next question and saving confidence rating';
function nextQuest() {
    var currQuest = Scenarios[ScenarioIndex];
    var SelectedConfidence = document.querySelector('[name="answer"]:checked');
    currQuest.confidence = SelectedConfidence.value;
    conf_rating.push(currQuest.confidence);
    document.getElementById('conf_rating1').value=conf_rating[0];
    document.getElementById('conf_rating2').value=conf_rating[1];
    document.getElementById('conf_rating3').value=conf_rating[2];
    document.getElementById('conf_rating4').value=conf_rating[3];
    document.getElementById('conf_rating5').value=conf_rating[4];
    document.getElementById('conf_rating6').value=conf_rating[5];
    //if there is no answer, show error message
    // add if confidence not checked
    if (!currQuest.answer) {
        showErrorMsg();
        return;
    }
    if (ScenarioIndex === Scenarios.length - 1) {
        showNextPage();
        return;
    }
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
    alert("סיימת שלב זה נא לחץ על NEXT");
}
// Get an array and shuffle it
function shuffle(items) {
    var randIdx, keep, i;
    for (i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, items.length - 1);

        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


