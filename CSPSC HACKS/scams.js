let btn = document.querySelectorAll(".btn");
let scaminfo = document.querySelectorAll(".scaminfo");
// let btnCount = 0;
// btn.forEach((btn) => {
    
//     console.log(btnCount);
//     btn.addEventListener("click", (e) => {
//         btnCount++;
//         console.log(btnCount);
//     })
// })
let btnNumber = [];
for(let i=0; i<6; i++){
    btn[i].addEventListener("click", (e) => {
        scaminfo[i].classList.remove("hide");
        btnNumber.push(i);
        if(btnNumber.length == 2){
            scaminfo[btnNumber[0]].classList.add("hide");
            btnNumber.reverse();
            btnNumber.pop();
        }
    })
}


let quizQues = document.querySelectorAll(".quizQues");
let nextBtn = document.querySelectorAll(".nextBtn");
let option = document.querySelectorAll(".option");
let ans = document.querySelectorAll(".ans");

for(let i=0; i<7; i++){
    for(let j=(4*i); j<((4*i)+4); j++){
        option[j].addEventListener("click", (e) => {
            if(option[j].innerText === ans[i].innerText){
                option[j].classList.add("correctAns");
            }
            else{
                option[j].classList.add("incorrectAns");
                ans[i].classList.add("correctAns");
            }
            for(let k=(4*i); k<((4*i)+4); k++){
                option[k].style.opacity = '1';
                option[k].style.pointerEvents = 'none';
            }
            nextBtn[0].classList.remove("hide");
        })
    }
    nextBtn[i].addEventListener("click", (e) => {
        if(i != 6){
            quizQues[i].classList.add("hide");
            quizQues[i+1].classList.remove("hide");
        }
        else{
            nextBtn[i].innerText = "quiz completed"
        }
    })
}