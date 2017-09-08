(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey='cdd1b801556ff7943246cac4feaaf460fb0fad24'

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey

function Repo() {

}


Repo.prototype.getRepos = function(repoName) {
  $.get('https://api.github.com/users/' + repoName + '/repos?access_token=' + apiKey).then(function(response) {

    dat = JSON.stringify(response)
    data = JSON.parse(dat)
    console.log(data);
    $('.card').empty()
    for (var i = 0; i < data.length; i++) {
      $('.card').append('<div class="card-header">' + data[i].name + '</div>')
      // $('#asdf').append('<li>' + data[i].name + '</li>')
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.repoModule = Repo;

},{"./../.env":1}],3:[function(require,module,exports){
var Repo = require('./../js/scrpt.js').repoModule









$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var repoName = $('#repoName').val()
    console.log(repoName);
    var data = new Repo()
    data.getRepos(repoName)
  });
  // appender()

});

},{"./../js/scrpt.js":2}]},{},[3]);
