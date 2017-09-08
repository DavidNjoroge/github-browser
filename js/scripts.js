var apiKey = require("./../.env").apiKey

exports.getRepos = function() {
  $.get('https://api.github.com/users/DavidNjoroge/repos?access_token=' + 'cdd1b801556ff7943246cac4feaaf460fb0fad24').then(function(response) {
    dat = JSON.stringify(response)
    data = JSON.parse(dat)
    console.log(data);
    // data.forEach(function(elm, i) {
    //   $('#asdf').append('<li>' + elm[i].name + '</li>')
    // })
    for (var i = 0; i < data.length; i++) {

      $('#asdf').append('<li>' + data[i].name + '</li>')
    }
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });

};

var appender = function() {
  for (var i = 0; i < data.length; i++) {

    $('#asdf').append('<li>' + data[i].name + '</li>')
  }
}
