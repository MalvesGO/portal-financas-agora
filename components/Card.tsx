import { CardFullImage, CardHeroSitemap } from "@ama-pt/agora-design-system";
import React from "react";

export default function Card() {
  return (
    <div className="w-full">
      <CardFullImage
        image={{
          src: "https://www.portaldasfinancas.gov.pt/at/images/header_secondary/Landing_Banner_04.jpg",
        }}
      >
        <CardHeroSitemap
          anchors={[
            {
              appearance: "link",
              children: "Cidadão",
              href: "#",
              target: "_blank",
              variant: "neutral",
            },
            {
              appearance: "link",
              children: "Negócios",
              href: "#",
              target: "_blank",
              variant: "neutral",
            },
            {
              appearance: "link",
              children: "Outras Entidades",
              href: "#",
              target: "_blank",
              variant: "neutral",
            },
            {
              appearance: "link",
              children: "Informação",
              href: "#",
              target: "_blank",
              variant: "neutral",
            },
            {
              appearance: "link",
              children: "Tax Information",
              href: "#",
              target: "_blank",
              variant: "neutral",
            },
          ]}
        />
      </CardFullImage>
    </div>
  );
}
