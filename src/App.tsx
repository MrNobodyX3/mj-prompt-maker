import { useState } from "react";
import style from "./App.module.css";

function App() {
  const [query, setQuery] = useState("");
  const [descriptors, setDescriptors] = useState([""]);
  const [images, setImages] = useState([""]);
  const [parameters, setParameters] = useState([
    {
      name: "Seed",
      agrument: "--seed",
      min: "0",
      max: "100000000",
      value: "42",
      toggle: false,
      type: "number",
    },
    {
      name: "Exclude",
      agrument: "--no",
      min: "",
      max: "",
      value: "",
      toggle: false,
      type: "none",
    },
    {
      name: "Video",
      agrument: "--video",
      min: "",
      max: "",
      value: "",
      toggle: false,
      type: "none",
    },
    {
      name: "Image Weight",
      agrument: "--iw",
      min: "-1.0",
      max: "100.0",
      value: "0.25",
      toggle: false,
      type: "number",
    },
    {
      name: "Fast Mode",
      agrument: "--fast",
      min: "",
      max: "",
      value: "",
      toggle: false,
      type: "none",
    },
    {
      name: "Version",
      agrument: "--v",
      min: "1",
      max: "3",
      value: "3",
      toggle: false,
      type: "number",
    },
    {
      name: "Quality",
      agrument: "--q",
      min: "0.25",
      max: "5.0",
      value: "1.0",
      toggle: false,
      type: "number",
    },
    {
      name: "High Definition",
      agrument: "--hd",
      min: "",
      max: "",
      value: "",
      toggle: false,
      type: "none",
    },
    {
      name: "Stop on Persentage",
      agrument: "--stop",
      min: "10",
      max: "100",
      value: "100",
      toggle: false,
      type: "number",
    },
    {
      name: "Light Upscale",
      agrument: "--uplight",
      min: "",
      max: "",
      value: "",
      toggle: false,
      type: "none",
    },
    {
      name: "Same Seed",
      agrument: "--sameseed",
      min: "0",
      max: "100000000",
      value: "42",
      toggle: false,
      type: "number",
    },
  ]);

  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        {parameters.map((parameter) => (
          <div>
            <label>{parameter.name}</label>
            {/* button to toggle */}
            <button
              onClick={() => {
                parameter.toggle = !parameter.toggle;
                setParameters([...parameters]);
              }}
            >
              {parameter.toggle ? "On" : "Off"}
            </button>
            {parameter.type === "none" ? (
              <></>
            ) : parameter.toggle ? (
              <input
                type={parameter.type}
                min={parameter.min}
                max={parameter.max}
                value={parameter.value}
                onChange={(e) => {
                  parameter.value = e.target.value;
                  setParameters([...parameters]);
                }}
              />
            ) : (
              <></>
            )}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
