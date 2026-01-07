import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, toggleAccordionItem } = useAccordionContext();
  const isOpen = openItemId === id;

  return (
    <li className={className}>
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
