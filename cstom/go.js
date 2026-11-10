// hearthqiw.online/cstom/ → the CΨSTOM app. Keeps the query and hash, so invite links work through the QIW address:
// hearthqiw.online/cstom/?join=CODE opens the app with that invite.
(function () {
  var target = 'https://cstom-d454e4c9.base44.app/' + window.location.search + window.location.hash;
  window.location.replace(target);
})();
