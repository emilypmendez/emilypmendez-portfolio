import "./DarkMode.css";
import { ChangeEventHandler } from "react";


// 1 - When invoked we expect the app to switch to either light or dark mode
const setDark = () => {

  // 2 - PERSISTENCE. Every time light or dark mode is set, we save that value in the `theme` property of `localStorage`
  localStorage.setItem("theme", "dark");

  // 3 - When the attribute is added then the [data-theme="dark"] selector
  // from our CSS becomes active and the dark colour variables are set (and vice versa)
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

// 4 - Initial state is established when the page is loaded before the actual toggle switch has been used
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5 - Capture the change event that occurs when a user clicks the checkbox.
const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};


const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>🌙</span>
    </div>
  );
};

export default DarkMode;
