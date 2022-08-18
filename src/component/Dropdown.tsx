import ddstyle from "./Dropdown.module.css";

type DropDownProps = {
  onClick: (show: boolean) => void;
  title: string;
  show: boolean;
};

export default function DropDown(props: DropDownProps) {
  return (
    <div className={ddstyle.Root}>
      <div
        className={ddstyle.Arrow}
        onClick={() => {
          props.onClick(!props.show);
        }}
      >
        {props.show ? "▼" : "►"}
      </div>
      <div className={ddstyle.Title}>{props.show ? "" : props.title} </div>
    </div>
  );
}
