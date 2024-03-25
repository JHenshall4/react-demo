import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [tabContent, setTabContent] = useState("");

  function handleClick(clickedButton) {
    setTabContent(clickedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent === "" && <p>Please select a topic.</p>}
          {tabContent && (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <code>{EXAMPLES[tabContent].code}</code>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
