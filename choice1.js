function updateQuestion(event){
    event.preventDefault();
    let secondQuestionElement = document.getElementById("second-question");
    if (event.target.value === "stay") {
        alert("Your family faces immediate danger, and some members are injured in the attacks. You barely survive, but your home is destroyed. Consequence: Choosing to stay in your home puts your family at great risk, leading to potential loss of life or critical injuries.");
    secondQuestionElement.innerHTML += `
    <div class="container">
        <div class="light-card shadow p-4 mb-5 bg-body-tertiary rounded next-question">
          <div class="row">
          <div class="col-7">
          <div class="next-question">
            <div class="card-header m-3">
                <h3>Choice 1 Question #1</h3>
                    Situation: The Israeli military imposes curfews and sets up checkpoints that restrict movement.
                    Your family needs food and medicine, but leaving your home is dangerous.
             </div>
            <div class="card-body m-3">
                <form id="question-form">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="category" value="sneak" id="sneak">
                        <label class="form-check-label" for="sneak">
                            Try to sneak past the checkpoint.
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="category" value="curfew" id="curfew">
                        <label class="form-check-label" for="curfew">
                            Wait until curfew is lifted
                        </label>
                    </div>
                </form>
            </div>
           </div>
           <div class="col-3">
               <a href="choice1question2.html">
                Next Question
                <img src="image/right-arrow.png" alt="right arrow leading to next question" class="img-fluid"> 
               </a>
           </div>
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
                            <h3>Choice 2 Question #1</h3>
                            Situation: Your family begins the dangerous journey to Egypt, but the roads are filled
                            with military checkpoints and bandits. You must decide on a route.
                        </div>
                    </div>
                    <div class="card-body m-3">
                        <form id="question-form">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" value="road" id="road">
                            <label class="form-check-label" for="road">
                                Take the main road
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" value="route" id="route">
                            <label class="form-check-label" for="route">
                                Take a longer, safer route
                            </label>
                        </div>
                        </form>
                    </div>
                </div>
            </div>`; 
        }
        
    }

}
    

let form = document.querySelector("#question-form");

form.addEventListener("change", updateQuestion);