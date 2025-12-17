import { useEffect, useRef } from "react";

import * as echarts from "echarts/core";
import { BarChart, PieChart, RadarChart, LineChart } from "echarts/charts";
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  PieChart,
  RadarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  ToolboxComponent,
]);

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
