var apiKey = require("./../.env").apiKey

function Repo() {

}


Repo.prototype.getRepos = function() {
  $.get('https://api.github.com/users/DavidNjoroge/repos?access_token=' + apiKey).then(function(response) {

    dat = JSON.stringify(response)
    data = JSON.parse(dat)
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      $('.card').append('<div class="card-header">' + data[i].name + '</div>')
      // $('#asdf').append('<li>' + data[i].name + '</li>')
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
};

exports.repoModule = Repo;
