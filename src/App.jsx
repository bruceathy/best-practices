import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why Work With Us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="1"
            title="We are the best"
            className="accordion-item"
          >
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quas quibusdam quia quod, quos quae quidem quia quae quod quas
              </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
          </AccordionItem>
          <AccordionItem id="2" title="Well duh??" className="accordion-item">
            <article>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
