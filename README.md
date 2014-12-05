# Integrating AngularJS and D3: A Quick Example

This is an example of how to create a bar chart using AngularJS and D3.js. 
The sample was created in response to this stackoverflow question:
https://stackoverflow.com/questions/27309503/how-to-inject-d3-d3plus-together-in-angular-webapp/27311108#27311108

The solution present is quite simple and only contains 3 files: 
- the index.html, 
- the app.js (angularjs) and, 
- the stylesheet file.

## The Html Code

Firstly, the controller is bound to the `body` element. The actual element that will be used to display the chart is the `div` with the `.chart` style. The `.chart-caption` element is simply used to allow the user to enter data via an `input` element that is bound to the controllers `$scope.chart_data`. 

###### NOTE: The application expects comma separated values; no data or security validation is done.

    <body ng-controller="mainController">
      <div class='example'>
          <div class='chart'></div>
          <div class='chart-caption'>
              Enter data: <input ng-model="chart_data" value=""> 
              <span class='button' ng-click="updateChart()">Update Chart</span>
          </div>
      </div> 
    </body>
    
## The AngularJS Code

What's important is that we don't need to inject D3 into angularJS as it's just a global javascript object. This allows us to write the following directly into the `controller`.

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
	        /* +2 as we have a 1px margin */
	        .style("left", function(d) { return (index++) * (bar_width + 2) + "px"; }); 
		}

Here is a screenshot of the resulting code.

![screenshot](images/Screen Shot 2014-12-05 at 12.04.07 PM.png?raw=true)

Enjoy!

-harold
