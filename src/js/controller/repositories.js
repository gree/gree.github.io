App.Controller.Repositories = (function () {
  "use strict";

  var page = 1;

  function init () {
    getRepositories(page);
  }

  function render() {
    var template = JST.repositories;
    var repositories = App.Model.Repositories.get('pushed_at');
    var html = template({
      repositories: repositories
    });
    var elem = document.getElementById('js__repositories');
    elem.innerHTML = html;
  }

  function error(name, message) {
    var template = JST.error;
    var html = template({
      name: name,
      message: message
    });
    var elem = document.getElementById('js__repositories');
    elem.innerHTML = html;
  }

  function getRepositories(page) {
    App.Model.Repositories.fetch(page).then(function () {
      render();
    }, function (e) {
      error(e.name, e.message);
    });
  }
  init();
}());
