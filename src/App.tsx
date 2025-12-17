import "./App.less";
import Header from "./components/Header";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import Box5 from "./components/Box5";

function App() {
  return (
    <>
      <div className="app">
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
