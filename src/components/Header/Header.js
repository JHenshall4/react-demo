import "./Header.css";
import reactCoreConecpts from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={reactCoreConecpts} alt="Stylized atom" />
      <h1>React Demo Site</h1>
      <p>
        {description} React concepts which I have covered as part of a course to
        test & refine my React development skills.
      </p>
    </header>
  );
}
export default Header;
