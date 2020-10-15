const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

questions.forEach(myFunction);

function myFunction(item, index) {
    questions[index].addEventListener("click", () => {
    if(questions[index].className === "question") {
        answers[index].style.height="auto";
        questions[index].className="question active";
    }
    
    else if(questions[index].className === "question active") {
        answers[index].style.height="0";
        questions[index].className="question";
    }
   })
}