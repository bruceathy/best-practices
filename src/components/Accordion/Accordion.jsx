import { createContext, useContext, useState } from "react";

import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("useAccordionContext must be used within an Accordion");
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);
  function toggleAccordionItem(id) {
    if (id === openItemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  }

  const contextValue = {
    openItemId: openItemId,
    toggleAccordionItem: toggleAccordionItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
