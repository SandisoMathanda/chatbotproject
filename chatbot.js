var meString = "Me: ";
var botleyString = "Botley: ";
var meResult = meString.bold();
var botleyResult = botleyString.bold();
var now = new Date(Date.now());
//var now = now.get
var hh = now.getHours();
var hours = hh;
var meridian = "AM";
var minutes = now.getMinutes();
if (hh >= 12) {
        hours = hh-12;
        meridian = "PM";
      }

function returnTime() {

}

var response = {
  "Hi":"Hello",
  "Bye":"Goodbye. Come again soon.",
  "How are you?": "Good I guess.",
  "How old are you?" : "Gosh I wasn't born yesterday! I was made 3 days ago.",
  "What is your name?": "Botley. Isn't it obvious!?",
  "What is your real name?": "The name's Bond. James Bond.",
  "Tell me your life story.": "It all started one day in a small village in Yugoslavia... ",
  "What time is it?": "It is " +  hours + ":" + minutes + " " + meridian,
  "Whither goest thou, young rogue?": "Over to the next town fine sir"
}
function displayInput() {
  var question = $("#input").val();

if (response[question] == undefined) {
  $("#chat-area").prepend( meResult + question + "<br>"
  + botleyResult + "Sorry answer not found" + "<hr>");
}

else {$("#chat-area").prepend( meResult + question + "<br>"
+ botleyResult + response[question] + "<hr>");
  }
}
