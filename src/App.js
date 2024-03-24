import reactCoreConecpts from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
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
            <CoreConcept
              title="Components"
              description="The core UI building block."
              img={componentsImg}
            />
            <CoreConcept title="Crucial" />
            <CoreConcept title="Core" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
