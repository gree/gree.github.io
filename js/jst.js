this["JST"] = this["JST"] || {};

this["JST"]["error"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="flex">\n  <div class="card flex__item">\n    <h2 class="card__head">\n      About Us\n    </h2>\n    <div class="card__body">\n      <h3>Making the world a better place through open source software.</h3>\n      <ul>\n        <li>\n          <a href="http://corp.gree.net/global/">\n            Corporate Site\n          </a>\n        </li>\n        <li>\n          <a href="http://corp.gree.net/global/jobs/">\n            Work With Us\n          </a>\n        </li>\n        <li>\n          <a href="http://labs.gree.jp/blog/">\n            Engineers\' Blog\n          </a>\n        </li>\n        <li>\n          <a href="http://cr.gree.jp/">\n            Creators\' Blog\n          </a>\n        </li>\n        <li>\n          <a href="http://corp.gree.net/jp/ja/csr/">\n            Corporate Social Responsibility\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="card flex__item">\n    <h2\n      class="\n        card__head\n        card__head--error">\n        ' +
((__t = ( name )) == null ? '' : __t) +
'\n    </h2>\n    <div class="card__body">\n      <p class="text--lead">\n        ' +
((__t = ( message )) == null ? '' : __t) +
'\n      </p>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["repositories"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 for(var i = -1; repositories.length > i; i++) { ;
__p += '\n  ';
 if ((i + 1) % 4 === 0) { ;
__p += '\n<div class="flex">\n  ';
 } ;
__p += '\n\n  ';
 if (i === -1) { ;
__p += '\n\n  <div class="card flex__item">\n    <h2 class="card__head">\n      About Us\n    </h2>\n    <div class="card__body">\n      <h3>Making the world a better place through open source software.</h3>\n      <ul>\n        <li>\n          <a href="http://corp.gree.net/global/">\n            Corporate Site\n          </a>\n        </li>\n        <li>\n          <a href="http://corp.gree.net/global/jobs/">\n            Work With Us\n          </a>\n        </li>\n        <li>\n          <a href="http://labs.gree.jp/blog/">\n            Engineers\' Blog\n          </a>\n        </li>\n        <li>\n          <a href="http://cr.gree.jp/">\n            Creators\' Blog\n          </a>\n        </li>\n        <li>\n          <a href="http://corp.gree.net/jp/ja/csr/">\n            Corporate Social Responsibility\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  ';
 } else { ;
__p += '\n\n  <a\n    class="card flex__item"\n    target="_blank"\n    href="' +
((__t = ( (repositories[i].homepage) ? repositories[i].homepage : repositories[i].html_url )) == null ? '' : __t) +
'"\n  >\n    <h2\n      class="\n        card__head\n        card__head--gray\n        card__head--' +
((__t = ( repositories[i].code )) == null ? '' : __t) +
'">\n      ' +
((__t = ( repositories[i].name )) == null ? '' : __t) +
'\n    </h2>\n    <div class="card__body">\n      ';
 if (repositories[i].language) { ;
__p += '\n      <p class="text--minor">\n        Language\n      </p>\n      <p class="text--strong">\n        ' +
((__t = ( repositories[i].language )) == null ? '' : __t) +
'\n      </p>\n      ';
 } ;
__p += '\n      ';
 if (repositories[i].description) { ;
__p += '\n      <p class="text--minor">\n        Description\n      </p>\n      <p class="text--lead">\n        ' +
((__t = ( repositories[i].description )) == null ? '' : __t) +
'\n      </p>\n      ';
 } ;
__p += '\n    </div>\n  </a>\n\n  ';
 } ;
__p += '\n\n  ';
 if ((i + 2) % 4 === 0) { ;
__p += '\n</div>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n';

}
return __p
};