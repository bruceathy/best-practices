import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, toggleAccordionItem } = useAccordionContext();
  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleAccordionItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
