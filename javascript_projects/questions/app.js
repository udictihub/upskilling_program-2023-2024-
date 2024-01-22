const questions = document.querySelectorAll(".question")
questions.forEach(
    (qn)=>{
        //btn
        const btn = qn.querySelector(".question-btn");
        btn.addEventListener("click", ()=>{
            // close other questions
            questions.forEach((item)=>{
                if(item !==qn){
                    item.classList.remove("show-text");
                }
            });
        qn.classList.toggle("show-text");

        })
    }
)