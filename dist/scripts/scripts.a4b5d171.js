"use strict";angular.module("cfWatchApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.tree","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("cfWatchApp").controller("MainCtrl",["$scope","$http","GithubSearch",function(a,b,c){b.get("data/filter.json").then(function(b){a.list=b.data}),a.checkSubTree=function(b,d){d=void 0===d||d===!1?!0:!1,angular.forEach(b.items,function(a){a.checked=d}),d&&(a.finalQuery=c.createQueryFromNodes(a.query,a.list))},a.searchLink=function(){return c.getGithubNormalSearchUrl()+c.createQueryFromNodes(a.query,a.list)},a.search=function(){var b=c.createQueryFromNodes(a.query,a.list);c.search("repositories",b,function(b){a.githubResults=b.data.items,console.log(b)})}}]),angular.module("cfWatchApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cfWatchApp").factory("GithubSearch",["$resource",function(a){function b(){}function c(a,b){return void 0!==a.items&&a.items.length>0?void angular.forEach(a.items,function(a){c(a,b)}):void(void 0!==a.github&&a.checked&&angular.forEach(a.github,function(a){b.push(a)}))}var d="https://github.com/search?type=Repositories&ref=advsearch&q=",e=a("https://api.github.com/search/:type?q=:q",{type:"repositories",q:"",callback:"JSON_CALLBACK",per_page:50},{get:{method:"JSONP"}});return b.search=function(a,b,c){e.get({type:a,q:b},c)},b.createQueryFromNodes=function(a,b){var d=[];angular.forEach(b,function(a){c(a,d)});var e=a;return angular.forEach(d,function(a){e+=" user:"+a}),e},b.getGithubNormalSearchUrl=function(){return d},b}]);