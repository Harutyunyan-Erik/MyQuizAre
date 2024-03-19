import { text, defaultLanguage } from './constants.js';
import { valueSetter, tagCreator } from './helpers.js';
import { questions } from './db.js';

const warningElement = document.getElementById('warning');
const warrningText = text[defaultLanguage].warrningText;

document.getElementById("login_btn").innerHTML = text[defaultLanguage].login;
document.getElementById("quiz_id").innerHTML = text[defaultLanguage].quizes;
document.getElementById("todo_id").innerHTML = text[defaultLanguage].do;
const selector = document.getElementById("selector_id");


selector.addEventListener("change", () => {
  const selectedLanguage = selector.value;
  const selectedText = text[selectedLanguage];

  document.getElementById("login_btn").innerHTML = selectedText.login;
  document.getElementById("quiz_id").innerHTML = selectedText.quizes;
  document.getElementById("todo_id").innerHTML = selectedText.do;

  warningElement.innerHTML = selectedText.warrningText;
});



function typeWriter(){
  let i = 0;
  let typeWriter = () =>{
      if(i < warrningText.length){
        warningElement.innerHTML += warrningText.charAt(i);
        i++
      }
  
      setTimeout(setTimeout(typeWriter, 110))
  }
  setTimeout(typeWriter,500)
}
typeWriter();

// valueSetter()
// tagCreator()

// quiz code area

const quizGenerator = (quizList) => {
  let quizStep = 0;
  const question = quizList[quizStep];
  console.log(question);

  return () => {
    valueSetter("#quiz_title", question.quizTitle);
    valueSetter("#helpers", question.quiz);

    question.options.forEach((quiz)=> {
      tagCreator("li", document.getElementById("quiz_options"), quiz)
    })
  }
};

const quizConfig = quizGenerator(questions);

quizConfig();