import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why Work With Us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="experience" className="accordion-item-title">
              We are the best
            </Accordion.Title>
            <Accordion.Content
              id="experience"
              className="accordion-item-content"
            >
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  quas quibusdam quia quod, quos quae quidem quia quae quod quas
                </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="accordion-item">
            <Accordion.Title id="local-guide" className="accordion-item-title">
              We are
            </Accordion.Title>
            <Accordion.Content
              id="local-guide"
              className="accordion-item-content"
            >
              <article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
