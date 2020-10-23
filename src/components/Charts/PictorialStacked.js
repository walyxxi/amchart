import React, { useEffect } from "react"; import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const PictorialStacked = () => {
  const iconPath =
    "M132.281,264.564c51.24,0,92.931-41.681,92.931-92.918c0-50.18-87.094-164.069-90.803-168.891L132.281,0l-2.128,2.773c-3.704,4.813-90.802,118.71-90.802,168.882C39.352,222.883,81.042,264.564,132.281,264.564z";

  const iconPath2 = "M214.905,27.574c5.585-1.588,9.565-6.776,9.565-12.655v-1.771c0-7.25-5.896-13.147-13.145-13.147h-73.285c-7.245,0-13.142,5.897-13.142,13.147v1.771c0,6.215,4.417,11.583,10.412,12.862c-26.367,71.862-26.367,75.447-26.367,76.991V335.05c0,7.896,6.419,14.321,14.321,14.321h102.838c7.896,0,14.321-6.425,14.321-14.321V104.766C240.426,103.241,240.426,99.656,214.905,27.574z"

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.logo.disabled = true;

    chart.data = [{
      "name": "The first",
      "value": 354,
      "disabled": true
    }, {
      "name": "The second",
      "value": 245,
      "disabled": true
    }, {
      "name": "The third",
      "value": 187,
      "disabled": true
    }, {
      "name": "The fourth",
      "value": 123,
      "disabled": true
    }, {
      "name": "The fifth",
      "value": 87,
      "disabled": true
    }, {
      "name": "The sixth",
      "value": 45,
      "disabled": true
    }, {
      "name": "The seventh",
      "value": 23,
      "disabled": true
    }];

    let series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    series.stroke = am4core.color("white")

    series.maskSprite.path = iconPath2;
    series.labels.template.propertyFields.disabled = "disabled";
    series.ticks.template.propertyFields.disabled = "disabled";

    series.labelsContainer.width = 200;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";

    return () => chart.dispose()
  }, [])

  return (
    <div id="chartdiv" style={{ padding: "20px", width: "50%", height: "500px" }}></div>
  );
};

export default PictorialStacked;
