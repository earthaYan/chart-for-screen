// @ts-ignore
import { Decoration8, Decoration5 } from "@jiaminghi/data-view-react";
import "./index.less";

const Header = () => {
  return (
    <div className="header">
      <Decoration8 style={{ width: "300px", height: "90px" }} />
      <div className="head-title">
        <span>趋势大屏</span>
        <Decoration5 style={{ with: "500px", height: "90px" }} />
      </div>
      <Decoration8 reverse={true} style={{ width: "300px", height: "90px" }} />
    </div>
  );
};

export default Header;
