document.addEventListener("DOMContentLoaded", function() {
  console.log("dom ready");

  const fetchTranslate = function(text) {
    return $.ajax({
      method: "POST",
      url: "api/translations",
      data: {text: text}
    })
  }

  // fetchTranslate("What are your symptoms?").then((voice) => playVoice(voice));

  // const playVoice = (voice) => {
  //   debugger
  //   var audio = new Audio(voice);
  // }

  var symptomsCollection = [];
  var currentDiag;

  const fetchIssue = function() {
    return $.ajax({
      method: "POST",
      url: "api/diagnosis"
    })
  };

  const fetchSymptoms = function(){
    var symptoms = $("#symptoms-input").val();
    var symptomItem = document.createElement("p");
    symptomItem.innerHTML = symptoms;
    var symptomList = document.getElementsByClassName('symptom-list')[0];
    symptomList.appendChild(symptomItem);
    $("#symptoms-input").val("");
    var sex = $("#sex-input").val();
    var age = $("#age-input").val();
    var query = {symptoms: symptoms, sex: sex, age: age};
    return $.ajax({
      method: "POST",
      url: `api/symptoms`,
      data: {query: query}
    })
  }

  //
  // $("#symptom-add-btn").on("click", (e) => fetchSymptoms().then((symptom) => symptomsCollection.push(symptom)));
  // $("#submit-btn").on("click", (e) => fetchDiagnosis(symptomsCollection).then((diag) => updateResponseText()));
  //
  // const fetchDiagnosis = (symptoms) => {
  //   var sex = $("#sex-input").val();
  //   var age = $("#age-input").val();
  //   var query = {symptoms: symptoms, sex: sex, age: age};
  //   return $.ajax({
  //     method: "POST",
  //     url: `api/diagnosis`,
  //     data: {query},
  //     success: (diag) => { currentDiag = diag}
  //   })
  // }
  //
  // const updateDiagnosis = (answer) => {
  //
  //   return $.ajax({
  //     method: "POST",
  //     url: '/api/responses',
  //     data: {diag: currentDiag, answer: answer},
  //     success: (diag) => {
  //       currentDiag = diag
  //     }
  //   })
  // }
  //
  // const renderOptions = (symptom) => {
  //   var name = symptom.name;
  //   var symptom_id = symptom.id;
  //   var answerContainer = document.getElementById("answer-container");
  //   var symptomContainer = document.createElement("div");
  //   symptomContainer.setAttribute("class", "symptom");
  //   symptomContainer.innerHTML = name;
  //   answerContainer.appendChild(symptomContainer);
  //   symptom.choices.forEach((choice) => {
  //     var choiceBtn = document.createElement('button');
  //     choiceBtn.setAttribute("class", "btn");
  //     choiceBtn.addEventListener("click", () => updateDiagnosis(choice.id).then(() => updateResponseText()));
  //     choiceBtn.innerHTML = choice.label;
  //
  //     answerContainer.appendChild(choiceBtn);
  //   });
  // }
  //
  //
  // const updateResponseText = () => {
  //   $('#answer-container').empty();
  //   var responseContainer = document.getElementById("response-container");
  //   var answerContainer = document.getElementById("answer-container");
  //   var illnessContainer = document.getElementById("illness-container");
  //
  //   var options = currentDiag.response.question.items;
  //
  //   options.forEach((symptom) => {
  //     renderOptions(symptom);
  //   });
  //
  //   console.log(options);
  //
  //   responseContainer.innerHTML = currentDiag.response.question.text;
  //   illnessContainer.innerHTML = currentDiag.most_likely_illness || ""
  //
  // }


});
