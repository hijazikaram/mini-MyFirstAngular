angular.module('friendsList')
    .controller('mainCtrl', function($scope) {
        $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
        $scope.addFriend = function() {
            $scope.friends.push($scope.newFriend);
            $scope.newFriend = '';
        }
});
