var Pho = (function() {
  var _loadJS = function(url, type, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.type = "";

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};


var initialize = function() {
  Parse.initialize("myAppId" /*, "JAVASCRIPT_KEY"*/);
  Parse.serverURL = "https://mealcounter-parse.herokuapp.com/parse";

  var user = new Parse.User.current();
  riot.mount('pho-username', { parseuser: user })
}

var loadRiot = function() {
  _loadJS("http://rawgit.com/riot/riot/master/riot%2Bcompiler.min.js", "text/javascript", initialize, document.body);
}

var loadTags = function() {
  _loadJS("public/assets/js/pho-username.tag", "riot/tag", loadRiot, document.body);
}

_loadJS('http://www.parsecdn.com/js/parse-latest.js', "text/javascript", loadTags, document.body);
});
