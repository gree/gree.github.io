/* @flow */
var App = {
  Model: {},
  Controller: {},
  Router: {},
  Util: {}
};

App.Util.getJSON = function (uri, reject, callback) {
  "use strict";

  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', uri, true);
  xhr.onreadystatechange = function () {
    var response, responseText;

    // Not complete
    if (xhr.readyState !== 4) return;

    responseText = xhr.responseText;

    // Error
    if(xhr.status !== 200) {
      reject({
        name: 'Error',
        message: responseText
      });
      return;
    }

    response = JSON.parse(responseText);
    callback(response);
  };

  xhr.send(null);
};

App.Model.Repositories = (function () {
  "use strict";
  function Repositories() {
    this.page = 1;
    this.previousPages = [];
    this.collection = [];
    this.per_page = 100;
    this.uri = "https://api.github.com/orgs/gree/repos";

    return this;
  }

  Repositories.prototype.add = function (repository) {
    this.collection.push(repository);
  };

  Repositories.prototype.get = function (sortBy) {
    sortBy = sortBy || '';
    var collection = this.collection;
    var date = sortBy.indexOf('at') !== -1;
    if (sortBy !== null) {
      collection = collection.sort(function (a, b) {
        a = a[sortBy];
        b = b[sortBy];
        if (date) {
          a = new Date(a);
          b = new Date(b);
        }
        return (a < b) ? 1 : -1;
      });
    }
    return collection;
  };

  Repositories.prototype.fetch = function () {
    var self = this;
    var uri = this.uri;
    uri += '?per_page=' + this.per_page;
    uri += '&page=' + this.page;

    return new Promise(function(resolve, reject) {
      try {
        if (self.previousPages.indexOf(self.page) !== -1) {
          resolve(self.collection);
        }
        self.previousPages.push(self.page);
        App.Util.getJSON(uri, reject, function (response) {
          response.forEach(function (repository) {
            var code = repository.language || '';
            code = code.replace(/\#/g, "sharp");
            code = code.replace(/\+/g, "plus");

            App.Model.Repositories.add({
              name: repository.name,
              description: repository.description,
              homepage: repository.homepage,
              html_url: repository.html_url,
              language: repository.language,
              pushed_at: repository.pushed_at,
              code: code
            });
          });
          resolve(self.collection);
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  return new Repositories();
}());

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

App.Router = (function () {
  "use strict";
  function Router () {
    this.routes = {
      '': 'Top',
      '#top': 'Top'
    };
  }

  Router.prototype.Launch = function (){
    try {
      var hash = window.location.hash;
      var name = this.routes[hash];
      this[name]();
    } catch (Exception) {
      this.Error(Exception);
    }
  };

  Router.prototype.Top = function () {
    App.Controller.Repositories;
  };

  Router.prototype.Error = function (Exception) {
    throw new Error(Exception);
  };

  return new Router();
}());

// Initial Router Launch
App.Router.Launch();
