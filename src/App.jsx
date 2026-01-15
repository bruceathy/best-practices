import Accordion from "./components/Accordion/Accordion";
import SearchList from "./components/SearchList/SearchList";

import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import savannaImg from "./assets/african-savanna.jpg";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

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
        <SearchList items={PLACES} />
      </section>
    </main>
  );
}

export default App;
