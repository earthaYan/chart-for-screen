export const scale = () => {
  // 设计稿的宽高
  const designWidth = 1920;
  const designHeight = 1080;

  const scaleX = document.documentElement.clientWidth / designWidth;
  const scaleY = document.documentElement.clientHeight / designHeight;

  return Math.min(scaleX, scaleY);
};
