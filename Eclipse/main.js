let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")
button = document.getElementById("button")

let a = 300
let b = 290
let c = 300
let d = 360
let valuea = 0.5
let valueb = 0.5


draw = () => {
    context.clearRect(0, 0, 800, 600)
    
    a = c + Math.cos(valuea) * 50
    b = d + Math.sin(valuea) * 50

    c = canvas.width / 2 + Math.cos(valueb) * 170
    d = canvas.height / 2 + Math.sin(valueb) * 170

    context.beginPath()
    //SUN
    context.arc((canvas.width)/2, (canvas.height)/2, 40, 0, 2 * Math.PI)
    context.fillStyle = "#f96704"
    context.fill()
    context.strokeStyle = "#f96704";
    context.stroke()

    context.beginPath()
    //EARTH
    context.arc(c, d, 30, 0, 2 * Math.PI)
    context.fillStyle = "#0f103b"
    context.fill()
    context.strokeStyle = "#0f103b";
    context.stroke()
    
    context.beginPath()
    //MOON
    context.arc(a, b, 15, 0, 2 * Math.PI)
    context.fillStyle = "#c2b8b4"
    context.fill()
    context.strokeStyle = "#c2b8b4";
    context.stroke()
    valuea += 0.09
    valueb += 0.04
}

let t = setInterval(draw, 60)

button.onclick = () => {
    clearInterval(t)
}
      
      
      
      const  startBtn = document.querySelector(".start")
      const infoBox = document.querySelector(".info-box")
      const exitBtn = infoBox.querySelector(".buttons .quit")
      const continueBtn = infoBox.querySelector(".buttons .cont")         
      const quizBox = document.querySelector(".quiz-box")
      const nextBtn = quizBox.querySelector(".next");            
      const optionList = quizBox.querySelector(".option-list");    
      const resultBox = document.querySelector(".result-box" )
      const timeCount = quizBox.querySelector(".timer .sec")
      const timeLine = quizBox.querySelector("header .timeline")
      const timeOut = quizBox.querySelector(".timer .text")
      const body = document.getElementsByTagName("body")[0];
      const information = document.querySelector(".information")
      const watch = document.querySelector("#watch")
      const read = document.querySelector("#read")
      const video = document.querySelector(".video")
      const example = document.querySelector("#example")
      const canvasexample = document.querySelector(".canvasexample")

      example.onclick = () => {
        canvasexample.style.display = "flex";
        example.style.display = "none";
        read.style.display = "none";
        watch.style.display = "none";
      }

      read.onclick = () => {
        information.style.display = "block";
        read.style.display = "none";
        watch.style.display = "none";
        example.style.display = "none";
      }

      watch.onclick = () => {
        video.style.display = "flex";
        read.style.display = "none";
        watch.style.display = "none";
        example.style.display = "none";
      }

 //
 //
 //           
             //start button click event
             startBtn.onclick = () => {
              infoBox.classList.add("activeInfo")//shows info box
              startBtn.style.display = "none";
              information.style.display = "none";
              watch.style.display = "none";
              read.style.display = "none";
              video.style.display = "none";
              example.style.display = "none";
              canvasexample.style.display = "none"
              }
//          
             //exit button click event
             exitBtn.onclick = () => {
              infoBox.classList.remove("activeInfo")//removes info box
              startBtn.style.display = "block";
              watch.style.display = "inline-block";
              read.style.display = "inline-block";
              example.style.display = "inline-block";
              }
//          
            //continue button click event
              continueBtn.onclick = () => {
              infoBox.classList.remove("activeInfo")//removes info box
              quizBox.classList.add("activeQuiz");
              showQuestions(0);
              queCount(1);
              startTimer(11);//so that the time starts from 10
              startTimeLine(0);
              alert("Goodluck!!!");
              }
//            
//           
//         
            //defining objects
            let que_count = 0;
            let que_numb = 1;
            let counter;
            let counterLine;
            let timeValue = 10;
            let widthValue = 0;
            let userScore = 0;
            
            let tickIcon = '<div class = "icon tick"><i class = "fas fa-check"></i></div>';
            let crossIcon = '<div class = "icon wrong"><i class = "fas fa-times"></i></div>';
//
//      
// 
                //next button click event
                nextBtn.onclick = () => {
                if(que_count < questions.length - 1){
                    que_count++;
                    que_numb++;
                    showQuestions(que_count);
                    queCount(que_numb);
                    clearInterval(counter);
                    clearInterval(counterLine);
                    startTimer(timeValue);
                    startTimeLine(widthValue);
                    nextBtn.style.display = "none";
                    body.classList.remove("right");
                    body.classList.remove("wrong");
                    timeLine.classList.remove("right");
                    timeLine.classList.remove("wrong");
                    
                    }
          else{
             clearInterval(counter);
             clearInterval(counterLine);
             showResultBox();
             quizBox.classList.remove("activeQuiz")//hides quix box
             resultBox.classList.add("activeResult")//shows resultBox
             timeOut.textContent = "Time left"
             
             }
             };
