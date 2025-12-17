import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export const useEcharts = (options: echarts.EChartsCoreOption) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
      chartInstance.current.setOption(options);
      return () => {
        if (chartInstance.current) {
          // 清理图表实例
          chartInstance.current.dispose();
          chartInstance.current = null;
        }
      };
    }
  }, [options]);

  return {
    chartInstance,
    chartRef,
  };
};
