/*! HTML5 Enabling Script v1.0.5 - https://github.com/niclasgelin/html5-js */
/*
 * A minimal HTML5 elements shim.
 *
 * This is free and unencumbered software released into the public domain.
 * For more information, please refer to: http://unlicense.org
 */
(function() {
  var elements = ["header","hgroup","footer","article","section","aside","nav","figure","figcaption","embed","audio","video","canvas","details","summary","time","mark"],
      fragment = document.createDocumentFragment();
  for (var i in elements) {
    fragment.appendChild(document.createElement(elements[i]));
  }
})();
