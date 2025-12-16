// @ts-ignore
import { BorderBox1, ScrollBoard } from "@jiaminghi/data-view-react";
import "./index.less";
import { useState } from "react";

const Box4 = () => {
  const [config] = useState({
    header: ["属性", "值"],
    data: [
      ["周一", 120],
      ["周二", 100],
      ["周三", 90],
      ["周四", 110],
      ["周五", 0],
    ],
  });
  return (
    <div className="box4">
      <BorderBox1>
        <ScrollBoard
          config={config}
          style={{ width: "1280px", height: "350px" }}
        />
      </BorderBox1>
    </div>
  );
};

export default Box4;
