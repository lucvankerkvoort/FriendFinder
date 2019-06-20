// Global Variables
var count = 1;
var radioCount = 1;
var questionCount = 1;

// An array holding all the questions
var questions = [
  "I am always happy",
  "I love flirting",
  "I'm very outgoing",
  "I love activities",
  "I'm stubborn",
  "I love to cuddle",
  "I am generous",
  "I like to workout",
  "If I'm on a date I'll pay the bill",
  "I love to travel"
];

// This dynamically creates the questions with the radio buttons
function questionCreator() {
  // For every question in the questions array we create a new question
  for (let i = 0; i < questions.length; i++) {
    var questionRow = $("<div>");
    questionRow.addClass("row justify-content-center text-center");
    var questionDiv = $("<div>");
    questionDiv.addClass("col-md-6 text-center");
    var question = $("<h4>");
    question.text(questions[i]);
    questionDiv.append(question);
    questionRow.append(questionDiv);

    // for every question we create 5 radiobuttons
    for (let i = 0; i < 5; i++) {
      var radioDiv = $("<div>");
      radioDiv.addClass("form-check form-check-inline");
      var radioButtonInput = $("<input>");
      radioButtonInput.addClass("form-check-input");
      radioButtonInput.attr("type", "radio");
      radioButtonInput.attr("name", "inlineRadioOptions" + questionCount);
      radioButtonInput.attr(
        "id",
        "question" + questionCount + "radio" + radioCount
      );
      radioButtonInput.attr("value", radioCount);
      radioButtonInput.attr("required", true);

      //   For every radiobutton we create a label
      var radioButtonLabel = $("<label>");
      radioButtonLabel.addClass("form-check-label");
      radioButtonLabel.attr(
        "for",
        "question" + questionCount + "radio" + radioCount
      );

      //   we append everything onto the page and reset the radiobuttons to the right number
      radioButtonLabel.text(radioCount);
      radioDiv.append(radioButtonInput, radioButtonLabel);
      questionRow.append(radioDiv);
      counterCheck();
    }
    $("#survey").prepend(questionRow);
  }
}

// We check that the radiobuttons don't go over a number of 5
function counterCheck() {
  if (radioCount >= 5) {
    radioCount = 1;
    questionCount++;
    count++;
  } else {
    radioCount++;
    count++;
  }
}

// This function stores the data into an object when the submit button is pressed
$("#submit").on("click", function() {
  event.preventDefault();
  var userInput = {
    name: $("#name")
      .val()
      .trim(),
    gender: $("#gender")
      .val()
      .trim(),
    picture: $("#photo")
      .val()
      .trim(),
    data: []
  };

  //   We validate that all questions have been answered
  var validation = [];
  for (let i = 1; i < questions.length + 1; i++) {
    var data = $("input[name=inlineRadioOptions" + [i] + "]:checked").val();
    validation.push(data);
  }

  //  When the validation is good we push the data into the object
  function pushData() {
    for (let j = 1; j < questions.length + 1; j++) {
      var data = $("input[name=inlineRadioOptions" + [j] + "]:checked").val();
      userInput.data.push(data);
    }
  }

  //   This is tells the user to fill out all questions if they didn't and otherwise pushes the data onto the server
  console.log({ validation });
  if (validation.indexOf(undefined) >= 0) {
    alert("Fill in all the questions before submitting");
  } else {
    pushData();
    $.post("/api/friends", userInput).then(function(data) {
      var bestFriend = $("<div>");
      var name = $("<h2>");
      name.text(data.name);
      var gender = $("<p>");
      gender.text(data.gender);
      var photo = $("<img>");
      photo.attr("src", data.photo);
      photo.attr("width", "400px");

      bestFriend.append(name, gender, photo);
      $("#best-friend").append(bestFriend);
    });
  }
});
questionCreator();
