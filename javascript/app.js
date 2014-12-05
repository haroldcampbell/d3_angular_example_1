/* Hard coded for simplicty. A better approach would be to use relative values. */
var chart_width = 500;
var chart_height = 250;

angular.module('d3App', [])
	.controller('mainController', ["$scope", function($scope){
		$scope.chart_data = "40, 80, 15, 60, 23, 95";

		$scope.updateChart = function() {
			var index = 0;
			var data = angular.fromJson("[" + $scope.chart_data + "]");
			var bar_width = 500 / (data.length); 

			/* Clear out the existing elements. */
			d3.selectAll('.chart').selectAll('div').remove();

			d3.select(".chart")
	        .selectAll("div")
	        .data(data)
	        .enter().append("div")
	        .style("width", function(d) { return bar_width + "px"; })
	        .style("height", function(d) { return d + "%"; })
	        .style("left", function(d) { return (index++) * (bar_width + 2) + "px"; }); /* +2 as we have a 1px margin*/
		}

		/* Show the chart on load. */
		$scope.updateChart();
	}]);
