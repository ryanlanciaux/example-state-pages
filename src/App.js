import React, { useState } from "react";
import "./styles.css";

const Home = () => <h1>Hi from the home page!</h1>;
const About = () => <h1>Hi from about!</h1>;

export const Navigation = ({ onChangeNavigation }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => onChangeNavigation("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => onChangeNavigation("about")}>About</button>
        </li>
      </ul>
    </nav>
  );
};
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  let content = undefined;
  if (currentPage === "home") {
    content = <Home />;
  }

  if (currentPage === "about") {
    content = <About />;
  }

  return (
    <div className="App">
      <Navigation onChangeNavigation={setCurrentPage} />
      {content}
    </div>
  );
}
