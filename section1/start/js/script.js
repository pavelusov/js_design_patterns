"use strict";
var chatModule = (function () {
  var leadself = "Me: ",
    leadcomputer = "PC: ",
    aSaid = ["This is a Cyber Chat"],
    msgYes = "Yes, that's a great idea.",
    msgNo = "No, that must be a mistake.",
    aSassyStuff = ["Like mold on books, grow myths on history.",
      "She moved like a poem and smiled like a sphinx.",
      "As long as we don’t die, this is gonna be one hell of a story.",
      "She laughed, and the desert sang.",
      "You’ve got about as much charm as a dead slug."];

  function echo(msg) {
    aSaid.push('<div>' + msg + '</div>');

    var MAX_ROW_VALUE = 6;
    var aSaidLength = aSaid.length;
    var start = Math.max(aSaidLength - MAX_ROW_VALUE, 0);
    var out = '';

    for (var i = start; i < aSaidLength; i += 1) {
      out += aSaid[i];
    }

    $('.advert').html(out);
    $('#talk span').text(msg);
  }

  return {
    talk: function (msg) {
      echo(leadself + msg);
    },
    replayYesNo: function () {
      var msg = Math.random() > .5 ? msgYes : msgNo;
      echo(leadcomputer + msg);
    },
    saySassyStuff: function saySassyStuff() {
      var index = Math.floor(Math.random() * aSassyStuff.length);
      var msg = aSassyStuff[index];
      echo(leadcomputer + msg);
    }
  };
})();

$(function () {
  chatModule.talk('hello');
  chatModule.replayYesNo();
  chatModule.saySassyStuff();
  chatModule.saySassyStuff();
  chatModule.saySassyStuff();
});