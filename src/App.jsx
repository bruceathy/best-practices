import Accordion from "./components/Accordion/Accordion";
import SearchList from "./components/SearchList/SearchList";

function App() {
  return (
    <main>
      <section>
        <h2>Why Work With Us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are the best
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  quas quibusdam quia quod, quos quae quidem quia quae quod quas
                </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item id="local-guide" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchList items={["Item 1", "Item 2", "Item 3"]} />
      </section>
    </main>
  );
}

export default App;
