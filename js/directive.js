/**
 * @file Angular Directive js
 * @Author Benjamin
 * @Date 2016-3-14
 */
angular.module("matrix.directive",[])
    .directive('focus', ['$timeout',
        /**
         * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
         */
            function ($timeout) {
            return function (scope, elem, attrs) {
                scope.$watch(attrs.focus, function (value) {
                    if (value) {
                        $timeout(function () {
                            elem[0].focus();
                        }, 0, false);
                    }
                });
            };
        }])
    .directive('onBlur',
        /**
         * Directive that executes an expression when the element is blurred
         */
        function () {
            return function (scope, element, attributes) {
                element.bind('blur', function () {
                    if (!element.is(':hidden')) {
                        scope.$apply(attributes.onBlur);
                    }
                });
                element.bind('keypress', function (event) {
                    if (event.which === 13) {
                        scope.$apply(attributes.onBlur);
                    }
                });
            };
        })
    .directive('timer', function(){
        return {
            restrict : 'EA',
            scope : {
                time : '='
            },
            controller : ["$scope", "$interval", function($scope, $interval){
                var time = $scope.time.split(":");
                var seconds = time[0]*3600 + time[1]*60+Number(time[2]);
                function formatTime(seconds){
                    if(seconds < 60){
                        if(seconds<10) return "00:00:0"+seconds;
                        return "00:00:"+seconds;
                    }else if(seconds < 3600){
                        var minute = Math.floor(seconds/60);
                        if(minute < 10) minute = "0"+minute;
                        var second = seconds%60;
                        if(second < 10) second = "0" + second;
                        return "0:"+minute+":"+second;
                    }else{
                        var hour = Math.floor(seconds/60/60);
                        var minute = Math.floor((seconds%60)/60);
                        if(minute < 10) minute = "0"+minute;
                        var second = seconds%60;
                        if(second < 10) second = "0" + second;
                        return hour+":"+minute+":"+second;
                    }
                }
                var interval = $interval(function(){
                    $scope.time = seconds--;
                    $scope.currentTime = formatTime($scope.time);
                    if($scope.time == 0){
                        $interval.cancel(interval);
                        interval = undefined;
                    }
                },1000);
                $scope.$on('destroy',function(){
                    if(interval){
                        $interval.cancel(interval);
                        interval = undefined;
                    }
                })
            }],
            template:'<h2>Time : {{currentTime}}</h2>'
        }
    }).directive('menulist',['$document',function(){
    return {
        'restrict': 'EA',
        scope: {
            data: '='
        },
        link: function(scope, ele, attr, ctrl){
            //scope.$watch('data', function(newValue, oldValue) {
            //    if (newValue !== oldValue) {
            //        // You actions here
            //        scope.data = newValue;
            //    }
            //}, true);
            console.log(scope.data);
            console.log(ele);
            console.log(attr);
            console.log(ctrl);
        },
        templateUrl: 'template/menu.html'
    }
}]);
