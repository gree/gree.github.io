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
