function getSelectedAnswer(event){
    event.preventDefault();
    if (event.target.value === "business") {
      alert("The business is profitable but attracts unwanted attention from the authorities. Eventually, it is shut down, and you lose your investment.");
    }
    if (event.target.value === "aid") {
      alert("The aid is inconsistent, and your family faces constant uncertainty, but you avoid legal trouble. Consequence: The covert business option can be lucrative short-term but risky long-term, potentially leading to severe consequences.");
    }
    
  }
  //selector for form
  let form = document.getElementById("question-form");
  // eventlistener to change answer
  form.addEventListener("change", getSelectedAnswer);