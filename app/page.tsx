"use client";
import Image from "next/image";
import Card from "@/components/Card";
import Firstsection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import {
  CardHighlightNewsletter,
  Feedback,
  InputEmailBar,
  InputSearch,
} from "@ama-pt/agora-design-system";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <div>
      <div className="px-16 py-16 flex justify-center">
        <Image
          src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/logo-at.png"
          width={250}
          height={100}
          alt="logo"
        />
      </div>
      <div className="px-16 py-16">
        <InputSearch
          placeholder="Indique o que pretende... (Ex: Entregar IRS)"
          className="mx-16"
        />
      </div>
      <Card />
      <Firstsection />
      <div className="flex justify-center">
        <Image
          src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/logo_premio_salarial.png"
          alt=""
          width={420}
          height={100}
        />
      </div>
      <div className="px-16 py-16">
        <CardHighlightNewsletter
          image={{
            src: "https://www.portaldasfinancas.gov.pt/at/images/header_secondary/Landing_Banner_03.jpg",
          }}
          subtitle={
            <span className="text-m-regular">
              Semanalmente enviamos as novidades da AT para o seu email.
            </span>
          }
          title={
            <span className="text-2xl-bold">
              Quer receber as nossas novidades?
            </span>
          }
        >
          <InputEmailBar
            darkMode
            hasLabel
            label="Qual é o seu email?"
            placeholder="Insira o seu email para subscrição..."
          />
        </CardHighlightNewsletter>
      </div>
      <div className="px-16 py-16">
        <Feedback
          darkMode
          evaluate={{
            dislikeButtonTitle: "Não",
            dislikeButtonVariant: "danger",
            likeButtonTitle: "Sim",
            likeButtonVariant: "success",
            mainButton: {
              darkMode: true,
              hasIcon: true,
            },
          }}
          message="Agradecemos o seu contributo."
          subtitle="Avalie a experiência da página e deixe-nos um comentário."
          title="O conteúdo da página foi útil?"
        />
      </div>
      <SecondSection />
      <Contacto />
    </div>
  );
}