//
//
//   
  //replay button click event
  const replayBtn = resultBox.querySelector(".buttons .restart")  
  replayBtn.onclick = () => { 
  alert("Get ready")
    quizBox.classList.add("activeQuiz"); //show quiz box
    resultBox.classList.remove("activeResult"); //hide result box
    timeValue = 10;    
    que_count = 0
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); 
    queCount(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimeLine(widthValue); 
    timeOut.textContent = "Time left"; 
    nextBtn.classList.remove("show"); //hide the next button  
    timeLine.classList.remove("right")
    timeLine.classList.remove("wrong") 
    quizBox.classList.remove("oops")
            }; 
//        
//
//                        
 //quit button click event
 const quitBtn = resultBox.querySelector(".buttons .exit")
 quitBtn.onclick = () => {
 window.location.reload( );
            }
//
//
//                   
            //display questions
            function showQuestions(index){
               const queText = document.querySelector(".question");
             
               let queTag = "<span>" +
               questions[index].number + 
               ". " +
               questions[index].question + 
               "</span>"
                
                 let optionsTag =
                 '<div class = "option">' +
                 questions[index].options[0] + 
                 '<span></span></div>' +
                 '<div class = "option">' +
                 questions[index].options[1] +
                 '<span></span></div>' +
                 '<div class = "option">' +
                 questions[index].options[2] + 
                 '<span></span></div>' +
                 '<div class = "option">' +
                 questions[index].options[3] +
                 '<span></span></div>';
                     
                 queText.innerHTML = queTag;
                 optionList.innerHTML = optionsTag;
        
             for (let i of questions) {
             //to randomly sort options
             i.options.sort(() => Math.random() - 0.5);
             }
             const option = optionList.querySelectorAll(".option")
             for(let x = 0; x < option.length ; x++){
             option[x].setAttribute("onclick", "optionSelected(this)")
             }
             };
//                     
//
//          
             //for timer to start counting
             function startTimer(time){
               counter = setInterval(timer, 1000)
             function timer(){
               timeCount.textContent = time;
               time--;
               timeOut.textContent = "Time left" 
              if(time < 9){
               let addZero = timeCount.textContent
               timeCount.textContent = "0" + addZero;
              }
              if(time < 0){
                clearInterval(counter)
                timeCount.textContent = "00";
                timeOut.textContent = "Time Up" 

         let correctAns = questions[que_count].answer;
         let allOptions = optionList.children.length;
         //to automatically select correct option if answer is wrong
for(let x = 0; x < allOptions; x++){
if (optionList.children[x].textContent == correctAns){
optionList.children[x].setAttribute("class", "option correct");
optionList.children[x].insertAdjacentHTML("beforeend",tickIcon);
          }
          }
          //when any option is selected ,all options are disabled 
         for(let x = 0; x < allOptions; x++){
            optionList.children[x].classList.add("disabled");
            }   
nextBtn.style.display = "block";//shows next-button when option is clicked
            };   
            };
            };   
//
//
//
           //for timeline to start moving
           function startTimeLine(time){
             counterLine = setInterval(timer, 30.5)
           function timer(){
             time += 1;  
             timeLine.style.width = time + "px"
           if(time > 350){
             clearInterval(counterLine)
           };
           };
           };      
//
//
//  
          //shows result box
          function showResultBox(){
            infoBox.classList.remove("activeQuiz")//hide info box
            quizBox.classList.remove("activeQuiz")//hide quix box
            resultBox.classList.add("activeResult")//shows resultBox
            body.classList.remove("right")
            body.classList.remove("wrong");
          const scoreText = resultBox.querySelector(".score-text")
          if(userScore == questions.length){
               let scoreTag = '<span>🥳👌Perfect!! you got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
            }
            else  if(userScore > 6 ){
               let scoreTag = '<span>💫Congrats! you got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
            }
            else if(userScore > 3){
               let scoreTag = '<span>👍Nice, you got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
            }
            else{
               let scoreTag = '<span>😟Sadly, you only got<p>'
               +  userScore +
               '</p>out of<p>' 
               + questions.length +
               '</p>questions</span>'
               scoreText.innerHTML = scoreTag;
             }
             };
