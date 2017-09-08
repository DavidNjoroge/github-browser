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
