var questionBank = [
{
    question : 'Which of this following Excel charts represnts only one value for each variable?',
    option : ['Function', 'Line', 'Pie', 'Bar'],
    answer :'Pie'   
},
{
    question : 'To see the document before the printout is taken use.......',
    option : ['Insert table', 'paste', 'Format printer', 'Print preview'],
    answer :'Print preview'   
},
{
    question : 'ALU works on the instruction and data held in the........',
    option : ['Notebook', 'Registers', 'Copy pad', 'None of these'],
    answer :'Registers'   
},
{
    question : 'To move data from one part of the document to another, following is used.....',
    option : ['Cut and paste', 'Copy and paste', 'Copy and Delete', 'Cut and Delete'],
    answer :'Cut and paste'   
},
{
    question : 'Another name for a pre-programmed formula in Excel is ..........',
    option : ['Range', 'Graph', 'Function', 'cell'],
    answer :'Function'   
},
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var previous= document.querySelector('.previous');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score=0;

    
function displayQuestion(){
   
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question "+(i+1)+' '+'of'+' '+questionBank.length;
}
function previousQuestion(){
    if(i<questionBank.length+1)
    {
        i=i-1;
        displayQuestion();
    }
}
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }}

previous.addEventListener('click',previousQuestion);

next.addEventListener('click',nextQuestion);

function calcScore(){
    if(innerHTML===questionBank[i].answer && score<questionBank.length)
    {
    score= score+1;
    document.getElementById('score');
    }
    else{
    document. getElementById (' score');
    }
    setTimeout (nextQuestion, 300);
    }
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none'
    }
}

displayQuestion();