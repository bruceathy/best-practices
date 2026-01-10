import { useAccordionContext } from "./Accordion";

export default function AccordionTitle() {
  const { id, title, toggleAccordionItem } = useAccordionContext();
  return <h3 onClick={() => toggleAccordionItem(id)}>{title}</h3>;
}
