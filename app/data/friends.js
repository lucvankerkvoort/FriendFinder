var count = 1;
var radioCount = 1;
var questionCount = 1;

function reset() {
  count = 1;
  radioCount = 1;
  questionCount = 1;
}
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

function questionCreator() {
  for (let i = 0; i < questions.length; i++) {
    var questionRow = $("<div>");
    questionRow.addClass("row justify-content-center text-center");
    var questionDiv = $("<div>");
    questionDiv.addClass("col-md-6 text-center");
    var question = $("<h4>");
    question.text(questions[i]);
    questionDiv.append(question);
    questionRow.append(questionDiv);

    for (let i = 0; i < 5; i++) {
      var radioDiv = $("<div>");
      radioDiv.addClass("form-check form-check-inline");
      var radioButtonInput = $("<input>");
      radioButtonInput.addClass("form-check-input");
      radioButtonInput.attr("type", "radio");
      radioButtonInput.attr("name", "inlineRadioOptions" + count);
      radioButtonInput.attr(
        "id",
        "question" + questionCount + "radio" + radioCount
      );
      radioButtonInput.attr("value", radioCount);
      var radioButtonLabel = $("<label>");
      radioButtonLabel.addClass("form-check-label");
      radioButtonLabel.attr(
        "for",
        "question" + questionCount + "radio" + radioCount
      );
      radioButtonLabel.text(radioCount);
      radioDiv.append(radioButtonInput, radioButtonLabel);
      questionRow.append(radioDiv);
      counterCheck();
    }
    $("#survey").prepend(questionRow);
  }
  reset();
}

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

$("#submit").on("click", function() {
  event.preventDefault();

  var data = $(this).attr("value");
  console.log(data);
});
questionCreator();
