// @ts-ignore
import { BorderBox1 } from "@jiaminghi/data-view-react";
import "./index.less";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { fitChartSize } from "../../utils";
const Box1 = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const options = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: fitChartSize(40),
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      };
      chart.setOption(options);
      window.addEventListener("resize", () => {
        chart.resize();
      });
      return () => {
        window.removeEventListener("resize", () => {
          chart.resize();
        });
        // 清理图表实例
        chart.dispose();
      };
    }
  }, []);
  return (
    <div className="box1">
      <BorderBox1>
        <div ref={chartRef} className="chart-container"></div>
      </BorderBox1>
    </div>
  );
};

export default Box1;
