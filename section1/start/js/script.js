"use strict";
const chatModule = (function () {
  const _leadself = "Me: ",
    _leadcomputer = "PC: ",
    _aSaid = ["This is a Cyber Chat"],
    _msgYes = "Yes, that's a great idea.",
    _msgNo = "No, that must be a mistake.",
    _aSassyStuff = ["Like mold on books, grow myths on history.",
      "She moved like a poem and smiled like a sphinx.",
      "As long as we don’t die, this is gonna be one hell of a story.",
      "She laughed, and the desert sang.",
      "You’ve got about as much charm as a dead slug."];

  function _echo(msg) {
    _aSaid.push('<div>' + msg + '</div>');

    const MAX_ROW_VALUE = 6;
    const aSaidLength = _aSaid.length;
    const start = Math.max(aSaidLength - MAX_ROW_VALUE, 0);
    let out = '';

    for (let i = start; i < aSaidLength; i += 1) {
      out += _aSaid[i];
    }

    $('.advert').html(out);
    $('#talk span').text(msg);
  }

  function talk(msg) {
    _echo(_leadself + msg);
  }

  function replayYesNo() {
    const msg = Math.random() > .5 ? _msgYes : _msgNo;
    _echo(_leadcomputer + msg);
  }

  function saySassyStuff() {
    const index = Math.floor(Math.random() * _aSassyStuff.length);
    const msg = _aSassyStuff[index];
    _echo(_leadcomputer + msg);
  }

  return {
    talk,
    replayYesNo,
    saySassyStuff,
  };
})();

$(function () {
  chatModule.talk('hello');
  chatModule.replayYesNo();
  chatModule.saySassyStuff();
  chatModule.saySassyStuff();
  chatModule.saySassyStuff();
});
