// @ts-ignore
import { BorderBox1 } from "@jiaminghi/data-view-react";
import "./index.less";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const Box2 = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const options = {
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
      };
      chart.setOption(options);
      return () => {
        chart.dispose();
      };
    }
  }, []);
  return (
    <div className="box">
      <BorderBox1>
        <div className="chart-container" ref={chartRef}></div>
      </BorderBox1>
    </div>
  );
};

export default Box2;
