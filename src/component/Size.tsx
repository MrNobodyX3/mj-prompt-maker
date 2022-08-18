import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import DropDown from "./Dropdown";
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

  const [scale, setScale] = useState(1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (aspectWidth === aspectHeight) {
      props.onChange(1024, 1024);
      setMaxWidth(1024);
      setMaxHeight(1024);
    } else if (aspectWidth > aspectHeight) {
      const diff = aspectWidth / aspectHeight;
      props.onChange(Math.ceil(1024 * diff), 102);
      setMaxWidth(1024);
      setMaxHeight(Math.round(1024 / diff));
    } else {
      const diff = aspectHeight / aspectWidth;
      props.onChange(1024, Math.ceil(1024 * diff));
      setMaxWidth(Math.round(1024 / diff));
      setMaxHeight(1024);
    }
    setScale(1);
  }, [aspectWidth, aspectHeight]);

  return (
    <div className={sstyle.Root}>
      <DropDown onClick={setShow} title="Scale Tool" show={show} />
      {show && (
        <>
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
              max={aspectHeight * 16}
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
              max={aspectWidth * 16}
              step={1}
              onChange={(e) => {
                setAspectHeight(Number(e.target.value));
              }}
            />
          </div>
          <div className={sstyle.Scale}>
            Scale{" "}
            <button
              className={sstyle.ButtonSmall}
              onClick={() => {
                //   if max width or height is <= than 256 after scaling, don't scale
                if (maxWidth <= 256 || maxHeight <= 256) {
                  return;
                }
                setScale(0.25);
              }}
            />
            <button
              className={sstyle.ButtonMedium}
              onClick={() => {
                setScale(0.5);
              }}
              style={{ backgroundColor: scale > 0.4 ? "aliceblue" : "black" }}
            />
            <button
              className={sstyle.ButtonLarge}
              onClick={() => {
                setScale(1);
              }}
              style={{ backgroundColor: scale > 0.9 ? "aliceblue" : "black" }}
            />
          </div>
          <div className={sstyle.Frame}>
            <div
              className={sstyle.Image}
              style={{
                width: `${(maxWidth / 2) * scale}px`,
                height: `${(maxHeight / 2) * scale}px`,
              }}
            >
              <div className={sstyle.ImageScale}>
                {Math.ceil(maxWidth * scale)}x{Math.ceil(maxHeight * scale)}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
