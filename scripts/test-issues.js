var github = require("octonode");
var client = github.client();

var ghrepo         = client.repo('pksunkara/octonode');

ghrepo.issues(function (err, data, headers) {
  if(err) { 
    console.log(err);
  }

  console.log("data: " + JSON.stringify(data));

});
