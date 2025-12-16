import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { scale } from "./utils";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import Box5 from "./components/Box5";

function App() {
  const [scaleLevel, setScaleLevel] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      setScaleLevel(scale());
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="app"
        style={{ transform: `scale(${scaleLevel}) translate(-50%,-50%)` }}
      >
        <Header />
        <div className="line1">
          <Box1 />
          <Box2 />
          <Box3 />
        </div>
        <div className="line2">
          <Box4 />
          <Box5 />
        </div>
      </div>
    </>
  );
}

export default App;
