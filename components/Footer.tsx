"use client";
import { FederatedFooter } from "@ama-pt/agora-design-system";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-16 mt-32">
      <FederatedFooter
        badgeImage={{
          image: {
            alt: "Selo de ouro de usabilidade e acessibilidade",
            src: "https://dev-portal-unico.northeurope.cloudapp.azure.com:8180/acessibilidade.png",
          },
          link: {
            href: "https://selo.usabilidade.gov.pt/",
            target: "_blank",
            title: "Abre num novo separador",
          },
        }}
        brandImage={{
          image: {
            alt: "Logótipo República Portuguesa",
            src: "https://dev-portal-unico.northeurope.cloudapp.azure.com:8180/republica-portuguesa.png",
          },
          link: {
            href: "https://www.portugal.gov.pt/pt/gc22",
            target: "_blank",
            title: "Abre num novo separador",
          },
        }}
        caption="O Portal das Finanças é um serviço público que permite a consulta e a realização de operações fiscais online."
        card={{
          description:
            "Caso necessite de ajuda durante a realização do serviço, poderá utilizar qualquer um dos canais de comunicação à sua disposição e sempre que necessário esclareça todas as dúvidas ou partilhe uma sugestão.",
          links: [
            {
              children: "Enviar mensagem",
              href: "#",
              target: "_self",
            },
            {
              children: "Ver contactos",
              href: "#",
              target: "_self",
            },
            {
              children: "Ver locais de atendimento",
              href: "#",
              target: "_self",
            },
          ],
          title: "Precisa de ajuda com este serviço?",
        }}
        copyright="© 2024 made with ❤️ by Marcelo Alves."
        partnersLogos={[
          {
            image: {
              alt: "Logótipo PRR",
              src: "https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_0ss_ver01-130x80.png",
            },
            link: {
              href: "#",
              target: "_blank",
              title: "Abre num novo separador",
            },
          },
          {
            image: {
              alt: "Logótipo República Portuguesa",
              src: "https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_direitos-do-contribuinte_ver01-180x60.png",
            },
            link: {
              href: "#",
              target: "_blank",
              title: "Abre num novo separador",
            },
          },
          {
            image: {
              alt: "Logótipo Next Generation EU",
              src: "https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_apps-at_ver01-120x75.png",
            },
            link: {
              href: '#',
              target: "_blank",
              title: "Abre num novo separador",
            },
          },
        ]}
        socialsLink={[
          {
            icon: "agora-line-linkedin",
            iconHover: "agora-solid-linkedin",
            link: {
              href: "https://linkedin.com",
              target: "_blank",
              title: "Linkedin",
            },
          },
          {
            icon: "agora-line-facebook",
            iconHover: "agora-solid-facebook",
            link: {
              href: "https://facebook.com",
              target: "_blank",
              title: "Facebook",
            },
          },
          {
            icon: "agora-line-twitter-x",
            iconHover: "agora-solid-twitter-x",
            link: {
              href: "https://twitter.com",
              target: "_blank",
              title: "Twitter",
            },
          },
          {
            icon: "agora-line-instagram",
            iconHover: "agora-solid-instagram",
            link: {
              href: "#",
              target: "_blank",
              title: "Instagram",
            },
          },
          {
            icon: "agora-line-youtube",
            iconHover: "agora-solid-youtube",
            link: {
              href: "#",
              target: "_blank",
              title: "Youtube",
            },
          },
        ]}
        usefulLinks={[
          {
            children: "Acessibilidade",
            href: "#",
            target: "_self",
          },
          {
            children: "Termos e Condições",
            href: "#",
            target: "_self",
          },
          {
            children: "Política de Privacidade",
            href: "#",
            target: "_self",
          },
          {
            children: "Definições de Cookies",
            href: "#",
            target: "_self",
          },
        ]}
      />
    </footer>
  );
}
