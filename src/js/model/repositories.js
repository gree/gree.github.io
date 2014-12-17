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
