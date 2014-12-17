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
