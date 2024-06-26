import { Accordion, AccordionGroup } from "@ama-pt/agora-design-system";
import React from "react";

export default function SecondSection() {
  return (
    <div className="px-16 py-16">
      <AccordionGroup type="single">
        <Accordion
          hasIcon="true"
          icon="agora-line-wallet"
          headingLevel="h1"
          title="Finanças"
        >
          Finanças
        </Accordion>
        <Accordion
          hasIcon="true"
          icon="agora-line-plane"
          headingLevel="h1"
          title="Alfândegas"
        >
          Alfândegas
        </Accordion>
        <Accordion
          hasIcon="true"
          icon="agora-line-globe"
          headingLevel="h1"
          title="Destaques e Atualidades"
        >
          Destaques e Atualidades
        </Accordion>
      </AccordionGroup>
    </div>
  );
}
