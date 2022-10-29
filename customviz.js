/**
* Welcome to the Looker Visualization Builder! Please refer to the following resources
* to help you write your visualization:
*  - API Documentation - https://github.com/looker/custom_visualizations_v2/blob/master/docs/api_reference.md
*  - Example Visualizations - https://github.com/looker/custom_visualizations_v2/tree/master/src/examples
**/

const visObject = {
  /**
  * Configuration options for your visualization. In Looker, these show up in the vis editor
  * panel but here, you can just manually set your default values in the code.
  **/
  options: {
    first_option: {
      type: "string",
      label: "My First Option",
      default: "Default Value"
    },
    second_option: {
      type: "number",
      label: "My Second Option",
      default: 42
    }
  },

  /**
  * The create function gets called when the visualization is mounted but before any
  * data is passed to it.
  **/
  create: function(element, config){
    element.innerHTML = '<div id="chartdiv" style="width: 100%;height:500px;"></div>';

  },

  /**
  * UpdateAsync is the function that gets called (potentially) multiple times. It receives
  * the data and should update the visualization with the new data.
  **/
  updateAsync: function(data, element, config, queryResponse, details, doneRendering){

    const iterator = queryResponse.fields.dimensions[0].name;
    const grouping_dim = queryResponse.fields.dimensions[1].name;
    const plot_measure = queryResponse.fields.measures[0].name;
    var iterator_list = [];
    var allData = data.reduce((prev,val,key)=>{
      if(!prev[val[iterator].value]){
        prev[val[iterator].value] = []
      }
      prev[val[iterator].value].push(val.iterator)
      iterator_list.push(val[iterator].value)
      return prev
      },{});
// {
  // '2005': [
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Delta Air Lines",
    //     "flights.count": 658019
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "American Eagle Airlines",
    //     "flights.count": 531815
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "US Airways",
    //     "flights.count": 425427
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Jetblue Airways",
    //     "flights.count": 110954
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Southwest Airlines",
    //     "flights.count": 1035777
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Airtran Airways Corporation",
    //     "flights.count": 195302
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Atlantic Southeast Airlines",
    //     "flights.count": 303005
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "American Airlines",
    //     "flights.count": 673223
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Atlantic Coast Airlines",
    //     "flights.count": 136474
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "United Airlines",
    //     "flights.count": 485646
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Continental Airlines",
    //     "flights.count": 296603
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Northwest Airlines",
    //     "flights.count": 480586
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Continental Express Airlines",
    //     "flights.count": 403742
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Sky West Airlines",
    //     "flights.count": 517270
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Hawaiian Airlines",
    //     "flights.count": 48165
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": null,
    //     "flights.count": 53243
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "American Trans Air, Inc.",
    //     "flights.count": 44077
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "America West Airlines",
    //     "flights.count": 197617
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Comair (Delta Connections)",
    //     "flights.count": 381154
    //   },
    //   {
    //     "flights.depart_year": 2005,
    //     "carriers.name": "Alaska Airlines",
    //     "flights.count": 158017
    //   }],

  //   '2004': [{
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Alaska Airlines",
    //     "flights.count": 166985
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "US Airways",
    //     "flights.count": 419946
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Continental Express Airlines",
    //     "flights.count": 367696
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Southwest Airlines",
    //     "flights.count": 990519
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "America West Airlines",
    //     "flights.count": 195807
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Airtran Airways Corporation",
    //     "flights.count": 162569
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "American Trans Air, Inc.",
    //     "flights.count": 75515
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "American Eagle Airlines",
    //     "flights.count": 483151
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Northwest Airlines",
    //     "flights.count": 507320
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Continental Airlines",
    //     "flights.count": 299310
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "American Airlines",
    //     "flights.count": 698482
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Atlantic Southeast Airlines",
    //     "flights.count": 277882
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Sky West Airlines",
    //     "flights.count": 463419
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Hawaiian Airlines",
    //     "flights.count": 48077
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Jetblue Airways",
    //     "flights.count": 89825
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Delta Air Lines",
    //     "flights.count": 687579
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "United Airlines",
    //     "flights.count": 555787
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Atlantic Coast Airlines",
    //     "flights.count": 264833
    //   },
    //   {
    //     "flights.depart_year": 2004,
    //     "carriers.name": "Comair (Delta Connections)",
    //     "flights.count": 373311
    //   }],
  //   '2003': [{
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Continental Airlines",
    //     "flights.count": 302750
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Southwest Airlines",
    //     "flights.count": 958555
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Atlantic Coast Airlines",
    //     "flights.count": 291566
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Sky West Airlines",
    //     "flights.count": 403122
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "American Trans Air, Inc.",
    //     "flights.count": 69166
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Alaska Airlines",
    //     "flights.count": 161603
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Hawaiian Airlines",
    //     "flights.count": 7849
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Comair (Delta Connections)",
    //     "flights.count": 133
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Delta Air Lines",
    //     "flights.count": 660632
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "America West Airlines",
    //     "flights.count": 189324
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "American Airlines",
    //     "flights.count": 752186
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "United Airlines",
    //     "flights.count": 543953
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Continental Express Airlines",
    //     "flights.count": 328080
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Jetblue Airways",
    //     "flights.count": 67161
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Airtran Airways Corporation",
    //     "flights.count": 144664
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "US Airways",
    //     "flights.count": 411881
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "American Eagle Airlines",
    //     "flights.count": 429094
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Atlantic Southeast Airlines",
    //     "flights.count": 273064
    //   },
    //   {
    //     "flights.depart_year": 2003,
    //     "carriers.name": "Northwest Airlines",
    //     "flights.count": 499156
    //   }],
  //   '2002': [{
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Airtran Airways Corporation",
    //     "flights.count": 37
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "American Airlines",
    //     "flights.count": 851815
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "American Eagle Airlines",
    //     "flights.count": 439053
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Continental Airlines",
    //     "flights.count": 325013
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "American Trans Air, Inc.",
    //     "flights.count": 11
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "America West Airlines",
    //     "flights.count": 195883
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Delta Air Lines",
    //     "flights.count": 728581
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Northwest Airlines",
    //     "flights.count": 513244
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Atlantic Coast Airlines",
    //     "flights.count": 115
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Alaska Airlines",
    //     "flights.count": 159192
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Atlantic Southeast Airlines",
    //     "flights.count": 111
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "United Airlines",
    //     "flights.count": 587839
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Jetblue Airways",
    //     "flights.count": 29
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "US Airways",
    //     "flights.count": 511067
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Southwest Airlines",
    //     "flights.count": 955771
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Continental Express Airlines",
    //     "flights.count": 38
    //   },
    //   {
    //     "flights.depart_year": 2002,
    //     "carriers.name": "Sky West Airlines",
    //     "flights.count": 122
    //   }],
  //   '2001': [{
    //     "flights.depart_year": 2001,
    //     "carriers.name": "Southwest Airlines",
    //     "flights.count": 923306
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "America West Airlines",
    //     "flights.count": 209670
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "American Eagle Airlines",
    //     "flights.count": 408334
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "Northwest Airlines",
    //     "flights.count": 533074
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "Delta Air Lines",
    //     "flights.count": 834601
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "Trans World Airlines",
    //     "flights.count": 244638
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "Aloha Airlines",
    //     "flights.count": 53770
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "United Airlines",
    //     "flights.count": 704823
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "Alaska Airlines",
    //     "flights.count": 156412
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "US Airways",
    //     "flights.count": 688653
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "American Airlines",
    //     "flights.count": 716885
    //   },
    //   {
    //     "flights.depart_year": 2001,
    //     "carriers.name": "Continental Airlines",
    //     "flights.count": 377277
    //   }],
  //   '2000': [{
    //     "flights.depart_year": 2000,
    //     "carriers.name": "United Airlines",
    //     "flights.count": 903091
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "Northwest Airlines",
    //     "flights.count": 638647
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "Trans World Airlines",
    //     "flights.count": 310728
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "Alaska Airlines",
    //     "flights.count": 178885
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "Delta Air Lines",
    //     "flights.count": 1057028
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "US Airways",
    //     "flights.count": 867102
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "Aloha Airlines",
    //     "flights.count": 11064
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "Southwest Airlines",
    //     "flights.count": 1056804
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "American Airlines",
    //     "flights.count": 861876
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "America West Airlines",
    //     "flights.count": 253681
    //   },
    //   {
    //     "flights.depart_year": 2000,
    //     "carriers.name": "Continental Airlines",
    //     "flights.count": 457260
    //   }],
  //   '1999':  [ {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "American Airlines",
    //     "flights.count": 398
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "US Airways",
    //     "flights.count": 852
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "Alaska Airlines",
    //     "flights.count": 86
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "America West Airlines",
    //     "flights.count": 118
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "Delta Air Lines",
    //     "flights.count": 620
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "Northwest Airlines",
    //     "flights.count": 668
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "Trans World Airlines",
    //     "flights.count": 64
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "United Airlines",
    //     "flights.count": 414
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "Southwest Airlines",
    //     "flights.count": 18
    //   },
    //   {
    //     "flights.depart_year": 1999,
    //     "carriers.name": "Continental Airlines",
    //     "flights.count": 208

    //   }
    // ]

  // }


// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
am4core.globalAdapter.addAll(2);
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.padding(40, 40, 40, 40);
chart.numberFormatter.numberFormat = "#,###.";
var label = chart.plotContainer.createChild(am4core.Label);
label.x = am4core.percent(97);
label.y = am4core.percent(95);
label.horizontalCenter = "right";
label.verticalCenter = "middle";
label.dx = -15;
label.fontSize = 50;

var playButton = chart.plotContainer.createChild(am4core.PlayButton);
playButton.x = am4core.percent(97);
playButton.y = am4core.percent(95);
playButton.dy = -2;
playButton.verticalCenter = "middle";
playButton.events.on("toggled", function (event) {
  if (event.target.isActive) {
    play();
  } else {
    stop();
  }
});

var stepDuration = 4000;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = grouping_dim;
// categoryAxis.dataFields.category = "carriers.name";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.disabled = false;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.rangeChangeEasing = am4core.ease.linear;
valueAxis.rangeChangeDuration = stepDuration;
valueAxis.extraMax = 0.1;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = grouping_dim;
// series.dataFields.categoryY = "carriers.name";
// series.dataFields.valueX = "flights.count";
series.dataFields.valueX = plot_measure;
series.tooltipText = "{valueX.value}";
series.columns.template.strokeOpacity = 0;
series.columns.template.column.cornerRadiusBottomRight = 5;
series.columns.maxColumns = 1;
series.columns.template.column.cornerRadiusTopRight = 5;
series.interpolationDuration = stepDuration;
series.interpolationEasing = am4core.ease.linear;
var labelBullet = series.bullets.push(new am4charts.LabelBullet());
labelBullet.label.horizontalCenter = "right";
labelBullet.label.text = "{values.valueX.workingValue}";
labelBullet.label.textAlign = "end";
labelBullet.label.dx = -10;
labelBullet.label.maxColumns = 1;
chart.zoomOutButton.disabled = true;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function (fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});
var iStep = 0;
var step = iterator_list[iStep];
label.text = step.toString();

var interval;

function play() {
  interval = setInterval(function () {
    nextstep();
  }, stepDuration);
  nextstep();
}

function stop() {
  if (interval) {
    clearInterval(interval);
  }
}

function nextstep() {
  iStep++;

  if (iStep >= iterator_list.length) {
    iStep = 0;
  }
  var iterateStep = iterator_list[iStep];
  var newData = allData[iterateStep];
  var itemsWithNonZero = 0;
  for (var i = 0; i < chart.data.length; i++) {
    console.log(chart.data[i]);
    // chart.data[i]["flights.count"] = newData[i]["flights.count"];
    chart.data[i][plot_measure] = newData[i][plot_measure];
    if (chart.data[i][plot_measure] > 0) {
      itemsWithNonZero++;
    }
    // if (chart.data[i]["flights.count"] > 0) {
    //   itemsWithNonZero++;
    // }
  }

  if (itemsWithNonZero > 25) {
    itemsWithNonZero = 25;
  }

  if (iStep == iterator_list.length) {
    series.interpolationDuration = stepDuration / 4;
    valueAxis.rangeChangeDuration = stepDuration / 4;
  } else {
    series.interpolationDuration = stepDuration;
    valueAxis.rangeChangeDuration = stepDuration;
  }

  chart.invalidateRawData();
  label.text = step.toString();

  categoryAxis.zoom({
    start: 0,
    end: itemsWithNonZero / categoryAxis.dataItems.length,
  });
}

categoryAxis.sortBySeries = series;

chart.data = JSON.parse(JSON.stringify(allData[iterator_list[iStep]]));
categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });

series.events.on("inited", function () {
  setTimeout(function () {
    playButton.isActive = true; // this          starts interval
  }, 2000);
});





doneRendering()
}
};

looker.plugins.visualizations.add(visObject);
