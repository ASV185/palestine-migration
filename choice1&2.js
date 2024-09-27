function updateQuestion(event){
    event.preventDefault();
    let secondQuestionElement = document.getElementById("second-question");
    if (event.target.value === "stay") {
        alert("Your family faces immediate danger, and some members are injured in the attacks. You barely survive, but your home is destroyed. Consequence: Choosing to stay in your home puts your family at great risk, leading to potential loss of life or critical injuries.");
    secondQuestionElement.innerHTML += `
    <div class="container">
        <div class="light-card shadow p-4 mb-5 bg-body-tertiary rounded next-question">
          <div class="next-question">
            <div class="card-header m-3">
                <h3>Choice 1</h3>
                    Situation: The Israeli military imposes curfews and sets up checkpoints that restrict movement.
                    Your family needs food and medicine, but leaving your home is dangerous.
             </div>
             <div>
                <h3>Two Options:</h3>
             </div>
            <div class="card-body m-3">
                <form id="question-form">
                    <div class="form-check">
                        <label class="form-check-label" for="sneak">
                            Try to sneak past the checkpoint: You successfully obtain supplies but are caught on the way back, leading to imprisonment of a family member.
                        </label>
                    </div>
                    <span>Or</span>
                    <div class="form-check">
                        <label class="form-check-label" for="curfew">
                            Wait until curfew is lifted: Your family suffers from hunger and lack of medicine, but you avoid direct conflict with the military.
                        </label>
                    </div>
                </form>
            </div>
           <div>
               <a href="choice1question2.html">
                Next Question
                <img src="image/right-arrow.png" alt="right arrow leading to next question" class="img-fluid"> 
               </a>
           </div>
        </div>
    </div>`;

    }else{
        if (event.target.value === "evacuate"){
            alert("You leave behind your belongings, but your family remains safe. You take refuge with relatives in a nearby village.");
        secondQuestionElement.innerHTML+= 
        `<h2 class="text-center py-4">Flee to Egypt</h2>
            <div class="container">
                <div class="light-card shadow p-4 mb-5 bg-body-tertiary rounded">
                    <div class="next-question">
                        <div class="card-header m-3">
                            <h3>Choice 2</h3>
                            Situation: Your family begins the dangerous journey to Egypt, but the roads are filled
                            with military checkpoints and bandits. You must decide on a route.
                        </div>
                    </div>
                    <div>
                        <h3>Two Options:</h3>
                    </div>
                    <div class="card-body m-3">
                        <form id="question-form">
                        <div class="form-check">
                            <label class="form-check-label" for="road">
                                Take the main road: The journey is quicker but risks running into soldiers or bandits.
                            </label>
                        </div>
                        <span>Or</span>
                        <div class="form-check">
                            <label class="form-check-label" for="route">
                                Take a longer, safer route: The journey is slower, and resources run low, but you avoid direct confrontation.
                            </label>
                        </div>
                        </form>
                    </div>
                    <div>
                        <a href="choice2question2.html">
                            Next Question
                            <img src="image/right-arrow.png" alt="right arrow leading to next question" class="img-fluid"> 
                        </a>
                    </div>
                </div>
              </div>
            </div>`; 
        }
        
    }

}
    

let form = document.querySelector("#question-form");

form.addEventListener("change", updateQuestion);