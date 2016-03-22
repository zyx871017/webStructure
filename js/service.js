/**
 * @file Angular Service js
 * @Author Benjamin
 * @Date 2016-3-14
 */
angular.module("matrix.service",[])
    .factory('TodoService',['$timeout', function($timeout){
      return {
        getAllTodos: function(){
          $timeout(function(){
            return [{title:5,completed:true},{title:"Test you aaa",completed:false}];
          },3000);
        }
      }
    }])
    .factory('EchartsService', ['$document','$http','restResource', function($document){
    	var echarts_div = $document.find('#echarts_div');
    	var myChart = echarts.init(echarts_div[0]);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }]);