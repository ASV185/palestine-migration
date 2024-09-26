function getSelectedAnswer(event){
    event.preventDefault();
    if (event.target.value === "advocate") {
      alert("Your activism draws attention, and you face harassment, but you build solidarity with other Palestinians. Consequence: Advocacy can lead to harassment and potential violence, while staying quiet can erode your family's morale and future prospects.");
    }
    if (event.target.value === "profile") {
      alert("Your family avoids direct conflict, but the discrimination takes a toll on your children's mental health and self-esteem.");
    }
    
  }
  //selector for form
  let form = document.getElementById("question-form");
  // eventlistener to change answer
  form.addEventListener("change", getSelectedAnswer);