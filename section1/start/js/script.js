"use strict";
var com = com || {};
com.github = com.github || {};
com.github.JSDP = com.github.JSDP || {};

com.github.JSDP.section1 = {
  leadself: "Me: ",
  leadcomputer: "PC: ",
  aSaid: ["This is a Cyber Chat"],
  msgYes: "Yes, that's a great idea.",
  msgNo: "No, that must be a mistake.",
  aSassyStuff: ["Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
    "As long as we don’t die, this is gonna be one hell of a story.",
    "She laughed, and the desert sang.",
    "You’ve got about as much charm as a dead slug."],
  talk: function (msg) {
    this.echo(this.leadself + msg);
  },
  replayYesNo: function () {
    var msg = Math.random() > .5 ? this.msgYes : this.msgNo;
    this.echo(this.leadcomputer + msg);
  },
  saySassyStuff: function saySassyStuff() {
    var index = Math.floor(Math.random() * this.aSassyStuff.length);
    var msg = this.aSassyStuff[index];
    this.echo(this.leadcomputer + msg);
  },
  echo: function (msg) {
    this.aSaid.push('<div>' + msg + '</div>');

    var MAX_ROW_VALUE = 6;
    var aSaidLength = this.aSaid.length;
    var start = Math.max(aSaidLength - MAX_ROW_VALUE, 0);
    var out = '';

    for (var i = start; i < aSaidLength; i += 1) {
      out += this.aSaid[i];
    }

    $('.advert').html(out);
    $('#talk span').text(msg);
  }
};
