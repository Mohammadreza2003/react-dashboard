import { useContext } from "react";
import sidebarContext from "src/context/sidebarContext";

export default function ToggleSidebarButton() {
  const { sidebarState, handleSidebar } = useContext(sidebarContext);
  return (
    <div
      className="flex gap-1 cursor-pointer"
      onClick={() => {
        handleSidebar(false,true);
      }}
    >
      <svg
        className="main"
        style={{ width: "10px" }}
        fill={`${sidebarState != 0 ? "#79fcff" : "#000000"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 9 17"
      >
        <rect x="0.48" y="0.5" width="7" height="1" />
        <rect x="0.48" y="7.5" width="7" height="1" />
        <rect x="0.48" y="15.5" width="7" height="1" />
      </svg>
      <svg
        className="sub"
        fill={`${sidebarState == 2 ? "#79fcff" : "#000000"}`}
        style={{ width: "20px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 17"
      >
        <rect x="1.56" y="0.5" width="16" height="1" />
        <rect x="1.56" y="7.5" width="16" height="1" />
        <rect x="1.56" y="15.5" width="16" height="1" />
      </svg>
    </div>
  );
}
