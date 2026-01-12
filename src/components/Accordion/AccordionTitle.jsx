import { useAccordionContext } from "./Accordion";

export default function AccordionTitle({ id, children, className }) {
  const { toggleAccordionItem } = useAccordionContext();
  return (
    <h3 className={className} onClick={() => toggleAccordionItem(id)}>
      {children}
    </h3>
  );
}
