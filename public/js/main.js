var app = angular.module("MyApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'MainController',
        templateUrl: '/templates/main.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
