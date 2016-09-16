app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'TaskListController',
        templateUrl: 'app/taskList/taskList.view.html'
    })    
}]);
