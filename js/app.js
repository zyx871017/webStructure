/**
 * @file Angular boot file
 * @Author Benjamin
 * @Date 2016-3-14
 */
angular.module("matrix",[
    'ui.router',
    'ui.bootstrap',
    'matrix.controller',
    'matrix.filter',
    'matrix.directive',
    'matrix.service',
    'ui.website'
]).config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

        //$urlRouterProvider.otherwise('/');
        /**
         *
         */
        $stateProvider.state('overview',{
            url: "",
            views: {
                //'menu@':{
                //  templateUrl: 'template/overview/menu.html'
                //},
                'container@': {
                    controller: 'OverviewCtrl',
                    templateUrl: 'template/overview/data.html',
                }
            }
        });

        $stateProvider.state('overview.data',{
            url: "/overview/data",
            views: {
                'container@': {
                    controller: 'OverviewCtrl',
                    templateUrl: 'template/overview/data.html',
                }
            }
        });

        $stateProvider.state('overview.userDistribute',{
            url: "/overview/userDistribute",
            views: {
                'container@': {
                    controller: 'UserDistributeCtrl',
                    templateUrl: 'template/overview/user_distribute.html',
                }
            }
        });

        $stateProvider.state('movie',{
            url: "/movie",
            views: {
                //'menu@':{
                //  templateUrl: 'template/overview/menu.html'
                //},
                'container@': {
                    controller: 'OverviewCtrl',
                    templateUrl: 'template/movie/data.html',
                }
            }
        });


//-------------------------------------------------
        /**
         * module article $state config begin
         */
        $stateProvider.state('article',{
            //mean 此状态不能被单独激活.只能由其子状态激活
            abstract:"true",
            templateUrl:'template/article/article.html'
        });
        ////////////////////
        ///article > all///
        //////////////////
        $stateProvider.state('all',{
            url: "/article",
            parent:'article',
            templateUrl:'template/article/article.all.html'
        });
        ////////////////////
        ///article > type///
        //////////////////
        $stateProvider.state('type',{
            url: "/type",
            parent:'article',
            templateUrl:'template/article/article.type.html'
        });
        ////////////////////
        ///article > trash///
        //////////////////
        $stateProvider.state('trash',{
            url: "/trash",
            parent:'article',
            templateUrl:'template/article/article.all.html'
        });
        ////////////////////
        ///article > newArticle///
        //////////////////
        $stateProvider.state('newArticle',{
            url: "/newArticle",
            parent:'article',
            templateUrl:'template/article/article.newArticle.html'
        });
        //module article config end

        /**
         * module album $state config begin
         */
        $stateProvider.state('album',{
            url:'/album',
            templateUrl:'template/album/album.html'
        });

        $stateProvider.state('echarts',{
            url:'/echarts',
            templateUrl:'template/echarts/echarts.html',
            controller: 'EchartsController'
        });

        /**
         * module comment $state config begin
         */
        $stateProvider.state('comment',{
            url:'/comment',
            templateUrl:'template/comment/comment.html'
        });
        $stateProvider.state('comment.writeComment',{
            url:'/write',
            controller:'WriteCommentCtrl',
            templateUrl:'template/comment/writeComment.html'
        });

        $stateProvider.state('aboutMe',{
            url:'/about',
            templateUrl:'template/aboutMe.html'
        });
        $stateProvider.state('todos',{
            url:'/todos',
            controller: "TodosCtrl",
            resolve:{
                todos: function($timeout, $q){
                    var defer = $q.defer();
                    $timeout(function(){
                        defer.resolve([{title:5,completed:true},{title:"Test you aaa",completed:false}]);
                    },1000);
                    return defer.promise;
                },
                // Example using function with returned promise.
                // This is the typical use case of resolve.
                // You need to inject any services that you are
                // using, e.g. $http in this example
                promiseObj:  function($http){
                    // $http returns a promise for the url data
                    return $http({method: 'GET', url: 'http://www.baidu.com'});
                },

                // Another promise example. If you need to do some
                // processing of the result, use .then, and your
                // promise is chained in for free. This is another
                // typical use case of resolve.
                promiseObj2:  function($http){
                    return $http({method: 'GET', url: 'http://www.shmin.net'})
                        .then (function (data) {
                            return data;
                        });
                }
            },
            templateUrl:'template/todos/todos.html'
        });
    }]).run(['$rootScope', '$q', '$timeout', function($rootScope, $q, $timeout){
    function initMenu(){
        var defer = $q.defer();
        //模拟加载菜单 邮箱 姓名 等全局数据
        $timeout(function(){
            $rootScope.menuList = [
                {
                    id: 1,
                    name: '生态概览',
                    //href: '#/overview',
                    //sref: 'overview'
                },
                {
                    id: 1,
                    name: '互联网',
                    //href: '#/internet',
                    //sref: 'internet'
                },
                {
                    id: 1,
                    name: '超级手机',
                    //href: '#/phone',
                    //sref: 'phone'
                },
                {
                    id: 1,
                    name: '超级电视',
                    //href: '#/tv',
                    //sref: 'tv'
                },
                {
                    id: 1,
                    name: '影视互联',
                    //href: '#/movie',
                    //sref: 'movie'
                },
                {
                    id: 1,
                    name: '乐视体育',
                    href: '#/sport',
                    //sref: 'sport'
                },
                {
                    name: '互联网金融',
                    //href: '#/finance',
                    //sref: 'finance'
                },
                {
                    id: 1,
                    name: '乐视汽车',
                    //href: '#/car',
                    //sref: 'car'
                }
            ];
            $rootScope.username = '刘德华';
            $rootScope.email = 'benjamin@le.com';

            $rootScope.subMenuList = [
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
        }, 1000);
    }
    initMenu();
}]);