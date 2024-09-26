function getSelectedAnswer(event){
    event.preventDefault();
    if (event.target.value === "road") {
      alert("The journey is quicker but risks running into soldiers or bandits. Consequence: Taking the main road can lead to deadly encounters, while the longer route strains your family's resources.");
    }
    if (event.target.value === "route") {
      alert("The journey is slower, and resources run low, but you avoid direct confrontation.");
    }
    if (event.target.value === "camp") {
      alert("Your family endures the difficult conditions, but you avoid the risks of living undocumented in the city.");
    }
    if (event.target.value === "work") {
      alert("You find work, but your family faces discrimination and the constant threat of deportation. Consequence: Leaving the camp can provide better opportunities but risks legal and social issues in the host country.");
    }
    if (event.target.value === "seek") {
      alert("You find better care but at a high cost, leading to significant financial strain.");
    }
    if (event.target.value === "rely") {
      alert("The care is minimal, and your family member's condition worsens. Consequence: Limited medical care in the camp can lead to the death of a family member, while seeking outside help could bankrupt the family.");
    }
    if (event.target.value === "school") {
      alert("They receive an education but face severe bullying and discrimination. Consequence: Both options come with significant drawbacks, forcing you to weigh long-term outcomes against immediate safety. Consequence: Both options come with significant drawbacks, forcing you to weigh long-term outcomes against immediate safety.");
    }
    if (event.target.value === "home") {
      alert("They are safer but miss out on crucial education, limiting their future prospects.");
    }
    if (event.target.value === "return") {
      alert("The journey is perilous, and if unsuccessful, your family may be stranded without support. Consequence: Attempting to return to Palestine could end in tragedy, while staying in Egypt means accepting a life in exile.");
    }
    if (event.target.value === "egypt") {
      alert("Your family continues to face the difficulties of refugee life, but with some degree of stability. Consequence: Attempting to return to Palestine could end in tragedy, while staying in Egypt means accepting a life in exile.");
    }
    
  }
  //selector for form
  let form = document.getElementById("question-form");
  // eventlistener to change answer
  form.addEventListener("change", getSelectedAnswer);