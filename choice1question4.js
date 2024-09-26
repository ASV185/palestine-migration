function getSelectedAnswer(event){
    event.preventDefault();
    alert("Lose Condition: If students consistently choose high-risk options (e.g., sneaking past checkpoints, staying in dangerous areas), they may face game-ending scenarios like death, imprisonment, or complete loss of livelihood.");
    if (event.target.value === "palestine") {
      alert("Your family continues to face challenges but remains committed to your homeland. Consequence: Staying might continue the cycle of hardship, while leaving could result in losing your identity and roots.");
    }
    if (event.target.value === "leave") {
      alert("You start anew, but your family loses its connection to the land and its heritage.");
    }
    
  }
  //selector for form
  let form = document.getElementById("question-form");
  // eventlistener to change answer
  form.addEventListener("change", getSelectedAnswer);