var meString = "Me: ";
var botleyString = "Botley: ";
var meResult = meString.bold();
var botleyResult = botleyString.bold();

var response = {
  "Hi":"Hello",
  "Bye":"Goodbye. Come again soon.",
  "How are you?": "Good I guess.",
  "How old are you?" : "Gosh, I wasn't born yesterday! I was made 3 days ago."
  "What is your name?": "Botley. Isn't it obvious!?",
  "What is your real name?": "The name's Bond. James Bond.",
  "Tell me your life story. ": "It all started one day in a small village in Yugoslavia... "
}
function displayInput() {
  var question = $("#input").val();

$("#chat-area").prepend( meResult + question + "<br>"
+ botleyResult + response[question] + <"hr">);

}
