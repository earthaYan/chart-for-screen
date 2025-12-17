import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export const useEcharts = (options: echarts.EChartsCoreOption) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const resizeChart = () => {
    if (chartInstance.current) {
      chartInstance.current.resize();
    }
  };
  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
      window.addEventListener("resize", resizeChart);
      return () => {
        if (chartInstance.current) {
          // 清理图表实例
          chartInstance.current.dispose();
          chartInstance.current = null;
        }
        window.removeEventListener("resize", resizeChart);
      };
    }
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.setOption(options);
    }
  }, [options]);

  return {
    chartInstance,
    chartRef,
  };
};
