// @ts-ignore
import { BorderBox1 } from "@jiaminghi/data-view-react";
import "./index.less";
import { useEcharts } from "../../hooks/useEcharts";
import { useState } from "react";

const Box2 = () => {
  const [options] = useState({
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  });
  const { chartRef } = useEcharts(options);

  return (
    <div className="box2">
      <BorderBox1>
        <div className="chart-container" ref={chartRef}></div>
      </BorderBox1>
    </div>
  );
};

export default Box2;
