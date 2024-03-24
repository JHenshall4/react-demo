import reactCoreConecpts from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

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

function CoreConcept({
  title = "Title",
  description = "Description...",
  image,
}) {
  // I like validation...
  if (!image) {
    return null;
  }

  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Neat, I didn't realise we can use the spread operator for sending data to compoentns */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
