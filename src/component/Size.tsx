import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import sstyle from "./Size.module.css";

type SizeProps = {
  width: number;
  height: number;
  onChange: (width: number, height: number) => void;
};

export default function Size(props: SizeProps) {
  const [aspectWidth, setAspectWidth] = useState(1);
  const [aspectHeight, setAspectHeight] = useState(1);
  const [maxWidth, setMaxWidth] = useState(1024);
  const [maxHeight, setMaxHeight] = useState(1024);

  useEffect(() => {
    if (aspectWidth === aspectHeight) {
      props.onChange(256, 256);
      setMaxWidth(1024);
      setMaxHeight(1024);
    } else if (aspectWidth > aspectHeight) {
      const diff = aspectWidth / aspectHeight;
      props.onChange(Math.ceil(256 * diff), 256);
      setMaxWidth(1024);
      setMaxHeight(Math.round(1024 / diff));
    } else {
      const diff = aspectHeight / aspectWidth;
      props.onChange(256, Math.ceil(256 * diff));
      setMaxWidth(Math.round(1024 / diff));
      setMaxHeight(1024);
    }
  }, [aspectWidth, aspectHeight]);

  return (
    <div className={sstyle.Root}>
      <h3>Scale Tool</h3>
      <div>
        {maxWidth}x{maxHeight}
      </div>
      <div>
        Aspect Ratio{" "}
        <input
          className={sstyle.Input}
          type="number"
          value={aspectWidth}
          min={1}
          step={1}
          onChange={(e) => {
            setAspectWidth(Number(e.target.value));
          }}
        />
        {" : "}
        <input
          className={sstyle.Input}
          type="number"
          value={aspectHeight}
          min={1}
          step={1}
          onChange={(e) => {
            setAspectHeight(Number(e.target.value));
          }}
        />
      </div>
      <div className={sstyle.Scale}></div>
      <div className={sstyle.Frame}>
        <div
          className={sstyle.Image}
          style={{
            width: `${props.width / 2}px`,
            height: `${props.height / 2}px`,
          }}
        >
          <div className={sstyle.ImageScale}>
            {props.width}x{props.height}
          </div>
        </div>
      </div>
    </div>
  );
}
