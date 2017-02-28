console.log("connected");

angular
  .module("gameApp",['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider','$locationProvider'];
function config (  $routeProvider,   $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: "/templates/home.html",
      controller: "gameController",
      controllerAs: "gameCtrl"
    })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}
