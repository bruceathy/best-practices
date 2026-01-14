import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children, className }) {
  const { toggleAccordionItem } = useAccordionContext();
  const id = useAccordionItemContext();
  return (
    <h3 className={className} onClick={() => toggleAccordionItem(id)}>
      {children}
    </h3>
  );
}
