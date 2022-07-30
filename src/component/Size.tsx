import { useState } from "react";
import sstyle from "./Size.module.css";

type SizeProps = {
  width: number;
  height: number;
  onChangeW: (width: number) => void;
  onChangeH: (height: number) => void;
};

export default function Size(props: SizeProps) {
  return (
    <div className={sstyle.Root}>
      <div>
        <label>
          --w {props.width} --h {props.height}
        </label>
      </div>
      <span>
        <input
          type="number"
          value={props.width}
          onChange={(e) => props.onChangeW(Number(e.target.value))}
          onBlur={(e) => {
            if (Number(e.target.value) >= 64) {
              props.onChangeW(Number(e.target.value));
            } else {
              props.onChangeW(64);
            }
          }}
        />
        x
        <input
          type="number"
          value={props.height}
          onChange={(e) => props.onChangeH(Number(e.target.value))}
          onBlur={(e) => {
            if (Number(e.target.value) >= 64) {
              props.onChangeH(Number(e.target.value));
            } else {
              props.onChangeH(64);
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
              max="512"
              value={props.height}
              className={sstyle.HeightInput}
              onChange={(e) => {
                if (Number(e.target.value) >= 64) {
                  props.onChangeH(Number(e.target.value));
                } else {
                  props.onChangeH(64);
                }
              }}
            />
          </div>
          <div className={sstyle.Box}>
            <div
              className={sstyle.Display}
              style={{
                width: props.width,
                height: props.height,
                fontSize: `${Math.min(props.width / 5, 32)}px`,
              }}
            >
              {props.width} x {props.height}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="512"
            value={props.width}
            className={sstyle.Width}
            onChange={(e) => {
              if (Number(e.target.value) >= 64) {
                props.onChangeW(Number(e.target.value));
              } else {
                props.onChangeW(64);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
