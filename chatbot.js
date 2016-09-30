var meString = "Me: ";
var botleyString = "Botley: ";
var meResult = meString.bold();
var botleyResult = botleyString.bold();
var now = new Date(Date.now());
var hh = now.getHours();
var hours = hh;
var meridian = "AM";
var minutes = now.getMinutes();
if (hh >= 12) {
        hours = hh-12;
        meridian = "PM";
      }
//function returnTime() {}
var myArray = ["Good I guess", "Terrible"];
var variety = Math.floor((Math.random() * myArray.length) + 1);

var response = {
  "what are some questions to ask you?": ["You can ask me: <br> 'How are you?' <br> 'What is your name?'<br>'What time is it?' <br> 'What is your real name?' <br> 'Tell me your life story.' <br> 'Wither goest thou, young rogue?'"],
  "hi":["Hi","Hello ..... it's me.","Howdy partner. How's it goin'?"],
  "pretty good": [" That's good to hear."],
  "bye":["Goodbye.","See ya later."],
  "how are you?":["Good I guess", "Terrible","I don't know. You tell me."] ,
  "how old are you?" : ["I was made 10 days ago."],
  "what is your name?": ["Botley. Isn't it obvious!?","You really should know this by now."],
  "what is your real name?": ["The name's Bond. James Bond."],
  "tell me your life story.": ["It all started one day in a small village in Yugoslavia... "],
  "what time is it?": ["It is " +  hours + ":" + minutes + " " + meridian],
  "whither goest thou, young rogue?": ["Over to the next town fine sir","Over the hills and far away."]
}
function displayInput() {
  var question = $("#input").val();
  question = question.toLowerCase()

if (response[question] == undefined) {
  $("#chat-area").prepend( meResult + question + "<br>"
  + botleyResult + "I can only remember so much. Ask me a question from the list." + "<hr>");
}

else {

  var answer = response[question];
  var random = Math.floor(Math.random() * answer.length);
  var multiAnswer = answer[random];



  $("#chat-area").prepend( meResult + question + "<br>"
+ botleyResult + multiAnswer + "<hr>");
  }
}
$(document).keydown(function(enter) {
  if (enter.keyCode == 13) {
    displayInput()
  }
});
