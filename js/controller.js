/**
 * @file Angular Controller js
 * @Author Benjamin
 * @Date 2016-3-14
 */
angular.module("matrix.controller",[])
    .controller("OverviewCtrl",["$scope",'$state','$stateParams',function($scope,$state,$stateParams){
        $scope.open = function() {
            $scope.opened = true;
        };
    }])
    .controller('UserDistributeCtrl', ["$scope",'$state','$stateParams',function($scope,$state,$stateParams){

    }])
    .controller('DatePickerCtrl', ['$scope', function($scope){
        //$scope.today = function() {
        //    $scope.dt = new Date();
        //};
        //$scope.today();
        //
        //$scope.clear = function() {
        //    $scope.dt = null;
        //};
        //
        //$scope.inlineOptions = {
        //    customClass: getDayClass,
        //    minDate: new Date(),
        //    showWeeks: true
        //};
        //
        //$scope.dateOptions = {
        //    dateDisabled: disabled,
        //    formatYear: 'yy',
        //    maxDate: new Date(2020, 5, 22),
        //    minDate: new Date(),
        //    startingDay: 1
        //};
        //
        //// Disable weekend selection
        //function disabled(data) {
        //    var date = data.date,
        //        mode = data.mode;
        //    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        //}
        //
        //$scope.toggleMin = function() {
        //    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        //    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        //};
        //
        //$scope.toggleMin();

        $scope.open1 = function() {
            $scope.opened = true;
        };

        //$scope.open2 = function() {
        //    $scope.popup2.opened = true;
        //};
        //
        //$scope.setDate = function(year, month, day) {
        //    $scope.dt = new Date(year, month, day);
        //};
        //
        //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        //$scope.format = $scope.formats[0];
        //$scope.altInputFormats = ['M!/d!/yyyy'];
        //
        //$scope.popup1 = {
        //    opened: false
        //};
        //
        //$scope.popup2 = {
        //    opened: false
        //};
        //
        //var tomorrow = new Date();
        //tomorrow.setDate(tomorrow.getDate() + 1);
        //var afterTomorrow = new Date();
        //afterTomorrow.setDate(tomorrow.getDate() + 1);
        //$scope.events = [
        //    {
        //        date: tomorrow,
        //        status: 'full'
        //    },
        //    {
        //        date: afterTomorrow,
        //        status: 'partially'
        //    }
        //];
        //
        //function getDayClass(data) {
        //    var date = data.date,
        //        mode = data.mode;
        //    if (mode === 'day') {
        //        var dayToCheck = new Date(date).setHours(0,0,0,0);
        //
        //        for (var i = 0; i < $scope.events.length; i++) {
        //            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
        //
        //            if (dayToCheck === currentDay) {
        //                return $scope.events[i].status;
        //            }
        //        }
        //    }
        //
        //    return '';
        //}
    }])
    .controller('GlobalCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
        $scope.logout = function(){
            $rootScope.username = null;
            $rootScope.email = null;
        };
        //$document.find();
        $scope.initSubMenu = function(id){
            //alert(id);
            $scope.subMenuList = [
                {
                    name: '核心数据',
                    href: '#/overview/data'
                },
                {
                    name: '用户',
                    //href: '#/overview/userDistribute',
                    //sref: 'internet'
                    children: [
                        {
                            name: '用户分布',
                            href: '#/overview/userDistribute'
                        },
                        {
                            name: '用户画像',
                            href: '#/overview/userDistribute'
                        }
                    ]
                },
                {
                    name: '内容',
                    //href: '#/overview/userDistribute',
                    //sref: 'internet'
                    children: [
                        {
                            name: '视频',
                            href: '#/overview/userDistribute'
                        },
                        {
                            name: '专辑',
                            href: '#/overview/userDistribute'
                        },
                        {
                            name: '频道',
                            href: '#/overview/userDistribute'
                        },
                        {
                            name: '排行榜',
                            href: '#/overview/userDistribute'
                        }
                    ]
                },
                {
                    name: '自定义',
                    //href: '#/overview/userDistribute',
                    //sref: 'internet'
                    children: [
                        {
                            name: '自定义报表1',
                            href: '#/overview/userDistribute'
                        },
                        {
                            name: '自定义报表2',
                            href: '#/overview/userDistribute'
                        }
                    ]
                }];
        }
    }]);