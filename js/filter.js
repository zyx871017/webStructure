/**
 * @file Angular filter js
 * @Author Benjamin
 * @Date 2016-3-14
 */
angular.module("matrix.filter",[])
    .filter('a', function(value){
        return 'a'+ value;
    });