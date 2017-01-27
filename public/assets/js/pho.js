var Pho = function(app_id) {
  var _loadJS = function(url, type, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.type = type;
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
  };


  var initializeScripts = function() {
    console.log("Pho-username tag loaded");
    Parse.initialize(app_id/*"myAppId" , "JAVASCRIPT_KEY"*/);
    Parse.serverURL = "https://mealcounter-parse.herokuapp.com/parse";

    var user = new Parse.User.current();
    console.log("username is "+user.getUsername())
    riot.mount('pho-username', { parseuser: user })
  };

  var loadTags = function() {
    console.log("Riot compiler loaded");
    console.log("Loading Pho-username tag");
    _loadJS("public/assets/js/pho-username.tag", "riot/tag", undefined, document.body);
    initializeScripts();
  };

  var loadRiot = function() {
    console.log("Parse JS loaded");
    console.log("Loading Riot compiler");
    _loadJS("http://rawgit.com/riot/riot/master/riot%2Bcompiler.min.js", "text/javascript", loadTags, document.body);
  };

  var init = function() {
    console.log("loading Parse JS");
    _loadJS('http://www.parsecdn.com/js/parse-latest.js', "text/javascript", loadRiot, document.body);
  };

};
