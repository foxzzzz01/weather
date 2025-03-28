import { useEffect, useState } from "react";
import Current from "./components/Current/Current";
import Header from "./components/Header/Header";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="container">
      <Header changeTheme={changeTheme} />
      <Current />
    </div>
  );
};

export default App;
