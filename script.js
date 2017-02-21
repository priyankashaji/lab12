// (function($scope) {
 var app = angular.module('myModule', []);
// // This is declaring a module. More on this in a moment
app.controller('myController', function($scope){
$scope.todoItems = ['Get milk', 'Finish lab', 'Water plants'];

$scope.addtodo=function(){
$scope.todoItems.push($scope.moreItem);

 };
 });
