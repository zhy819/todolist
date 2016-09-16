taskList.controller('TaskListController', ['$scope', function($scope){
    
    //test data
    $scope.undoTasks = [
        {
            name : 'Task 1',
            content : 'This is the content for task 1'
        },
        {
            name : 'Task 2',
            content : 'This is the content for task 2'
        },
        {
            name : 'Task 3',
            content : 'This is the content for task 3'            
        }
    ];
    
}]);