import { CardArticle, Tab, TabBody, TabHeader, Tabs } from "@ama-pt/agora-design-system";
import React from "react";

export default function SecondSection() {
  return (
    <div className="px-16 py-16">
      <div className="bg-warning-300">
        <Tabs fullWidth>
          <Tab>
            <TabHeader>Finanças</TabHeader>
            <TabBody>Aceda aos Serviços Tributários</TabBody>
          </Tab>
          <Tab>
            <TabHeader>Alfândegas</TabHeader>
            <TabBody>Aceda aos Serviços Tributários</TabBody>
          </Tab>
          <Tab>
            <TabHeader>Destaques e Atualidades</TabHeader>
            <TabBody>Aceda aos Serviços Tributários</TabBody>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
