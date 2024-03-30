"use client";
import { FederatedFooter } from "@ama-pt/agora-design-system";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto px-16">
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
        caption="O ePortugal é financiado pelo Plano de Recuperação e Resiliência e o Next Generation EU."
        card={{
          description:
            "Caso necessite de ajuda durante a realização do serviço, poderá utilizar qualquer um dos canais de comunicação à sua disposição e sempre que necessário esclareça todas as dúvidas ou partilhe uma sugestão.",
          links: [
            {
              children: "Enviar mensagem",
              href: "?path=/docs/documentation-welcome--page",
              target: "_self",
            },
            {
              children: "Ver contactos",
              href: "?path=/docs/documentation-welcome--page",
              target: "_self",
            },
            {
              children: "Ver locais de atendimento",
              href: "?path=/docs/documentation-welcome--page",
              target: "_self",
            },
          ],
          title: "Precisa de ajuda com este serviço?",
        }}
        copyright="© 2023 República Portuguesa. Todos os direitos reservados."
        partnersLogos={[
          {
            image: {
              alt: "Logótipo PRR",
              src: "https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_0ss_ver01-130x80.png",
            },
            link: {
              href: "https://recuperarportugal.gov.pt/",
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
              href: "https://www.portugal.gov.pt/pt/gc22",
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
              href: 'https://ec.europa.eu/info/strategy/recovery-plan-europe_pt"',
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
              href: "https://recuperarportugal.gov.pt/",
              target: "_blank",
              title: "Instagram",
            },
          },
          {
            icon: "agora-line-youtube",
            iconHover: "agora-solid-youtube",
            link: {
              href: "https://recuperarportugal.gov.pt/",
              target: "_blank",
              title: "Youtube",
            },
          },
        ]}
        usefulLinks={[
          {
            children: "Acessibilidade",
            href: "/acessibilidade",
            target: "_self",
          },
          {
            children: "Termos e Condições",
            href: "/termos-e-condicoes",
            target: "_self",
          },
          {
            children: "Política de Privacidade",
            href: "/politica-de-privacidade",
            target: "_self",
          },
          {
            children: "Definições de Cookies",
            href: "/cookies",
            target: "_self",
          },
        ]}
      />
    </footer>
    // <div className="bg-primary-900 px-16 py-16">
    //   <div className="container mx-auto">
    //     <div className=" flex justify-center p-8">
    //       <div className="flex gap-16">
    //         <span className="text-white">made with ❤️ by Marcelo Alves</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
