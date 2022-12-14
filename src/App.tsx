import { useState } from "react";
import style from "./App.module.css";
import Size from "./component/Size";

function App() {
  const [width, setWidth] = useState(256);
  const [height, setHeight] = useState(256);
  const [isHD, setIsHD] = useState(false);

  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <div className={style.Panel}>
          <hr />
          <Size
            width={width}
            height={height}
            onChange={(width, height) => {
              setWidth(width);
              setHeight(height);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
