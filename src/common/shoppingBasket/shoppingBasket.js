angular.module('shoppingBasket', [])
    .directive('shoppingBasket', function () {
        return {
            restrict: '',
            template: '/shoppingBasket.tpl.html',
            replace: true,

            link: function ($scope, $element, attr) {
                var _
                minQuantity = 1,
                    maxQuantity = 10/*,
                 quantity = 1,
                 price = 1*/;

                $scope.quantity = 1;
                $scope.price = 10;
                $scope.description = 'Product Description goes here';

                /* $scope.quantity = function(value) {
                 if (angular.isDefined(value)) {
                 _quantity = value;
                 }
                 return _quantity;
                 };

                 $scope.price = function(value) {
                 if (angular.isDefined(value)) {
                 _price = value;
                 }
                 return _price;
                 };*/

                $scope.add = function () {
                    if($scope.quantity < maxQuantity) {
                        $scope.quantity+=1;
                    }
                };

                $scope.remove = function () {
                    if($scope.quantity > minQuantity) {
                        $scope.quantity-=1;
                    }
                };

                $scope.cost = function () {
                    return $scope.quantity * $scope.price;
                };
            }
        };

    });