export const scale = () => {
  // 设计稿的宽高
  const designWidth = 1920;
  const designHeight = 1080;

  const scaleX = document.documentElement.clientWidth / designWidth;
  const scaleY = document.documentElement.clientHeight / designHeight;

  return Math.min(scaleX, scaleY);
};

const designWidth = 1920;
const designHeight = 1080;
export const px2vw = (px: number) => {
  return (px / designWidth) * 100 + "vw";
};

export const px2vh = (px: number) => {
  return (px / designHeight) * 100 + "vh";
};

export const fitChartSize = (size: number, defaultWidth = 1920) => {
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return size;
  const scale = clientWidth / defaultWidth;
  return Number((size * scale).toFixed(3));
};