//
//
//           
             //count of questions 
             function queCount(index){ 
             const bottomQueCount = quizBox.querySelector(".total-questions");
             
                let totalQuestionsCount =
                '<span><p>' +
                index +
                '</p>of<p>'  +
                questions.length +
                '</p>Questions</span>';
             
                bottomQueCount.innerHTML = totalQuestionsCount      
             };
//        
//    
//               
              //selecting an option
             function optionSelected(answer) {
                clearInterval(counter);//stops time count
                clearInterval(counterLine)//stops timeline movement
                let userAns = answer.textContent;
                let correctAns = questions[que_count].answer;
                let allOptions = optionList.children.length;
                if (userAns == correctAns){
                userScore += 1
                answer.classList.add("correct")
                //to show that question is correct
                answer.insertAdjacentHTML("beforeend", tickIcon)
                body.classList.add("right")
                timeLine.classList.add("right")
                }
                else{
                var myQuizBox = false;
                if (myQuizBox) clearTimeout(myquizBox);
                myQuizBox = setTimeout(function() {quizBox.style.animation = '';}, 500);//so that the animation can continue
                answer.classList.add("incorrect");
                //to show that question is wrong
                answer.insertAdjacentHTML("beforeend", crossIcon);
                quizBox.style.animation = "shake 0.25s 2";
                body.classList.add("wrong");   
                timeLine.classList.add("wrong")      
                window.navigator.vibrate([ 500]);//for phone to vibrate 
   //to automatically select correct option if answer is wrong
   for(let x = 0; x < allOptions; x++){
   if (optionList.children[x].textContent == correctAns){   
   optionList.children[x].setAttribute("class", "option correct");
   optionList.children[x].insertAdjacentHTML("beforeend",tickIcon);
   }
   }
   };               
//when any option is selected ,all options are disabled 
for(let x = 0; x < allOptions; x++){
optionList.children[x].classList.add("disabled");
};   
nextBtn.style.display = "block";//shows next button when option is clicked
             };


let questions = [
    {
         number:1,
         question: "What causes a solar eclipse?",
         answer : "Moon's shadow on the earth",
         options : [
                          "Earth's shadow on the moon",
                          "Moon's shadow on the earth",
                          "Sun's shadow on moon",
                          "Earth's shadow on the sun"
                        ]
    
    },
    {
         number:2,
         question: "In which phase of the moon does a solar eclipse occur?",
         answer : "New moon",
         options : [
                          "Full moon",
                          "New moon",
                          "First quarter moon",
                          "Last quarter moon"  
                          ]
    
    },
   {
         number:3,
         question: "During a total solar eclipse what can you see around the sun?",
         answer : "Corona",
         options : [ 
                          "Corona",
                          "Planets",
                          "Meteor Shower",
                          "Solar flares"
                          ]
    
    },
    {
         number:4,
         question: "During a total solar eclipes, what should you use to safely observe the suns corona?",
         answer : "Approved solar viewing glasses",
         options : [
                          "Telescope without a filter",
                          "Welders mask",
                          "Approved solar viewing glasses",
                          "Sun glasses"
                          ]
    }, 
    {
         number:5,
         question: "During a total solar eclipse, what natural event occurs due to sudden darkness and cooling?",
         answer : "Corona",
         options : [ 
                          "Tonado",
                          "Aurola borealis",
                          "Corona",
                          "Earthquake"
                       ]
    },
    {
         number:6,
         question: "In what direction does the shadow of the moon move during a solar eclipse?",
         answer : "West to East",
         options : [
                          "West to East",
                          "East to West",
                          "All",
                          "None of the above"
                       ]
    },
    {
         number:7,
         question: "What are the regions of earth called where a total solar eclipse is visible?",
         answer : "Path to totality",
         options : [
                          "Twilight zones",
                          "Path to totality",
                          "Celestial corridors",
                          "Sunshadow regions"
                       ]
    },
     {
         number:8,
         question: "When there is a total lunar eclipse what shadow is formed?",
         answer : "Umbra",
         options : [
                         "Penumbra",
                         "Umbra",
                         "Antumbra",
                         "Cast"
                       ]
    },
    {
         number:9,
         question: "What is the longest time an eclipse can last ?",
         answer : "7 minutes 32 seconds",
         options : [
                         "6 minutes 12 seconds",
                         "7 minutes 32 seconds",
                         "4 minutes 28 seconds",
                         "5 minutes 20 seconds"
                       ]
    },
    {
         number:10,
         question: "When is the next solar eclipse ?",
         answer : "April 8 2024",
         options : [
                         "August 12 2024",
                         "May 14 2024",
                         "April 8 2024",
                         "November 4 2024"
                       ]
    }
     ];