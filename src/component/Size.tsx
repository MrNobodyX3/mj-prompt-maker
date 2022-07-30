import { wait } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import sstyle from "./Size.module.css";

type SizeProps = {
  width: number;
  height: number;
  onChangeW: (width: number) => void;
  onChangeH: (height: number) => void;
  HD: boolean;
  setHD: (HD: boolean) => void;
};

export default function Size(props: SizeProps) {
  const minNum = props.HD ? 128 : 64;
  const maxNum = props.HD ? 1024 : 512;
  const multiplier = props.HD ? 0.5 : 1;

  return (
    <div className={sstyle.Root}>
      <div>
        <label>
          --w {props.width} --h {props.height} {props.HD ? "--hd" : ""}
        </label>
      </div>
      <span>
        <input
          className={sstyle.Input}
          type="number"
          min={minNum}
          max={maxNum}
          value={props.width}
          onChange={(e) => props.onChangeW(Number(e.target.value))}
          onBlur={(e) => {
            if (Number(e.target.value) < minNum) {
              props.onChangeW(minNum);
            } else if (Number(e.target.value) > maxNum) {
              props.onChangeW(maxNum);
            }
          }}
        />
        x
        <input
          className={sstyle.Input}
          type="number"
          min={minNum}
          max={maxNum}
          value={props.height}
          onChange={(e) => props.onChangeH(Number(e.target.value))}
          onBlur={(e) => {
            if (Number(e.target.value) < minNum) {
              props.onChangeH(minNum);
            } else if (Number(e.target.value) > maxNum) {
              props.onChangeH(maxNum);
            }
          }}
        />{" "}
        Set HD:
        <input
          type="checkbox"
          checked={props.HD}
          onChange={(e) => {
            props.setHD(e.target.checked);
            if (Number(props.height) < minNum) {
              props.onChangeH(minNum);
            } else if (Number(props.height) > maxNum) {
              props.onChangeH(maxNum);
            }
            if (Number(props.width) < minNum) {
              props.onChangeW(minNum);
            } else if (Number(props.width) > maxNum) {
              props.onChangeW(maxNum);
            }
          }}
        />
      </span>
      <div className={sstyle.Sizer}>
        <div className={sstyle.Grid}>
          <div className={sstyle.Height}>
            <input
              type="range"
              min="0"
              max={maxNum}
              value={props.height}
              className={sstyle.HeightInput}
              onChange={(e) => {
                if (Number(e.target.value) >= minNum) {
                  props.onChangeH(Number(e.target.value));
                } else {
                  props.onChangeH(minNum);
                }
              }}
            />
          </div>
          <div className={sstyle.Box}>
            <div
              className={sstyle.Display}
              style={{
                width: props.width * multiplier,
                height: props.height * multiplier,
                fontSize: `${Math.min(props.width * multiplier * 0.2, 32)}px`,
              }}
            >
              {props.width} x {props.height}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={maxNum}
            value={props.width}
            className={sstyle.Width}
            onChange={(e) => {
              if (Number(e.target.value) >= minNum) {
                props.onChangeW(Number(e.target.value));
              } else {
                props.onChangeW(minNum);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
