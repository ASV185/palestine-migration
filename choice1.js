function getSelectedAnswer(event){
    event.preventDefault();
    if (event.target.value === "business") {
      alert("The business is profitable but attracts unwanted attention from the authorities. Eventually, it is shut down, and you lose your investment.");
    }
    if (event.target.value === "aid") {
      alert("The aid is inconsistent, and your family faces constant uncertainty, but you avoid legal trouble. Consequence: The covert business option can be lucrative short-term but risky long-term, potentially leading to severe consequences.");
    }
    if (event.target.value === "advocate") {
        alert("Your activism draws attention, and you face harassment, but you build solidarity with other Palestinians. Consequence: Advocacy can lead to harassment and potential violence, while staying quiet can erode your family's morale and future prospects.");
    }
    if (event.target.value === "profile") {
        alert("Your family avoids direct conflict, but the discrimination takes a toll on your children's mental health and self-esteem.");
    }
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